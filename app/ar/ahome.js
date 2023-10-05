"use client"
import { useMediaQuery } from "react-responsive";
import "./a.css"
import {  useRef} from 'react'
import {motion, useScroll, Variants} from 'framer-motion'
import  {TypeAnimation} from 'react-type-animation'
// import { Helmet } from "react-helmet-async";
import AresponsiveAppBar from './amenubar';
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
        <div style={{background: '#0B0E13', width: "100%", paddingBottom:'2.5%', zIndex:0}}>
          <AresponsiveAppBar></AresponsiveAppBar>
          {/* <Helmet>
          <title>مطور مواقع عماني</title>
          <meta name="description" content="خبير في HTML CSS Javascript React, وأنا جاهز -بفضل الله تعالى- لتصميم موقعك الاحترافي"/>
          <link rel="canonical" href="/ar"/>
          </Helmet> */}
        {isDesktopOrLaptop &&<img style={{height:"40vh", width:"100%", objectFit: "cover", objectPosition:"0% -19vw", marginTop:65}} src="https://canvascontent.krea.ai/f3d5d148-9d9e-4769-a7e9-d89880bd13e8.png" alt="" />}
        {isTabletOrMobile &&<img style={{height:"25vh", width:"100%", objectFit: "cover", objectPosition:"0% -5vw", marginTop:37}} src="https://canvascontent.krea.ai/f3d5d148-9d9e-4769-a7e9-d89880bd13e8.png" alt="" />}

        <div style={{right:'10vh', textAlign:'center', paddingTop: 3}}>
                {isDesktopOrLaptop &&<TypeAnimation
                    sequence={[
                        "العثور على مطور مواقع جيد ليس بالأمر الهين،\n خصوصا ذلك المتمرس في استخدام أحدث طرق العرض\n\n اسمي أسد المحرمي وأنا مطور مواقع عماني لدي خبرة\n-بفضل الله تعالى- في استخدام html"
                        ,
                        500,
                        "العثور على مطور مواقع جيد ليس بالأمر الهين،\n خصوصا ذلك المتمرس في استخدام أحدث طرق العرض\n\n اسمي أسد المحرمي وأنا مطور مواقع عماني لدي خبرة\n-بفضل الله تعالى- في استخدام css",
                        500,
                        "العثور على مطور مواقع جيد ليس بالأمر الهين،\n خصوصا ذلك المتمرس في استخدام أحدث طرق العرض\n\n اسمي أسد المحرمي وأنا مطور مواقع عماني لدي خبرة\n-بفضل الله تعالى- في استخدام Javascript",
                        500,
                           "العثور على مطور مواقع جيد ليس بالأمر الهين،\n خصوصا ذلك المتمرس في استخدام أحدث طرق العرض\n\n اسمي أسد المحرمي وأنا مطور مواقع عماني لدي خبرة\n-بفضل الله تعالى- في استخدام React, and its various libraries.",
                        500,
                    ]}
                    deletionSpeed={20}
                    speed={200}
                    style={{display:'block',whiteSpace: 'pre-line',fontSize:'1.8em', color:"#E5F6EC", fontFamily:' Georgia, serif;', direction:'rtl'}}
                
                />}
                {isTabletOrMobile &&<TypeAnimation
                    sequence={[
                        "العثور على مطور مواقع جيد ليس بالأمر الهين، خصوصا ذلك المتمرس في استخدام أحدث طرق العرض\n\n اسمي أسد المحرمي وأنا مطور مواقع عماني لدي خبرة -بفضل الله تعالى-\n في استخدام html"
                        ,
                        500,
                        "العثور على مطور مواقع جيد ليس بالأمر الهين، خصوصا ذلك المتمرس في استخدام أحدث طرق العرض\n\n اسمي أسد المحرمي وأنا مطور مواقع عماني لدي خبرة -بفضل الله تعالى-\n في استخدام css",
                        500,
                        "العثور على مطور مواقع جيد ليس بالأمر الهين، خصوصا ذلك المتمرس في استخدام أحدث طرق العرض\n\n اسمي أسد المحرمي وأنا مطور مواقع عماني لدي خبرة -بفضل الله تعالى-\n في استخدام Javascript",
                        500,
                           "العثور على مطور مواقع جيد ليس بالأمر الهين، خصوصا ذلك المتمرس في استخدام أحدث طرق العرض\n\n اسمي أسد المحرمي وأنا مطور مواقع عماني لدي خبرة -بفضل الله تعالى-\n في استخدام React, and its various libraries.",
                        500,
                    ]}
                    deletionSpeed={20}
                    speed={200}
                    style={{display:'block',whiteSpace: 'pre-line',fontSize:'1.4em', color:"#E5F6EC", fontFamily:' Georgia, serif;', direction:'rtl'}}
                
                />}
                { isDesktopOrLaptop &&<motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 22.5,
                    ease: [0, 0.71, 0.2, 1.01]

                  }}
                  style={{display:'flex', justifyContent:'space-between', background:'#323136', marginTop: '55px', marginBottom:'85px', height:'50vh', direction:'rtl'}}>
             { isDesktopOrLaptop && <img style={{visibility:'visible',height:"80vh", width:"45vw", objectFit: "cover", objectPosition:"-6vw -7vh", marginTop:30, transition: 'all .20s', maxHeight:'50vh', maxWidth:'40vw'}} src="https://canvascontent.krea.ai/a895cd70-a350-475a-8275-68170f1f9486.png" alt="" />}
             { isTabletOrMobile && <img style={{visibility:'visible',height:"37vh", width:"45vw", objectFit: "cover", objectPosition:"-13vw -7vh", marginTop:40, transition: 'all .20s', maxHeight:'50vh', maxWidth:'80vw'}} src="https://img.freepik.com/premium-photo/samurai-meditating-blooming-garden-vintage-style_76964-1996.jpg?w=2000" alt="" />}

             {isDesktopOrLaptop &&<motion.div
             style={{backgroundColor:"rgb(239, 193, 148, 0.95)", marginTop: '45px', height: '40vh', marginLeft: '2vw', width: '55vw', borderRadius:'25px'}}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 22.5,
                    ease: [0, 0.71, 0.2, 1.01]

                  }}>
                    <img src='scre.png' alt=''></img>
                    {/* https://img.freepik.com/premium-photo/old-paper-background-style-light-beige-dark-amber_868292-932.jpg?w=1800 */}
                {isDesktopOrLaptop && <h2 style={{fontSize: '25px', textAlign: 'center', lineHeight: 1.75, paddingTop: '',paddingBottom:'5px', color: '#731C76', textShadow: '1px 1px 5px rgb(233 211 169/ 80%)', WebkitTextStroke: '1px black'}}>أنا -بفضل الله تعالى- عامل مستقل، مستقر في مسقط - السيب <br></br> وأنا جاهز -بحمدالله تعالى- لتصميم موقعك الاحترافي <br></br>وهنا -في هذا الموقع- أعرض بعضا من المهارات التي مُنّ علي بها<br></br> <span> <h5 style={{color:'black'}}> للتواصل معي انقر التالي <a href='https://wa.me/96896338791'>واتسأب  96338791</a></h5></span> </h2>}
             </motion.div>}
             {isTabletOrMobile &&<motion.div
             style={{backgroundColor:"rgb(219, 193, 148, 0.95)", marginTop: '40px', height: '30vh', marginRight: '2vw', marginLeft:'1vw' ,width: '50vw', borderRadius:'25px', direction:'rtl'}}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 22.5,
                    ease: [0, 0.71, 0.2, 1.01]

                  }}>
                    <img src='scre.png' alt=''></img>
                    {/* https://img.freepik.com/premium-photo/old-paper-background-style-light-beige-dark-amber_868292-932.jpg?w=1800 */}
                {isTabletOrMobile && <h2 style={{marginTop:'.5px',fontSize: '15.5px', textAlign: 'center', lineHeight: 1.75, paddingTop: '',paddingBottom:'5px', color: '#738C76', textShadow: '1px 1px 5px rgb(233 211 169/ 80%)', WebkitTextStroke: '1px black'}}>أنا -بفضل الله تعالى- عامل مستقل، مستقر في عمان - مسقط وأنا جاهز -بفضل الله تعالى- لتصميم موقعك الاحترافي، وهنا -في هذا الموقع- أعرض بعضا من المهارات التي مُنّ علي بها<h5 style={{color:'black', fontSize:'12px'}}>للتواصل معي انقر التالي <a href='https://wa.me/96896338791'>واتسأب 9633 8791</a></h5> </h2>}
             </motion.div>}
            </motion.div>}
            { isTabletOrMobile &&<motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 22.5,
                    ease: [0, 0.71, 0.2, 1.01]

                  }}
                  style={{display:'flex', justifyContent:'space-between', background:'#323136', marginTop: '5vh', marginBottom:'8vh', height:'40vh', direction:'rtl'}}>
             { isTabletOrMobile && <img style={{visibility:'visible',height:"37vh", width:"45vw", objectFit: "cover", objectPosition:"-23vw -6vh", marginTop:37, transition: 'all .20s', maxHeight:'50vh', maxWidth:'80vw'}} src="https://canvascontent.krea.ai/a895cd70-a350-475a-8275-68170f1f9486.png" alt="" />}

             {isDesktopOrLaptop &&<motion.div
             style={{backgroundColor:"rgb(239, 193, 148, 0.95)", marginTop: '45px', height: '40vh', marginRight: '3vw', width: '55vw', borderRadius:'25px'}}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 22.5,
                    ease: [0, 0.71, 0.2, 1.01]

                  }}>
                    <img src='scre.png' alt=''></img>
                    {/* https://img.freepik.com/premium-photo/old-paper-background-style-light-beige-dark-amber_868292-932.jpg?w=1800 */}
                {isDesktopOrLaptop && <h2 style={{fontSize: '25px', textAlign: 'center', lineHeight: 1.75, paddingTop: '',paddingBottom:'5px', color: '#731C76', textShadow: '1px 1px 5px rgb(233 211 169/ 80%)', WebkitTextStroke: '1px black'}}>I'm a freelancer that is based in Muscat - Oman and I'm ready to design your proffesional website. And this is where I display my skills.  <h5 style={{color:'black', fontSize:'12px'}}>keep scrolling and you'll be satisfied, <br></br></h5> </h2>}
             </motion.div>}
             {isTabletOrMobile &&<motion.div
             style={{backgroundColor:"rgb(219, 193, 148, 0.95)", marginTop: '40px', height: '30vh', marginRight: '2vw', marginLeft:'1vw' ,width: '50vw', borderRadius:'25px'}}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 22.5,
                    ease: [0, 0.71, 0.2, 1.01]

                  }}>
                    <img src='scre.png' alt=''></img>
                    {/* https://img.freepik.com/premium-photo/old-paper-background-style-light-beige-dark-amber_868292-932.jpg?w=1800 */}
                {isTabletOrMobile && <h2 style={{marginTop:'.5px',fontSize: '15.5px', textAlign: 'center', lineHeight: 1.75, paddingTop: '',paddingBottom:'5px', color: '#731C76', textShadow: '1px 1px 5px rgb(233 211 169/ 80%)', WebkitTextStroke: '1px black'}}>أنا -بفضل الله تعالى- عامل مستقل، مستقر في عمان - مسقط وأنا جاهز -بفضل الله تعالى- لتصميم موقعك الاحترافي، وهنا -في هذا الموقع- أعرض بعضا من المهارات التي مُنّ علي بها<h5 style={{color:'black', fontSize:'12px'}}>للتواصل معي انقر التالي <a href='https://wa.me/96896338791'>واتسأب 96338791</a></h5> </h2>}
             </motion.div>}
            </motion.div>}
            </div>
            {isDesktopOrLaptop &&<div style={{direction:'rtl'}}>
                <motion.h2
                initial="offscreen"
                whileInView="onscreen"
                viewport={{once:true, amount: 0.8}}
                variants={cardVariants}
                style={{fontSize:'27px',textAlign:"center", color:"white",textShadow: '1px 1px 7px rgb(255 30 160 / 50%)', WebkitTextStroke: '1px 0b0e13' }}> في عملية صناعة أي كوب <br></br> العناصر التالية هي المحاور الأساسية :</motion.h2>
                <motion.div initial="offscreen"
                whileInView="onscreen"
                viewport={{once:true, amount: 0.8}}
                variants={cardVariants}
                style={{display:'flex', justifyContent:'space-around', direction:'rtl'}}>
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handlemclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', fontSize:"18px", height:'10vh',width:'12vw',textAlign:'center',lineHeight:4}}>المادة</h3></button>
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handlesclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', fontSize:"18px", height:'10vh',width:'10vw',textAlign:'center',lineHeight:4}}>النوع</h3></button>
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handlegclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', fontSize:"18px", height:'10vh',width:'14vw',textAlign:'center',lineHeight:4}}>التصميم</h3></button>
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handleeclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', fontSize:"18px", height:'10vh',width:'10vw',textAlign:'center',lineHeight:4}}>الطلاء الشفاف والحرق</h3></button>
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handleaclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', fontSize:"18px", height:'10vh',width:'10vw',textAlign:'center',lineHeight:4}}>الإبداع</h3></button>
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handleskclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px',fontSize:"18px", height:'10vh',width:'10vw',textAlign:'center',lineHeight:4}}>طلب الزبون</h3></button>
                    {/* <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handleguclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', fontSize:"18px", height:'10vh',width:'10vw',textAlign:'center',lineHeight:4}}>الدليل</h3></button>
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handlemiclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', fontSize:"18px", height:'10vh',width:'10vw',textAlign:'center',lineHeight:4}}>العلامات</h3></button> */}


                </motion.div>
                {/* so how does that link up to our current topix you might say, well let's see */}
                <div id='pbody'>
                <svg id="progress" width="100" height="100" viewBox="0 0 100 100" style={{left:'-40%'}}>
        {/* <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        /> */}
      </svg>
      <ul id='pul' ref={ref} >
        <li id='pli' style={{display:'flex', background:'#D8D8D8'}}><img src='https://canvascontent.krea.ai/ed48960f-76b7-416e-a764-c2fbe26da915.png' alt=''></img><h1 style={{ color:'black'}}>هناك ثلاث مواد أساسية يمكن صناعة الأكواب بها ، الإيرثنوير والستونوير والبروكيلاين. عندنا في "كيوي" نستعمل طريقة خاصة في التصنيع باستخدام الإيرثينوير. وهي أنا نقوم بخلاف غيرنا على حرق الكوب ثلاث مرات مع طلائه بطلاء شفاف مرتين. وهذا من شأنه أن يزيل العيب الوحيد في الإيرثينوير ألا وهو طبيعة امتصاص الماء بشكل أرفع من غيره، وكذلك من شأنه أن يحسن ملمس الكوب وجعله مريحا في يد المستخدم. </h1></li>
        <li id='pli' style={{display:'flex', background:'#EFEAA2'}}><img src='https://canvascontent.krea.ai/eb660f1f-546b-4f78-a5e5-8cff788512f1.png' alt='' ></img><h1 style={{ color:'black'}}>نستطيع بفضل الله تعالى في "كيوي" من صناعة أصناف متنوعة من الأكواب. فهنالك العادي وهناك كوب القهوة والشاي وغير ذلك حسب طلب الزبون. معرفة النوع الذي يريده المستخدم يزيح إمكان وقوع الأخطاء غير المحمودةمن تتبع وصف الزبون من غير وجود صورة في الذهن للنوع الذي يرغب به.  </h1></li>
        <li id='pli' style={{display:'flex', background:'#C74B48'}}><img src='https://canvascontent.krea.ai/64a152cd-6763-40da-a056-945ef3d0e0c6.png' alt='' ></img><h1 style={{ color:'black'}}>هناك تصاميم مختلفة يمكن أن تزين بها الأكواب، من رسومات تلوينية إلى نقوش محفورة. ونحن في "كيوي" نركز في الوقت الراهن على النقوش التلوينية، إلا أنا قد نستخدم النقوش الأحفولاية في المستقبل إن شاء الله تعالى.</h1></li>
        <li id='pli' style={{display:'flex', background:'#F7D174'}}><img src='https://canvascontent.krea.ai/234e7207-223f-4106-9049-551ecc63fa11.png' alt='' ></img><h1 style={{ color:'black'}}>حرق الكوب يساعد في تصليب الكوب، وزيادةطلاء شفاف عليها يساعد في إزالة طبيعة امصاص المياه في المادة الأساس، وأيضا يضيف ملمسا ناعما للكوب.نحن في "كيوي" نقوم بعمل ثلاث حرقات لكل كوب مع إضافة طلاء شفاف مرتين، لتفادي أي خطأ وكذلك لرفع جودة الكوب.</h1></li>
        <li id='pli' style={{display:'flex', background:'#E7CD91'}}><img src='https://canvascontent.krea.ai/44808c5d-5eee-46c7-982b-603e8387f7bd.png' alt='' ></img><h1 style={{ color:'black'}}>لدينا في "كيوي" بفضل الله تعالى فريق عمل كثير الإبداع ولديهم مهارات عالية في التصميم والتزيين، وبإمكانهم كذلك التفطن لمراد الزبون وتحقيقه.</h1></li>
        <li id='pli' style={{display:'flex', background:'#FCC77E'}}><img src='https://canvascontent.krea.ai/c5b61fdc-170d-4baa-8cdc-a06fa99c7786.png' alt='' ></img><h1 style={{ color:'black'}}>طلب الزبون يلعب دورا كبيرا في صناعة الكوب، فبإمكانه أن يكون العامل المحدد لتميز الكوب وعكسه. ولذلك فنحن ندعو الزبون لتوفير مخطط رسمي للكوب الذي يريده، وإلا فنحن نوفر خدمة لذلك إلا أن تطيب نفس الزبون.</h1></li>
        {/* <li id='pli' style={{display:'flex', background:'#F5DF89'}}><img src='https://previews.123rf.com/images/summertime72/summertime722303/summertime72230300717/200999052-ai-generative-midjourney-illustration-of-a-fantasy-stairway-to-heaven.jpg' alt='' ></img><h1 style={{ color:'black'}}>A human by nature goes through various types of feeling as he walks upon his path to god. So without having signs at place that makes him at ease knowing that he is upon the truth he may not be able to gather his strength to continue on this path. Not mentioning that there are ranks that vary between the beleivers, and for one to climb them there has to exist a criteria by which he can Identify them. And on this path exists various milestones that could be identified. </h1></li> */}
      </ul>
                </div>
            </div>}
            {isTabletOrMobile &&<div style={{direction:'rtl'}}>
                <motion.h2
                initial="offscreen"
                whileInView="onscreen"
                viewport={{once:true, amount: 0.8}}
                variants={cardVariants}
                style={{fontSize:'23px',textAlign:"center", color:"white",textShadow: '1px 1px 7px rgb(255 30 160 / 50%)', WebkitTextStroke: '1px 0b0e13' }}>  في عملية صناعة أي كوب<br></br> العناصر التالية هي المحاور الأساسية :</motion.h2>
                <motion.div initial="offscreen"
                whileInView="onscreen"
                viewport={{once:true, amount: 0.5}}
                variants={cardVariants}
                style={{ textAlign:'center', direction:'rtl'}}>
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handlemclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', height:'6.5vh',width:'17vw',textAlign:'center',lineHeight:1.5}}>المادة</h3></button>
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handlemsclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', height:'6vh',width:'19vw',textAlign:'center',lineHeight:1}}><br></br>النوع</h3></button>
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handlemgclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', height:'6vh',width:'22vw',textAlign:'center',lineHeight:1}}><br></br>التصميم</h3></button>
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handlemeclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', height:'6vh',width:'15vw',textAlign:'center',lineHeight:1}}><br></br>الحرقات والطلاء الشفاف</h3></button> <br></br>
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handlemaclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', height:'6vh',width:'15vw',textAlign:'center',lineHeight:3.3}}>الإبداع</h3></button>
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handlemskclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', height:'6vh',width:'15vw',textAlign:'center',lineHeight:3.3}}>طلب الزبون</h3></button>
                    {/* <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handlemguclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', height:'6vh',width:'15vw',textAlign:'center',lineHeight:3.3}}>الدليل</h3></button>
                    <button onClick={() => {
                      const bbb = new Promise ((resolve, reject) => {
                      setTimeout(() => {
                        resolve(n());
                        
                      }, 100)});
                      bbb.then ((val) => {handlemmiclick();})
                      .then (() => {n()})
                     }} style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'white',borderRadius:'50px', height:'6vh',width:'17vw',textAlign:'center',lineHeight:3.3}}>العلامات</h3></button> */}


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
        <li id='mli' style={{display:'flex', background:'#D8D8D8'}}><img src='https://canvascontent.krea.ai/ed48960f-76b7-416e-a764-c2fbe26da915.png' alt='' style={{width:'20vh', objectFit:'cover'}}></img><h1 id="ph1" style={{ color:'black'}}>هناك ثلاث مواد أساسية يمكن صناعة الأكواب بها ، الإيرثنوير والستونوير والبروكيلاين. عندنا في "كيوي" نستعمل طريقة خاصة في التصنيع باستخدام الإيرثينوير. وهي أنا نقوم بخلاف غيرنا على حرق الكوب ثلاث مرات مع طلائه بطلاء شفاف مرتين. وهذا من شأنه أن يزيل العيب الوحيد في الإيرثينوير ألا وهو طبيعة امتصاص الماء بشكل أرفع من غيره، وكذلك من شأنه أن يحسن ملمس الكوب وجعله مريحا في يد المستخدم. </h1></li>
        <li id='mli' style={{display:'flex', background:'#EECEAB'}}><img src='https://canvascontent.krea.ai/eb660f1f-546b-4f78-a5e5-8cff788512f1.png' alt='' style={{width:'18vh', objectFit:'cover'}} ></img><h1 id="ph1" style={{ color:'black'}}>نستطيع بفضل الله تعالى في "كيوي" من صناعة أصناف متنوعة من الأكواب. فهنالك العادي وهناك كوب القهوة والشاي وغير ذلك حسب طلب الزبون. معرفة النوع الذي يريده المستخدم يزيح إمكان وقوع الأخطاء غير المحمودةمن تتبع وصف الزبون من غير وجود صورة في الذهن للنوع الذي يرغب به.  </h1></li>
        <li id='mli' style={{display:'flex', background:'#EFEAA2'}}><img src='https://canvascontent.krea.ai/64a152cd-6763-40da-a056-945ef3d0e0c6.png' alt='' style={{width:'20vh', objectFit:'cover'}}></img><h1 id="ph1" style={{ color:'black'}}>هناك تصاميم مختلفة يمكن أن تزين بها الأكواب، من رسومات تلوينية إلى نقوش محفورة. ونحن في "كيوي" نركز في الوقت الراهن على النقوش التلوينية، إلا أنا قد نستخدم النقوش الأحفولاية في المستقبل إن شاء الله تعالى.</h1></li>
        <li id='mli' style={{display:'flex', background:'#C74B48'}}><img src='https://canvascontent.krea.ai/234e7207-223f-4106-9049-551ecc63fa11.png' alt='' style={{width:'20vh', objectFit:'cover'}}></img><h1 id="ph1" style={{ color:'black'}}>حرق الكوب يساعد في تصليب الكوب، وزيادةطلاء شفاف عليها يساعد في إزالة طبيعة امصاص المياه في المادة الأساس، وأيضا يضيف ملمسا ناعما للكوب.نحن في "كيوي" نقوم بعمل ثلاث حرقات لكل كوب مع إضافة طلاء شفاف مرتين، لتفادي أي خطأ وكذلك لرفع جودة الكوب.</h1></li>
        <li id='mli' style={{display:'flex', background:'#F7D174'}}><img src='https://canvascontent.krea.ai/44808c5d-5eee-46c7-982b-603e8387f7bd.png' alt='' style={{width:'23vh', objectFit:'cover'}}></img><h1 id="ph1" style={{ color:'black'}}>لدينا في "كيوي" بفضل الله تعالى فريق عمل كثير الإبداع ولديهم مهارات عالية في التصميم والتزيين، وبإمكانهم كذلك التفطن لمراد الزبون وتحقيقه.</h1></li>
        <li id='mli' style={{display:'flex', background:'#E7CD91'}}><img src='https://canvascontent.krea.ai/c5b61fdc-170d-4baa-8cdc-a06fa99c7786.png' alt='' style={{width:'23vh', objectFit:'cover'}}></img><h1 id="ph1" style={{ color:'black'}}>طلب الزبون يلعب دورا كبيرا في صناعة الكوب، فبإمكانه أن يكون العامل المحدد لتميز الكوب وعكسه. ولذلك فنحن ندعو الزبون لتوفير مخطط رسمي للكوب الذي يريده، وإلا فنحن نوفر خدمة لذلك إلا أن تطيب نفس الزبون.</h1></li>
        {/* <li id='mli' style={{display:'flex', background:'#FCC77E'}}><img src='https://img.freepik.com/premium-photo/amazing-world-with-books-big-sun-background-generative-ai_58409-38729.jpg?w=1800' alt='' style={{width:'23vh', objectFit:'cover'}} ></img><h1 id="ph1" style={{ color:'black'}}>One cannot walk towards a destination <br></br>except by having a guide that shows him the general view of the path. And that is exactly the mission of Holy Quran and the <br></br>Messanger Mohammed peace be upon him which this book has bee sent unto. It contians the stories of the past nations as well as the guidelines that should be followed etc. </h1></li>
        <li id='mli' style={{display:'flex', background:'#F5DF89'}}><img src='https://previews.123rf.com/images/summertime72/summertime722303/summertime72230300717/200999052-ai-generative-midjourney-illustration-of-a-fantasy-stairway-to-heaven.jpg' alt='' style={{width:'23vh', objectFit:'cover'}}></img><h1 id="ph1" style={{ color:'black'}}>A human by nature goes through various types of feeling as he walks upon his path to god. So without having signs at place that makes him at ease knowing that he is upon the truth he may not be able to gather his strength to continue on this path. Not mentioning that there are ranks that vary between the beleivers, and for one to climb them there has to exist a criteria by which he can Identify them. And on this path exists various milestones that could be identified. </h1></li> */}
      </ul>
                </div>
            </div>}
        </div>
      )
};