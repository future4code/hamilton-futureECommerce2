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
                    nome: "Camiseta 'Miau no Mundo da Lua'",
                    valor: 47.99,
                    imagem: require("../Imagens/Camiseta1.png"),
                    quant: 0
                },
                {
                    id: 2,
                    nome: "Camiseta 'I Love Space'",
                    valor: 29.99,
                    imagem: require("../Imagens/Camiseta2.png")
                },
                {
                    id: 3,
                    nome: "Camiseta 'Total Waste of Space'",
                    valor: 33.99,
                    imagem: require("../Imagens/Camiseta3.png")
                },
                {
                    id: 4,
                    nome: "Camiseta 'Pescando a lua'",
                    valor: 49.99,
                    imagem: require("../Imagens/Camiseta4.png")
                },
                {
                    id: 5,
                    nome: "Camiseta 'Balança na lua'",
                    valor: 59.99,
                    imagem: require("../Imagens/Camiseta5.png")
                },
                {
                    id: 6,
                    nome: "Camiseta 'Capinando a lua'",
                    valor: 19.99,
                    imagem: require("../Imagens/Camiseta6.png")
                },
                {
                    id: 7,
                    nome: "Camiseta 'AstroUniverse'",
                    valor: 79.99,
                    imagem: require("../Imagens/Camiseta7.png")
                },
                {
                    id: 8,
                    nome: "Camiseta 'Laika'",
                    valor: 99.99,
                    imagem: require("../Imagens/Camiseta8.png")
                },
                {
                    id: 9,
                    nome: "Camiseta 'Em Chamas'",
                    valor: 64.99,
                    imagem: require("../Imagens/Camiseta9.png")
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
                funcao = {this.props.precos}               
                />
            )   
        })}
            </ContainerListaDeProdutos>
        )
    }
}

export default ListaDeProdutos