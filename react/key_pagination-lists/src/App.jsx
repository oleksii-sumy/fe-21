import React, { Component } from 'react';
import UsersList from './UsersList';

const users = [
  { id: 11, name: 'Tom', age: 20 },
  { id: 22, name: 'Bob', age: 100 },
  { id: 3424, name: 'Rob', age: 32 },
  { name: 'Rim', age: 45 },
  { name: 'Skin', age: 27 },
  { name: 'Bobby', age: 26 },
  { name: 'Jack', age: 19 },
  { name: 'Bom', age: 21 },
  { name: 'DOM', age: 22 },
  { name: 'Toretto', age: 60 },
];

class App extends Component {
  createUser = userData => {
    console.log(userData);
  };

  render() {
    return <UsersList users={users}/>;
  }
}

export default App;
