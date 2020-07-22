import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, HeaderStyle, LogoSmall, CategoryDropDownButton } from './styles.js';
import { ArrowDropDown, SystemUpdateAlt } from '@material-ui/icons';
import Categories from '../CategoryContainer/'
import * as handler from '../handler.js';

export default function (props) {
    
    const [DropDownTrigger, setDropDownTrigger] = useState(false);
    const [SearchInputTrigger, setSearchInputTrigger] = useState(false);
    const [window, setWindow] = useState({});

    function getSize() {
        return {
            width: document.body.clientWidth || undefined,
            height: document.body.clientHeight || undefined
        };
    }

    useEffect(() => {
        setDropDownTrigger(false)
        setWindow(getSize())
        document.body.onresize = () => setWindow(getSize());
        setSearchInputTrigger(false);
    }, []);

    useEffect(() => {
        if (DropDownTrigger) {
            document.body.onclick = function (e) {
                if (!DropDownTrigger) return;
                const clicked = handler.findCategoryContainer(e.target);
                setDropDownTrigger(!!clicked);
            }
        } else {
            document.body.onclick = null;
        }
    }, [DropDownTrigger])

    useEffect(() => {
        if (SearchInputTrigger) {
            document.body.onclick = function (e) {
                if (!SearchInputTrigger) return;
                const clicked = handler.findInputElem(e.target);
                // if(!clicked) document.querySelector('.s-input').style.width = '0';
                setSearchInputTrigger(!!clicked);
            }
        } else {
            document.body.onclick = null;
        }
    }, [SearchInputTrigger])

    const categoryContainerHandle = () => {
        setDropDownTrigger(!DropDownTrigger);
    }


    const inputBtnHandle = () => {
        setSearchInputTrigger(!SearchInputTrigger);
    }

    return <div>
        <HeaderStyle>
            {
                DropDownTrigger ?
                    <Categories categories={props.categories} />
                    : <></>
            }
            <Container className="row v-center sb" style={{marginTop: 0}}>
                <LogoSmall>
                    <Link to="/">
                        <h1>My Home Bar</h1>
                    </Link>
                </LogoSmall>
                <CategoryDropDownButton onClick={() => categoryContainerHandle()}>
                    Categories
                    <ArrowDropDown />
                </CategoryDropDownButton>
                <div className='search'>
                    {
                        handler.showSearchInput(SearchInputTrigger, inputBtnHandle, window.width)
                    }
                </div>
                <Link to="/login" className="login-btn">
                    <p>Log In</p>
                    <SystemUpdateAlt />
                </Link>
            </Container>
        </HeaderStyle>
    </div>
}