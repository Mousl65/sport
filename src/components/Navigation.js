import React from 'react';
import { NavLink } from 'react-router-dom';
 
 
const Navigation = () => {
    return (
        <div className='navigation'>
        
     <ul>
         <NavLink to="/" exact className='hover'
         activeClassName='nav-active'>
            <li>accueil </li>
         </NavLink>
         <li className='nav-portfolio'>Infos
         <ul className='nav-projects'> 
         <NavLink to="/info" activeClassName="nav-active" 
         className='hover'>
         <li>Informations </li>
         </NavLink>
         <NavLink to="/tarif" activeClassName="nav-active" 
         className='hover'>
         <li>Horaires_Tarifs </li>
         </NavLink>
         </ul>
         </li>
        
         <li className='nav-portfolio'>Disciplines
         <ul className='nav-projects'> 
         
         <NavLink to="/project-1" activeClassName="nav-active" 
         className='hover'>
         <li>Football1</li>
         </NavLink>
         <NavLink to="/project-2" activeClassName="nav-active" 
         className='hover'>
         <li>Football2</li>
         </NavLink>
         <NavLink to="/project-3" activeClassName="nav-active" 
         className='hover'>
         <li>Gymnastique</li>
         </NavLink>
         <NavLink to="/project-4" activeClassName="nav-active" 
         className='hover'>
         <li>Aerobic</li>
         </NavLink>
         </ul>
         </li>
         <NavLink to="/contact" exact className='hover'
         activeClassName='nav-active'>
            <li>contact </li>
         </NavLink>
     </ul>
            
        </div>
    );
};

export default Navigation;