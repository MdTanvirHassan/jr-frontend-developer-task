import React from 'react';
import UserList from '../components/UserList';
import PrivateRoute from '../components/PrivateRoute';

function Users() {
  return (
    <div className="container mx-auto px-4 py-6">
      <PrivateRoute component={UserList} />
    </div>
  );
}

export default Users;
