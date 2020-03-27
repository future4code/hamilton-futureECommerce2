import React from 'react';
import styled from 'styled-components'
import Carrossel from './components/Carrossel';
import ListaDeProdutos from './components/ListaDeProdutos';
import Filtro from './components/Filtro'
import Carrinho from './components/Carrinho'

const Header = styled.header `
  border: 1px solid black;
  width: 1400px;
  margin: 0 auto;
  text-align: center;
`
const BotaoCarrinho = styled.button `
border-radius: 50%;
width: 73px;
height: 73px;
/* margin-right: 4vw; */
position: fixed;
right: 8vw;
bottom: 3vh;

`

const Icone = styled.img `
    width: 33px;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      valorMin: 0,
      valorMax: 9999999999,
      valorInput: "",
      filtroSelect: "",
      carrinhoNaTela: false,
      nomeDoProduto: [],
      precoTotal: 0

    }
  }

  // Altera os valores "valorMin" e "valorMax" do estado
  alteraValores = (valor1, valor2) => {
    if(valor1 !== "" && valor2 === "")
    {
      this.setState({
        valorMin: valor1,
        valorMax: 9999999999
      })
    }
    else if (valor1 === "" && valor2 !== "")
    {
      this.setState({
        valorMin: 0,
        valorMax: valor2
      })
    }
    else if (valor1 === "" && valor2 === "")
    {
      this.setState({
        valorMin: 0,
        valorMax: 9999999999
      })
    }
    else {
      this.setState({
        valorMin: valor1,
        valorMax: valor2
      })
    }
  }

  // Define o valor de "valorInput" no estado e depois passa ele como props "nome" para <ListaDeProdutos>
  alteraInput = (valorDoInput) => {
    if(valorDoInput === ""){
      this.setState({valorDoInput: ""})
    }
    this.setState ({valorInput: valorDoInput})
  }

  // Altera o valor de "filtroSelect" no estado e depois passa ele como props "ordem" para <ListaDeProdutos>
  alteraOrdem = (valorDoSelect) => {
    this.setState({filtroSelect: valorDoSelect})
  }

  chamaDivCarrinho = () => {
    this.setState({carrinhoNaTela: !this.state.carrinhoNaTela})
  }

  somaValores = (precos, nome) => {
    const copiaNomes = [...this.state.nomeDoProduto, nome]

    this.setState({
      precoTotal: this.state.precoTotal + precos,
      nomeDoProduto: copiaNomes
    })
  }

  render() {

    return (
      <div>
        <Header>
          <h1>Future E-commerce</h1>
        </Header>

        <Carrossel/>

        <Filtro funcao = {this.alteraValores} funcao2 = {this.alteraInput} funcao3 = {this.alteraOrdem}/>

        <ListaDeProdutos precos = {this.somaValores} ordem = {this.state.filtroSelect} nome = {this.state.valorInput} min = {this.state.valorMin} max = {this.state.valorMax}/>

        <BotaoCarrinho onClick = {this.chamaDivCarrinho}><Icone src= {require("./Imagens/IconCarrinho.svg")}/></BotaoCarrinho>

        {this.state.carrinhoNaTela ? (
          <Carrinho valorTotal = {this.state.precoTotal} nomeProduto = {this.state.nomeDoProduto} valorUn = {this.state.precoIndividual}/>
        ): (
          false
        )}
      </div>
    );
  }
}

export default App;