import React, { useState } from 'react'

const ControlledForm = () => {
  const initialData = {
    name: "",
    age: "",
    place: ""
  }
  const [formData, setFormData] = useState(initialData);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Controlled Submitted:", formData);
    setFormData(initialData)
  }
  return (
    <div className='text-white border-2 p-6'>
      <h2 className='text-sky-400 text-xl font-bold p-8'>Controlled Form</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-full justify-center items-center'>
        <div className='flex gap-2'>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" autoComplete='on' 
          className='border-2 rounded-lg p-1'
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div className='flex gap-2'>
          <label htmlFor="name">Age:</label>
          <input type="text" id="name" autoComplete='on' 
          className='border-2 rounded-lg p-1'
          value={formData.age}
          onChange={(e) => setFormData({...formData, age: e.target.value})}
          />
        </div>
        <div className='flex gap-2'>
          <label htmlFor="name">Place:</label>
          <input type="text" id="name" autoComplete='on' 
          className='border-2 rounded-lg p-1'
          value={formData.place}
          onChange={(e) => setFormData({...formData, place: e.target.value})}
          />
        </div>
        <button type='submit' className='border-2 p-2 rounded-lg w-20 cursor-pointer'>Submit</button>
      </form>
    </div>
  )
}

export default ControlledForm
