import { Component } from 'react'

interface UserSearchProps {
  users: {
    name: string;
    age: string;
  }[]
}

interface UserSearchState {
  name: string;
  user: { name: string; age: number } | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState ={
    name: '',
    user: undefined
  };

  render() {
    
  }
}

export default UserSearch;