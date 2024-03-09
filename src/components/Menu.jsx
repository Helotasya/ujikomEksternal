import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import { CgAddR } from "react-icons/cg";


const Menu = () => {
  return (
    <div className='parent-menu'>
        <div className="isi-create">
          <Link to={"/create"}><CgAddR className='crt'/></Link>
        </div>
      <Card/>
      <div className="screen-create">
      </div>
    </div>
  )
}

export default Menu
