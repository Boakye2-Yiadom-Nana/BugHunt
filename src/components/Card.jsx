import React from 'react';
import './Card.css';
import CountUp from 'react-countup';
const Card = () => {
  return (
      <ul className="cards">
        <div className="reported"><li className='bi bi-bug-fill'
        >
            <span>Reported Bugs</span>
            <h1><CountUp end={100} />K</h1>
            
              <i className="bi bi-activity"
              
              > 0.2%

            </i>


        </li></div>

       <div className="users">
       <li className='bi bi-person-fill'>
            <span>Users</span>
            <h1><CountUp end={110} />k</h1>
            <i className="bi bi-activity">  0.4%</i>
        </li>
        
       </div>
       <div className="solved">
       <li className='bi bi-bug'>
            <span>Solved Bugs</span>
            <h1><CountUp end={99} />K</h1>
            <i className="bi bi-activity">  0.5%</i>
        </li>
       </div>

      </ul>

)
}

export default Card;