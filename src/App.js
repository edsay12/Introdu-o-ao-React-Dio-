import React, { useState } from 'react'
import Api from './api';
import GlobalStyle from './components/GlobalStyle'
import Pinput from './components/PInput';
import UserInformations from './components/UserInformations';
import styled from 'styled-components'


function App() {
  const [user, SetUser] = useState('')
  const [inputValue, setInputValue] = useState('')

  async function clickUser(e) {
    e.preventDefault();
    const userName = inputValue
    const ApiUser = await Api.get(`/users/${userName}`)
    SetUser(ApiUser.data)
    console.log(user)
    setInputValue('')

  }
  function GetinputValue(e) {
    setInputValue(e.target.value)

  }
  return (
    <Container>
      <GlobalStyle />
      <Pinput
        placeholder={'Digite um usuario'}
        buttonName={'Buscar'}
        GetinputValue={GetinputValue}
        formValue={inputValue}
        onclick={clickUser} />
    <UserInformations user={user} />
    </Container>
  );
}

const Container = styled.div`
  width:100%;
  max-width:1140px;
  margin:0 auto;



`

export default App;
