import React, { Component } from 'react';
import ApolloClient  from 'apollo-boost'
 import TodoList from './components/todoList'
 import {ApolloProvider}  from 'react-apollo'
 import AddData from './components/addData'
  const client =  new ApolloClient({
    uri : 'http://localhost:4000/graphql'
  })
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client} >
      <div className="App">
       <h1>Todo App Testing</h1>
       <TodoList />
       <AddData />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
