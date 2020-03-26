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

        this.state = {
            minValue : 0,
            maxValue : Infinity
        }
    }

    onChangeMin = (event) => {
        this.setState({minValue: event.target.value})
    }

    onChangeMax = (event) => {
        this.setState({maxValue: event.target.value})
    }

    render() {
        return (
            <ContainerFiltro>
                <span>Filtro</span>
                <input type= "Number" onChange = {this.onChangeMin} placeholder = {"minimo"}/>
                <input type= "Number" onChange = {this.onChangeMax} placeholder = {"maximo"}/>
                <input type= "text"/>
                </ContainerFiltro>
        )
    }
}

export default Filtro