import Header from './components/header';
import Clients from './components/Clients'
import {ApolloProvider, ApollClient, InMemoryCache, ApolloClient} from '@apollo/client'
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming){
            return incoming
          }
        },
        projects: {
          merge(existing, incoming){
            return incoming
          }
        },
      }
    }
  }
});

const client = new ApolloClient({
  uri : 'http://localhost:8000/graphql',
  cache,
})

function App() {
  return (
    <>
    <ApolloProvider client={client}>
   <Header/>
    <div className="container">
    <Clients/>
    </div>
    </ApolloProvider>
    </>
  );
}

export default App;
