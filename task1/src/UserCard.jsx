// import React from 'react';

const UserCard = ({avatar, name, age, location}) => {

  return (
    <div className='card'>
      <div className=''>
        <div className='avatar'>
          <img src={avatar} alt="Avatar" width={100}/>
        </div>
        <div className='name'>
          {name}
        </div>
      </div>
      <div>

        <div>
          <span style={{
            fontSize: 20,
            fontWeight: "semibold",
          }}>Age:</span> {age}
        </div>

        <div>
          {location}
        </div>

      </div>
    </div>
  )
}

export default UserCard;
