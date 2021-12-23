import React from 'react';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import DynamicText from '../components/DynamicText';
import ButtonsBottom from '../components/ButtonsBottom';
import Mouse from '../components/Mouse';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';



const Home = () => {

  const variants = {
     initial:{
       opacity:0,
       transition: {duration:0.5},
       x:100,
     },
     visible:{
       opacity:1,
       x:0,
     },
     exit:{
       opacity:0,
       transition: {duration:0.3},
       x:-100,
     }
  }
    return (
    <main>
    
        <Mouse />
          <motion.div className='home'
          initial="initial"
          animate="visible"
          exit="exit"
          variants={variants}>
            <Navigation />
            <SocialNetwork />
            <Logo  />

         <div className='home-main'>
              <div className='main-content'>
              <motion.h2  className="tete"drag onDragEnd>Kenitra Athlétic club Sport Pour Tous</motion.h2>
            <motion.h1 drag onDragEnd>KAC S.P.T</motion.h1>
            <motion.h2 drag onDragEnd><DynamicText /></motion.h2>
            </div>
          </div>

          
          <ButtonsBottom right={'/info'}  left={'/tarif'} />
        </motion.div>

        </main>
        
    );
};

export default Home;