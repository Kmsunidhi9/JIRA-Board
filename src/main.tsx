import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './context/AuthContext'
import { ApolloProvider } from '@apollo/client/react'
import { client } from './graphql/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}> 
    <AuthProvider>
      <App />
    </AuthProvider>
    </ApolloProvider>
  </StrictMode>,
)
