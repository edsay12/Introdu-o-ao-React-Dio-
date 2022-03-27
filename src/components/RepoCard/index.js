import React from "react";
import styled from 'styled-components'

function RepoCard({ userRepo }) {
    if (!userRepo) {
        return (
            <></>
        )
    }

    return (
        <CardContainer>
            {userRepo.map((item) => {
                return (
                    <ListItem>
                        <Card href={item.clone_url}>
                            <p>{item.name}</p>
                            <p>{item.full_name}</p>
                        </Card>
                    </ListItem>
                )

            })}
        </CardContainer>
    )
}
export default RepoCard
const CardContainer = styled.ul`
    display:flex;
    flex-wrap: wrap;
    gap:10px;
    justify-content:left;
    align-itens:center;
    margin-top:40px;
    padding:0;
   
`
const ListItem = styled.li`
    min-width:300px;
    height:100px;
    margin:0;
    padding:0;
    list-style:none;
    border:1px solid black;
    
`
const Card = styled.a`
    

`