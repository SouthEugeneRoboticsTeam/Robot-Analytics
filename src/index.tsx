import * as React from 'react';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import App from '@robot-analytics';
import { store } from '@robot-analytics/state/store';
import '@robot-analytics/firebase';
import { theme } from '@robot-analytics/theme';
import registerServiceWorker from './registerServiceWorker';

const Root = () => (
    <BrowserRouter>
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </Provider>
    </BrowserRouter>
);

render(<Root />, document.getElementById('root'));

registerServiceWorker();
