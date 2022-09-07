import * as C from "./styles";
import {Link} from 'react-router-dom'
import React from 'react'

export const Header = ({ children }: { children: JSX.Element[] }) => {
    return (
        <C.Container>
            <C.Header>
<<<<<<< HEAD
                <C.Logo>
                    <span>hashtag</span>
                    <span id="strong">finder</span>
                </C.Logo>
                <div>
                    {children}
                </div>
=======
                <Link to = '/'>
                    <C.Logo>
                        <span>hashtag</span>
                        <span id="strong">finder</span>
                    </C.Logo>
                </Link>
                {children}
>>>>>>> main
            </C.Header>
        </C.Container>
    );
};