import Button from "./Button"


function App() {

  const handleClick = ()=>{
    console.log("Clicked");
  }

  return (
    <>

      <Button text="Owais" onClick={handleClick} />

    </>
  )
}

export default App
