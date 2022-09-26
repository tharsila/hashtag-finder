import { useEffect, useState, useContext } from "react";
import { Circles } from "react-loader-spinner";
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useDate } from "../../hooks/useDate";
import * as C from "./styles";
import axios from "axios";

export type searchedHashtags = {
    data: number;
    hashtag: string
};

export const SearchedHashtags = () => {
    const url = 'https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas?filterByFormula=%7BSquad%7D+%3D+"06-22"&pageSize=10&view=Grid%20view&sort%5B0%5D%5Bfield%5D=Data&sort%5B0%5D%5Bdirection%5D=desc&';
    const [searchedHashtags, setSearchedHashtags] = useState<searchedHashtags[]>();
    const [isLoading, setIsLoading] = useState(true);
    const [isListEnd, setIsListEnd] = useState(false);
    const [offset, setOffset] = useState<number>();
    const date = useDate();
    const auth = useContext(AuthContext);

    useBottomScrollListener(handleScroll);

    useEffect(() => { // get the first ten hashtags
        (async () => {
            await getSearchedHashtags();
            setIsLoading(false);
        })();
    }, [])

    async function getSearchedHashtags(offset?: number) {

        let hashtags = searchedHashtags ? [...searchedHashtags] : [];

        await axios.get(`${url}${offset && `offset=${offset}`}`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            }
        }).then(response => {
            !response.data.offset && setIsListEnd(true); // if the offset does not exist the list is over

            if (response.data.records.length > 0) {
                response.data.records.length < 10 && setIsListEnd(true); // is looking for 10 hashtags so if less comes the list is over

                for (let i in response.data.records) {
                    let currentHashtag = {
                        data: response.data.records[i].fields.Data,
                        hashtag: response.data.records[i].fields.Hashtag,
                    }
                    hashtags.push(currentHashtag);
                }
                setSearchedHashtags(hashtags);
                setOffset(response.data.offset);
            } else {
                setIsListEnd(true);
            }
        }).catch(error => console.log(error));
    }

    function handleScroll() { // calls the function to get 10 more hashtags when the scroll hits the bottom
        !isListEnd && getSearchedHashtags(offset);
    }

    function handleLogout(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        auth.signOut();
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