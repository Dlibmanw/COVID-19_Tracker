import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById("root")) 
// we are calling reactDOM and render method on it. 
// the first parameter that it accepts is that App component.
// The 2nd is the element we want to render it on. So that's going to be document.getElementById, 
// and then the 'root'. To understand the: document.getElementById('root')) go to public > index.html: 
// The only thing we have inside the body of this basic html is an empty div with an id of 'root'. 