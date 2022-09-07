import * as C from "./styles";
import { Link } from 'react-router-dom'
import React from 'react'

export const Header = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <C.Container>
            <C.Header>
                <C.Logo>
                    <span>hashtag</span>
                    <span id="strong">finder</span>
                </C.Logo>
                <div>
                    {children}
                </div>
            </C.Header>
        </C.Container>
    );
};