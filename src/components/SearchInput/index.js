import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Search } from '@material-ui/icons'
import { Redirect } from 'react-router-dom';
import { findInputElem } from '../handler.js'


const initialState = {
    goSearchTrigger: false,
    input: '',
    btnTrigger: false
}

export default function SearchInput() {
    const [goSearchTrigger, setGoSearchTrigger] = useState(initialState.goSearchTrigger)
    const [input, setInput] = useState('')
    const [btnTrigger, setBtnTrigger] = useState(initialState.btnTrigger)
    const inputRef = useRef('');

    useEffect(() => {
        setInput('');
        setBtnTrigger(false);
        setGoSearchTrigger(false);
    }, [goSearchTrigger])


    const goSearch = useCallback(e => {
        if (inputRef.current && inputRef.current.value) {
            setGoSearchTrigger(true)
            setInput(inputRef.current.value)
        }
        return () => setGoSearchTrigger(false)
    }, [])

    const btnShownInput = useCallback(() => {
        document.body.onclick = function (e) {
            const inputClicked = findInputElem(e.target);
            setBtnTrigger(!!inputClicked);
            document.body.onclick = null;
        }
        setBtnTrigger(!btnTrigger)
    }, []) // eslint-disable-line

    if (!goSearchTrigger && btnTrigger) {
        return <div className={`row nowrap v-center`}>
            <input id="s-input" type='text' placeholder="Search something" ref={inputRef} onEnter={goSearch} />
            <button id="s-btn" onClick={goSearch}>
                <Search />
            </button>
        </div>
    }
    else if (!btnTrigger && !goSearchTrigger) {
        return <button id="s-btn" onClick={btnShownInput} >
            <Search />
        </button>
    } else {
        return <Redirect to={'/search/' + input} push/>
    }
}