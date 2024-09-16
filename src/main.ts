import './style.css'
import { setupCounter } from './counter.ts'
import { charmander } from './bases/06-decorators2.ts';
// import { charmander } from './bases/05-decorators.ts';
// import { charmander } from './bases/04-injection.ts';
// import { charmander } from './bases/03-classes.ts';
// import { name, age } from './bases/01-types.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   <h1>Hello Vite!! ${ charmander.name }</h1>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
