import React from 'react'
import { Table } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
function FromTable(props) {
  return (
    <div>
      <Container>
      <Table striped bordered hover size="sm">
        <thead> 
                <th>No</th>
                <th>Name </th>
                <th>Email</th>
                <th>Gender</th>
                <th>city</th>
                <th>Delete</th>
                <th>Edit</th>
        </thead>
         <tbody>
              {
                props.mainitems.map((item,i)=>{
                  return(
                    <tr>
                      <td>{i+1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.gender}</td>
                      <td>{item.city}</td>
                      <td><button value="delete" onClick={()=>props.deletehandler(i)} >Delete</button></td>
                      <td><button value="button" onClick={()=>props.edithandler(i)}>Update</button></td>
                      
                    </tr>
                  )
                })
              }
          </tbody>
      </Table>
    </Container>
    </div>
  )
}

export default FromTable;
