import React from "react";
import { Container, Table } from "react-bootstrap";

const Users = () => {
  return (
    <Container>
      <h2>Users</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Nickname</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Alex</td>
            <td>Bob</td>
            <td>John</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Black</td>
            <td>Green</td>
            <td>Brown</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Black</td>
            <td>Brown</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Alex</td>
            <td>Bob</td>
            <td>John</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Black</td>
            <td>Green</td>
            <td>Brown</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Black</td>
            <td>Brown</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Alex</td>
            <td>Bob</td>
            <td>John</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Black</td>
            <td>Green</td>
            <td>Brown</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Black</td>
            <td>Brown</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Alex</td>
            <td>Bob</td>
            <td>John</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Black</td>
            <td>Green</td>
            <td>Brown</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Black</td>
            <td>Brown</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
export default Users;
