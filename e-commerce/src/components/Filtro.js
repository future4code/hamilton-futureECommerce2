import React from 'react';
import styled from 'styled-components'

const ContainerFiltro = styled.div `
    border: 1px solid black;
    
    width: 1400px;
    margin: 0 auto 10px;
`

class Filtro extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ContainerFiltro>Eu sou o Filtro!</ContainerFiltro>
        )
    }
}

export default Filtro