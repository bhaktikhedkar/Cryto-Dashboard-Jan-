import React from 'react';
import "./MainComponent.css";
import Button from '../Common/Button/Button';
import gradient from "../../Assets/gradient.png";
import iphone from "../../Assets/iphone.png";
import {motion} from "framer-motion";
import { RWebShare } from "react-web-share";
import {toast} from "react-toastify";


function MainComponent() {
  return (
    <div className='main-flex'>
      <div className='info-landing'>
        <motion.h1 className='heading-one'
         initial={{ opacity: 0, x: 50 }}
         animate={{ opacity: 1, x: 1 }}
         transition={{ delay:0.5,duration: 1 }}
         >Track Cryto</motion.h1>
        <motion.h1 className='heading-two'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 1 }}
        transition={{ delay:0.75,duration: 1 }}
        >Real Time.</motion.h1>
        <motion.p className='info-text'
         initial={{ opacity: 0, x: 50 }}
         animate={{ opacity: 1, x: 1 }}
         transition={{ delay:1,duration: 1 }}
         >Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
        <motion.div className='btn-flex'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay:1.25,duration: 0.75 }}
        >
          <a href='/dashboard'>
        <Button text = {"Dashboard"}/>
        </a>
        <RWebShare
        data={{
          text: "Crypto-Dashboard by Bhakti",
          url: "https://crypto-dashboard-jan2023.netlify.app/",
          title: "Crypto-Tracker",
        }}
        onClick={() => toast.success('App Shared!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          })}
      >
        <Button text = {"Share App"} outlined={true}/>
        </RWebShare>
        
      </motion.div>
      </div>
      <div className='gradient-div'>
        <img src={gradient } className="gradient"/>
        <motion.img src={iphone } className="iphone"
        initial={{ y: -10 }}
        animate={{  y: 10 }}
        transition={{type :"smooth",repeatType:"mirror",duration:2,repeat:Infinity,}}
        />
      </div>
    </div>
  )
}

export default MainComponent;