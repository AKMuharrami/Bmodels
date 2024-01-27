"use client"
import { useMediaQuery } from "react-responsive";
// import "./a.css"
import {  useRef} from 'react'
import styles from './page.module.css';
import {motion, useScroll, Variants} from 'framer-motion'
import  {TypeAnimation} from 'react-type-animation'
import { Cairo } from 'next/font/google'
// import { Helmet } from "react-helmet-async";
import ResponsiveAppBar from './menubar';
export default function Homee() {
    
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
      const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      });
      const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });

    const cardVariants = {
        offscreen: {
          y: 40, opacity:0
        },
        onscreen: {
          y: -20,
          rotate: 0,
          opacity:1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            
            
          }
        }
      };
      function  handlemclick () {
        ref.current.scrollLeft= 0;

 
      }
      async function n() {
        await ref.current?.scrollIntoView({behavior:'smooth', block:'center'})    }
      function handlesclick () {

        ref.current.scrollLeft= 1030 
      }     
       function handlegclick () {
        
        ref.current.scrollLeft= 2120 
      }
      function handleeclick () {
        ref.current.scrollLeft= 3220 
      }
      function handleaclick () {
        ref.current.scrollLeft= 4390 
      }
      function handleskclick () {
        ref.current.scrollLeft= 5500 
      }
      // function handleguclick () {
      //   ref.current.scrollLeft= 6620
      // }
      // function handlemiclick () {
      //   ref.current.scrollLeft= 7800 
      // }
      function handlemsclick () {

        ref.current.scrollLeft= 450 
      }     
       function handlemgclick () {
        
        ref.current.scrollLeft= 900
      }
      function handlemeclick () {
        ref.current.scrollLeft= 1350 
      }
      function handlemaclick () {
        ref.current.scrollLeft= 1800 
      }
      function handlemskclick () {
        ref.current.scrollLeft= 2250 
      }
      // function handlemguclick () {
      //   ref.current.scrollLeft= 2700
      // }
      // function handlemmiclick () {
      //   ref.current.scrollLeft= 3230 
      // };
      return (
        <div style={{background:'#997950', width: "100%", paddingBottom:'2.5%', zIndex:0}}>
          <ResponsiveAppBar></ResponsiveAppBar>
          {/* <Helmet>
          <title>Omani Web Developer</title>
          <meta name="description" content="Experienced In HTML CSS Javascript React, ready to design your proffesional website"/>
          <link rel="canonical" href="/"/>
          </Helmet> */}
        {isDesktopOrLaptop &&<img style={{height:"40vh", width:"100%", objectFit: "cover", objectPosition:"0% -45vw", marginTop:65, marginBottom:0}} src="https://canvascontent.krea.ai/12784755-7b5e-4b4f-a8f8-4aa4af5f7231.png" alt="" />}
        {isTabletOrMobile &&<img style={{height:"25vh", width:"100%", objectFit: "cover", objectPosition:"0% -5vw", marginTop:37}} src="https://canvascontent.krea.ai/f3d5d148-9d9e-4769-a7e9-d89880bd13e8.png" alt="" />}

        <div style={{right:'10vh', textAlign:'center', paddingTop: 0}}>
                {isDesktopOrLaptop &&<motion.div
                className={styles.center}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: .8,
                  delay: .5,
                  ease: [0, 0.71, 0.2, 1.01]}}
                >
                  <h1 style={{color:'white', fontSize: '30.5px',WebkitTextStroke: '.3px black'}}>Finding a skillful ceramic practitioner is not an easy task,<br></br>especially the one who is proeffecient in both the design and production <br></br> of the required asset in terms of the quality</h1>
                </motion.div>
                
                // <TypeAnimation
                //     sequence={[
                //         "Finding a skillful ceramic practitioner is not an easy task,\n especially the one who is proeffecient in both the design and production \n of the required asset in terms of the quality"
                //         ,
                //         500,
                //         "Finding a skillful ceramic practitioner is not an easy task,\n especially the one who is proeffecient in both the design and production \n of the required asset in terms of the precision",
                //         500,
                //         "Finding a skillful ceramic practitioner is not an easy task,\n especially the one who is proeffecient in both the design and production \n of the required asset in terms of the adherenes to the customer's request.",
                //         500,
                //         //    "Finding a skillful ceramic practitioner is not an easy task,\n especially the one who is proeffecient in both the design and production in terms of the quality\n of the required asset\n\n I go by the name of Akmuharrami and I'm an Omani web developer that is experienced\n-praise be to Allah- in using React, and its various libraries.",
                //         // 500,
                //     ]}
                //     deletionSpeed={20}
                //     speed={50}
                //     className={styles.center}
                //     style={{display:'block',whiteSpace: 'pre-line',fontSize:'1.8em', color:"#E5F6EC", fontFamily:' Georgia, serif;'}}
                
                // />
              }
                {isTabletOrMobile &&<TypeAnimation
                    sequence={[
                      "Finding a skillful ceramic practitioner is not an easy task, especially the one who is proeffecient in both the design and production \n of the required asset in terms of the quality"
                      ,
                      500,
                      "Finding a skillful ceramic practitioner is not an easy task, especially the one who is proeffecient in both the design and production \n of the required asset in terms of the precision",
                      500,
                      "Finding a skillful ceramic practitioner is not an easy task, especially the one who is proeffecient in both the design and production \n of the required asset in terms of the adherenes to the customer's request.",
                      500,
                        //    "Finding a good web developer is not an easy task, especially the one who is proeffecient in using the latest design styles.\n\n I go by the name of Akmuharrami and I'm an Omani web developer that is experienced -praise be to Allah- in\n using React, and its various libraries.",
                        // 500,
                    ]}
                    deletionSpeed={20}
                    speed={50}
                    style={{display:'block',whiteSpace: 'pre-line',fontSize:'1.4em', color:"#E5F6EC", fontFamily:' Georgia, serif;'}}
                
                />}
                {/* <hr style={{maxWidth:"100%", width:"100%"}}></hr> */}
                <div style={{borderTop:'3px', borderColor:'white'}}></div>

