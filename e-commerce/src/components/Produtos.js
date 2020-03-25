import React from 'react';
import styled from 'styled-components'
import Carrinho from './Carrinho'


const ContainerProdutos = styled.div `
    text-align: center;
    border: 1px solid black;
    height: 100%;
    width: 400px;
`
const Imagem = styled.img `
    width: 200px;
    height: 200px;
`

const Button = styled.button `

`

class Produtos extends React.Component {
    constructor(props) {
        super(props)
    }

    // adicionarAoCarrinho = (event) => {
    //     const novaQuantidade = this.state.quantidadeDeProdutos + 1

    //     this.setState ({quantidadeDeProdutos: novaQuantidade})
    //     console.log(this.state.quantidadeDeProdutos)
    // }

    render() {
        return (
            <ContainerProdutos>
                <Imagem src = {this.props.imagem}/>
                <p>{this.props.nome}</p>
                <p>R${this.props.preco}</p>
                <Button >Adicionar ao carrinho</Button>
            </ContainerProdutos>
        )
    }
}

export default Produtos