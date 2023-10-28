"use client"
import { Modal, Box, Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import ResponsiveAppBar from '@/app/menubar';
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
      post: {url: 'https://kiwi-14da.vercel.app/products/0'},
      redirect: {url: 'https://kiwi-14da.vercel.app/products/'}
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
    const [state, handleSubmit] = useForm("mvojvawp");
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
        <div style={{background: '#0B0E13', width: "100%", paddingBottom:'18.5%', zIndex:0}}>
            <ResponsiveAppBar></ResponsiveAppBar>
            <div style={{display:'flex', justifyContent:'space-around'}}>
                {isDesktopOrLaptop &&<div>
                    <div style={{marginTop:'10vh', display:'flex', justifyContent:'space-around', backgroundColor:'#1D2431', padding:'5vh',paddingTop:'13vh',paddingBottom:'13vh', borderRadius:'1%'}}>
                    <img src="https://canvascontent.krea.ai/c5251eff-6e8a-4fc6-95a3-b9a5f6617583.png" style={{height:'40vh', marginLeft:'5vw'}}></img>
                    <div style={{marginLeft:'5vw'}}>
                        <h2 style={{color:'white', textAlign:'center'}}>Issue Order</h2>
                        <br></br>
                        <form onSubmit={handleSubmit} >
                            <div style={{display:'flex', justifyContent:'center'}}>
                                <input id='Prod' type="hidden" name="Prod" value="1" style={{marginRight:'3vw', height:'2.5vh'}}></input>
                                <label for="Name" style={{color:'white', fontSize:'125%'}}>Name </label>
                                <input id='Name' type="text" required name="Name" style={{marginRight:'3vw', height:'2.5vh', marginLeft:'1vw'}}></input>
                                <label for='Tel' style={{color:'white', fontSize:'125%'}}>Telephone </label>
                                <input id='Tel' required type="tel" name="Tel" style={{marginRight:'3vw', marginLeft:'1vw'}}></input>
                                <label for="Email" style={{color:'white', fontSize:'125%'}}>Email </label>
                                <input id="Email" required name="Email" type='email' style={{marginRight:'3vw', marginLeft:'1vw'}}></input>
                            </div>
                            <br></br>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For="Gloc" style={{color:'white', fontSize:'125%'}}>Google Maps Location link (if available) </label>
                            <input id="Gloc" name="Gloc" type="url" style={{ marginRight:'3vw',height:'2.5vh', marginLeft:'1vw'}}></input>
                            <label For='City' style={{color:'white', fontSize:'125%'}}>City </label>
                            <input id='City' name="City" required type='text' style={{marginRight:'3vw', height:'2.5vh', marginLeft:'1vw'}}></input>
                            </div>
                            <br></br>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For="Town" style={{color:'white', fontSize:'125%'}}>Town </label>
                            <input type='text' required  name="Town" id='Town' style={{marginRight:'3vw', marginLeft:'1vw'}}></input>
                            <label For='POC' style={{color:'white', fontSize:'125%'}}>Place of interest 
                            (near) </label>
                            <input id='POC' name="POC" type='text' style={{marginRight:'3vw', marginLeft:'1vw'}} ></input>
                            </div>
                            <br></br>
                            <div style={{textAlign:'center'}}>
                            <input style={{height:'4vh', width:'8vw'}} type='submit'></input>
                        </div>
                    </form>
                </div>
              </div>
              <h4 style={{color:'white',marginLeft:'4.5vw'}}>*Your product will be delieverd within a week In Sha Allah, and payment will be received on deleivery.</h4>
              </div>}
              {isTabletOrMobile && <div> <div style={{marginTop:'10vh', backgroundColor:'#1D2431', padding:'5vh',paddingTop:'3vh',paddingBottom:'3vh', borderRadius:'1%'}}>
                    <img src="https://canvascontent.krea.ai/c5251eff-6e8a-4fc6-95a3-b9a5f6617583.png" style={{height:'35vh', marginLeft:'21vw'}}></img>
                    <div style={{marginLeft:'5vw'}}>
                        <h2 style={{color:'white', textAlign:'center'}}>Issue Order</h2>
                        <br></br>
                        <form onSubmit={() => {
                          fetch('https://api.tap.company/v2/charges', options)
                          .then(response => response.json())
                          .then(response => console.log(response))
                          .catch(err => console.error(err));
                      
                        }} >
                            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                                <input id='Prod' type="hidden" name="Prod" value="1" style={{marginRight:'3vw', height:'2.5vh'}}></input>
                                <label for="Name" style={{color:'white', fontSize:'100%'}}>Name </label>
                                <input id='Name' type="text" required name="Name" style={{marginRight:'3vw', height:'2vh', width:'25vw', marginLeft:'1vw'}}></input>
                                <label for='Tel' style={{color:'white', fontSize:'100%'}}>Telephone </label>
                                <input id='Tel' required type="tel" name="Tel" style={{marginRight:'3vw', width:'25vw', marginLeft:'1vw'}}></input>

                            </div>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                            <label for="Email" style={{color:'white', fontSize:'100%'}}>Email </label>
                            <input id="Email" name="Email" type='email'style={{marginRight:'3vw', height:'2vh', width:'25vw', marginLeft:'1vw'}}></input>
                            <label For='City' style={{color:'white', fontSize:'100%'}}>  City </label>
                            <input id='City' required name="City" type='text' style={{marginRight:'3vw', height:'2vh', width:'11vw', marginLeft:'1vw'}}></input>
                            <label For="Town" style={{color:'white', fontSize:'100%'}}>Town </label>
                            <input type='text' required name="Town" id='Town' style={{marginRight:'3vw', height:'2vh', width:'11vw', marginLeft:'1vw'}}></input>
                            </div>
                            <br></br>
                            <div style={{display:'flex',justifyContent:'center'}}>
                            <label For='POC' style={{color:'white', fontSize:'100%'}}>Place of interest 
                            (near you) </label>
                            <input id='POC' name="POC" type='text' style={{ height:'2vh', marginLeft:'1vw'}}></input>
                            </div>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For="Gloc" style={{color:'white', fontSize:'100%'}}>Google Maps Location link (if available) </label>
                            <input id="Gloc" name="Gloc" type="url" style={{ height:'2vh', width:'20vw',marginLeft:'1vw'}}></input>
                            </div>
                            <br></br>
                            <div style={{textAlign:'center'}}>
                            <input style={{height:'4vh', width:'18vw'}} type='submit'></input>
                        </div>
                    </form>
                </div>
                </div>
                <h6 style={{color:'white',marginLeft:'4.5vw'}}>*Your product will be delieverd within a week In Sha Allah, and payment will be received on deleivery.</h6>
              </div>}
            </div>
        </div>
    )
}