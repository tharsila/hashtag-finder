import * as C from './styles'
import InfoHero from '../InfoHero'

const Header = ({children}:{children:JSX.Element}) => {
  return (
    <C.Container>
      <C.HeaderBG>
        <C.Header>
          <C.Logo>
              <span>hashtag</span>
              <span id="strong">finder</span>
          </C.Logo>
          {children}
        </C.Header>
      </C.HeaderBG>
     <InfoHero/>
    </C.Container>
  )
}

export default Header