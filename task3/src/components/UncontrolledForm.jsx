import React, { useRef, useState } from 'react'

const UncontrolledForm = () => {
  const initialData = {
    name: "",
    age: "",
    place: ""
  }
  const nameRef = useRef();
  const ageRef = useRef();
  const placeRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current?.value,
      age: ageRef.current?.value,
      place: placeRef.current?.value
    }
    console.log("Uncontrolled submit", data);
    nameRef.current.value = "";
    ageRef.current.value = "";
    placeRef.current.value = "";
  }
  return (
    <div className='text-white border-2 p-6'>
      <h2 className='text-sky-400 text-xl font-bold p-8'>UnControlled Form</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-full justify-center items-center'>
        <div className='flex gap-2'>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" autoComplete='on' 
          className='border-2 rounded-lg p-1'
          ref={nameRef}
          />
        </div>
        <div className='flex gap-2'>
          <label htmlFor="name">Age:</label>
          <input type="text" id="name" autoComplete='on' 
          className='border-2 rounded-lg p-1'
          ref={ageRef}
          />
        </div>
        <div className='flex gap-2'>
          <label htmlFor="name">Place:</label>
          <input type="text" id="name" autoComplete='on' 
          className='border-2 rounded-lg p-1'
          ref={placeRef}
          />
        </div>
        <button type='submit' className='border-2 p-2 rounded-lg w-20 cursor-pointer'>Submit</button>
      </form>
    </div>
  )
}

export default UncontrolledForm;
