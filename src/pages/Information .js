import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

import SocialNetwork from '../components/SocialNetwork';
import ButtonsBottom from '../components/ButtonsBottom';
import { motion } from 'framer-motion';

const Information  = () => {

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
 <Navigation />
 <SocialNetwork />
 <Logo  />
       
         
 <div className='info'>
   <div className="bloc1">
     <div className="titre1"> Historique du club</div>
            
        <div className="historique1"> <p>Notre club est fondé en 2010 par des cadres de sports de la direction provinciale du misistére de la jeunesse et du sport à kenitra.<br></br>
           au début nos activitées sportives étaient orientées vers l'organisation des évennements sportives à l'occasion de la commemoration des fétes nationnaux,<br></br>
           comme la journées mondiale de la femme la fete de l'independance...<br></br>
           au fil des ans nous avons developper plusieurs projet sportves à savoir la creation des écoles de Football,de gymnastique...</p></div>
    </div>
      <div className="bloc2">
           <div className="titre2"> Présentation du club</div>
           <div className="historique2"> <p>Nous encadrant dans notre club des enfants de divers age dans plusieurs disciplines sportive ,Football,gymnastique.<br></br>
           nous disposant d'un staf technique compétent et un materiéls pedagogique adéqua.<br></br>
           nos activitées se déroulent dans la salle couverte Oulad Mbarak et le csp Mly El Hassan à Haouzia à kenitra.</p></div>
           
           </div>
        </div>
        <h2>Localisation</h2>

        <ButtonsBottom left={'info'} right={'/project-1'}  />
        </motion.div>
 </main>
        
           ) 
       }

export default Information ;