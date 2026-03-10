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
            state.itens.push(action.payload)
        },
        remover: (state, action) => {
            state.itens = state.itens.filter(
                (item) => item.id !== action.payload
            )
        }
    }
})

export const { adicionar, remover } = carrinhoSlice.actions

export default carrinhoSlice.reducer