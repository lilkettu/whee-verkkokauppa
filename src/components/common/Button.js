import React from 'react'
import styled from 'styled-components'

const Button = props =>
  <StyledButton type="button" {...props}></StyledButton>

const StyledButton = styled.button`
  background: ${props => props.theme.white};
  text-transform: uppercase;
  border: 1px solid;
  font-family: 'Playfair Display', serif;
  font-size: 1.15em;
  
  :active {
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
  }
`

export default Button