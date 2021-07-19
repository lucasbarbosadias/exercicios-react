import React, { useEffect, useState } from 'react'
import '../../App.css'
import { MENU } from '../../mockup/menu.js'
import { Home, Work, Blog, About } from '../Image/index.js'

const Nav = () => {

  const [component, setComponent] = useState('home')

  useEffect(() => {
    console.log(component, 'foi Atualizado')
  }, [component])

  return(
    <>
      {component === 'home' && (<Home />)}
      {component === 'work' && (<Work />)}
      {component === 'blog' && (<Blog />)}
      {component === 'about' && (<About />)}
      
      <ul className="menu">
        {MENU.map((item) => (
          <li key={item.id} onClick={() => setComponent(item.func)}>
            <i className={item.icon} />
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Nav