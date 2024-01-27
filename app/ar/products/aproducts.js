"use client"
import { Modal, Box, Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import AresponsiveAppBar from "../amenubar";
import {motion} from 'framer-motion'
import Link from 'next/link';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQueryy from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import car1 from "@/app/ar/car1.png"
let mproducts= [
  {
    id:0,
    image:"https://drive.google.com/thumbnail?id=12TxnMRKDS9YXSz4bBRz_bNg1yfCQmepc",
    name:"سيارة - 1",
    price:"5-7 Omr",
    animationn:'/ar/products/model/Acar1',
    staticc:'/ar/products/model/car1',
    no:0
},
    {id:1,
        image:"https://drive.google.com/thumbnail?id=1vv-6WvJ2gX1sTkPDtDUkzzhg5YQz4e1g",
        name:"سيارة - 2",
        price:"5-7 Omr",
        animationn:'/ar/products/model/Acar2',
        staticc:'/ar/products/model/car2',
        no:1
    }]

        let mproducts1= [{id:2,
          image:"https://drive.google.com/thumbnail?id=10LRyosgcNyR3WOCoBKBMY7taidRGz2X8",
          name:"سيارة - 3",
          price:"5-7 Omr",
          animationn:'/ar/products/model/Acar3',
          staticc:'/ar/products/model/car3',
          no:2
      },
      {id:3,
          image:"https://drive.google.com/thumbnail?id=1mR_wM7-tXYY8mMF5qho4skMtTehWn59v",
          name:"سيارة - 4",
          price:"5-7 Omr",
          animationn:'/ar/products/model/Acar4',
          staticc:'/ar/products/model/car4',
          no:3
      }]
        let mproducts2= [{id:4,
          image:"https://drive.google.com/thumbnail?id=14pyiOLXAqFFS9evwJB49MvGaQo2dgRMY",
          name:"سيارة - 5",
          price:"5-7 Omr",
          animationn:'/ar/products/model/Acar5',
          staticc:'/ar/products/model/car5',
          no:4
      },
      {id:5,
          image:"https://drive.google.com/thumbnail?id=1a-N4CeBiW1VheJQtMGV8x0yfW3XGjwZh",
          name:"سيارة - 6",
          price:"5-7 Omr",
          animationn:'/ar/products/model/Acar6',
          staticc:'/ar/products/model/car6',
          no:5
      }]
        let mproducts3= [{id:6,
          image:"https://drive.google.com/thumbnail?id=1E3ijMg9JcOqpQr0cqG2EjPl522i2NErW",
          name:"طيارة - 1",
          price:"5-7 Omr",
          animationn:'/ar/products/model/AAirp1',
          staticc:'/ar/products/model/Airp1',
          no:6
      },
      {id:7,
          image:"https://drive.google.com/thumbnail?id=1hJsRMDUlprUZGOTAELrYqbiM7t-_Tuj9",
          name:"طيارة - 2",
          price:"5-7 Omr",
          animationn:'/ar/products/model/AAirp2',
          staticc:'/ar/products/model/Airp2',
          no:7
      }]
        let mproducts4= [{id:8,
          image:"https://drive.google.com/thumbnail?id=1T2oBWZqljLTfL1C9B5GnFijpkhSLpHIg",
          name:"طيارة - 3",
          price:"5-7 Omr",
          animationn:'/ar/products/model/AAirp3',
          staticc:'/ar/products/model/Airp3',
          no:8
      },
      {id:9,
          image:"https://drive.google.com/thumbnail?id=1MjhtuOo35ER8xRyGcenIze5nsij_zeky",
          name:"صاروخ - 1",
          price:"5-7 Omr",
          animationn:'/ar/products/model/ARoc1',
          staticc:'/ar/products/model/Roc1',
          no:9
      }]
      let mproducts5= [{id: 10,
        image:"https://drive.google.com/thumbnail?id=1nHXS2Fc0DnOfyDwv_UFRnsryVT8VpoFt",
        name:"بيت - 1",
        price:"5 Omr",
        staticc:'house',
        no:11
    },
    {id:11,
          image:"https://drive.google.com/thumbnail?id=1h3gDrExYXaf8cyk2bP5fQYySpOn642f7",
          name:"صاروخ - 2",
          price:"5 Omr",
          staticc:'Roc2',
          no:12
      }]
      let mproducts6= [
        {id:10,
          image:"https://drive.google.com/thumbnail?id=1lqU0Ree1ovzFP-mPxfcJn7x7mOzG22ON",
          name:"سمكة",
          price:"5-7 Omr",
          animationn:'/ar/products/model/Afish',
          staticc:'/ar/products/model/fish',
          no:10
      }
      ]
let products= [
    {
        id:0,
        image:"https://drive.google.com/thumbnail?id=12TxnMRKDS9YXSz4bBRz_bNg1yfCQmepc",
        name:"سيارة - 1",
        price:"5-7 Omr",
        animationn:'/ar/products/model/Acar1',
        staticc:'/ar/products/model/car1',
        no:0
    },
        {id:1,
            image:"https://drive.google.com/thumbnail?id=1vv-6WvJ2gX1sTkPDtDUkzzhg5YQz4e1g",
            name:"سيارة - 2",
            price:"5-7 Omr",
            animationn:'/ar/products/model/Acar2',
            staticc:'/ar/products/model/car2',
            no:1
        },
        {id:2,
            image:"https://drive.google.com/thumbnail?id=10LRyosgcNyR3WOCoBKBMY7taidRGz2X8",
            name:"سيارة - 3",
            price:"5-7 Omr",
            animationn:'/ar/products/model/Acar3',
            staticc:'/ar/products/model/car3',
            no:2
        },
        {id:3,
            image:"https://drive.google.com/thumbnail?id=1mR_wM7-tXYY8mMF5qho4skMtTehWn59v",
            name:"سيارة - 4",
            price:"5-7 Omr",
            animationn:'/ar/products/model/Acar4',
            staticc:'/ar/products/model/car4',
            no:3
        },


        ];
        let products1= [
                {id:4,
                    image:"https://drive.google.com/thumbnail?id=14pyiOLXAqFFS9evwJB49MvGaQo2dgRMY",
                    name:"سيارة - 5",
                    price:"5-7 Omr",
                    animationn:'/ar/products/model/Acar5',
                    staticc:'/ar/products/model/car5',
                    no:4
                },
                {id:5,
                    image:"https://drive.google.com/thumbnail?id=1a-N4CeBiW1VheJQtMGV8x0yfW3XGjwZh",
                    name:"سيارة - 6",
                    price:"5-7 Omr",
                    animationn:'/ar/products/model/Acar6',
                    staticc:'/ar/products/model/car6',
                    no:5
                },
                {id:6,
                    image:"https://drive.google.com/thumbnail?id=1E3ijMg9JcOqpQr0cqG2EjPl522i2NErW",
                    name:"طيارة - 1",
                    price:"5-7 Omr",
                    animationn:'/ar/products/model/AAirp1',
                    staticc:'/ar/products/model/Airp1',
                    no:6
                },
                {id:7,
                    image:"https://drive.google.com/thumbnail?id=1hJsRMDUlprUZGOTAELrYqbiM7t-_Tuj9",
                    name:"طيارة - 2",
                    price:"5-7 Omr",
                    animationn:'/ar/products/model/AAirp2',
                    staticc:'/ar/products/model/Airp2',
                    no:7
                },
        
        
                ];
                let products2= [
                    {id:8,
                        image:"https://drive.google.com/thumbnail?id=1T2oBWZqljLTfL1C9B5GnFijpkhSLpHIg",
                        name:"طيارة - 3",
                        price:"5-7 Omr",
                        animationn:'/ar/products/model/AAirp3',
                        staticc:'/ar/products/model/Airp3',
                        no:8
                    },
                    {id:9,
                        image:"https://drive.google.com/thumbnail?id=1MjhtuOo35ER8xRyGcenIze5nsij_zeky",
                        name:"صاروخ - 1",
                        price:"5-7 Omr",
                        animationn:'/ar/products/model/ARoc1',
                        staticc:'/ar/products/model/Roc1',
                        no:9
                    },
                    {id:10,
                      image:"https://drive.google.com/thumbnail?id=1lqU0Ree1ovzFP-mPxfcJn7x7mOzG22ON",
                      name:"سمكة",
                      price:"5-7 Omr",
                      animationn:'/ar/products/model/Afish',
                      staticc:'/ar/products/model/fish',
                      no:10
                  },
                    
                    
                    ];
                    let products3= [
                        
                      {id: 11,
                        image:"https://drive.google.com/thumbnail?id=1nHXS2Fc0DnOfyDwv_UFRnsryVT8VpoFt",
                        name:"بيت - 1",
                        price:"5 Omr",
                        staticc:'house',
                        no:11
                    },
                    {id:12,
                          image:"https://drive.google.com/thumbnail?id=1h3gDrExYXaf8cyk2bP5fQYySpOn642f7",
                          name:"صاروخ - 2",
                          price:"5 Omr",
                          staticc:'Roc2',
                          no:12
                      },
                
                
                        ];
export default function Productss() {
    const [open0, setOpen0] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);
    const [open6, setOpen6] = React.useState(false);
    const [open7, setOpen7] = React.useState(false);
    const theme = useTheme();
    // const fullScreen = useMediaQueryy(theme.breakpoints.down('md'));
    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
          padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
          padding: theme.spacing(1),
        },
      }));
  
    const handleClickOpen0 = () => {
      setOpen0(true);
    };
  
    const handleClose0 = () => {
      setOpen0(false);
    };
    const handleClickOpen1 = () => {
      setOpen1(true);
    };
  
    const handleClose1 = () => {
      setOpen1(false);
    };
    const handleClickOpen2 = () => {
      setOpen2(true);
    };
  
    const handleClose2 = () => {
      setOpen2(false);
    };
    const handleClickOpen3 = () => {
      setOpen3(true);
    };
  
    const handleClose3 = () => {
      setOpen3(false);
    };
  
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
      let mproductslist = mproducts.map((product) => { 
        return(
        // <Link key={product.id} href={`/products/${product.id}`}>
          <button style={{background:'rgb(255, 255, 255, 0)', border:'0', width:'40vw', height:'40vh', marginTop:65, marginBottom:'-10%', marginLeft:'10%'}}><h3 className="cairo" style={{background:'rgba(0, 0, 20, 0.4)',WebkitTextStroke: '.3  px black' , color:'white',borderRadius:'25px',fontSize:"13px", height:'35vh',width:'35vw',textAlign:'center',lineHeight:2, paddingBottom:'1vh', paddingTop:'.0vh', zIndex:'1'}}><img src={product.image} alt='' style={{width:'30vw', height:'20vh',objectFit:'contain', marginBottom:'-7%'}}></img>{product.name} <br></br><a style={{color:'darkcyan'}} href={`${product.staticc}`}>المجسم - 5 ريال</a> <br></br>
          <a style={{color:'darkcyan'}} href={`${product.animationn}`}>المجسم مع الحركة - 7 ريال</a></h3>
          </button>
    )})
    let mproductslist1 = mproducts1.map((product) => { 
        return(
        // <Link key={product.id} href={`/products/${product.id}`}>
          <button style={{background:'rgb(255, 255, 255, 0)', border:'0', width:'40vw', height:'40vh', marginTop:65, marginBottom:'-10%', marginLeft:'10%'}}><h3 className="cairo" style={{background:'rgba(0, 0, 20, 0.4)',WebkitTextStroke: '.3  px black' , color:'white',borderRadius:'25px',fontSize:"13px", height:'35vh',width:'35vw',textAlign:'center',lineHeight:2, paddingBottom:'1vh', paddingTop:'.0vh', zIndex:'1'}}><img src={product.image} alt='' style={{width:'30vw', height:'20vh',objectFit:'contain', marginBottom:'-7%'}}></img>{product.name} <br></br><a style={{color:'darkcyan'}} href={`${product.staticc}`}>المجسم - 5 ريال</a> <br></br>
          <a style={{color:'darkcyan'}} href={`${product.animationn}`}>المجسم مع الحركة - 7 ريال</a></h3>
          </button>
    )})
    let mproductslist2 = mproducts2.map((product) => { 
        return(
        // <Link key={product.id} href={`/products/${product.id}`}>
          <button style={{background:'rgb(255, 255, 255, 0)', border:'0', width:'40vw', height:'40vh', marginTop:65, marginBottom:'-10%', marginLeft:'10%'}}><h3 className="cairo" style={{background:'rgba(0, 0, 20, 0.4)',WebkitTextStroke: '.3  px black' , color:'white',borderRadius:'25px',fontSize:"13px", height:'35vh',width:'35vw',textAlign:'center',lineHeight:2, paddingBottom:'1vh', paddingTop:'.0vh', zIndex:'1'}}><img src={product.image} alt='' style={{width:'30vw', height:'20vh',objectFit:'contain', marginBottom:'-7%'}}></img>{product.name} <br></br><a style={{color:'darkcyan'}} href={`${product.staticc}`}>المجسم - 5 ريال</a> <br></br>
          <a style={{color:'darkcyan'}} href={`${product.animationn}`}>المجسم مع الحركة - 7 ريال</a></h3>
          </button>
    )})
    let mproductslist3 = mproducts3.map((product) => { 
        return(
        // <Link key={product.id} href={`/products/${product.id}`}>
          <button style={{background:'rgb(255, 255, 255, 0)', border:'0', width:'40vw', height:'40vh', marginTop:65, marginBottom:'-10%', marginLeft:'10%'}}><h3 className="cairo" style={{background:'rgba(0, 0, 20, 0.4)',WebkitTextStroke: '.3  px black' , color:'white',borderRadius:'25px',fontSize:"13px", height:'35vh',width:'35vw',textAlign:'center',lineHeight:2, paddingBottom:'1vh', paddingTop:'.0vh', zIndex:'1'}}><img src={product.image} alt='' style={{width:'30vw', height:'20vh',objectFit:'contain', marginBottom:'-7%'}}></img>{product.name} <br></br><a style={{color:'darkcyan'}} href={`${product.staticc}`}>المجسم - 5 ريال</a> <br></br>
          <a style={{color:'darkcyan'}} href={`${product.animationn}`}>المجسم مع الحركة - 7 ريال</a></h3>
          </button>
    )})
    let mproductslist4 = mproducts4.map((product) => { 
      return(
      // <Link key={product.id} href={`/products/${product.id}`}>
        <button style={{background:'rgb(255, 255, 255, 0)', border:'0', width:'40vw', height:'40vh', marginTop:65, marginBottom:'-10%', marginLeft:'10%'}}><h3 className="cairo" style={{background:'rgba(0, 0, 20, 0.4)',WebkitTextStroke: '.3  px black' , color:'white',borderRadius:'25px',fontSize:"13px", height:'35vh',width:'35vw',textAlign:'center',lineHeight:2, paddingBottom:'1vh', paddingTop:'.0vh', zIndex:'1'}}><img src={product.image} alt='' style={{width:'30vw', height:'20vh',objectFit:'contain', marginBottom:'-7%'}}></img>{product.name} <br></br><a style={{color:'darkcyan'}} href={`${product.staticc}`}>المجسم - 5 ريال</a> <br></br>
        <a style={{color:'darkcyan'}} href={`${product.animationn}`}>المجسم مع الحركة - 7 ريال</a></h3>
        </button>
  )})
  let mproductslist5 = mproducts5.map((product) => { 
    return(
    // <Link key={product.id} href={`/products/${product.id}`}>
      <button style={{background:'rgb(255, 255, 255, 0)', border:'0', width:'40vw', height:'40vh', marginTop:65, marginBottom:'-10%', marginLeft:'10%'}}><h3 className="cairo" style={{background:'rgba(0, 0, 20, 0.4)',WebkitTextStroke: '.3  px black' , color:'white',borderRadius:'25px',fontSize:"13px", height:'35vh',width:'35vw',textAlign:'center',lineHeight:2, paddingBottom:'0vh', paddingTop:'.0vh', zIndex:'1'}}><img src={product.image} alt='' style={{width:'30vw', height:'20vh',objectFit:'contain', marginBottom:'-7%'}}></img>{product.name} <br></br><a style={{color:'darkcyan'}} href={`${product.staticc}`}>المجسم - 5 ريال</a></h3>
      </button>
)})
let mproductslist6 = mproducts6.map((product) => { 
  return(
  // <Link key={product.id} href={`/products/${product.id}`}>
    <button style={{background:'rgb(255, 255, 255, 0)', border:'0', width:'30vw', height:'40vh', marginTop:65, marginBottom:'-10%', marginLeft:'10%'}}><h3 className="cairo" style={{background:'rgba(0, 0, 20, 0.4)',WebkitTextStroke: '.3  px black' , color:'white',borderRadius:'25px',fontSize:"13px", height:'35vh',width:'35vw',textAlign:'center',lineHeight:2, paddingBottom:'0vh', paddingTop:'.0vh', zIndex:'1'}}><img src={product.image} alt='' style={{width:'30vw', height:'20vh',objectFit:'contain', marginBottom:'-7%'}}></img>{product.name} <br></br><a style={{color:'darkcyan'}} href={`${product.staticc}`}>المجسم - 5 ريال</a> <br></br>
    <a style={{color:'darkcyan'}} href={`${product.animationn}`}>المجسم مع الحركة - 7 ريال</a></h3>
    </button>
)})
    let productslist = products.map((product) => { 
      console.log(product.no)
        return(
        // <Link key={product.id} href={`/products/${product.id}`}>
            <button key={product.id}  style={{background:'rgb(255, 255, 255, 0)', border:'10px',borderColor:'black', width:'10vw', height:'12vh', marginTop:65, marginBottom:"10%"}}>
              
                <h3 className="cairo" style={{background:'rgba(0, 0, 20, 0.4)',WebkitTextStroke: '.3  px black' , color:'white',borderRadius:'25px',fontSize:"18px", height:'35vh',width:'18vw',textAlign:'center',lineHeight:2, paddingBottom:'7vh', paddingTop:'.0vh', zIndex:'1', marginTop:'4vh'}}><img src={product.image} alt='' style={{width:'18vw', height:'26vh',objectFit:'contain', marginBottom:'-3vh'}}></img>{product.name} <br></br><a style={{color:'darkcyan'}} href={`${product.staticc}`}>المجسم - 5 ريال</a> <br></br>
                <a style={{color:'darkcyan'}} href={`${product.animationn}`}>المجسم مع الحركة - 7 ريال</a></h3>
                </button>
    )})
    let productslist1 = products1.map((product) => {
        return (
            // <Link key={product.id} href={`/products/${product.id}`}>
                <button onClick={handleClickOpen1} style={{background:'rgb(255, 255, 255, 0)', border:'10px',borderColor:'black', width:'10vw', height:'12vh', marginTop:65, marginBottom:"10%"}}>
          
                <h3 style={{background:'rgba(0, 0, 20, 0.4)',WebkitTextStroke: '.3  px black', color:'white',borderRadius:'25px',fontSize:"18px", height:'35vh',width:'18vw',textAlign:'center',lineHeight:2, paddingBottom:'7vh', paddingTop:'.0vh', zIndex:'1'}}><img src={product.image} alt='' style={{width:'18vw', height:'26vh',objectFit:'contain', marginBottom:'-3vh' }}></img>{product.name} <br></br><a style={{color:'darkcyan'}} href={`${product.staticc}`}>المجسم - 5 ريال</a> <br></br>
                <a style={{color:'darkcyan'}} href={`${product.animationn}`}>المجسم مع الحركة - 7 ريال</a></h3></button>
    )})
    let productslist2 = products2.map((product) => {
        return (
            // <Link key={product.id} href={`/products/${product.id}`}>
<button onClick={handleClickOpen2} style={{background:'rgb(255, 255, 255, 0)', border:'10px',borderColor:'black', width:'10vw', height:'12vh', marginTop:65, marginBottom:"10%"}}>

                <h3 style={{background:'rgba(0, 0, 20, 0.4)',WebkitTextStroke: '.3  px black', color:'white',borderRadius:'25px',fontSize:"18px", height:'35vh',width:'18vw',textAlign:'center',lineHeight:2, paddingBottom:'7vh', paddingTop:'.0vh', zIndex:'1'}}><img src={product.image} alt='' style={{width:'18vw', height:'26vh',objectFit:'contain', marginBottom:'-3vh' }}></img>{product.name} <br></br><a style={{color:'darkcyan'}} href={`${product.staticc}`}>المجسم - 5 ريال</a> <br></br>
                <a style={{color:'darkcyan'}} href={`${product.animationn}`}>المجسم مع الحركة - 7 ريال</a></h3></button>
    )})
    let productslist3 = products3.map((product) => {
        return (
            // <Link key={product.id} href={`/products/${product.id}`}>
      <button onClick={handleClickOpen3} style={{background:'rgb(255, 255, 255, 0)', border:'10px',borderColor:'black', width:'10vw', height:'12vh', marginTop:65, marginBottom:"10%"}}>

                <h3 style={{background:'rgba(0, 0, 20, 0.4)',WebkitTextStroke: '.3  px black', color:'white',borderRadius:'25px',fontSize:"18px", height:'35vh',width:'18vw',textAlign:'center',lineHeight:2, paddingBottom:'3vh', paddingTop:'.0vh', zIndex:'1'}}><img src={product.image} alt='' style={{width:'18vw', height:'26vh',objectFit:'contain', marginBottom:'-3vh' }}></img>{product.name} <br></br><a style={{color:'darkcyan'}} href={`${product.staticc}`}>المجسم - 5 ريال</a> <br></br>
                </h3></button>
    )})
    return(
    <div style={{background: 'rgb(30, 20, 50)', width: "100%", paddingBottom:'28.5%', zIndex:0}}>
    <AresponsiveAppBar></AresponsiveAppBar>
    {isDesktopOrLaptop &&<motion.div  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: .5,
                    ease: [0, 0.71, 0.2, 1.01]}}
                    style={{ }} >
    <div style={{display:'flex', justifyContent:'space-around', marginLeft:'9vw', direction:'rtl'}}>
        {productslist}
    </div>
    <div style={{display:'flex', justifyContent:'space-around', marginLeft:'9vw', direction:'rtl', marginTop:'10vh'}}>
        {productslist1}
    </div>
    <div style={{display:'flex', justifyContent:'space-evenly', marginLeft:'9vw', direction:'rtl', marginTop:'10vh'}}>
        {productslist2}
    </div>
    <div style={{display:'flex', justifyContent:'space-evenly', marginLeft:'9vw', direction:'rtl', marginTop:'10vh'}}>
        {productslist3}
    </div>
    </motion.div>}
    {isTabletOrMobile &&<motion.div  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: .5,
                    ease: [0, 0.71, 0.2, 1.01]}}
                    style={{ }} >
    <div style={{display:'flex', justifyContent:'space-around', marginRight:'4vw', direction:'rtl'}}>
        {mproductslist}
    </div>
    <div style={{display:'flex', justifyContent:'space-around', marginRight:'4vw', marginTop:'-5vh', direction:'rtl'}}>
        {mproductslist1}
    </div>
    <div style={{display:'flex', justifyContent:'space-around', marginRight:'4vw',marginTop:'-5vh', direction:'rtl'}}>
        {mproductslist2}
    </div>
    <div style={{display:'flex', justifyContent:'space-around', marginRight:'4vw',marginTop:'-5vh', direction:'rtl'}}>
        {mproductslist3}
    </div>
    <div style={{display:'flex', justifyContent:'space-around', marginRight:'4vw',marginTop:'-5vh', direction:'rtl'}}>
        {mproductslist4}
    </div>
    <div style={{display:'flex', justifyContent:'space-around', marginRight:'4vw',marginTop:'-5vh', direction:'rtl'}}>
        {mproductslist5}
    </div>
    <div style={{display:'flex', justifyContent:'center',marginTop:'-5vh', direction:'rtl'}}>
        {mproductslist6}
    </div>
    </motion.div>}
    {isTabletOrMobile &&<div style={{background: 'rgb(30, 20, 50)', width: "100%", paddingBottom:'170%', zIndex:0, height:'100%'}}/>}
    </div>
    )
}