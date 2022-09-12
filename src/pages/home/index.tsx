import React, { useState, useEffect } from 'react';
import * as C from './styles';
import { IInfoTwitter } from '../../types/InfoTwitter'
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { getTweets } from '../../api/GetTweets';
import { getTweetImages } from '../../api/GetTweetsImages';
import { useApi } from "../../hooks/useApi";
import Card from '../../components/Card';


export type searchedHashtags = {
  data: number;
  hashtag: string
};

export type InfoTweet = {
  photo:string;
  user: string;
  username:string;
  text:string;
  id:string;
  showTweet: boolean;
}

const Home = () => {
  const [showTweet, setShowTweet] = useState<boolean>(false);
  const [showImage, setShowImage] = useState<boolean>(false);

  const [searchValue, setSearchValue] = useState<string>('')
  const [searchResponse, setSearchResponse] = useState<string>('')

  const [resultsNumber, setResultsNumber] = useState<number>(0);
  const [moreRequest, setMoreRequest] = useState<number>(10);

  const [titleTag, setTitleTag] = useState<string>('');

  const [imageActive, setImageActive] = useState({});
  const [tweets, setTweets] = useState<InfoTweet[]>([]);
  const [tweetImages, setTweetImages] = useState<IInfoTwitter[]>([]);

  console.log(tweets);
  const api = useApi();

  const changeLink = (e: any) => {
    if (e.target.innerText === 'Tweets') {
      setShowTweet(true)
      setShowImage(false)
    } else {
      setShowTweet(false)
      setShowImage(true)
    }
  }

  useEffect(() => {
    if (searchValue) {
      asyncCall();
      return () => {
        if (tweets) {
        }
        setSearchResponse('');
        setSearchValue('');
      };
    }
  });

  const asyncCall = () => {
    getTweets(searchValue, moreRequest)
      .then((tweetCall) => {
        const tweetSet = tweetCall.data.map((tweet:any) => {
          const user = tweetCall.includes.users.find(
            (user:any) => tweet.author_id === user.id,
          );
          return {
            id: tweet.id,
            text: tweet.text,
            username: user.username,
            user: user.name,
            photo: user.profile_image_url,
          };
        });

        setImageActive(false);

        setTweets(tweetSet);

        getTweetImages(searchValue, moreRequest).then((tweetImgs:any) => {
          const imgSet = tweetImgs.data.map((tweet:any) => {
            const user = tweetImgs.includes.users.find(
              (user:any) => tweet.author_id === user.id,
            );
            const img = tweetImgs.includes.media.find(
              (img:any) => tweet.attachments.media_keys[0] === img.media_key,
            );

            return {
              id: tweet.id,
              img: img.url,
              username: user.username,
              user: user.name,
            };
          });

          setTweetImages(imgSet);
          setTitleTag(searchValue);
          setMoreRequest(moreRequest + 10);
        });
      })
      .catch(() => {
        setSearchResponse('Nenhum tweet foi achado, tente novamente... 😭');
        setTweets([]);
      });
  };


  const handleValue = (e:any) => {
    if (e.keyCode === 13) {
      const asyncPost = async () => {
        await api.getSearchedHashtags();
      };
  
      setSearchValue(
        e.target.value.replace(/[^a-zA-Z0-9_]/g, '').replace(' ', ''),
      );
  
      /* setSearchResponse(<Loader />); */
      setResultsNumber(10);
      setMoreRequest(10);
  
      asyncPost();
  
      if (e.target.value === '') {
        setSearchResponse('É necessário digitar algo no campo de buscas...');
        setSearchValue('');
      }
    }
  
    if (e.keyCode === 8) {
      setSearchResponse('');
      setSearchValue('');
      setTitleTag('');
      setResultsNumber(0);
    }
  
    if (e.target.value.length >= 20) {
      setSearchResponse('Limite de caracteres atingido 🚨.');
    }
  };


  return (
    <>
      <C.Container>
        <Header>
          <Link to='/about'>
            <Button
              icon="icon-info-circle.svg"
              text="SOBRE"
              color="#0B1741"
              backgroundColor="#72EFDB"
            />
          </Link>
          <Link to='/login'>
            <Button
              icon="icon-user-alt.svg"
              text="LOGIN"
              color="#FFFFFF"
              backgroundColor="#1E3E7B"
            />
          </Link>
        </Header>
        <C.ContentInfo>
          <div className="space-top"></div>
          <h1>Encontre hashtags de maneira fácil.</h1>
          <p>Digite o que deseja no campo de buscas e confira os resultados do Twitter abaixo</p>
        </C.ContentInfo>
        <C.InputContainer>
          <C.Input>
            <button>
              <img 
                src={require('../../images/icon-search.svg').default} 
                alt="" 
                onClick={() => {
                  let inputValue = (document.getElementById('input') as HTMLInputElement).value;
                  /* setSearchResponse(<Loader />); */
                  setMoreRequest(10);
                  setSearchValue(
                    inputValue
                    .replace(/[^a-zA-Z0-9_]/g, '')
                    .replace(' ', ''),
                  );
                  
                  if (!inputValue.length) {
                    setSearchResponse(
                      'É necessario digitar algo no campo de buscas...',
                    );
                    setSearchValue('');
                  }
                }}
              />
            </button>
            <input id='input' type="text" placeholder="Buscar..." onKeyDown={handleValue} />
          </C.Input>
        </C.InputContainer>
        <C.PostContainer tweets={tweets} showImage={showImage} showTweet={showTweet}>
          <h3>Exibindo os {moreRequest > 0 ? moreRequest - 10 : null}{' '}
          resultados mais recentes para #{titleTag}</h3>
          <div className="choose">
            <span onClick={changeLink}>Tweets</span>
            <span onClick={changeLink}>Imagens</span>
          </div>
        <C.PostContent>
          <C.PostGrid showImage={showImage}>
            {tweetImages?.map(({user, username, img, id}:IInfoTwitter) => (
              <C.PostImg key={id}>
                <img src={img} alt={user} />
                <C.TwitterInfo>
                  <p>Postado por:</p>
                  <strong>@{username}</strong>
                </C.TwitterInfo>
              </C.PostImg>
            ))}
          </C.PostGrid>
            <C.PostCardContainer showTweet={showTweet}>
              {tweets.map(({user, username, text, id, photo }: InfoTweet) => (
                <Card
                  key={id}
                  showTweet={showTweet}
                  user={user}
                  username={username}
                  text={text}
                  photo={photo}
                  id={id}
                 />
              ))}
            </C.PostCardContainer>
        </C.PostContent>
      </C.PostContainer>

      </C.Container>
    </>
  )
}

export default Home