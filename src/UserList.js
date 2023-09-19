import React from 'react'
import {  Container, Row } from 'react-bootstrap'
import ProfileCard from './Card'

const UserList = ({users}) => {
  return (

    <Container>
        <center><h1>Users List</h1></center>
       <Row>
       {users.map((user) => (
              <ProfileCard id={user.id} key={user.id} user={user} />  
        ))}
        </Row>                
    </Container>
    )
}

export default UserList