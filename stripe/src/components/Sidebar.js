import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Sidebar = () => {

    const {data,sidebar,closeSidebar} = useGlobalContext();
  return (
    
    <aside className={`${sidebar ? 'sidebar show' : 'sidebar'}`}>
        <button className='btn' onClick={closeSidebar} ><FaTimes /></button>
        <div className='sidebar-content'>
          {data.map((linkGroup,idx) => {
              return (
                  <div key={idx} className='link-group'>
                      <h4 className='linkgroup-page'>{linkGroup.page}</h4>
                      <div className='linkgroup-sublinks'>
                      {linkGroup.links.map((link,index) => {
                          return <span className='linkgroup-page-link' key={index}>
                                {link.icon}<a href={link.url}>{link.label}</a>
                          </span>
                      })}
                      </div>
                  </div>
              )
          })}
        </div>
    </aside>
  )
}

export default Sidebar

