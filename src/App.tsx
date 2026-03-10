import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'

import { useGetProdutosQuery } from './services/api'
import { adicionar } from './store/carrinho'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()

  const { data: produtos = [] } = useGetProdutosQuery()

  const [favoritos, setFavoritos] = useState<Produto[]>([])

  function favoritar(produto: Produto) {
    if (favoritos.find((p) => p.id === produto.id)) {
      const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
      setFavoritos(favoritosSemProduto)
    } else {
      setFavoritos([...favoritos, produto])
    }
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