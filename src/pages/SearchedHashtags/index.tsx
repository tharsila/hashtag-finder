import * as C from "./styles";

export const SearchedHashtags = () => {
    return (
        <C.Container>
            <C.TableArea>
                <C.Title fontSize={40}>Buscas realizadas</C.Title>
                <C.Table>
                    <C.Head>
                        <C.TableTitle fontSize={24}>Hashtag</C.TableTitle>
                        <C.TableTitle fontSize={24}>Data</C.TableTitle>
                        <C.TableTitle fontSize={24}>Hora</C.TableTitle>
                    </C.Head>
                    <C.Body>
                        <C.Row>
                            <span>#hashtagname</span>
                            <span>29/03/1999</span>
                            <span>09:29</span>
                        </C.Row>
                        <C.Row>
                            <span>#hashtagname</span>
                            <span>29/03/1999</span>
                            <span>09:29</span>
                        </C.Row>
                    </C.Body>
                </C.Table>
            </C.TableArea>
        </C.Container>
    );
};