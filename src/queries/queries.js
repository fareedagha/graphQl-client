import {gql} from 'apollo-boost'


const GetAuthorQuery = gql`
{
    authors{
        name
        id
    }
}
`
const GetBookQuery = gql`
{
    books{
        name
        id
    }
}
`

const AddBooksMutation = gql`
mutation($name:String!, $genre : String!, $authorId:String!){
    addBook(name:$name, genre: $genre, authorId:$authorId){
        name
        genre
        
    }
}

`


export {GetAuthorQuery , GetBookQuery , AddBooksMutation} 
