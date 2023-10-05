"use client"
import ResponsiveAppBar from '@/app/menubar';
import {motion} from 'framer-motion'
import Link from 'next/link';

export default function Product1 () {
    return (
        <div style={{background: '#0B0E13', width: "100%", paddingBottom:'18.5%', zIndex:0}}>
            <ResponsiveAppBar></ResponsiveAppBar>
            <div style={{display:'flex', justifyContent:'space-around'}}>
                <div style={{marginTop:'10vh', display:'flex', justifyContent:'space-around', backgroundColor:'#323136', padding:'5vh',paddingTop:'13vh',paddingBottom:'13vh', borderRadius:'1%'}}>
                    <img src='https://canvascontent.krea.ai/9ee913ac-0d83-414b-ac89-01af767c5d1c.png' style={{height:'40vh', marginLeft:'5vw'}}></img>
                    <div style={{marginLeft:'5vw'}}>
                        <h2 style={{color:'white', textAlign:'center'}}>Issue Order</h2>
                        <br></br>
                        <form >
                            <div style={{display:'flex', justifyContent:'center'}}>
                                <label for="Name" style={{color:'white', fontSize:'125%'}}>Name </label>
                                <input id='Name' type="text" style={{marginRight:'3vw', height:'2.5vh'}}></input>
                                <label style={{color:'white', fontSize:'125%'}}>Telephone </label>
                                <input type='tel' style={{marginRight:'3vw'}}></input>
                                <label style={{color:'white', fontSize:'125%'}}>Email </label>
                                <input type='email'></input>
                            </div>
                            <br></br>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                            <label style={{color:'white', fontSize:'125%'}}>Google Maps Location link (if available) </label>
                            <input type="url" style={{ height:'2.5vh'}}></input>
                            <label style={{color:'white', fontSize:'125%'}}>City </label>
                            <input type='text' style={{marginRight:'3vw', height:'2.5vh'}}></input>
                            </div>
                            <br></br>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label style={{color:'white', fontSize:'125%'}}>Town </label>
                            <input type='text' style={{marginRight:'3vw'}}></input>
                            <label style={{color:'white', fontSize:'125%'}}>Place of interest 
                            (near) </label>
                            <input type='text'></input>
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