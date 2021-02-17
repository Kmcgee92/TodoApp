import React from 'react';
import ReactDOM from 'react-dom';

//Apollo / GQL
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

//redux
import ReduxStore from "./redux/store/ReduxStore";
import { Provider } from "react-redux";

// main styles
import { MuiThemeProvider } from "@material-ui/core/styles";
import './index.css';
import theme from "./AppTheme";

// main Component
import App from "./App";




const client = new ApolloClient({});
const store = ReduxStore();

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

