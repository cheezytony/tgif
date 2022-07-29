import { ChakraProvider } from '@chakra-ui/react';
import { Router } from './Router';
import chakraConfig from '../chakra.config';

function App () {
  return (
    <ChakraProvider theme={chakraConfig}>
      <Router />
    </ChakraProvider>
  );
}

export default App;
