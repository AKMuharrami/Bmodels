"use client"
import { Modal, Box, Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import AResponsiveAppBar from '@/app/amenubar';
import { useForm, ValidationError } from '@formspree/react';
import {motion} from 'framer-motion'
import Link from 'next/link';
export default function ContactForm() {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: 'Bearer sk_test_PBDJH6vz1QK0wF3UyIWO2kLM'
    },
    body: JSON.stringify({
      amount: 1,
      currency: 'KWD',
      customer_initiated: true,
      threeDSecure: true,
      save_card: false,
      description: 'Test Description',
      metadata: {udf1: 'Metadata 1'},
      reference: {transaction: 'txn_01', order: 'ord_01'},
      receipt: {email: true, sms: true},
      customer: {
        first_name: 'test',
        middle_name: 'test',
        last_name: 'test',
        email: 'test@test.com',
        phone: {country_code: 965, number: 51234567}
      },
      source: {id: 'src_all'},
      post: {url: 'https://akmuh.dev/products/0'},
      redirect: {url: 'https://akmuh.dev/products'}
    })
  };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    const handleredirect = () => {
        setTimeout(()=> {
            window.location.href = "/products"
            
        })
    };
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const [state, handleSubmit] = useForm("xkndokwr");
    if (state.succeeded) {
        handleredirect();
        return <Modal
        open
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Thank you
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Your order has been successful
              </Typography>
            </Box>
          </Modal>
    }
    return (
        <div style={{background: 'rgb(30, 20, 50)', width: "100%", paddingBottom:'10.5%', zIndex:0, height:'100%'}}>
            <AResponsiveAppBar></AResponsiveAppBar>
            <div style={{display:'flex', justifyContent:'space-around'}}>
                {isDesktopOrLaptop &&<div>
                    <div style={{marginTop:'22.7vh', display:'flex', justifyContent:'space-around', backgroundColor:'rgba(78, 53, 36, 0.5)', padding:'5vh',paddingTop:'8vh',paddingBottom:'13vh', borderRadius:'1%', direction:'rtl'}}>
                    <img src="https://drive.google.com/thumbnail?id=1E3ijMg9JcOqpQr0cqG2EjPl522i2NErW" style={{height:'27vh', marginRight:'3vw', marginLeft:'3vw', marginTop:'2vh'}}></img>
                    <div style={{marginLeft:'5vw'}}>
                        <h2 className="cairo" style={{color:'white', textAlign:'center'}}>اطلب المجسم</h2>
                        <br></br>
                        <form onSubmit={handleSubmit} >
                            <div style={{display:'flex', justifyContent:'center'}}>
                                <input id='Prod' type="hidden" name="Prod" value="1" style={{marginLeft:'3vw', height:'2.5vh'}}></input>
                                <label  for="Name" style={{color:'white', fontSize:'125%'}}>الاسم </label>
                                <input id='Name' type="text" required name="Name" style={{marginLeft:'3vw', height:'2.5vh', marginRight:'1vw'}}></input>
                                <label for='Tel' style={{color:'white', fontSize:'125%'}}>الهاتف </label>
                                <input id='Tel' required type="tel" name="Tel" style={{marginLeft:'3vw', marginRight:'1vw'}}></input>
                                <label for="Email" style={{color:'white', fontSize:'125%'}}>الإيميل </label>
                                <input id="Email" required name="Email" type='email' style={{marginLeft:'3vw', marginRight:'1vw'}}></input>
                            </div>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            {/* <label For="Gloc" style={{color:'white', fontSize:'125%'}}>رابط الموقع (جوجل ميت إن وجد) </label> */}
                            {/* <input id="Gloc" name="Gloc" type="url" style={{ marginRight:'3vw',height:'2.5vh', marginLeft:'1vw'}}></input> */}
                            <label For='School' style={{color:'white', fontSize:'125%', marginRight:'-8%'}}>المدرسة </label>
                            <input id='School' name="School" required type='text' style={{marginLeftt:'3vw', height:'2.5vh', marginRight:'1vw'}}></input>
                            </div>
                            <br></br>
                            {/* <br></br> */}
                            {/* <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For="Town" style={{color:'white', fontSize:'125%'}}>الحارة </label>
                            <input type='text' required  name="Town" id='Town' style={{marginRight:'3vw', marginLeft:'1vw'}}></input>
                            <label For='POC' style={{color:'white', fontSize:'125%'}}>Place of interest 
                            (near) </label>
                            <input id='POC' name="POC" type='text' style={{marginRight:'3vw', marginLeft:'1vw'}} ></input>
                            </div> */}
                            {/* <br></br> */}
                            <div style={{textAlign:'center'}}>
                            <input style={{height:'4vh', width:'8vw'}} type='submit'></input>
                        </div>
                    </form>
                    <h3 className="cairo" style={{color:'white', marginRight:'26%', marginTop:'5%'}}>*سوف يتم التواصل معك خلال 12 ساعة لتأكيد وإكمال عملية الشراء</h3>
                </div>
              </div>
              {/* <h4 style={{color:'white',marginLeft:'4.5vw'}}>*Your product will be delieverd within a week In Sha Allah, and payment will be received on deleivery.</h4> */}
              </div>}
              {isTabletOrMobile && <div> <div style={{marginTop:'13vh', backgroundColor:'rgba(78, 53, 36, 0.5)', padding:'5vh',paddingTop:'3vh',paddingBottom:'3vh', borderRadius:'1%'}}>
                    <img src="https://drive.google.com/thumbnail?id=1E3ijMg9JcOqpQr0cqG2EjPl522i2NErW" style={{marginLeft: "auto", marginRight: "auto",height:'18vh', display:'block'}}></img>
                    <div style={{marginLeft:'3vw', direction:'rtl'}}>
                        <h2 className="cairo" style={{color:'white', textAlign:'center', fontSize:'3vh'}}>اطلب المجسم</h2>
                        <br></br>
                        <form onSubmit={handleSubmit} style={{marginTop:'-5%'}}>
                            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                                <input id='Prod' type="hidden" name="Prod" value="1" style={{marginLeft:'3vw', height:'2.5vh'}}></input>
                                <label for="Name" style={{color:'white', fontSize:'100%'}}>الاسم </label>
                                <input id='Name' type="text" required name="Name" style={{marginLeft:'3vw', height:'2vh', width:'25vw', marginRight:'1vw'}}></input>
                                <label for='Tel' style={{color:'white', fontSize:'100%'}}>الرقم </label>
                                <input id='Tel' required type="tel" name="Tel" style={{marginLeft:'3vw', width:'25vw', marginRight:'1vw'}}></input>

                            </div>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label for="Email" style={{color:'white', fontSize:'100%'}}>الإيميل </label>
                            <input id="Email" name="Email" type='email'style={{marginLeft:'3vw', height:'2vh', width:'25vw', marginRight:'1vw'}}></input>
                            <label For='School' style={{color:'white', fontSize:'100%'}}>  المدرسة </label>
                            <input id='School' required name="School" type='text' style={{marginLeft:'3vw', height:'2vh', width:'11vw', marginRight:'1vw'}}></input>
                            {/* <label For="Town" style={{color:'white', fontSize:'100%'}}>Town </label>
                            <input type='text' required name="Town" id='Town' style={{marginRight:'3vw', height:'2vh', width:'11vw', marginLeft:'1vw'}}></input> */}
                            </div>
                            <br></br>
                            {/* <div style={{display:'flex',justifyContent:'center'}}>
                            <label For='POC' style={{color:'white', fontSize:'100%'}}>Place of interest 
                            (near you) </label>
                            <input id='POC' name="POC" type='text' style={{ height:'2vh', marginLeft:'1vw'}}></input>
                            </div>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For="Gloc" style={{color:'white', fontSize:'100%'}}>Google Maps Location link (if available) </label>
                            <input id="Gloc" name="Gloc" type="url" style={{ height:'2vh', width:'20vw',marginLeft:'1vw'}}></input>
                            </div> */}
                            <div style={{textAlign:'center'}}>
                            <input style={{height:'4vh', width:'18vw'}} type='submit'></input>
                        </div>
                    </form>
                    <h3 className="cairo" style={{color:'white', marginRight:'10%', marginTop:'5%'}}>*سوف يتم التواصل معك خلال 12 ساعة لتأكيد وإكمال عملية الشراء</h3>
                </div>
                </div>
                {/* <h6 style={{color:'white',marginLeft:'4.5vw'}}>*Your product will be delieverd within a week In Sha Allah, and payment will be received on deleivery.</h6> */}
              </div>}
              
            </div>
            {isTabletOrMobile &&<div style={{background: 'rgb(30, 20, 50)', width: "100%", paddingBottom:'35.35%', zIndex:0, height:'100%'}}/>}
        </div>
    )
}