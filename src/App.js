import React from 'react';
import CardList from './components/card-list/CardList'
import SearchBox from './components/search-box/SearchBox'
import './App.css';

class App extends React.Component {

  state = {
    users: [],
    searchField: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => this.setState({users: data}))
  }

  render() {
    const { users, searchField } = this.state
    const filteredUsers = users.filter(user => 
      user.username.toLowerCase().includes(searchField.toLowerCase())
    )
    return(
    <div className="App">
      <h1>Monster Users</h1>
      <SearchBox
        placeholder="search users"
        handleChange={e => this.setState({searchField: e.target.value})}
      />
      <CardList users={filteredUsers}/>        
    </div>
    )
  }
}


export default App;
