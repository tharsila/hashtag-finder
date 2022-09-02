import React, { useState, ChangeEvent, MouseEvent } from 'react'
import Header from '../../components/Header'
import {Button} from '../../components/Button'
import * as C from './styles'

interface InfoTwitter {
  postImg:string;
  userName:string;
  accountName:string;
  userPhoto:string;
  content:string;

}

const info: Array<InfoTwitter> = [
  {
    postImg: '/img-post.jpg',
    userName: 'UserName',
    accountName: '@twitterusername',
    userPhoto: '/img-post.jpg',
    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt...'
  },

  {
    postImg: '/img-post.jpg',
    userName: 'UserName',
    accountName: '@twitterusername',
    userPhoto: '/img-post.jpg',
    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt...'
  },

  {
    postImg: '/img-post.jpg',
    userName: 'UserName',
    accountName: '@twitterusername',
    userPhoto: '/img-post.jpg',
    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt...'
  },

  {
    postImg: '/img-post.jpg',
    userName: 'UserName',
    accountName: '@twitterusername',
    userPhoto: '/img-post.jpg',
    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt...'
  },

  {
    postImg: '/img-post.jpg',
    userName: 'UserName',
    accountName: '@twitterusername',
    userPhoto: '/img-post.jpg',
    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt...'
  },

  {
    postImg: '/img-post.jpg',
    userName: 'UserName',
    accountName: '@twitterusername',
    userPhoto: '/img-post.jpg',
    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt...'
  },

  {
    postImg: '/img-post.jpg',
    userName: 'UserName',
    accountName: '@twitterusername',
    userPhoto: '/img-post.jpg',
    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt...'
  },

  {
    postImg: '/img-post.jpg',
    userName: 'UserName',
    accountName: '@twitterusername',
    userPhoto: '/img-post.jpg',
    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt...'
  },

  {
    postImg: '/img-post.jpg',
    userName: 'UserName',
    accountName: '@twitterusername',
    userPhoto: '/img-post.jpg',
    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt...'
  },

  {
    postImg: '/img-post.jpg',
    userName: 'UserName',
    accountName: '@twitterusername',
    userPhoto: '/img-post.jpg',
    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt...'
  }

]

const PostList = () => {
  const [showTweet, setShowTweet] = useState<boolean>(false);
  const [showImage, setShowImage] = useState<boolean>(false);

  const changeLink = (e:any) => {
    if (e.target.innerText === 'Tweets') {
      setShowTweet(true)
      setShowImage(false)
    } else {
      setShowTweet(false)
      setShowImage(true)
    }
  }
 
  return (
    <>
      <Header>
        <div>
          <Button
              icon="icon-info-circle.svg"
              text="SOBRE"
              color="#0B1741"
              backgroundColor="#72EFDB"
          />
          <Button
              icon="icon-user-alt.svg"
              text="LOGIN"
              color="#FFFFFF"
              backgroundColor="#1E3E7B"
          />
        </div>
      </Header>
      <C.PostContainer showImage={showImage} showTweet={showTweet}>
        <h3>Exibindo os 10 resultados mais recentes para #natureza</h3>
        <div className="choose">
          <span onClick={changeLink}>Tweets</span>
          <span onClick={changeLink}>Imagens</span>
        </div>
        <C.PostContent>
          <C.PostGrid showImage={showImage}>
            {info.map((item, index) => (
              <C.PostImg key={index}>
                <img src={item.postImg} alt="" />
                <C.TwitterInfo>
                  <p>Postado por:</p>
                  <strong>{item.accountName}</strong>
                </C.TwitterInfo>
              </C.PostImg>
            ))}
          </C.PostGrid>
          
          <C.PostCardContainer showTweet={showTweet}>
            {info.map((item, index) => (
              <C.PostCard key={index}>
                <div className='userPhoto'>
                  <img src={item.userPhoto} alt="" />
                </div>
                <div className='userInfo'>
                  <strong>{item.userName}</strong>
                  <span>{item.accountName}</span>
                  <p>{item.content}</p>
                  <a href="">Ver mais no Twitter</a>
                </div>
              </C.PostCard>
            ))}
          </C.PostCardContainer>
        </C.PostContent>
      </C.PostContainer>
    </>
  )
}

export default PostList