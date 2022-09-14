import React, { useState, useEffect, ReactElement  } from 'react';
import * as C from './styles';
/* interface Ts */
import { IInfoTwitter } from '../../types/InfoTwitter'

/* components */
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import Card from '../../components/Card';
import Charge from '../../components/Charge';

/* twitter api */
import { getTweets } from '../../api/GetTweets';
import { getTweetImages } from '../../api/GetTweetsImages';

/* airtable api */
import { useApi } from "../../hooks/useApi";

/* frame-motion */
import { motion } from "framer-motion"

/* router */
import { Link } from 'react-router-dom';

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

  /* states for mobile version */
  const [showTweet, setShowTweet] = useState<boolean>(false);
  const [showImage, setShowImage] = useState<boolean>(false);

  /* state for search */
  const [searchValue, setSearchValue] = useState<string>('')

  /* validator response input*/
  const [searchResponse, setSearchResponse] = useState<string | ReactElement>('')

  /* tweets quantity */
  const [resultsNumber, setResultsNumber] = useState<number>(0);
  const [moreRequest, setMoreRequest] = useState<number>(10);

  const [hashTag, setHashTag] = useState<string>('');

  /* get tweets and tweets images */
  const [imageActive, setImageActive] = useState({});
  const [tweets, setTweets] = useState<InfoTweet[]>([]);
  const [tweetImages, setTweetImages] = useState<IInfoTwitter[]>([]);

  /* states for next 10 tweets */
  const [loading, setLoading] = useState<boolean>(false);
  const [scrollTopButton, setTopButton] = useState<boolean>(false);
  const [showScroll, setShowScroll] = useState<boolean>(false);
  const [animationMode, setAnimationMode] = useState(0);

  const api = useApi();

  /* actions for mobile devices */
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
      asyncPost();
      return () => {
        if (tweets) {
        }
        setSearchResponse('');
        setSearchValue('');
      };
    }
  });

  /* req twitter api */
  const asyncPost = () => {
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
          setHashTag(searchValue);
          setMoreRequest(moreRequest + 10);
        });
      })
      .catch(() => {
        setSearchResponse('Nenhum tweet foi encontrado, tente novamente!');
        setTweets([]);
      });
  };

  useEffect(() => {
    const win: Window = window

    if (tweets) {
      win.addEventListener('scroll', handleScroll);
    }

    win.addEventListener('scroll', checkScrollTop);
  }, []);


  const checkScrollTop: any = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const handleScroll = () => {
    if (tweets) {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;
      if (bottom) {
        setLoading(true);
        fetchMoreData()
        setTimeout(() => setLoading(false), 2000);
        setTimeout(() => fetchMoreData(), 1500);
        setTimeout(() => setTopButton(true), 3000);
      }
    }
  };

  /* show next tweets */
  function fetchMoreData() {
    const newSearch = (document.getElementById('input') as HTMLInputElement).value;
    setSearchValue(newSearch);

    setResultsNumber(resultsNumber + 5);
  }
 
  /* show tweets and validations */
  const handleValue = (e:any) => {
    if (e.keyCode === 13) {
      const asyncPost = async () => {
        await api.getSearchedHashtags();
      };
  
      setSearchValue(
        e.target.value.replace(/[^a-zA-Z0-9_]/g, '').replace(' ', ''),
      );
  
      setSearchResponse(<Charge />);
      setResultsNumber(10);
      setMoreRequest(10);
      setShowTweet(true)
      asyncPost();
  
      if (e.target.value === '') {
        setSearchResponse('É necessário digitar algo no campo de buscas!');
        setSearchValue('');
      }
    }
  
    if (e.keyCode === 8) {
      setSearchResponse('');
      setSearchValue('');
      setHashTag('');
      setResultsNumber(0);
    }
  
    if (e.target.value.length >= 20) {
      setSearchResponse('Limite de caracteres atingido!');
      setSearchValue('');
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
                  setSearchResponse(<Charge />);
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
        {searchResponse ? (
            <>
              <motion.div
                initial={{ y: animationMode, opacity: 0 }}
                animate={{ y: animationMode, opacity: 1 }}
                onClick={() => setAnimationMode(animationMode)}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className={tweets ? 'bgResponse' : 'bgLoader'}>
                  <div className='textResponse'>{searchResponse}</div>
                </div>
              </motion.div>
            </>
          ) : null}
        <C.PostContainer tweets={tweets} showImage={showImage} showTweet={showTweet}>
          <h3>Exibindo os {moreRequest > 0 ? moreRequest - 10 : null}{' '}
          resultados mais recentes para #{hashTag}</h3>
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
                {loading ? (
                <motion.div
                  initial={{ y: animationMode, opacity: 1 }}
                  animate={{ y: animationMode, opacity: 0 }}
                  onClick={() => setAnimationMode(animationMode)}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className='bgLoader'
                >
                  <Charge />
                </motion.div>
            ) : null}
          </C.PostContent>
        </C.PostContainer>
        <Footer />
      </C.Container>
    </>
  )
}

export default Home