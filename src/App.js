import React,{useEffect} from "react";
import {Redirect, Route, Switch ,useLocation,useHistory} 
from 'react-router-dom';
import Home from './pages/Home';
import Information from './pages/Information '
import Contact from './pages/Contact';
import { Project1, Project2, Project3, Project4 } from './pages/Projects';

import HorairesTarifs from './pages/HorairesTarifs';
import { AnimatePresence } from "framer-motion";

const App =()=> {

  const location = useLocation();
  
  const history =  useHistory();
  
  useEffect(()=>{
    const handleScrollToElement =(e)=>{
      const url = window.location.origin + '/';
      const wheelRouter = (after, before)=>{
        if(e.wheelDeltaY <0) {
          setTimeout(() =>{
            history.push(after);
          },5000)
        } else if(e.wheelDeltaY>0){
          setTimeout(() =>{
            history.push(before);
          },5000)
        }
      }
      switch (window.location.href.toString()) {
        case url: 
        if(e.wheelDeltaY <0) {
          setTimeout(() =>{
            history.push('project-1');
          },5000)
        }
        break;
        case url +"project-1":
         wheelRouter("project-2","");
         break; 
         case url +"project-2":
          wheelRouter("project-3","project-1");
         break; 
         case url +"project-3":
          wheelRouter("project-4","project-2");
         break; 
         case url +"project-4":
          wheelRouter("contact","project3");
         break; 
         case url+ 'contact': 
         if(e.wheelDeltaY >0) {
           history.push('project-4')
         }
         break;
         default:
         console.log('nothing')

         
        
      }
    };
    window.addEventListener('wheel',handleScrollToElement)
  },[history])

  return (
     <AnimatePresence>
     
      <Switch location={location} key={location.pathname}>
         <Route exact path="/" component={Home} />
         <Route exact path="/info" component={Information} />
         <Route exact path="/tarif" component={HorairesTarifs} />
         <Route exact path="/project-1" component={Project1} />
         <Route exact path="/project-2" component={Project2} />
         <Route exact path="/project-3" component={Project3} />
         <Route exact path="/project-4" component={Project4} />
         <Route exact path="/contact" component={Contact} />
         <Redirect to="/" />
      </Switch>
      </AnimatePresence>
   
  );
};
export default App;