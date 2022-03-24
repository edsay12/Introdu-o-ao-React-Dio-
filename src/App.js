import React, { useState } from 'react'
import Api from './api';

function App() {
  const [user,SetUser] = useState({})
  
  async function clickUser(){
    const ApiUser = await Api.get('/users/edsay12')
    console.log(ApiUser.data)
  }
  return (
    <div onClick={clickUser}>
      Hello World
    </div>
  );
}

export default App;
