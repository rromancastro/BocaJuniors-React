import { ChakraProvider } from '@chakra-ui/react'
import { PublicRouter } from "./router/PublicRouter"
import { CartProvider } from './contexts/CartContext'

function App() {

  

  return (
    <CartProvider>
    <ChakraProvider>
      <PublicRouter />
    </ChakraProvider>
    </CartProvider>
  )
}

export default App
