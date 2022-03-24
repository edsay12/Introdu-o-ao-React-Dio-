import React from "react";
import styled from 'styled-components'

function UserInformations({ user }) {
    return (
        <DadosDoUsuario>
                <UserImage src={user.avatar_url}></UserImage>
                <UserDataDiv>
                    <UserNameDiv>{user.name}</UserNameDiv>
                    <p><UserInformationsStrong >Username:</UserInformationsStrong >{user.login} </p>
                    <p><UserInformationsStrong >Company:</UserInformationsStrong >{user.company} </p>
                    <p><UserInformationsStrong >Location:</UserInformationsStrong >{user.location} </p>
                    <p><UserInformationsStrong >Blog:</UserInformationsStrong >{!user.blog ? 'Não existe' : user.blog} </p>
                    <UserInformationsDiv>
                        <UserInformationsItem>
                            <strong>Followers</strong>
                            {user.followers}
                        </UserInformationsItem>
                        <UserInformationsItem>
                            <strong>Following</strong>
                            {user.following}
                        </UserInformationsItem>
                        <UserInformationsItem>
                            <strong>Gits</strong>
                            {user.public_gists}
                        </UserInformationsItem>
                        <UserInformationsItem>
                            <strong>Repos</strong>
                            {user.public_repos}
                        </UserInformationsItem>
                    </UserInformationsDiv>
                </UserDataDiv>
        </DadosDoUsuario>
    )

}

const DadosDoUsuario = styled.div`
    margin-top:30px;
    display:flex;
    align-items:start;

`

const UserNameDiv = styled.div`
    font-size:30px;
    font-weight:700;
`
const UserInformationsStrong = styled.strong`
margin-right:10px`
const UserDataDiv = styled.div`
    flex:2;
    margin:0;
    padding:0;
`
const UserImage = styled.img`
    max-width:150px;
    height:150px;
    flex:1;
    border-radius:50%;
    margin-right:40px;

`
const UserInformationsDiv = styled.div`
display:flex`

const UserInformationsItem = styled.div`
    display:flex;
    margin-right:10px;
    text-align:center;
    gap:5px;
    flex-direction:column;


`
export default UserInformations;