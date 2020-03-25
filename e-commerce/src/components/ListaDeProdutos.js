import React from 'react';
import styled from 'styled-components'
import Produtos from './Produtos';

const ContainerListaDeProdutos = styled.div `
    display: grid;
    grid-template-rows: 1fr 1fr 1fr; 
    grid-template-columns: 1fr 1fr 1fr; 
    border: 1px solid black;
    height: 100%;
    width: 1400px;
    margin: 0 auto;
    grid-gap: 20px;
    justify-items: center;
    padding: 20px;
    box-sizing: border-box;
`

class ListaDeProdutos extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            produtos: [
                {
                    id: Date.now(),
                    nome: "Camiseta 1",
                    valor: 39.90,
                    imagem: require("../Imagens/Camiseta1.png")
                },
                {
                    id: Date.now(),
                    nome: "Camiseta 2",
                    valor: 39.90,
                    imagem: require("../Imagens/Camiseta2.png")
                },
                {
                    id: Date.now(),
                    nome: "Camiseta 3",
                    valor: 39.90,
                    imagem: require("../Imagens/Camiseta3.png")
                },
                {
                    id: Date.now(),
                    nome: "Camiseta 4",
                    valor: 39.90,
                    imagem: require("../Imagens/Camiseta4.png")
                },
                {
                    id: Date.now(),
                    nome: "Camiseta 5",
                    valor: 39.90,
                    imagem: require("../Imagens/Camiseta5.png")
                },
                {
                    id: Date.now(),
                    nome: "Camiseta 6",
                    valor: 39.90,
                    imagem: require("../Imagens/Camiseta6.png")
                },
                {
                    id: Date.now(),
                    nome: "Camiseta 7",
                    valor: 39.90,
                    imagem: require("../Imagens/Camiseta1.png")
                },
                {
                    id: Date.now(),
                    nome: "Camiseta 8",
                    valor: 39.90,
                    imagem: require("../Imagens/Camiseta1.png")
                },
                {
                    id: Date.now(),
                    nome: "Camiseta 9",
                    valor: 39.90,
                    imagem: require("../Imagens/Camiseta1.png")
                },        
            ]
        }
    }

    render() {
        const divProdutos = this.state.produtos.map(produtos => {
            return (
                <Produtos
                imagem = {produtos.imagem}
                nome = {produtos.nome}
                preco = {produtos.valor}
                key = {produtos.id}
                />
            )    
        })

        return (
            <ContainerListaDeProdutos>
                {divProdutos}
            </ContainerListaDeProdutos>
        )
    }
}

export default ListaDeProdutos