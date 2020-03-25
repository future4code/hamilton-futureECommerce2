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

        <Filtro>

        </Filtro>

        <ListaDeProdutos>
          
        </ListaDeProdutos>

      </div>
    );
  }
}

export default App;
