import * as C from "./styles";

export const Header = ({ children }: { children: JSX.Element[] }) => {
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