import React, { useEffect, useState } from 'react'
import '../../App.css'
import { MENU } from '../../mockup/menu.js'
import { Home, Work, Blog, About } from '../Image/index.js'

const Nav = () => {

  const [component, setComponent] = useState('home')

  const activeHome = () => setComponent('home')
  const activeWork = () => setComponent('work')
  const activeBlog = () => setComponent('blog')
  const activeAbout = () => setComponent('about')

  useEffect(() => {
    console.log("ATUALIZOU", component)
  }, [component])

  return(
    <>
      {component === 'home' && (<Home />)}
      {component === 'work' && (<Work />)}
      {component === 'blog' && (<Blog />)}
      {component === 'about' && (<About />)}
      <ul className="menu">
        <li onClick={activeHome}>
          <i className="fas fa-home" />
          <p>Home</p>
        </li>
        <li onClick={activeWork}>
          <i className="fas fa-box" />
          <p>Work</p>
        </li>
        <li onClick={activeBlog}>
          <i className="fas fa-book-open" />
          <p>Blog</p>
        </li>
        <li onClick={activeAbout}>
          <i className="fas fa-users" />
          <p>About Us</p>
        </li>
        {/* onClick espera uma função, mas da erro pois recebe uma string :/
        {MENU.map((item) => (
          <li key={item.id} onClick={item.func}>
            <i className={item.icon} />
            <p>{item.text}</p>
          </li>
        ))} */}
      </ul>
    </>
  )
}

export default Nav