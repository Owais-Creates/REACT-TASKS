import List from "./List"

function App() {

  const names = ["Toyota", "BMW", "Merc", "Suzuki"]

  return (
    <>
      <p>Task4 - Create a component named "List" that takes one prop - "items". The component should display an unordered list element with the given list items.</p>

      <List items={names} />

    </>
  )
}

export default App
