import React, { Component } from "react";
import {
  GetBookQuery,
  deleteDataMutation,
  updateDataMutation
} from "../queries/queries";

import { graphql, compose } from "react-apollo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: ""
    };
  }

  submitForm(e) {
    e.preventDefault();
    console.log(this.state);

    if (!this.state.name && !this.state.id) {
      alert("plz select edit");
    } else {
      this.props.updateMutation({
        variables: {
          id: this.state.id,
          name: this.state.name
        },
        refetchQueries: [{ query: GetBookQuery }]
      });
    }
  }
  editData = (id, ss) => {
    this.setState({ name: ss, id: id });
  };
  deleteData = id => {
    this.props.deletMutation({
      variables: {
        id: id
      },
      refetchQueries: [{ query: GetBookQuery }]
    });
  };

  displayData() {
    var data = this.props.getBookQuery;
    if (data.loading) {
      return <h3>loading ...</h3>;
    } else {
      return data.books.map((i, ind) => {
        return (
          <div>
            <li key={ind}>{i.name}</li>
            <button
              onClick={() => {
                this.deleteData(i.id);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                this.editData(i.id, i.name);
              }}
            >
              Edit
            </button>
          </div>
        );
      });
    }
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <ul>{this.displayData()}</ul>
        <div>
          <form id="add-book" onSubmit={this.submitForm.bind(this)}>
            <div className="field">
              <h3>Edit Form</h3>
              <label>name :</label>
              <input
                type="text"
                value={this.state.name}
                onChange={e => {
                  this.setState({ name: e.target.value });
                }}
              />
            </div>
            <button>Edit</button>
          </form>
        </div>
      </div>
    );
  }
}

//export default graphql(GetBookQuery)(TodoList);
export default compose(
  graphql(GetBookQuery, { name: "getBookQuery" }),
  graphql(deleteDataMutation, { name: "deletMutation" }),
  graphql(updateDataMutation, { name: "updateMutation" })
)(TodoList);
