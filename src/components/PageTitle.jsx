import React from 'react'
import './PageTitle.css'
import Card from './Card'
const PageTitle = ({page}) => {
  return (
      <div className="pagetitle">
        <h1>{page}</h1>
        <nav>
            <ol className='breadcrump'>
                <li className='breadcrump-item'>
                    <a href='/'>
                    </a>
                </li>
            </ol>
        </nav>
      </div>

)
}

export default PageTitle