import React from 'react';
import styled from 'styled-components'


const ContainerProdutos = styled.div `
    text-align: center;
    border: 1px solid black;
    height: 100%;
    width: 350px;
`
const Imagem = styled.img `

`

class Produtos extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ContainerProdutos>
                <img src = {require("../Imagens/Camiseta1.png")}/>
                <p>Nome Do Produto</p>
                <p>R${this.props.preco}</p>
            </ContainerProdutos>
        )
    }
}

export default Produtos