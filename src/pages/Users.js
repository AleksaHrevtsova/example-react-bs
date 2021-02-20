import React from "react";
import { Container, Table } from "react-bootstrap";
import MyComponents from "../components/MyComponents";
import Toggler from "../components/Toggler";

const Users = () => {
  return (
    <Container>
      {/* <Toggler
        render={(isOpen, onToggle) => (
          <MyComponents prop1={isOpen} prop2={onToggle} />
        )}
      /> */}

      {/* <Toggler>
        {(isOpen, onToggle) => <MyComponents prop1={isOpen} prop2={onToggle} />}
      </Toggler> */}

      <Toggler>
        {(isOpen, onToggle) => (
          <>
            <button type="button" checked={isOpen} onChange={onToggle}>
              {isOpen ? "Hide" : "Show"}
            </button>
            {isOpen && <MyComponents prop1="aaa" prop2="bbb" />}
          </>
        )}
      </Toggler>

      <Toggler>
        {(isOpen, onToggle) => (
          <>
            <label>
              <input type="checkbox" checked={isOpen} onChange={onToggle} />
              {isOpen ? "Hide" : "Show"}
            </label>
            {isOpen && <MyComponents prop1="aaa" prop2="bbb" />}
          </>
        )}
      </Toggler>

      {/* <MyComponents prop1="prop-1" prop2="prop-2" /> */}
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
