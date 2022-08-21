import * as C from './styles'
import InfoHero from '../InfoHero'
const Header = () => {
  return (
    <C.Container>
      <C.HeaderBG>
        <C.Content>
          <span>hashtag<strong>finder</strong></span>
          <C.Btns>
            <a href="">
              <img src={require('../../assets/icon-info-circle.svg').default} alt="" />
              sobre
            </a>
            <a href="">
              <img src={require('../../assets/icon-user-alt.svg').default} alt="" />
              login
            </a>
          </C.Btns>
        </C.Content>
      </C.HeaderBG>
     <InfoHero/>
    </C.Container>
  )
}

export default Header