import React from "react";
import styled from 'styled-components'


function Button({ children,color }) {
    return (
        <Button1>{children}</Button1>
    )

    
    
    
    
}

const Button1 = styled.button`
background-color:white;
color:black;
border:1px solid black;
padding:10px 10px;
outline:none;
border-radius:5px;
cursor:pointer;
`
export default Button