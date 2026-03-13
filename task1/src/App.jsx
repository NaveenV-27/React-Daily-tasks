import { useState } from 'react'
import './App.css';
import UserCard from './UserCard';
import react from './assets/react.svg';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(prev => !prev);
  }

  const propObj = {
    avatar: react,
    name: "naveen",
    age: 20,
    location: "hyderabad"
  }

  return (
    <>
    <div className='container'>

      <div className={`card-wrapper ${isOpen ? "show" : "hide"}`}>
        <UserCard {...propObj} />
      </div>

      <button onClick={handleClick} className='show-button'>
        {
          !isOpen ? "Open" : "close" 
        }
      </button>
    </div>
    </>
  )
}

export default App
