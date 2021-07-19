import { MENU } from '../../mockup/menu.js'

export const Home = () => {
  return(
    <img className="content" src={MENU[0].image} alt="Image menu"/>
  )
}

export const Work = () => {
  return(
    <img className="content" src={MENU[1].image} alt="Image menu"/>
  )
}

export const Blog = () => {
  return(
    <img className="content" src={MENU[2].image} alt="Image menu"/>
  )
}

export const About = () => {
  return(
    <img className="content" src={MENU[3].image} alt="Image menu"/>
  )
}