import { Link } from "react-scroll";

export function NavbarMenu() {
   return <div className="nav__menu">
      <ul className="nav__list">
         <li className="nav__item">
            <Link
               className="nav__link home" to="home" spy={true}
               smooth={true} offset={-100} duration={200}
            >
               <div className="tab-item-inner">
                  <i className='bx bx-home-alt'></i>
               </div>
            </Link>
         </li>

         <li className="nav__item">
            <Link
               className="nav__link about" to="about" spy={true}
               smooth={true} offset={-70} duration={200}
            >
               <div className="tab-item-inner">
                  <i className='bx bx-user'></i>
               </div>
            </Link>
         </li>

         <li className="nav__item">
            <Link
               className="nav__link skills" to="skills" spy={true}
               smooth={true} offset={-70} duration={200}
            >
               <div className="tab-item-inner">
                  <i className='bx bx-book'></i>
               </div>
            </Link>
         </li>

         <li className="nav__item">
            <Link
               className="nav__link work" to="work" spy={true}
               smooth={true} offset={-70} duration={200}
            >
               <div className="tab-item-inner">
                  <i className='bx bx-briefcase-alt-2'></i>
               </div>
            </Link>
         </li>

         <li className="nav__item">
            <Link
               className="nav__link contact" to="contact" spy={true}
               smooth={true} offset={-70} duration={200}
            >
               <div className="tab-item-inner">
                  <i className='bx bx-message-square-detail'></i>
               </div>
            </Link>
         </li>
      </ul>
   </div>
}