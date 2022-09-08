import { Link } from "react-router-dom";
import * as C from "./styles";

export const Header = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <C.Container>
            <C.Header>
                <Link to="/">
                    <C.Logo>
                        <span>hashtag</span>
                        <span id="strong">finder</span>
                    </C.Logo>
                </Link>
                <div>
                    {children}
                </div>
            </C.Header>
        </C.Container>
    );
};