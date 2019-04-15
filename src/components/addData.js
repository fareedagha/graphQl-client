import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { GetAuthorQuery, AddBooksMutation, GetBookQuery } from "../queries/queries";

class AddData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genrie: "",
      authorId: ""
    };
  }
  displayData() {
    var data = this.props.getAuthorQuery;
    if (data.loading) {
      return <p>loading ...</p>;
    } else {
      return data.authors.map((i, ind) => {
        return (
          <option key={ind} value={i.id}>
            {i.name}
          </option>
        );
      });
    }
  }
  submitForm(e){
      e.preventDefault()
      console.log(this.state)
      this.props.addBookMutation({
         
             variables:{ 
            name : this.state.name,
             genre :  this.state.genrie,
              authorId : this.state.authorId
             },
             refetchQueries : [{query :GetBookQuery }]

            }
      )
  }
  render() {
    console.log(this.props);
    return (
      <form id="add-book" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
          <label>name</label>
          <input
            type="text"
            onChange={e => {
              this.setState({ name: e.target.value });
            }}
          />
        </div>

        <div className="field">
          <label>genrie</label>
          <input
            type="text"
            onChange={e => {
              this.setState({ genrie: e.target.value });
            }}
          />
        </div>

        <div className="field">
          <label>author</label>
          <select
            onChange={e => {
              this.setState({ authorId: e.target.value });
            }}
          >
            {this.displayData()}
          </select>
        </div>

        <button>+</button>
      </form>
    );
  }
}

export default compose( graphql(GetAuthorQuery,{name:'getAuthorQuery'}),
graphql(AddBooksMutation,{name : 'addBookMutation'}))

(AddData);
