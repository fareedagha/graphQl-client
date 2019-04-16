import { gql } from "apollo-boost";

const GetAuthorQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;
const GetBookQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const AddBooksMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: String!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
    }
  }
`;

const deleteDataMutation = gql`
  mutation($id: String!) {
    deleteData(id: $id) {
      id
    }
  }
`;

const updateDataMutation = gql`
  mutation($id: String!, $name: String!) {
    UpdateData(id: $id, name: $name) {
      id
    }
  }
`;

export {
  GetAuthorQuery,
  GetBookQuery,
  AddBooksMutation,
  deleteDataMutation,
  updateDataMutation
};
