import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
// redux
import { Provider } from 'react-redux';
import store from './store/store';

import Example from './components/Example';

const App = () => {


    return (
    <Provider store={store}>
        <h1>App</h1>
        <Example/>
    </Provider>
        );
}
 
export default App;

/**
 * Renderizar Componente App
 */
 if (document.getElementById('root')) {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>, 
        document.getElementById('root')
    );
}