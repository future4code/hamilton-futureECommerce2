import React from 'react';
import styled from 'styled-components'
import Carrinho from './Carrinho'


const ContainerProdutos = styled.div `
    text-align: center;
    border: 1px solid black;
    height: 100%;
    max-width: 1400px;
    min-width: 100%;

`
const Imagem = styled.img `
    width: 200px;
    height: 200px;
    margin-top: 15px; 

`

const Button = styled.button `
    width: 100%;
    height: 50px;
    border: transparent;
    color: white;
    background: #505150 ;
    :hover {
        background: #3D3E3D;
    }

`

class Produtos extends React.Component {
    constructor(props) {
        super(props)
    }

    onClickSum = () => {
        this.props.funcao(this.props.preco, this.props.nome)
    }

    render() {
        return (
            <ContainerProdutos>
                <Imagem src = {this.props.imagem}/>
                <p>{this.props.nome}</p>
                <p>R${this.props.preco}</p>
                <Button onClick = {this.onClickSum}>Adicionar ao carrinho</Button>
            </ContainerProdutos>
        )
    }
}

export default Produtos