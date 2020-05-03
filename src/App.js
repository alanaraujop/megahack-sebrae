import React from 'react';
import addReduxProviders from './store';
import Routes from './pages/routes';

const App = () => addReduxProviders(<Routes />);

export default App;
