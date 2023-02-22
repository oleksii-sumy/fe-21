import React from "react";
import User from './User';
import Pagination from "./Pagination";

//state
// current page

class UsersList extends React.Component {
state = {
  curPage: 1,
}
render() {
  return (
    <>
      <Pagination />
      <ul className="users">
        {this.props.users.map(user => {
          <User name={user.name} age={user.age} key={user.is}/>
        })}
      </ul>
    </>
  );

}
}
export default UsersList;
