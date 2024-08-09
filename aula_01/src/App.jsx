/*

function App() {
  return (
    <h1>Hello World</h1>
  )
}

export default App;

*/

import "./style.css"

export default function App() {
  return (
    <div className="container">
      <h1 id="titulo">Hello World!</h1>
      <p>Learning React</p>
      <button onClick={() => alert("ok")}>CLique</button>
    </div>

  )
}