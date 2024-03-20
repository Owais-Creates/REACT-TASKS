// FORM HANDLING USING REACT-HOOK-FORM


const App = () => {
  return (
    <form action=""></form>
  )
}

export default App





















// FORM SUBMISSION USING useREF
// import { useRef, useState } from 'react'

// function App() {

//   const name = useRef(null);
//   const email = useRef(null);
//   const handleFormSubmission = (e) => {
//     e.preventDefault();
//     console.log(` NAME - ${name.current.value} , EMAIL - ${email.current.value}`)
//   }

//   return (
//     <>

//       <form action="#" onSubmit={handleFormSubmission} >

//         <input ref={name} type="text" placeholder='name' />
//         <input ref={email} type="email" placeholder='email' />
//         <input type="submit" value={"Submit"} />

//       </form>

//     </>
//   )
// }

// export default App
