import * as C from "./styles";
import {Link} from 'react-router-dom'
import React from 'react'

export const Header = ({ children }: { children: JSX.Element }) => {
    return (
        <C.Container>
            <C.Header>
                <Link to = '/'>
                    <C.Logo>
                        <span>hashtag</span>
                        <span id="strong">finder</span>
                    </C.Logo>
                </Link>
                {children}
            </C.Header>
        </C.Container>
    );
};