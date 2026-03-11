import { createSlice } from '@reduxjs/toolkit'

type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action) => {
      const produto = action.payload

      const produtoExiste = state.itens.find((item) => item.id === produto.id)

      if (!produtoExiste) {
        state.itens.push(produto)
      }
    },
    remover: (state, action) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    }
  }
})

export const { adicionar, remover } = carrinhoSlice.actions

export default carrinhoSlice.reducer
