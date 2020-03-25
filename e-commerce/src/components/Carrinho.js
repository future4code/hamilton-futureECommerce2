import React from 'react';
import styled from 'styled-components'
import Produtos from './Produtos'

class Carrinho extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>Eu sou o Carrinho!
                <p>{this.props.valor}</p>
            </div>
        )
    }
}

export default Carrinho