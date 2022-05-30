import React,{ useState } from 'react'
import './index.css'
import menu from './data';
import Menu from './components/Menu';
import Navbar from './components/Navbar'

const App = () => {
  
   const [menuList,setMenuList] = useState(menu);
    // const items = Array.from(new Set(menu.map( menuItem => {
    //     return menuItem.category.toString()
    // })).add('all'))
    const items = ['all',...new Set(menu.map(item => {return item.category}))]
    
    const changeMenu = (e) => {
      let categorey = e.target.textContent;
      if (categorey === 'all'){
        setMenuList(menu);
      } else {
      let newMenuList = menu.filter(item =>{
        return item.category === categorey});
      setMenuList(newMenuList);
      }
    }

  return (
    <main>
      <header>
        <h2>menu</h2>
      </header>
      <Navbar items={items} changeMenu={changeMenu}/>
      <Menu menu={menuList}/>
    </main>
  )
}

export default App