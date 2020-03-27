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
      filtroSelect: ""
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

  alteraOrdem = (valorDoSelect) => {
    this.setState({filtroSelect: valorDoSelect})
    console.log(valorDoSelect)
  }

  chamaDivCarrinho = () => {
    return <Carrinho/>
  }

  render() {

    return (
      <div>
        <Header>
          <h1>Future E-commerce</h1>
          <BotaoCarrinho onClick = {this.chamaDivCarrinho}><Icone src= {require("./Imagens/IconCarrinho.svg")}/></BotaoCarrinho>
        </Header>

        <Carrossel/>

        <Filtro funcao = {this.alteraValores} funcao2 = {this.alteraInput} funcao3 = {this.alteraOrdem}/>

        <ListaDeProdutos nome = {this.state.valorInput} min = {this.state.valorMin} max = {this.state.valorMax}/>
      </div>
    );
  }
}

export default App;

//>>> FILTRA DO MAIOR PELO MENOR E VICE-VERSA

// Onde começar? Como fazer?

// É melhor ficar no <Filtro> ou na <ListaDeProdutos>?

//>>> FAZER A SEÇÃO DO CARRINHO (float right e hidden)