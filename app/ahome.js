"use client"
import { useMediaQuery } from "react-responsive";
import {  useRef} from 'react'
import {motion, useScroll, Variants} from 'framer-motion'
import  {TypeAnimation} from 'react-type-animation'
// import { Helmet } from "react-helmet-async";
import AresponsiveAppBar from '@/app/amenubar';
import styles from '@/app/page.module.css';
import car1 from "@/app/car1.png";
import car2 from "@/app/car2.png";
import airplane1 from "@/app/airplane1.png";
import House1 from "@/app/House1.png";
import rocket from "@/app/rocket.png";
import Image from 'next/image';
export default function Ahomee() {
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
        <div style={{background: 'rgb(30, 20, 50)', width: "100%", paddingBottom:'2.5%', zIndex:0}}>
          <AresponsiveAppBar></AresponsiveAppBar>
          {/* <Helmet>
          <title>مطور مواقع عماني</title>
          <meta name="description" content="خبير في HTML CSS Javascript React, وأنا جاهز -بفضل الله تعالى- لتصميم موقعك الاحترافي"/>
          <link rel="canonical" href="/ar"/>
          </Helmet> */}
        {isDesktopOrLaptop &&<img style={{height:"40vh", width:"100%", objectFit: "cover", objectPosition:"0% -19vw", marginTop:65}} src="https://canvascontent.krea.ai/29872301-5e45-4726-8a68-bdbd2eea5ac0.png" alt="" />}
        {isTabletOrMobile &&<img style={{height:"25vh", width:"100%", objectFit: "cover", objectPosition:"0% -5vw", marginTop:37}} src="https://canvascontent.krea.ai/29872301-5e45-4726-8a68-bdbd2eea5ac0.png" alt="" />}

        <div style={{right:'10vh', textAlign:'center', paddingTop: 3}}>
         {isDesktopOrLaptop &&<motion.div
                className={styles.center}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: .8,
                  delay: .5,
                  ease: [0, 0.71, 0.2, 1.01]}}
                >
                  <h1 className="cairo" style={{color:'white', fontSize: '30.5px',WebkitTextStroke: '.3px black',pointerEvents:'none'}}>نماذج ثلاثية الأبعاد جاهزة للاستلام وللإستخدام<br></br>في مادة تقنية المعلومات للصف العاشر <br></br> على تطبيق بلندر للفصل الدراسي الثاني</h1>
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
                {isTabletOrMobile && <motion.div

                className={styles.center}
                style={{marginTop:'-9%', marginBottom:'-5%'}}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: .8,
                  delay: .5,
                  ease: [0, 0.71, 0.2, 1.01]}}
                >
                  <h1 className="cairo" style={{color:'white', fontSize: '20.5px',WebkitTextStroke: '.3px black',pointerEvents:'none'}}>نماذج ثلاثية الأبعاد جاهزة للاستلام وللإستخدام<br></br>في مادة تقنية المعلومات للصف العاشر <br></br> على تطبيق بلندر للفصل الدراسي الثاني</h1>
                </motion.div>
                
                // <TypeAnimation
                //     sequence={[
                //         "العثور على مطور مواقع جيد ليس بالأمر الهين، خصوصا ذلك المتمرس في استخدام أحدث طرق العرض\n\n اسمي أسد المحرمي وأنا مطور مواقع عماني لدي خبرة -بفضل الله تعالى-\n في استخدام html"
                //         ,
                //         500,
                //         "العثور على مطور مواقع جيد ليس بالأمر الهين، خصوصا ذلك المتمرس في استخدام أحدث طرق العرض\n\n اسمي أسد المحرمي وأنا مطور مواقع عماني لدي خبرة -بفضل الله تعالى-\n في استخدام css",
                //         500,
                //         "العثور على مطور مواقع جيد ليس بالأمر الهين، خصوصا ذلك المتمرس في استخدام أحدث طرق العرض\n\n اسمي أسد المحرمي وأنا مطور مواقع عماني لدي خبرة -بفضل الله تعالى-\n في استخدام Javascript",
                //         500,
                //            "العثور على مطور مواقع جيد ليس بالأمر الهين، خصوصا ذلك المتمرس في استخدام أحدث طرق العرض\n\n اسمي أسد المحرمي وأنا مطور مواقع عماني لدي خبرة -بفضل الله تعالى-\n في استخدام React, and its various libraries.",
                //         500,
                //     ]}
                //     deletionSpeed={20}
                //     speed={200}
                //     style={{display:'block',whiteSpace: 'pre-line',fontSize:'1.4em', color:"#E5F6EC", fontFamily:' Georgia, serif;', direction:'rtl'}}
                
                // />
              }
                <a href="/ar/products" ><motion.h2
                initial="offscreen"
                whileInView="onscreen"
                viewport={{once:true, amount: 0.8}}
                variants={cardVariants}
                style={{fontSize:'20px',textAlign:"center", color:"white",textShadow: '1px 1px 7px rgb(255 30 160 / 50%)', WebkitTextStroke: '1px 0b0e13' }}> انقر لتصفح جميع المشاريع</motion.h2></a>
      {isDesktopOrLaptop &&<ul id='pul1' ref={ref} style={{marginTop:'0%', direction:'rtl', marginBottom:'7%'}} >
        <a className={styles.card2} href="/products/1" style={{display:'flex'}}><Image width={560} src={car1} alt=''></Image></a>
        <a className={styles.card2} href="/products/2" style={{display:'flex'}}><Image width={560} src={car2} alt=''></Image></a>
        <a className={styles.card2} href="/products/3" style={{display:'flex'}}><Image width={560} src={airplane1} alt=''></Image></a>
        <a className={styles.card2} href="/products/4" style={{display:'flex'}}><Image width={560} src={rocket} alt=''></Image></a>
        <a className={styles.card2} href="/products/5" style={{display:'flex'}}><Image width={560} src={House1} alt=''></Image></a>
        {/* <li id='pli' style={{display:'flex', background:'#FCC77E'}}><img src='https://img.freepik.com/premium-photo/amazing-world-with-books-big-sun-background-generative-ai_58409-38729.jpg?w=1800' alt='' ></img><h1 style={{ color:'black'}}>One cannot walk towards a destination <br></br>except by having a guide that shows him the general view of the path. And that is exactly the mission of Holy Quran and the <br></br>Messanger Mohammed peace be upon him which this book has bee sent unto. It contians the stories of the past nations as well as the guidelines that should be followed etc. </h1></li>
        <li id='pli' style={{display:'flex', background:'#F5DF89'}}><img src='https://previews.123rf.com/images/summertime72/summertime722303/summertime72230300717/200999052-ai-generative-midjourney-illustration-of-a-fantasy-stairway-to-heaven.jpg' alt='' ></img><h1 style={{ color:'black'}}>A human by nature goes through various types of feeling as he walks upon his path to god. So without having signs at place that makes him at ease knowing that he is upon the truth he may not be able to gather his strength to continue on this path. Not mentioning that there are ranks that vary between the beleivers, and for one to climb them there has to exist a criteria by which he can Identify them. And on this path exists various milestones that could be identified. </h1></li> */}
      </ul>}
      {isTabletOrMobile &&<ul id='pul2' ref={ref} style={{marginTop:'-4%', direction:'rtl', marginBottom:'7%'}} >
        <a className={styles.card2} href="/products/1" style={{display:'flex'}}><Image width={210} src={car1} alt=''></Image></a>
        <a className={styles.card2} href="/products/2" style={{display:'flex'}}><Image width={210} src={car2} alt=''></Image></a>
        <a className={styles.card2} href="/products/3" style={{display:'flex'}}><Image width={210} src={airplane1} alt=''></Image></a>
        <a className={styles.card2} href="/products/4" style={{display:'flex'}}><Image width={210} src={rocket} alt=''></Image></a>
        <a className={styles.card2} href="/products/5" style={{display:'flex'}}><Image width={210} src={House1} alt=''></Image></a>
        {/* <li id='pli' style={{display:'flex', background:'#FCC77E'}}><img src='https://img.freepik.com/premium-photo/amazing-world-with-books-big-sun-background-generative-ai_58409-38729.jpg?w=1800' alt='' ></img><h1 style={{ color:'black'}}>One cannot walk towards a destination <br></br>except by having a guide that shows him the general view of the path. And that is exactly the mission of Holy Quran and the <br></br>Messanger Mohammed peace be upon him which this book has bee sent unto. It contians the stories of the past nations as well as the guidelines that should be followed etc. </h1></li>
        <li id='pli' style={{display:'flex', background:'#F5DF89'}}><img src='https://previews.123rf.com/images/summertime72/summertime722303/summertime72230300717/200999052-ai-generative-midjourney-illustration-of-a-fantasy-stairway-to-heaven.jpg' alt='' ></img><h1 style={{ color:'black'}}>A human by nature goes through various types of feeling as he walks upon his path to god. So without having signs at place that makes him at ease knowing that he is upon the truth he may not be able to gather his strength to continue on this path. Not mentioning that there are ranks that vary between the beleivers, and for one to climb them there has to exist a criteria by which he can Identify them. And on this path exists various milestones that could be identified. </h1></li> */}
      </ul>}
            </div>
            {isTabletOrMobile &&<div style={{background: 'rgb(30, 20, 50)', width: "100%", paddingBottom:'30%', zIndex:0, height:'100%'}}/>}
        </div>
      )
};