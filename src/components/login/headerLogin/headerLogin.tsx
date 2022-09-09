import React from "react";
import {Head, Span, Button} from "./styles";
import {ReactComponent as IconHome} from "../../../images/icon-home.svg";
import { useNavigate } from "react-router-dom";

function Header() {
    const Navigate = useNavigate()
    const handleClick = () => {
        Navigate("/")
    }
    return(
        <div>
        <Head>
            <Span>
                hashtag<strong>finder</strong>
            </Span>    
            <Button onClick={handleClick}><IconHome/>HOME</Button>
        </Head>
        </div>
    )
}

export default Header;