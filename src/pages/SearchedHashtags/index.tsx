import { useEffect, useState, useContext } from "react";
import { Circles } from "react-loader-spinner";
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { airtableApi } from "../../api/airtableApi";
import { useDate } from "../../hooks/useDate";
import * as C from "./styles";

export type searchedHashtags = {
    data: number;
    hashtag: string
};

export const SearchedHashtags = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isListEnd, setIsListEnd] = useState(false);
    const [lastSearchedHashtagDate, setLastSearchedHashtagDate] = useState(0);
    const [searchedHashtags, setSearchedHashtags] = useState<searchedHashtags[]>();
    const api = airtableApi();
    const date = useDate();
    const logout = useContext(AuthContext);

    useEffect(() => {
        (async () => {
            const response = await api.getSearchedHashtags();
            setSearchedHashtags(response);

            setLastSearchedHashtagDate(response[response.length - 1].data)

            setIsLoading(false);

            response.length < 10 && setIsListEnd(true);
        })();
    }, []);

    useBottomScrollListener(handleScroll);

    async function getSearchedHashtags(lastSearchedHashtagDate: number) {
        const response: searchedHashtags[] = await api.getSearchedHashtags(lastSearchedHashtagDate);

        if (response.length > 0) {
            response.length < 10 && setIsListEnd(true);

            if (searchedHashtags) {
                let currentSearchedHashtags = [...searchedHashtags];

                for (let i in response) {
                    currentSearchedHashtags.push(response[i]);
                }

                setSearchedHashtags(currentSearchedHashtags);
            } else {
                setSearchedHashtags(response);
            }

            setLastSearchedHashtagDate(response[response.length - 1].data);
        } else {
            setIsListEnd(true);
        }
    }

    function handleScroll() {
        !isListEnd && getSearchedHashtags(lastSearchedHashtagDate);
    }

    function handleLogout(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        logout.signOut();
    }

    return (
        <C.Container>
            <Header>
                <Link to="/">
                    <Button
                        icon="icon-home.svg"
                        text="HOME"
                        color="#0B1741"
                        backgroundColor="#72EFDB"
                    />
                </Link>
                <Button
                    handleClick={handleLogout}
                    icon="icon-power-off.svg"
                    text="SAIR"
                    color="#FFF"
                    backgroundColor="#1E3E7B"
                />
            </Header>
            {isLoading ?
                (<Circles
                    height="200"
                    width="200"
                    color="#72efdb"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass="loader"
                    visible={true}
                />) :
                (<C.TableArea>
                    <C.Title fontSize={40}>Buscas realizadas</C.Title>
                    <C.Table isListEnd={isListEnd}>
                        <C.Head>
                            <C.TableTitle fontSize={24}>Hashtag</C.TableTitle>
                            <C.TableTitle fontSize={24}>Data</C.TableTitle>
                            <C.TableTitle fontSize={24}>Hora</C.TableTitle>
                        </C.Head>
                        <C.Body>
                            {searchedHashtags && searchedHashtags.length > 0 &&
                                searchedHashtags.map((hashtag, index) => (
                                    <C.Row key={index}>
                                        <span>#{hashtag.hashtag.replace(/\s/g, '')}</span>
                                        <span>{date.getDate(hashtag.data)}</span>
                                        <span>{date.getHours(hashtag.data)}</span>
                                    </C.Row>
                                ))}
                        </C.Body>
                    </C.Table>
                </C.TableArea>)}
        </C.Container>
    );
};