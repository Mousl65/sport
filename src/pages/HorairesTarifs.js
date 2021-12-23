import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
/*import { CopyToClipboard } from 'react-copy-to-clipboard';*/
import SocialNetwork from '../components/SocialNetwork';
import ButtonsBottom from '../components/ButtonsBottom';
import { motion } from 'framer-motion';

const HorairesTarifs = () => {

 const variants = {
    in:{
      opacity:1,
      x:0,
    },
    out: {
      opacity:0,
      x:300,
    }
  }
  const transition ={
    ease: [.03,.87,.73,.0],
    duration: .6,
  }
    return (
   <main>
   <Mouse />
   <motion.div className='contact'
   exit="out"
   animate="in"
   initial="out"
   variants={variants}
   transition= {transition}>
   
   <Logo />
   <SocialNetwork />
   <Navigation />
 <div className='tarif'> 
 <div className="bloque1">
       <div className="name1"> Horaires</div>
           
      <div className="contenu1">   
        <table className="table">
         <thead>
           <tr>
             
             <th scope="col">Disciplines</th>
             <th scope="col">Jours</th>
             <th scope="col">Heures</th>
           </tr>
         </thead>
         <tbody>
           <tr className="table-success">
             <th scope="row">Football</th>
             <td>Samedi</td>
             <td>13h à 17h</td>
            
           </tr>
           <tr className="table-success">
             <th scope="row"></th>
             <td>Dimanche</td>
             <td>10h à 14h</td>
             
           </tr>
           <tr className="table-warning">
             <th scope="row">Gymnastique</th>
             <td>Samedi</td>
             <td>10h à 14h</td>
             
           </tr>
           <tr className="table-warning">
             <th scope="row"></th>
             <td>Dimanche</td>
             <td>10h à 14h</td>
             
           </tr>
         </tbody>
       </table>
     </div>
   </div> 

   <div className="bloque2">
       <div className="name2"> Tarifs</div>
       <div className="contenu2">
   <table className="table table-dark">
       <thead>
         <tr>
             
            <th scope="col">Disciplines</th>
            <th scope="col">Adhesion</th>
            <th scope="col">Mensualité</th>
       </tr>
       </thead>
       <tbody>
       <tr>
        <th scope="row">Football</th>
         <td colspan="1" className="table-active">50 dh</td>
         <td colspan="1" className="table-active">100 dh</td>
       </tr>
         
         <tr>
           <th scope="row">Gymnastique</th>
           <td colspan="1" className="table-active">100 dh</td>
           <td colspan="1" className="table-active">100 dh</td>
           
        </tr>
       </tbody>
   </table>
 </div>
</div>  
   </div>  
   <ButtonsBottom left={'/'} right={'/project-1'}  />
     </motion.div>
     
       </main>   
       
    );
};

export default HorairesTarifs;