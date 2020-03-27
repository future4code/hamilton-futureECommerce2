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
                    id: 1,
                    nome: "Camiseta 1",
                    valor: 19.90,
                    imagem: require("../Imagens/Camiseta1.png")
                },
                {
                    id: 2,
                    nome: "Camiseta 2",
                    valor: 29.90,
                    imagem: require("../Imagens/Camiseta2.png")
                },
                {
                    id: 3,
                    nome: "Camiseta 3",
                    valor: 39.90,
                    imagem: require("../Imagens/Camiseta3.png")
                },
                {
                    id: 4,
                    nome: "Camiseta 4",
                    valor: 49.90,
                    imagem: require("../Imagens/Camiseta4.png")
                },
                {
                    id: 5,
                    nome: "Camiseta 5",
                    valor: 59.90,
                    imagem: require("../Imagens/Camiseta5.png")
                },
                {
                    id: 6,
                    nome: "Camiseta 6",
                    valor: 69.90,
                    imagem: require("../Imagens/Camiseta6.png")
                },
                {
                    id: 7,
                    nome: "Camiseta 7",
                    valor: 79.90,
                    imagem: require("../Imagens/Camiseta1.png")
                },
                {
                    id: 8,
                    nome: "Camiseta 8",
                    valor: 89.90,
                    imagem: require("../Imagens/Camiseta1.png")
                },
                {
                    id: 9,
                    nome: "Camiseta 9",
                    valor: 74.90,
                    imagem: require("../Imagens/Camiseta1.png")
                },        
            ]
        }
    }

    render() {        
        const produtosFiltrados = this.state.produtos.filter(produto => {
            return produto.valor >= this.props.min && produto.valor <= this.props.max && produto.nome.includes(this.props.nome) 
            // Agora também filtra pelo nome do produto
        }).sort((a,b) => {
            if(this.props.ordem === "crescente"){
                return a.valor-b.valor
            } else if (this.props.ordem === "decrescente"){
                return b.valor-a.valor
            }       
        })
   
        return (
            <ContainerListaDeProdutos>
                {produtosFiltrados.map(produtos => {
                return (
                <Produtos
                imagem = {produtos.imagem}
                nome = {produtos.nome}
                preco = {produtos.valor}
                key = {produtos.id}
                />
            )   
        })}
            </ContainerListaDeProdutos>
        )
    }
}

export default ListaDeProdutos