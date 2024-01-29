"use client"
import { useMediaQuery } from "react-responsive";
import  {TypeAnimation} from 'react-type-animation';
import { motion, AnimatePresence } from "framer-motion";
// import { Helmet } from "react-helmet-async";
import ResponsiveAppBar from '@/app/amenubar';
export default function Teamm() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return(
    <div style={{background: '#0B0E13', width: "100vw", paddingBottom:'70px', zIndex:-1, height:'100vh'}}>
        <ResponsiveAppBar></ResponsiveAppBar>
        {/* <Helmet>
          <title>Asad Al Muharrami</title>
          <meta name="description" content="I live in Muscat Oman. and I'm capable in designing websites in HTML, CSS, Javascript, React."/>
          <link rel="canonical" href="/about"/>
          </Helmet> */}
        <div style={{background: '#0B0E13', width: "100vw", paddingBottom:'50px', zIndex:-1, height:'8vh'}}></div>
            {isDesktopOrLaptop &&<div style={{display:'flex', justifyContent:'center', background:'#323136', height:'45vh', direction:'rtl', textAlign:'center'}}>
            {/* <img src="https://canvas-generations-v1.s3.us-west-2.amazonaws.com/2423baeb-ceab-4d81-8830-d4a4cb3c8bf4.png" alt=""></img> */}
            <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: -20, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{marginTop:'1.5vh', width:'70vw', right:0}}>
                <h2 style={{color:'#F2EEE9', opacity:'1'}}>"هل ترغب في الحصول على نموذج ثلاثي الأبعاد جاهز للاستخدام في مادة تقنية المعلومات؟ 
<br></br><br></br>
🔴 نحن نقدم لك نموذجًا ثلاثي الأبعاد مصممًا خصيصًا لطلاب الصف العاشر، يمكن استخدامه في الفصول الدراسية كمشروع للحصول على اعلى الدرجات أو كأداة تعليمية مفيدة. 

🔴 يتضمن النموذج تصاميم واقعية للسمكة الموجوده في المنهج الدراسي ولأجهزة الكمبيوتر والشبكات والبرمجيات والمزيد، مما يمكّن الطلاب من الحصول على الدرجة كامله وتطبيق المفاهيم التعليمية بطريقة عملية ومشوقة. 


🔴 يمكنكم الآن الحصول على نموذج ثلاثي الأبعاد جاهز للتعديل والاستخدام في فصلكم الدراسي بأسعار رمزية. 
<br></br><br></br>
⚫️تواصل معانا الآن 📱لمعرفة المزيد عن خدماتنا وكيف يمكننا مساعدتك ولا تفوّتوا هذه الفرصة
</h2><h2 style={{color:'#F2EEE9', opacity:'1'}}><a style={{color:"darkcyan"}} href="https://wa.me/96895455338">https://wa.me/96895455338</a></h2>
                {/* <div style={{marginTop:'-2vh'}}> 
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3',borderRadius:'50px', fontSize:"18px", height:'7vh',width:'10vw',textAlign:'center',lineHeight:3}}>HTML</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3',borderRadius:'50px', fontSize:"18px", height:'7vh',width:'10vw',textAlign:'center',lineHeight:3}}>CSS</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3',borderRadius:'50px', fontSize:"18px", height:'7vh',width:'10vw',textAlign:'center',lineHeight:3}}>Javascript</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3',borderRadius:'50px', fontSize:"18px", height:'7vh',width:'10vw',textAlign:'center',lineHeight:3}}>React</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3',borderRadius:'50px', fontSize:"18px", height:'7vh',width:'15vw',textAlign:'center',lineHeight:3}}>Various related libraries</h3></button>
                     </div> */}
            </motion.div>
                    <br></br>
            </div>}
            {isTabletOrMobile &&<div style={{display:'flex', justifyContent:'center', background:'#323136', height:'43vh', textAlign:'center'}}>
            {/* <img src="https://canvas-generations-v1.s3.us-west-2.amazonaws.com/2423baeb-ceab-4d81-8830-d4a4cb3c8bf4.png"  alt="" style={{width:'28vw', objectFit:'cover'}}></img> */}
            <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: -20, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{marginTop:'1.5vh'}}>
                <h4 className="cairo" style={{color:'#F2EEE9', opacity:'1', fontSize:'1.4vh', marginRight:'1vw', marginLeft:'1vw'}}>"هل ترغب في الحصول على نموذج ثلاثي الأبعاد جاهز للاستخدام في مادة تقنية المعلومات؟ 
<br></br><br></br>
🔴 نحن نقدم لك نموذجًا ثلاثي الأبعاد مصممًا خصيصًا لطلاب الصف العاشر، يمكن استخدامه في الفصول الدراسية كمشروع للحصول على اعلى الدرجات أو كأداة تعليمية مفيدة. 

🔴 يتضمن النموذج تصاميم واقعية للسمكة الموجوده في المنهج الدراسي ولأجهزة الكمبيوتر والشبكات والبرمجيات والمزيد، مما يمكّن الطلاب من الحصول على الدرجة كامله وتطبيق المفاهيم التعليمية بطريقة عملية ومشوقة. 


🔴 يمكنكم الآن الحصول على نموذج ثلاثي الأبعاد جاهز للتعديل والاستخدام في فصلكم الدراسي بأسعار رمزية. 
<br></br><br></br>
⚫️تواصل معانا الآن 📱لمعرفة المزيد عن خدماتنا وكيف يمكننا مساعدتك ولا تفوّتوا هذه الفرصة
</h4><h4 className="cairo" style={{color:'#F2EEE9', opacity:'1'}}><a style={{color:"darkcyan"}} href="https://wa.me/96895455338">https://wa.me/96895455338</a></h4>
                {/* <div style={{marginTop:'-1.3vh'}}> 
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3',borderRadius:'50px', fontSize:"7px", height:'2vh',width:'7vw',textAlign:'center',lineHeight:2.2}}>HTML</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3',borderRadius:'50px', fontSize:"7px", height:'2vh',width:'7vw',textAlign:'center',lineHeight:2.2}}>CSS</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3',borderRadius:'50px', fontSize:"7px", height:'2vh',width:'8vw',textAlign:'center',lineHeight:2.2}}>Javascript</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3',borderRadius:'50px', fontSize:"7px", height:'2vh',width:'7vw',textAlign:'center',lineHeight:2.2}}>React</h3></button>
                    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', }}><h3 style={{background:'#F4E6C3',borderRadius:'50px', fontSize:"7px", height:'2vh',width:'13vw',textAlign:'center',lineHeight:2.2}}>Related libraries</h3></button>
                     </div> */}
            </motion.div>
                    <br></br>
            </div>}
    </div>)}