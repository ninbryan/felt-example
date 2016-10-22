import { h, render } from 'preact';
import {found} from './app/module';

const person = 'World';

const App = () => (
  <div className="app">
    <section>
      <p>Hello, {person}</p>
      <p>Maybe {found}</p>
    </section>
    <footer>
      <span>Made by <a href="https://github.com/ninbryan">Bryan Maamo</a></span>
    </footer>
  </div>
);

render( <App />, document.querySelector('#app'));