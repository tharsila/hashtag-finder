import * as C from "./styles";
import Logo from "../../images/logo.svg"
import { Button } from "../Button";

export const Header = ({ children }: { children: JSX.Element }) => {
    return (
        <C.Container>
            <C.Header>
                <C.Logo>
                    <span>hashtag</span>
                    <span id="strong">finder</span>
                </C.Logo>
                {children}
            </C.Header>
        </C.Container>
    );
};