<ul id='pul1' ref={ref} style={{marginTop:'0%'}} >
        <a className={styles.card2} href="/products/1" style={{display:'flex'}}><img src='https://canvascontent.krea.ai/ed48960f-76b7-416e-a764-c2fbe26da915.png' alt=''></img></a>
        <a className={styles.card2} href="/products/2" style={{display:'flex'}}><img src='https://canvascontent.krea.ai/eb660f1f-546b-4f78-a5e5-8cff788512f1.png' alt='' ></img></a>
        <a className={styles.card2} href="/products/3" style={{display:'flex'}}><img src='https://canvascontent.krea.ai/64a152cd-6763-40da-a056-945ef3d0e0c6.png' alt='' ></img></a>
        <a className={styles.card2} href="/products/4" style={{display:'flex'}}><img src='https://canvascontent.krea.ai/44808c5d-5eee-46c7-982b-603e8387f7bd.png' alt='' ></img></a>
        <a className={styles.card2} href="/products/5" style={{display:'flex'}}><img src='https://canvascontent.krea.ai/c5b61fdc-170d-4baa-8cdc-a06fa99c7786.png' alt='' ></img></a>
        {/* <li id='pli' style={{display:'flex', background:'#FCC77E'}}><img src='https://img.freepik.com/premium-photo/amazing-world-with-books-big-sun-background-generative-ai_58409-38729.jpg?w=1800' alt='' ></img><h1 style={{ color:'black'}}>One cannot walk towards a destination <br></br>except by having a guide that shows him the general view of the path. And that is exactly the mission of Holy Quran and the <br></br>Messanger Mohammed peace be upon him which this book has bee sent unto. It contians the stories of the past nations as well as the guidelines that should be followed etc. </h1></li>
        <li id='pli' style={{display:'flex', background:'#F5DF89'}}><img src='https://previews.123rf.com/images/summertime72/summertime722303/summertime72230300717/200999052-ai-generative-midjourney-illustration-of-a-fantasy-stairway-to-heaven.jpg' alt='' ></img><h1 style={{ color:'black'}}>A human by nature goes through various types of feeling as he walks upon his path to god. So without having signs at place that makes him at ease knowing that he is upon the truth he may not be able to gather his strength to continue on this path. Not mentioning that there are ranks that vary between the beleivers, and for one to climb them there has to exist a criteria by which he can Identify them. And on this path exists various milestones that could be identified. </h1></li> */}
      </ul>
                {/* { isDesktopOrLaptop &&<motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 5.5,
                    ease: [0, 0.71, 0.2, 1.01]

                  }}
                  style={{display:'flex', justifyContent:'space-between', background:'#323136', marginTop: '55px', marginBottom:'85px', height:'50vh'}}> */}
             {/* { isDesktopOrLaptop && <img style={{visibility:'visible',height:"80vh", width:"45vw", objectFit: "cover", objectPosition:"-6vw -7vh", marginTop:0, transition: 'all .20s', maxHeight:'50vh', maxWidth:'40vw'}} src="https://canvascontent.krea.ai/a895cd70-a350-475a-8275-68170f1f9486.png" alt="" />} */}
             {/* { isTabletOrMobile && <img style={{visibility:'visible',height:"37vh", width:"45vw", objectFit: "cover", objectPosition:"-13vw -7vh", marginTop:40, transition: 'all .20s', maxHeight:'50vh', maxWidth:'80vw'}} src="https://img.freepik.com/premium-photo/samurai-meditating-blooming-garden-vintage-style_76964-1996.jpg?w=2000" alt="" />} */}

             {/* {isDesktopOrLaptop &&<motion.div
             style={{backgroundColor:"rgb(239, 193, 148, 0.95)", marginTop: '45px', height: '40vh', marginRight: '2vw', width: '55vw', borderRadius:'25px'}}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 5.5,
                    ease: [0, 0.71, 0.2, 1.01]

                  }}>
                    <img src='scre.png' alt=''></img> */}
                    {/* https://img.freepik.com/premium-photo/old-paper-background-style-light-beige-dark-amber_868292-932.jpg?w=1800 */}
                {/* {isDesktopOrLaptop && <h2 style={{fontSize: '25px', textAlign: 'center', lineHeight: 1.75, paddingTop: '',paddingBottom:'5px', color: '#731C76', textShadow: '1px 1px 5px rgb(233 211 169/ 80%)', WebkitTextStroke: '1px black'}}>We at KIWI focus on the slightest details <br></br> to ensure our cups exceed the customer's expectations <br></br>And this is our official site<br></br> <span> <h5 style={{color:'black'}}>Feel free to contact us on <a href='https://wa.me/96896338791'>whatsapp +968 9633 8791</a></h5></span> </h2>} */}
             {/* </motion.div>} */}
             {/* {isTabletOrMobile &&<motion.div
             style={{backgroundColor:"rgb(219, 193, 148, 0.95)", marginTop: '40px', height: '30vh', marginRight: '2vw', marginLeft:'1vw' ,width: '50vw', borderRadius:'25px'}}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 5.5,
                    ease: [0, 0.71, 0.2, 1.01]

                  }}>
                    <img src='scre.png' alt=''></img> */}
                    {/* https://img.freepik.com/premium-photo/old-paper-background-style-light-beige-dark-amber_868292-932.jpg?w=1800 */}
                {/* {isTabletOrMobile && <h2 style={{marginTop:'.5px',fontSize: '15.5px', textAlign: 'center', lineHeight: 1.75, paddingTop: '',paddingBottom:'5px', color: '#738C76', textShadow: '1px 1px 5px rgb(233 211 169/ 80%)', WebkitTextStroke: '1px black'}}>We at KIWI focus on the slightest details <br></br> to ensure our cups exceed the customer's expectations <br></br>And this is our official site<br></br> <h5 style={{color:'black'}}>Feel free to contact us on <a href='https://wa.me/96896338791'>whatsapp +968 9633 8791</a></h5> </h2>}
             </motion.div>}
            </motion.div>}
            { isTabletOrMobile &&<motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 5.5,
                    ease: [0, 0.71, 0.2, 1.01]

                  }} */}
                  {/* style={{display:'flex', justifyContent:'space-between', background:'#323136', marginTop: '5vh', marginBottom:'8vh', height:'40vh'}}> */}
             {/* { isTabletOrMobile && <img style={{visibility:'visible',height:"37vh", width:"45vw", objectFit: "cover", objectPosition:"-23vw -6vh", marginTop:37, transition: 'all .20s', maxHeight:'50vh', maxWidth:'80vw'}} src="https://canvascontent.krea.ai/a895cd70-a350-475a-8275-68170f1f9486.png" alt="" />} */}

             {/* {isDesktopOrLaptop &&<motion.div
             style={{backgroundColor:"rgb(239, 193, 148, 0.95)", marginTop: '45px', height: '40vh', marginRight: '3vw', width: '55vw', borderRadius:'25px'}}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 5.5,
                    ease: [0, 0.71, 0.2, 1.01]

                  }}>
                    <img src='scre.png' alt=''></img>
                    https://img.freepik.com/premium-photo/old-paper-background-style-light-beige-dark-amber_868292-932.jpg?w=1800 */}
                {/* {isDesktopOrLaptop && <h2 style={{fontSize: '25px', textAlign: 'center', lineHeight: 1.75, paddingTop: '',paddingBottom:'5px', color: '#731C76', textShadow: '1px 1px 5px rgb(233 211 169/ 80%)', WebkitTextStroke: '1px black'}}>We at KIWI focus on the slightest details to ensure our cups exceed the customer's expectations And this is our official site<br></br> <h5 style={{color:'black'}}>Feel free to contact us on <a href='https://wa.me/96896338791'>whatsapp +968 9633 8791</a></h5> </h2>} */}
             {/* </motion.div>} */}
             {isTabletOrMobile &&<motion.div
             style={{backgroundColor:"rgb(219, 193, 148, 0.95)", marginTop: '40px', height: '30vh', marginRight: '2vw', marginLeft:'1vw' ,width: '50vw', borderRadius:'25px'}}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 5.5,
                    ease: [0, 0.71, 0.2, 1.01]

                  }}>
                    <img src='scre.png' alt=''></img>
                    {/* https://img.freepik.com/premium-photo/old-paper-background-style-light-beige-dark-amber_868292-932.jpg?w=1800 */}
                {isTabletOrMobile && <h2 style={{marginTop:'.5px',fontSize: '15.5px', textAlign: 'center', lineHeight: 1.75, paddingTop: '',paddingBottom:'5px', color: '#731C76', textShadow: '1px 1px 5px rgb(233 211 169/ 80%)', WebkitTextStroke: '1px black'}}>We at KIWI focus on the slightest details to ensure our cups exceed the customer's expectations And this is our official site<br></br> <h5 style={{color:'black'}}>Feel free to contact us on <a href='https://wa.me/96896338791'>whatsapp +968 9633 8791</a></h5> </h2>}
             </motion.div>}
            {/* </motion.div>} */}
            {/* {isTabletOrMobile &&<div>
                <motion.h2
                initial="offscreen"
                whileInView="onscreen"
                viewport={{once:true, amount: 0.8}}
                variants={cardVariants}
                style={{fontSize:'13px',textAlign:"center", color:"white", WebkitTextStroke: '1px 0b0e13', marginBottom:'9vh'}}> * The following is an example from a different project <br></br>about the path to God.<br></br> (to display some design capabilities)</motion.h2>
                </div>} */}
            </div>
            {/* {isDesktopOrLaptop &&<div>
                <motion.h2
                initial="offscreen"
                whileInView="onscreen"
                viewport={{once:true, amount: 0.8}}
                variants={cardVariants}
                style={{fontSize:'17px',textAlign:"center", color:"white", WebkitTextStroke: '1px 0b0e13', marginBottom:'9vh'}}> * The following is an example from a different project <br></br>about the path to God.<br></br> (to display some design capabilities)</motion.h2>
                </div>} */}
            {isDesktopOrLaptop &&<div>
                <motion.h2
                className={styles.center}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{once:true, amount: 0.8}}
                variants={cardVariants}
                style={{fontSize:'27px',textAlign:"center", color:"white", WebkitTextStroke: '1px 0b0e13', marginTop:'7%', marginBottom:'1%'}}> In the production path of any cup<br></br> the following are the key aspects:</motion.h2>
                <motion.div initial="offscreen"
                whileInView="onscreen"
                viewport={{once:true, amount: 0.8}}
                variants={cardVariants}
                style={{display:'flex', justifyContent:'space-around'}}>
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handlemclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#2b1d14',borderRadius:'50px', fontSize:"18px", height:'10vh',width:'12vw',textAlign:'center',lineHeight:4, color:'white'}}>Materials</h3></button>
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handlesclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#2b1d14',borderRadius:'50px', fontSize:"18px", height:'10vh',width:'10vw',textAlign:'center',lineHeight:4, color:'white'}}>Type</h3></button>
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handlegclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#2b1d14',borderRadius:'50px', fontSize:"18px", height:'10vh',width:'10vw',textAlign:'center',lineHeight:4, color:'white'}}>Design</h3></button>
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handleeclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#2b1d14',borderRadius:'50px', fontSize:"18px", height:'10vh',width:'14vw',textAlign:'center',lineHeight:4, color:'white'}}>Glaze and flaming</h3></button>
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handleaclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#2b1d14',borderRadius:'50px', fontSize:"18px", height:'10vh',width:'10vw',textAlign:'center',lineHeight:4, color:'white'}}>Creativity</h3></button>
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handleskclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#2b1d14',borderRadius:'50px',fontSize:"18px", height:'10vh',width:'14vw',textAlign:'center',lineHeight:4, color:'white'}}>Customer's request</h3></button>
                    {/* <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handleguclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', fontSize:"18px", height:'10vh',width:'10vw',textAlign:'center',lineHeight:4}}>A guide</h3></button>
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handlemiclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', fontSize:"18px", height:'10vh',width:'10vw',textAlign:'center',lineHeight:4}}>Milestones</h3></button> */}


                </motion.div>
                {/* so how does that link up to our current topix you might say, well let's see */}
                <div id='pbody'>
                <svg id="progress" width="100" height="100" viewBox="0 0 100 100" >
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul id='pul' ref={ref} >
        <li id='pli' style={{display:'flex', background:'#AF8C7A'}}><img src='https://canvascontent.krea.ai/ed48960f-76b7-416e-a764-c2fbe26da915.png' alt=''></img><h1 style={{ color:'black'}}>There are 3 types of materials that a cup can be made up of. There is the earthenware, the stoneware and the procelain. In KIWI we use the double glazed trice fired method for each cup, which eliminates the only disadvantage of earthenware and that is its property of absorbing water. <br></br>While also giving the cup a more smooth and colorful taste.</h1></li>
        <li id='pli' style={{display:'flex', background:'#EECEAB'}}><img src='https://canvascontent.krea.ai/eb660f1f-546b-4f78-a5e5-8cff788512f1.png' alt='' ></img><h1 style={{ color:'black'}}>There are varius types of cups that we could make for you -by the blessings of Allah- in KIWI. there is the normal cup, the coofe cup, the tea cup or you name it. knowing the required cup eliminates any unneccesary errors that could occur following the customer's description without having a prototype in mind.  </h1></li>
        <li id='pli' style={{display:'flex', background:'#CAB8A9'}}><img src='https://canvascontent.krea.ai/64a152cd-6763-40da-a056-945ef3d0e0c6.png' alt='' ></img><h1 style={{ color:'black'}}>There are various designs that could to applied to cups from paintings to engravements. And each of these have unlimited style possibilities. We at KIWI currently focus on the painting side although we may possibly adopt the engraving side in the near future In Sha Allah. </h1></li>
        <li id='pli' style={{display:'flex', background:'#CF7331'}}><img src='https://canvascontent.krea.ai/234e7207-223f-4106-9049-551ecc63fa11.png' alt='' ></img><h1 style={{ color:'black'}}>The firing of the cups help solidify them. adding a glaze on top of that help eliminate the absorbtion of water property. Furthermore it adds a smooth texture to the cup make it smooth to hold and touch. We at KIWI rely on making 3 firings as well glazing twice, and this is done to avoid any errors as well as leveling up the stage of each cup.</h1></li>
        <li id='pli' style={{display:'flex', background:'#C5BFB6'}}><img src='https://canvascontent.krea.ai/44808c5d-5eee-46c7-982b-603e8387f7bd.png' alt='' ></img><h1 style={{ color:'black'}}>We at KIWI have -by the blessing of Allah- some very creative crew members that are highly skillful in designing as well as styling. They are also able to understand the customer's request and perform it accordingly.</h1></li>
        <li id='pli' style={{display:'flex', background:'#AC998C'}}><img src='https://canvascontent.krea.ai/c5b61fdc-170d-4baa-8cdc-a06fa99c7786.png' alt='' ></img><h1 style={{ color:'black'}}>The customer's request/description plays a huge role on the output of the cup. It can be the deciding factor of the cups goodness or the opposite. So we highly recommend the customer to supply us with a blueprint/prototype of the the final product. Else, we also offer a service for drawing prototypes unti reaching the customer's satisfaction. </h1></li>
        {/* <li id='pli' style={{display:'flex', background:'#FCC77E'}}><img src='https://img.freepik.com/premium-photo/amazing-world-with-books-big-sun-background-generative-ai_58409-38729.jpg?w=1800' alt='' ></img><h1 style={{ color:'black'}}>One cannot walk towards a destination <br></br>except by having a guide that shows him the general view of the path. And that is exactly the mission of Holy Quran and the <br></br>Messanger Mohammed peace be upon him which this book has bee sent unto. It contians the stories of the past nations as well as the guidelines that should be followed etc. </h1></li>
        <li id='pli' style={{display:'flex', background:'#F5DF89'}}><img src='https://previews.123rf.com/images/summertime72/summertime722303/summertime72230300717/200999052-ai-generative-midjourney-illustration-of-a-fantasy-stairway-to-heaven.jpg' alt='' ></img><h1 style={{ color:'black'}}>A human by nature goes through various types of feeling as he walks upon his path to god. So without having signs at place that makes him at ease knowing that he is upon the truth he may not be able to gather his strength to continue on this path. Not mentioning that there are ranks that vary between the beleivers, and for one to climb them there has to exist a criteria by which he can Identify them. And on this path exists various milestones that could be identified. </h1></li> */}
      </ul>
                </div>
            </div>}
            {isTabletOrMobile &&<div>
                <motion.h2
                initial="offscreen"
                whileInView="onscreen"
                viewport={{once:true, amount: 0.8}}
                variants={cardVariants}
                style={{fontSize:'23px',textAlign:"center", color:"white",textShadow: '1px 1px 7px rgb(255 30 160 / 50%)', WebkitTextStroke: '1px 0b0e13' }}> In the production path of any cup<br></br> the following are the key aspects:</motion.h2>
                <motion.div initial="offscreen"
                whileInView="onscreen"
                viewport={{once:true, amount: 0.5}}
                variants={cardVariants}
                style={{ textAlign:'center'}}>
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handlemclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', height:'6.5vh',width:'17vw',textAlign:'center',lineHeight:1}}><br></br>Materials</h3></button>
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handlemsclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', height:'6vh',width:'17vw',textAlign:'center',lineHeight:1}}><br></br>Type</h3></button>
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handlemgclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', height:'6vh',width:'15vw',textAlign:'center',lineHeight:1}}><br></br>Design</h3></button> <br></br>
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handlemeclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', height:'6vh',width:'27vw',textAlign:'center',lineHeight:3.3}}>Glaze and Flaming</h3></button> 
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handlemaclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', height:'6vh',width:'17vw',textAlign:'center',lineHeight:3.3}}>Creativity</h3></button>
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handlemskclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', height:'6vh',width:'26vw',textAlign:'center',lineHeight:3.3}}>Customer's request</h3></button>
                    {/* <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handlemguclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', height:'6vh',width:'15vw',textAlign:'center',lineHeight:3.3}}>A guide</h3></button>
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handlemmiclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', height:'6vh',width:'17vw',textAlign:'center',lineHeight:3.3}}>Milestones</h3></button> */}


                </motion.div>
                {/* so how does that link up to our current topix you might say, well let's see */}
                <div id='pbody' style={{marginTop:'-13px'}}>
                <svg id="progress" width="100" height="100" viewBox="0 0 100 100" style={{left:'-40%'}}>
        <circle cx="50" cy="50" r="20" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="20"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul id='mul' ref={ref} >
        <li id='mli' style={{display:'flex', background:'#D8D8D8'}}><img src='https://canvascontent.krea.ai/ed48960f-76b7-416e-a764-c2fbe26da915.png' alt='' style={{width:'20vh', objectFit:'cover'}}></img><h1 id="ph1" style={{ color:'black'}}>There are 3 types of materials that a cup can be made up of. There is the earthenware, the stoneware and the procelain. In KIWI we use the double glazed trice fired method for each cup, which eliminates the only disadvantage of earthenware and that is its property of absorbing water. <br></br>While also giving the cup a more smooth and colorful taste.</h1></li>
        <li id='mli' style={{display:'flex', background:'#EECEAB'}}><img src='https://canvascontent.krea.ai/eb660f1f-546b-4f78-a5e5-8cff788512f1.png' alt='' style={{width:'18vh', objectFit:'cover'}} ></img><h1 id="ph1" style={{ color:'black'}}>There are varius types of cups that we could make for you -by the blessings of Allah- in KIWI. there is the normal cup, the coofe cup, the tea cup or you name it. knowing the required cup eliminates any unneccesary errors that could occur following the customer's description without having a prototype in mind. </h1></li>
        <li id='mli' style={{display:'flex', background:'#EFEAA2'}}><img src='https://canvascontent.krea.ai/64a152cd-6763-40da-a056-945ef3d0e0c6.png' alt='' style={{width:'20vh', objectFit:'cover'}}></img><h1 id="ph1" style={{ color:'black'}}>There are various designs that could to applied to cups from paintings to engravements. And each of these have unlimited style possibilities. We at KIWI currently focus on the painting side although we may possibly adopt the engraving side in the near future In Sha Allah.  </h1></li>
        <li id='mli' style={{display:'flex', background:'#C74B48'}}><img src='https://canvascontent.krea.ai/234e7207-223f-4106-9049-551ecc63fa11.png' alt='' style={{width:'20vh', objectFit:'cover'}}></img><h1 id="ph1" style={{ color:'black'}}>The firing of the cups help solidify them. adding a glaze on top of that help eliminate the absorbtion of water property. Furthermore it adds a smooth texture to the cup make it smooth to hold and touch. We at KIWI rely on making 3 firings as well glazing twice, and this is done to avoid any errors as well as leveling up the stage of each cup. </h1></li>
        <li id='mli' style={{display:'flex', background:'#F7D174'}}><img src='https://canvascontent.krea.ai/44808c5d-5eee-46c7-982b-603e8387f7bd.png' alt='' style={{width:'23vh', objectFit:'cover'}}></img><h1 id="ph1" style={{ color:'black'}}>We at KIWI have -by the blessing of Allah- some very creative crew members that are highly skillful in designing as well as styling. They are also able to understand the customer's request and perform it accordingly.</h1></li>
        <li id='mli' style={{display:'flex', background:'#E7CD91'}}><img src='https://canvascontent.krea.ai/c5b61fdc-170d-4baa-8cdc-a06fa99c7786.png' alt='' style={{width:'23vh', objectFit:'cover'}}></img><h1 id="ph1" style={{ color:'black'}}>The customer's request/description plays a huge role on the output of the cup. It can be the deciding factor of the cups goodness or the opposite. So we highly recommend the customer to supply us with a blueprint/prototype of the the final product. Else, we also offer a service for drawing prototypes unti reaching the customer's satisfaction.  </h1></li>
        {/* <li id='mli' style={{display:'flex', background:'#FCC77E'}}><img src='https://img.freepik.com/premium-photo/amazing-world-with-books-big-sun-background-generative-ai_58409-38729.jpg?w=1800' alt='' style={{width:'23vh', objectFit:'cover'}} ></img><h1 id="ph1" style={{ color:'black'}}>One cannot walk towards a destination <br></br>except by having a guide that shows him the general view of the path. And that is exactly the mission of Holy Quran and the <br></br>Messanger Mohammed peace be upon him which this book has bee sent unto. It contians the stories of the past nations as well as the guidelines that should be followed etc. </h1></li>
        <li id='mli' style={{display:'flex', background:'#F5DF89'}}><img src='https://previews.123rf.com/images/summertime72/summertime722303/summertime72230300717/200999052-ai-generative-midjourney-illustration-of-a-fantasy-stairway-to-heaven.jpg' alt='' style={{width:'23vh', objectFit:'cover'}}></img><h1 id="ph1" style={{ color:'black'}}>A human by nature goes through various types of feeling as he walks upon his path to god. So without having signs at place that makes him at ease knowing that he is upon the truth he may not be able to gather his strength to continue on this path. Not mentioning that there are ranks that vary between the beleivers, and for one to climb them there has to exist a criteria by which he can Identify them. And on this path exists various milestones that could be identified. </h1></li> */}
      </ul>
                </div>
            </div>}
        </div>
      )
};
