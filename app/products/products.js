"use client"
import { Modal, Box, Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import ResponsiveAppBar from '../menubar';
import {motion} from 'framer-motion'
import Link from 'next/link';
let mproducts= [
    {
        id:0,
        image:"https://canvascontent.krea.ai/9ee913ac-0d83-414b-ac89-01af767c5d1c.png",
        name:"Mysty",
        price:"5 Omr"
    },
        {id:1,
            image:"https://canvascontent.krea.ai/c5251eff-6e8a-4fc6-95a3-b9a5f6617583.png",
            name:"Sakura",
            price:"4 Omr"
        }]

        let mproducts1= [{id:2,
            image:"https://canvascontent.krea.ai/d3be1ff3-a20a-4215-b88d-c5a953ba43b8.png",
            name:"Flowery",
            price:"6 Omr"
        },
        {id:3,
            image:"https://canvascontent.krea.ai/57505e58-1289-4755-95a8-c7a8e99faeb0.png",
            name:"Wavy",
            price:"6 Omr"
        }]
        let mproducts2= [{id:4,
            image:"https://canvascontent.krea.ai/818c287b-d622-4cb7-81b2-277bee88b136.png",
            name:"Inscripted",
            price:"5 Omr"
        },
        {id:5,
            image:"https://canvascontent.krea.ai/b512c0b4-85ed-4089-bc37-4a95ab1db910.png",
            name:"Colourful",
            price:"4 Omr"
        }]
        let mproducts3= [{id:6,
            image:"https://canvascontent.krea.ai/4c575dc7-035e-4ad8-bc87-ad1fb7a18943.png",
            name:"Marble",
            price:"6 Omr"
        },
        {id:7,
            image:"https://canvascontent.krea.ai/5c684afe-dd4e-49ee-9f0b-82da008fe54d.png",
            name:"Waves",
            price:"5 Omr"
        }]
let products= [
    {
        id:0,
        image:"https://canvascontent.krea.ai/9ee913ac-0d83-414b-ac89-01af767c5d1c.png",
        name:"Mysty",
        price:"5 Omr"
    },
        {id:1,
            image:"https://canvascontent.krea.ai/c5251eff-6e8a-4fc6-95a3-b9a5f6617583.png",
            name:"Sakura",
            price:"4 Omr"
        },
        {id:2,
            image:"https://canvascontent.krea.ai/d3be1ff3-a20a-4215-b88d-c5a953ba43b8.png",
            name:"Flowery",
            price:"6 Omr"
        },
        {id:3,
            image:"https://canvascontent.krea.ai/57505e58-1289-4755-95a8-c7a8e99faeb0.png",
            name:"Wavy",
            price:"6 Omr"
        },


        ];
        let products1= [
                {id:4,
                    image:"https://canvascontent.krea.ai/818c287b-d622-4cb7-81b2-277bee88b136.png",
                    name:"Inscripted",
                    price:"5 Omr"
                },
                {id:5,
                    image:"https://canvascontent.krea.ai/b512c0b4-85ed-4089-bc37-4a95ab1db910.png",
                    name:"Colourful",
                    price:"4 Omr"
                },
                {id:6,
                    image:"https://canvascontent.krea.ai/4c575dc7-035e-4ad8-bc87-ad1fb7a18943.png",
                    name:"Marble",
                    price:"6 Omr"
                },
                {id:7,
                    image:"https://canvascontent.krea.ai/5c684afe-dd4e-49ee-9f0b-82da008fe54d.png",
                    name:"Waves",
                    price:"5 Omr"
                },
        
        
                ];
export default function Productss() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
      let mproductslist = mproducts.map((product) => { 
        return(
        <Link key={product.id} href={`/products/${product.id}`}><button onClick={() => {
            //   const bbb = new Promise ((resolve, reject) => {
            //   setTimeout(() => {
            //     resolve(n());
                
            //   }, 100)});
            //   bbb.then ((val) => {handleskclick();})
            //   .then (() => {n()})
             }} style={{background:'rgb(255, 255, 255, 0)', border:'0', width:'30vw', height:'12vh', marginTop:65}}><h3 style={{background:'white',borderRadius:'25px',fontSize:"18px", height:'35vh',width:'40vw',textAlign:'center',lineHeight:2, paddingBottom:'2vh', paddingTop:'0', zIndex:'1'}}><img src={product.image} alt='' style={{width:'40vw', height:'23vh',objectFit:'contain' }}></img>{product.name} <br></br>{product.price}</h3></button></Link>
    )})
    let mproductslist1 = mproducts1.map((product) => { 
        return(
        <Link key={product.id} href={`/products/${product.id}`}><button onClick={() => {
            //   const bbb = new Promise ((resolve, reject) => {
            //   setTimeout(() => {
            //     resolve(n());
                
            //   }, 100)});
            //   bbb.then ((val) => {handleskclick();})
            //   .then (() => {n()})
             }} style={{background:'rgb(255, 255, 255, 0)', border:'0', width:'30vw', height:'12vh', marginTop:65}}><h3 style={{background:'white',borderRadius:'25px',fontSize:"18px", height:'35vh',width:'40vw',textAlign:'center',lineHeight:2, paddingBottom:'2vh', paddingTop:'.0vh', zIndex:'1'}}><img src={product.image} alt='' style={{width:'40vw', height:'23vh',objectFit:'contain' }}></img>{product.name} <br></br>{product.price}</h3></button></Link>
    )})
    let mproductslist2 = mproducts2.map((product) => { 
        return(
        <Link key={product.id} href={`/products/${product.id}`}><button onClick={() => {
            //   const bbb = new Promise ((resolve, reject) => {
            //   setTimeout(() => {
            //     resolve(n());
                
            //   }, 100)});
            //   bbb.then ((val) => {handleskclick();})
            //   .then (() => {n()})
             }} style={{background:'rgb(255, 255, 255, 0)', border:'0', width:'30vw', height:'12vh', marginTop:65}}><h3 style={{background:'white',borderRadius:'25px',fontSize:"18px", height:'35vh',width:'40vw',textAlign:'center',lineHeight:2, paddingBottom:'2vh', paddingTop:'.0vh', zIndex:'1'}}><img src={product.image} alt='' style={{width:'40vw', height:'23vh',objectFit:'contain' }}></img>{product.name} <br></br>{product.price}</h3></button></Link>
    )})
    let mproductslist3 = mproducts3.map((product) => { 
        return(
        <Link key={product.id} href={`/products/${product.id}`}><button onClick={() => {
            //   const bbb = new Promise ((resolve, reject) => {
            //   setTimeout(() => {
            //     resolve(n());
                
            //   }, 100)});
            //   bbb.then ((val) => {handleskclick();})
            //   .then (() => {n()})
             }} style={{background:'rgb(255, 255, 255, 0)', border:'0', width:'30vw', height:'12vh', marginTop:65}}><h3 style={{background:'white',borderRadius:'25px',fontSize:"18px", height:'35vh',width:'40vw',textAlign:'center',lineHeight:2, paddingBottom:'2vh', paddingTop:'.0vh', zIndex:'1'}}><img src={product.image} alt='' style={{width:'40vw', height:'23vh',objectFit:'contain' }}></img>{product.name} <br></br>{product.price}</h3></button></Link>
    )})
    let productslist = products.map((product) => { 
        return(
        <Link key={product.id} href={`/products/${product.id}`}><button onClick={() => {
            //   const bbb = new Promise ((resolve, reject) => {
            //   setTimeout(() => {
            //     resolve(n());
                
            //   }, 100)});
            //   bbb.then ((val) => {handleskclick();})
            //   .then (() => {n()})
             }} style={{background:'rgb(255, 255, 255, 0)', border:'0', width:'10vw', height:'12vh', marginTop:65}}><h3 style={{background:'white',borderRadius:'25px',fontSize:"18px", height:'35vh',width:'18vw',textAlign:'center',lineHeight:2, paddingBottom:'2vh', paddingTop:'.0vh', zIndex:'1'}}><img src={product.image} alt='' style={{width:'18vw', height:'26vh',objectFit:'contain' }}></img>{product.name} <br></br>{product.price}</h3></button></Link>
    )})
    let productslist1 = products1.map((product) => {
        return (
            <Link key={product.id} href={`/products/${product.id}`}><button onClick={() => {
            //   const bbb = new Promise ((resolve, reject) => {
            //   setTimeout(() => {
            //     resolve(n());
                
            //   }, 100)});
            //   bbb.then ((val) => {handleskclick();})
            //   .then (() => {n()})
             }} style={{background:'rgb(255, 255, 255, 0)', border:'0', width:'10vw', height:'12vh', marginTop:65}}><h3 style={{background:'white',borderRadius:'25px',fontSize:"18px", height:'35vh',width:'18vw',textAlign:'center',lineHeight:2, paddingBottom:'2vh', paddingTop:'.0vh', zIndex:'1'}}><img src={product.image} alt='' style={{width:'18vw', height:'26vh',objectFit:'contain' }}></img>{product.name} <br></br>{product.price}</h3></button></Link>
    )})
    return(
    <div style={{background: '#0B0E13', width: "100%", paddingBottom:'28.5%', zIndex:0}}>
    <ResponsiveAppBar></ResponsiveAppBar>
    {isDesktopOrLaptop &&<motion.div  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: .5,
                    ease: [0, 0.71, 0.2, 1.01]}}
                    style={{ }} >
    <div style={{display:'flex', justifyContent:'space-around', marginRight:'9vw'}}>
        {productslist}
    </div>
    <div style={{display:'flex', justifyContent:'space-around', marginRight:'9vw', marginTop:'4vh'}}>
        {productslist1}
    </div>
    </motion.div>}
    {isTabletOrMobile &&<motion.div  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: .5,
                    ease: [0, 0.71, 0.2, 1.01]}}
                    style={{ }} >
    <div style={{display:'flex', justifyContent:'space-around', marginRight:'9vw'}}>
        {mproductslist}
    </div>
    <div style={{display:'flex', justifyContent:'space-around', marginRight:'9vw', marginTop:'4vh'}}>
        {mproductslist1}
    </div>
    <div style={{display:'flex', justifyContent:'space-around', marginRight:'9vw',marginTop:'4vh'}}>
        {mproductslist2}
    </div>
    <div style={{display:'flex', justifyContent:'space-around', marginRight:'9vw',marginTop:'4vh'}}>
        {mproductslist3}
    </div>
    </motion.div>}
    </div>
    )
}