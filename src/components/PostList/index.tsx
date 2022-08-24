import React, { useState } from 'react'
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
  return (
    <C.PostContainer>
      <h3>Exibindo os 10 resultados mais recentes para #natureza</h3>
      <C.PostContent>
        <C.PostGrid>
          {info.map((item) => (
            <C.PostImg>
              <img src={item.postImg} alt="" />
              <C.TwitterInfo>
                <p>Postado por:</p>
                <strong>{item.accountName}</strong>
              </C.TwitterInfo>
            </C.PostImg>
          ))}
        </C.PostGrid>
        
        <C.PostCardContainer>
          {info.map((item) => (
            <C.PostCard>
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
  )
}

export default PostList