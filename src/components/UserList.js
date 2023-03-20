import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserList, selectIsLoading, selectError, fetchUsers } from '../features/userListSlice';

function UserList() {
  const userList = useSelector(selectUserList);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error}</p>;
  }

  return (
    <div>
      <h1 className="text-lg font-medium mb-4">Users</h1>
      <ul>
        {userList.users.map((user) => (
          <li key={user.id} className="border-b border-gray-300 py-2">
            <p>{user.first_name} {user.last_name}</p>
            <p className="text-gray-500">{user.email}</p>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        {userList.page > 1 && (
          <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded" onClick={() => dispatch(fetchUsers(userList.page - 1))}>
            Previous
          </button>
        )}
        {userList.page < userList.total_pages && (
          <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded ml-2" onClick={() => dispatch(fetchUsers(userList.page + 1))}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default UserList;
