import { RouterProvider } from 'react-router-dom';
import { router } from './providers/router';
import { useEffect } from 'react';
import { Storage } from 'utils/storage';

const App = () => {

  useEffect(() => {
    const theme = Storage.get('theme');

    if (!theme) {
      Storage.set('theme', 'light');
    }
  }, []);

  return (
    <RouterProvider router={router}/>
  )
};

export default App;