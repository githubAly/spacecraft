import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

// import LoginScreen from './src/screens/LoginScreen';
import { StarshipFeedScreen } from './src/screens/StarshipFeedScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
   <QueryClientProvider client={queryClient}>
    <PaperProvider>
      {/* <LoginScreen /> */}
      <StarshipFeedScreen />
    </PaperProvider>
    </QueryClientProvider>
  );
  
};

// eslint-disable-next-line import/no-default-export
export default App;