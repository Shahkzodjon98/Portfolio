import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';


import { styles } from "../styles";
import { navLinks } from './../constants/index';

const Navbar = () => {

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} navbar w-full items-center flex py-5 z-20 top-0 bg-[#915eff]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className=" flex items-center gap-2" onClick={() => {setActive('');
      window.scrollTo(0, 0);
      }}>
          {/* <img src={logo} alt="logo" className='w-30 h-20 object-contain' /> */}
          <p className="  text-tertiary text-2xl font-bold cursor-pointer flex">Shakhzod&nbsp;<span className='sm:block hidden'>| Frontend</span></p>
        </Link>
        <ul className=" list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? " text-primary" : " text-white"} hover:text-primary text-xl font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
              <a className='cool-link' href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex justify-end flex-1 items-center">
          <img src={toggle ? close : menu} className=' object-contain bg-primary bg-contain w-[28px] h-[28px] cursor-pointer' alt="" onClick={() => setToggle(!toggle)}/>

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 min-w-[340px] h-[155px] z-10 rounded-[10px]`}>
          <ul className=" list-none flex justify-center items-center mx-28 flex-col space-y-2 ">
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? " text-white" : " text-secondary"}  font-poppins font-medium cursor-pointer text-[24px]`}
             onClick={() => {
              setActive(link.title);
              setToggle(!toggle);
              }}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar