import React from "react";
import styled from 'styled-components';

function Pform({ placeholder,buttonName,onclick,GetinputValue,formValue }) {
    return (
        <>
            <Form action="/" onSubmit={onclick}>
                <Input onChange={GetinputValue} value={formValue} placeholder={placeholder} />
                <Button>{buttonName}</Button>
            </Form>
        </>
    )
}

const Button = styled.button`
    background-color:blue;
    color:white;
    border:none;
    padding:0 10px;
    outline:none;
    border-radius:5px;


`
const Input = styled.input`
    width:100%;
    height:30px;
    border:1px solid black;
    outline:none;
    border-radius:5px;
    padding:0 10px;

`
const Form = styled.form`
    display:flex;
    gap:10px;
    margin-top:40px;

`

export default Pform