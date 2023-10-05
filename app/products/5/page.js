"use client"
import ResponsiveAppBar from '@/app/menubar';
import { useForm, ValidationError } from '@formspree/react';
import {motion} from 'framer-motion'
import Link from 'next/link';
export default function ContactForm() {
    const [state, handleSubmit] = useForm("mvojvawp");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    

    return (
        <div style={{background: '#0B0E13', width: "100%", paddingBottom:'18.5%', zIndex:0}}>
            <ResponsiveAppBar></ResponsiveAppBar>
            <div style={{display:'flex', justifyContent:'space-around'}}>
                <div style={{marginTop:'10vh', display:'flex', justifyContent:'space-around', backgroundColor:'#1D2431', padding:'5vh',paddingTop:'13vh',paddingBottom:'13vh', borderRadius:'1%'}}>
                    <img src="https://canvascontent.krea.ai/c5251eff-6e8a-4fc6-95a3-b9a5f6617583.png" style={{height:'40vh', marginLeft:'5vw'}}></img>
                    <div style={{marginLeft:'5vw'}}>
                        <h2 style={{color:'white', textAlign:'center'}}>Issue Order</h2>
                        <br></br>
                        <form onSubmit={handleSubmit} >
                            <div style={{display:'flex', justifyContent:'center'}}>
                                <input id='Prod' type="hidden" name="Prod" value="1" style={{marginRight:'3vw', height:'2.5vh'}}></input>
                                <label for="Name" style={{color:'white', fontSize:'125%'}}>Name </label>
                                <input id='Name' type="text" name="Name" style={{marginRight:'3vw', height:'2.5vh'}}></input>
                                <label for='Tel' style={{color:'white', fontSize:'125%'}}>Telephone </label>
                                <input id='Tel' type="tel" name="Tel" style={{marginRight:'3vw'}}></input>
                                <label for="Email" style={{color:'white', fontSize:'125%'}}>Email </label>
                                <input id="Email" name="Email" type='email'></input>
                            </div>
                            <br></br>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                            <label For="Gloc" style={{color:'white', fontSize:'125%'}}>Google Maps Location link (if available) </label>
                            <input id="Gloc" name="Gloc" type="url" style={{ height:'2.5vh'}}></input>
                            <label For='City' style={{color:'white', fontSize:'125%'}}>City </label>
                            <input id='City' name="City" type='text' style={{marginRight:'3vw', height:'2.5vh'}}></input>
                            </div>
                            <br></br>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For="Town" style={{color:'white', fontSize:'125%'}}>Town </label>
                            <input type='text' name="Town" id='Town' style={{marginRight:'3vw'}}></input>
                            <label For='POC' style={{color:'white', fontSize:'125%'}}>Place of interest 
                            (near) </label>
                            <input id='POC' name="POC" type='text'></input>
                            </div>
                            <br></br>
                            <div style={{textAlign:'center'}}>
                            <input style={{height:'4vh', width:'8vw'}} type='submit'></input>
                        </div>
                    </form>
                </div>
              </div>
            </div>
        </div>
    )
}