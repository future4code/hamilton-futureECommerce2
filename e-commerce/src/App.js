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

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      valorMin: 0,
      valorMax: 9999999999
    }
  }

  alteraValores = (valor1, valor2) => {
    if(valor1 !== "" && valor2 === "")
    {
      this.setState({
        valorMin: valor1
      })
    }
    else if (valor1 === "" && valor2 !== "")
    {
      this.setState({
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

  render() {

    return (
      <div>
        <Header>
          <h1>Future E-commerce</h1>
          <Carrinho>

          </Carrinho>
        </Header>

        <Carrossel>

        </Carrossel>

        <Filtro funcao = {this.alteraValores}>

        </Filtro>

        <ListaDeProdutos min = {this.state.valorMin} max = {this.state.valorMax}>
          
        </ListaDeProdutos>

      </div>
    );
  }
}

export default App;
