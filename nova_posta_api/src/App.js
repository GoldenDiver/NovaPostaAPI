import { getItems } from "./services/fetching";

function App() {
  return (
    <div>
      hello
      <button onClick={() => console.log(getItems())}>get</button>
    </div>
  )
}

export default App;
