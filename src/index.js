import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createStore,applyMiddleware, compose } from "redux";
import rootReducer from "./reducer/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from './componets/fbConfig'
import app from "./componets/fbConfig";

// const store = createStore(rootReducer,
//     compose (
//       applyMiddleware(thunk.withExtraArgument({ getFirestore})),
//       reduxFirestore(app),
//       // reactReduxFirebase(fbConfig)
//     )
//   );

const middleware = [thunk];
if (process.env.MODE_ENV === 'development') {
  middleware.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middleware))


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store = {store}>
    <BrowserRouter>
      
        <App />
      
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
