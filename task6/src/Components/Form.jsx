import React from 'react'
import {useForm} from 'react-hook-form'

function Form({handleSubmitDataForm}) {

    const {register , handleSubmit} = useForm()

    return (
        <div className='mt-10 flex justify-center  ' >

            <form className='flex gap-10 ' onSubmit={handleSubmit(data => handleSubmitDataForm(data))}>

                <input {...register('name')} className='rounded-md px-2 py-1 font-semibold text-base outline-none' type="text" placeholder='name'/>

                <input {...register('email')} className='rounded-md px-2 py-1 font-semibold text-base outline-none' type="text" placeholder='email'/>
                
                <input {...register('image')} className='rounded-md px-2 py-1 font-semibold text-base outline-none' type="text" placeholder='image url'/>

                <input className='rounded-md px-5 py-1 bg-blue-500 text-white font-semibold' type="submit" value="submit" />

            </form>
            
        </div>
    )
}

export default Form
