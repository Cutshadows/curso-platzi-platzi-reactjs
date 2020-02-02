/*  const element = document.createElement('h1');
 element.innerText = 'Hello, Platzi BadgeSSs!';

 const container = document.getElementById('app');

container.appendChild(element); */

import React from 'react';
import ReactDOM from 'react-dom';
//import Badge from './components/Badge';
//import BadgeNew from './pages/BadgeNew';
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
//import Badges from './pages/Badges';

import App from './components/App'
//const element = <h1>Hello, Platzi BadgesSS!</h1>;
//const element = React.createElement('a', {href:'https://platzi.com'}, 'Hola! soy los children');
//const name='Ricardo';
//const sum=()=> 3 + 3;
//const element= React.createElement('h1', {}, `Hola, soy ${name}`)
//const jsx=<h1>Hola soy, {sum()}</h1> /* expresiones valores que se puedan evaluar */
//const jsx=<h1>Hola soy, {undefined}</h1> /* expresiones valores que se puedan evaluar */
//const jsx=<div><h1>Hola, soy ricardo</h1><p> Soy ingeniero en Informatica</p></div>

/* const element=React.createElement(
    'div', 
    {}, 
    React.createElement('h1', {}, 'Hola, soy Richard'),
    React.createElement('p', {}, 'Hola, soy ingeniero Frontend')
    ) */

/* const element=(
    <div>
        <h1>Hola, soy Ricardo</h1>
        <p>Soy ingeniero fronted</p>
    </div>
) */


const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
//siempre a react render hay que darle un elemento
ReactDOM.render(<App />, container);
