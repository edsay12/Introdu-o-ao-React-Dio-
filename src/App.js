import React, { useState } from 'react'
import Api from './api';
import GlobalStyle from './components/GlobalStyle'
import Pinput from './components/PInput';
import UserInformations from './components/UserInformations';
import styled from 'styled-components'
import Button from './components/Button';
import RepoCard from './components/RepoCard';


function App() {
  const [user, SetUser] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [userRepo, setUserRepo] = useState('');

  async function clickUser(e) {
    e.preventDefault();
    const userName = inputValue
    const ApiUser = await Api.get(`/users/${userName}`)
    SetUser(ApiUser.data)
    console.log(user)
    setInputValue('')
    const UserRepos = await Api.get(`/users/${userName}/repos`)
    setUserRepo(UserRepos.data)
    console.log(userRepo)

  }
  function GetinputValue(e) {
    setInputValue(e.target.value)

  }
  return (
    <>
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
      <Container>
        <Buttons>
          <Button >Repositories</Button>
          <Button >Stared</Button>
        </Buttons>
      </Container>
      <Container>
        <RepoCard userRepo={userRepo || null} />
      </Container>



    </>
  );
}

const Container = styled.div`
  width:100%;
  max-width:1140px;
  margin:0 auto;
`
const Buttons = styled.div`
  display:flex;
  gap:5px;
  margin-top:40px;

`
export default App;
