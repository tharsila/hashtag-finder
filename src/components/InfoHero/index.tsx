import * as C from './styles'

const InfoHero = () => {
  return (
    <>
      <C.ContentInfo>
        <div className="space-top"></div>
        <h1>Encontre hashtags de maneira fácil.</h1>
        <p>Digite o que deseja no campo de buscas e confira os resultados do Twitter abaixo</p>
      </C.ContentInfo>
      <C.InputContainer>
        <C.Input>
          <button>
            <img src={require('../../assets/icon-search.svg').default} alt="" />
          </button>
          <input type="text" placeholder="Buscar..." />
        </C.Input>
      </C.InputContainer>
    </>
  )
}

export default InfoHero