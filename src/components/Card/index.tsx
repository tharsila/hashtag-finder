import React from 'react';
import * as C from './styles'

type Props = {
  photo:string;
  user: string;
  username:string;
  text:string;
  id:string;
  showTweet: boolean;
}

const Card = ({showTweet, photo, user, username, text, id}:Props) => {
  return (
      <C.PostCard>
        <div className='userPhoto'>
          <img src={photo} alt={user} />
        </div>
        <div className='userInfo'>
          <strong>{user}</strong>
          <a href={`https://twitter.com/${username}`}
            target="_blank"
            rel="noreferrer"
           >@{username}</a>
          <p>{text}</p>
          <a
            href={`https://twitter.com/${username}/status/${id}`}
            target="_blank"
            rel="noreferrer"
          >
            ver mais no twitter
          </a>
        </div>
      </C.PostCard>

  )
}

export default Card