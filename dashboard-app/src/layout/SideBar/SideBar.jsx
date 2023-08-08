import './SideBar.css'
// import { personsImgs } from '@/utils/images'
import { personsImgs } from '../../utils/images'
import { navigationLinks } from '../../data/data'
import { useState } from 'react'
import { useContext } from 'react'
import { SidebarContext } from '../../context/sidebarContext'

const SideBar = () => {
  const [activeLinkIdx, setActiveLinkIdx] = useState(1);
  // const [sidebarClass, setSidebarClass] = useState('');
  const { isSidebarOpen } = useContext(SidebarContext);

  let sidebarClass = isSidebarOpen ? 'sidebar-change' : '';
  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className='user-info'>
        <div className='info-img img-fit-cover'>
          <img src={personsImgs.person_two} alt='profile image' />
        </div>
        <span className='info-name'>zenkie-bear</span>
      </div>
      <nav className='navigation'>
        <ul className='nav-list'>
          {
            navigationLinks.map(link => (
              <li className='nav-item' key={link.id}>
                <a href="#" className={`nav-link ${link.id ===
                activeLinkIdx ? 'active' : null}`}>
                  <img
                    src={link.image}
                    className='nav-link-icon'
                    alt={link.title}
                  />
                  <span className='nav-link-text'>
                    {link.title}
                  </span>
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}

export default SideBar
