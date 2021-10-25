import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
// React Router
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
// redux
import { Provider } from 'react-redux';
import store from './store/store';
import TrendingDay from './pages/trending/TrendingDay';
import MainLayout from './components/layouts/MainLayout';

const App = () => {


    return (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/">
                    <TrendingDay/>
                </Route>

                <Route exact path="/movie/:id">
                    <MainLayout>
                        <div className="container text-center mt-4">
                            <h1 className="h5 text-muted">Página en construcción <i className="fa fa-tools"></i></h1>
                            <h2 className="h6 text-muted my-4">Información de película no disponible aún <i className="fa fa-frown"></i></h2>
                            <h3 className="h6 text-success my-4">Pero lo estará proximamente <i className="fa fa-smile"></i></h3>
                            <Link to="/" className="btn btn-dark">Volver</Link>
                        </div>
                    </MainLayout>
                </Route>

                <Route exact path="/tv/:id">
                    <MainLayout>
                        <div className="container text-center mt-4">
                            <h1 className="h5 text-muted">Página en construcción <i className="fa fa-tools"></i></h1>
                            <h2 className="h6 text-muted my-4">Información de serie no disponible aún <i className="fa fa-frown"></i></h2>
                            <h3 className="h6 text-success my-4">Pero lo estará proximamente <i className="fa fa-smile"></i></h3>
                            <Link to="/" className="btn btn-dark">Volver</Link>
                        </div>
                    </MainLayout>
                </Route>
            </Switch>
        </Router>
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