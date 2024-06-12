import React from 'react'
import Input from './Components/Input'
import Button from './Components/Button'

const App = () => {
  return (
    <>
      <div className='w-full h-screen flex justify-center flex-col gap-10 items-center bg-zinc-500' >
        <h1 className=' font-bold text-4xl font-mono' >OTP Input Box</h1>
        <Input />
        <Button/>
      </div>
    </>
  )
}

export default App
