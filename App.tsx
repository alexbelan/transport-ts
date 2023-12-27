import Main from './src/screens';
import { Provider } from 'react-redux';
import store from './src/store';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Main />
      </Provider>
    </QueryClientProvider>
  );
}
