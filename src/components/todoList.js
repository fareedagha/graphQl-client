import React, { Component } from 'react';
import {GetBookQuery} from '../queries/queries'

import {graphql} from 'react-apollo'

class TodoList extends Component {
    displayData(){
        var data =  this.props.data
        if(data.loading){
            return(<h3>loading ...</h3>)
        }
        else{
            return data.books.map((i, ind)=>{
                return(
                    <li key= {ind}>{i.name}</li>
                )
            })
        }
    }
  render() {
      console.log(this.props)
    return (
      <div className="App">
       <ul>
         
         {this.displayData()}
       </ul>
      </div>
    );
  }
}

export default graphql(GetBookQuery)(TodoList);
