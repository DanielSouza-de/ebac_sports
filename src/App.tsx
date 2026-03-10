import { useDispatch, useSelector } from 'react-redux'

import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'

import { useGetProdutosQuery } from './services/api'
import { adicionar } from './store/carrinho'
import { alternarFavorito } from './store/favoritos'
import { RootReducer } from './store/store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()

  const { data: produtos = [] } = useGetProdutosQuery()

  const favoritos = useSelector(
    (state: RootReducer) => state.favoritos.itens
  )

  const favoritar = (produto: Produto) => {
    dispatch(alternarFavorito(produto))
  }

  const adicionarAoCarrinho = (produto: Produto) => {
    dispatch(adicionar(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          adicionarAoCarrinho={adicionarAoCarrinho}
          favoritar={favoritar}
        />
      </div>
    </>
  )
}

export default App