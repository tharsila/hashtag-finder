import React from "react";
import {Head, Span, Button} from "./styles";
import {ReactComponent as IconHome} from "../../assets/iconHome.svg"

function Header() {
    return(
        <div>
        <Head>
            <Span>
                hashtag<strong>finder</strong>
            </Span>    
            <Button><IconHome/> HOME</Button>
        </Head>
        </div>
    )
}

export default Header;