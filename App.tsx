import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import LoginScreen from './src/screens/LoginScreen';
import { StarshipFeedScreen } from './src/screens/StarshipFeedScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Navigator from "./src/navigation/Navigator"

const queryClient = new QueryClient()

function App() {
  return (
   <QueryClientProvider client={queryClient}>
    <PaperProvider>
      <Navigator></Navigator>
      {/* <LoginScreen /> */}
      {/* <StarshipFeedScreen /> */}
    </PaperProvider>
    </QueryClientProvider>
  );
  
};

// eslint-disable-next-line import/no-default-export
export default App;