import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './modules/rootReducer';
import { createStore } from 'redux';
import Main from './pages/Main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(rootReducer);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Main />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
