import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards'
import Form from './Components/Form'

function App() {

  const [users, setUsers] = useState([]);
  const handleSubmitDataForm = (data) => {
    setUsers([...users, data])
  }
  const handleRemove = (id) => {
    setUsers(() => users.filter((item, index) => index != id))
  }

  return (
    <>
      <div className='w-full h-screen bg-zinc-200 flex items-center justify-center p-10'>
        <div className='container mx-auto' >
          <Cards handleRemove={handleRemove} users={users} />
          <Form handleSubmitDataForm={handleSubmitDataForm} />
        </div>
      </div>

    </>
  )
}

export default App
