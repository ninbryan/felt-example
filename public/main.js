import { h, render } from 'preact';
import {found} from './app/module';

const person = 'Paint';

const App = () => (
  <div className="app">
    <p>Hello, {person}</p>
    <p>Maybe {found}</p>
  </div>
);

render( <App />, document.querySelector('#app'));