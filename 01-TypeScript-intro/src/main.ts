import { name } from './bases/01-types'

import './style.css'



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
    </a>
    <h1>Vite + TypeScript ${ name }</h1>
    <div class="card">
      <button  type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more!!!
  
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
