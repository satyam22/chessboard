import React from 'react';
import ReactDOM from 'react-dom';

//import {createStore,combineReducers} from 'redux';
//import {reducer as formReducer} from 'redux-form';
//import {Provider} from 'react-redux';


import Board from './Board';
import {observe} from './Game';


//import './index.css';
//import registerServiceWorker from './registerServiceWorker';


//import ContactPage from './contactPage';
//import Knight from './Knight';
//import Square from './Square';


/*const rootReducer=combineReducers({
    form:formReducer
})*/
//const store=createStore(rootReducer);

//ReactDOM.render(<Provider store={store}><ContactPage /></Provider>, document.getElementById('root'));


observe(knightPosition =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    document.getElementById("root")
  )
);

//ReactDOM.render(<Board knightPosition={[7,4]} /> ,document.getElementById("root"));






/*ReactDOM.render(<RandomValue />, document.getElementById('child'));
*/
//registerServiceWorker();
