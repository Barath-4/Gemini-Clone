import React, { useContext } from 'react'
import {assets} from '../../ass/assets';
import './Main.css'
import { Context } from '../../context/Context';



const Main = () => {


  const {onsent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon}alt="" />
      </div>
      <div className="main-container">

      {!showResult
      ?<>
      <div className="greet">
          <p><span>Hello,Barath</span></p>
          <p>How can I help you today</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest some best place to vist now</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>What is indian money value</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>which is the tallest bulding in the world</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Explain the code neatly</p>
            <img src={assets.code_icon} alt="" />
          </div>
          </div>
      </>
      :<div className='result'>
           <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
           </div>
           <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading
            ?
          <div className='loader'> 
          <hr />
          <hr />
          <hr />
          </div>
          : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
          }

           </div>
        </div>
      }

        
        
         <div className="main_bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a promet here' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input?<img onClick={()=>onsent()} src={assets.send_icon} alt="" />:null}
            </div>
          </div>
          <p className='bottom-info'>
            Gemini may display inaccurate info, including about people, so double-check its responses
          </p>
         </div>
      </div>
    </div>
  )
}

export default Main;

