import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { useDate } from "../../hooks/useDate";
import * as C from "./styles";

export type searchedHashtags = {
    data: number;
    hashtag: string
};

export const SearchedHashtags = () => {

    const [searchedHashtags, setSearchedHashtags] = useState<searchedHashtags[]>();
    const api = useApi();
    const date = useDate();

    useEffect(() => {
        (async () => {
            const response: searchedHashtags[] | undefined = await api.getSearchedHashtags();

            response && setSearchedHashtags(response);
        })();
    }, []);

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
                        {searchedHashtags && searchedHashtags.length > 0 &&
                            searchedHashtags.map((hashtag, index) => (
                                <C.Row key={index}>
                                    <span>{hashtag.hashtag}</span>
                                    <span>{date.getDate(hashtag.data)}</span>
                                    <span>{date.getHours(hashtag.data)}</span>
                                </C.Row>
                            ))}
                    </C.Body>
                </C.Table>
            </C.TableArea>
        </C.Container >
    );
};