import React from "react";
import {Head, Span, ButtonForm} from "./styles";
import {ReactComponent as IconHome} from "../../../assets/iconHome.svg";
function Header() {
    return(
        <div>
        <Head>
            <Span>
                hashtag<strong>finder</strong>
            </Span>    
            <ButtonForm><IconHome/>HOME</ButtonForm>
        </Head>
        </div>
    )
}

export default Header;