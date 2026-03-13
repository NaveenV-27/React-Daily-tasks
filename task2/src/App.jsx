import { useEffect, useState, useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

const FormField = ({data, handleChange, nameRef, children }) => {
  
    return <input 
      type={children === "age"? "number" : children == "email"? "email" : "text"}
      name={children}
      id={children} 
      value={data[children]} 
      onChange={e => handleChange(children, children == "age" ? Number(e.target.value): e.target.value)} 
      ref={children == "name" ? nameRef : null}
      autoComplete='on'
    />
}
function App() {

  const initialState = {
    name: "",
    age: "",
    email: "",
  }
  const [formData, setFormData] = useState(initialState);
  const [hobbies, setHobbies] = useState([])
  const [isAdding, setIsAdding] = useState(false);
  const [newHobby, setNewHobby] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    age: "",
    email: ""
  });
  const [success, setSuccess] = useState(false);

  const nameRef = useRef();

  useEffect(() => {
    if(nameRef.current) {
      console.log('nameRef.current', nameRef.current)
      nameRef.current.focus();
    }
  }, []);
  // console.log("formdata set to initial")
  
  const handleSumbit = (e) => {
    e.preventDefault();
    console.log("FormData:", formData);
    if(formData.name === '') {
      setErrors({
        ...errors,
        name: "Name is required"
      });
      return;
    }
    if(formData.age < 18) {
      setErrors({
        ...errors,
        age: "The age should be greater than 18"
      });
      return;
    }
    setSuccess(true);
    console.log("Submitted fields: ", {...formData, hobbies});
    setFormData(initialState);
    setHobbies([]);
    setNewHobby("");
    setTimeout(() => {
      setSuccess(false);
    }, 3000)
  }

  const handleChange = (field, value) => {
    if(errors[field] != "") {
      setErrors({
        ...errors,
        [field]: ""
      })
    }
    setFormData(prev => {
      return {
        ...prev,
        [field]: value
      }
    })
    // console.log(formData);
  }

  const handleAddClick = () => {
    setIsAdding(true);
  }

  const handleAddHobby = () => {
    console.log("Adding hobby:", newHobby)
    setHobbies(prev => ([
      ...prev,
      newHobby
    ]))
    setNewHobby("");
    setIsAdding(false);
  }
  


  return (
    <>
      <h1>----Registration form----</h1>
      <div>
        <form onSubmit={handleSumbit} className='form'>
          <div className='form'>
            <div className='form-field'>
              <label htmlFor="name">Enter your Name:</label>
              <div>

                <FormField data={formData} handleChange={handleChange} nameRef={nameRef}>name</FormField>
                {(errors.name != "") && <div className='error'>
                  {errors.name}
                </div>}
              </div>
            </div>
            <div className='form-field'>
              <label htmlFor="age">Enter your Age:</label>
              <div>
              <FormField data={formData} handleChange={handleChange} >age</FormField>
                {(errors.age != "") && <div className='error'>
                  {errors.age}
                </div>}
              </div>
            </div>
            <div className='form-field'>
              <label htmlFor="email">Enter your Email:</label>
              <FormField data={formData} handleChange={handleChange} >email</FormField>
                {(errors.email != "") && <div className='error'>
                  {errors.email}
                </div>}
            </div>
          </div>

          <div className='list-field'>
            <label htmlFor="">
            Add Hobbies:
            </label>

            <div className='hobby-container'>
              {hobbies.length > 0 && hobbies.map((hobby, idx) => {
                return (
                  <div key={idx}>
                    {hobby}
                  </div>
                )
              })}
            </div>
            {
              isAdding? <div className='new-hobby'>
                <input type="text" name="hobby" value={newHobby} placeholder='Add a new Hobby' onChange={e => {
                  setNewHobby(e.target.value);
                }} />
                <button className='add-hobby' type='button' onClick={e => handleAddHobby(e)}>+add</button>
              </div> :
              <button onClick={handleAddClick}>
                +Add Hobby
              </button>
            }
          </div>

          <button type="submit" className='submit-button'>Submit</button>
        </form>
        {
          success && (
            <div className='success'>
              Form submitted Successfully
              <button onClick={() => setSuccess(false)}>X</button>
            </div>
          )
        }
      </div>
    </>
  )
}

export default App
