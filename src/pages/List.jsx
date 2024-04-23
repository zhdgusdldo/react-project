import React, { useEffect } from 'react';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { userListState } from '../atoms/userListState';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function UsersList() {
  const setUserList = useSetRecoilState(userListState);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUserList(response.data);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, [setUserList]);

  return (
    <List>
      {userList.map((user) => (
        <ListItem key={user.id}>
          <ListItemText primary={user.name} secondary={user.email} />
        </ListItem>
      ))}
    </List>
  );
}

export default UsersList;