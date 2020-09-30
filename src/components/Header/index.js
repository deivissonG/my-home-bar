import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, HeaderStyle, LogoSmall, CategoryDropDownButton } from './styles.js';
import { ArrowDropDown } from '@material-ui/icons';
import Categories from '../CategoryContainer/'
import * as handler from '../handler.js';
import SearchInput from '../SearchInput/index.js';

export default function (props) {
    
    const [DropDownTrigger, setDropDownTrigger] = useState(false);

    useEffect(() => {
        setDropDownTrigger(false)
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


    const categoryContainerHandle = () => {
        setDropDownTrigger(!DropDownTrigger);
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
                    <SearchInput/>
                </div>
                <Link to="/" className="github-btn">
                    <p>See on GitHub</p>
                </Link>
            </Container>
        </HeaderStyle>
    </div>
}