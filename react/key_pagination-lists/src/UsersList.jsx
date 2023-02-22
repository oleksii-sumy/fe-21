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
  const {users} = this.props;
  return (
    <div>
      <Pagination />
      <ul className="users">
        {users.map(user => 
          <User name={user.name} age={user.age} key={user.id}/>
        )}
      </ul>
    </div>
  );

}
}
export default UsersList;
