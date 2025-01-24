import React, { useContext, useState } from "react";
import "./Sidebar.css";
import {assets} from "../../ass/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended,setEXtended] = useState(false);
  const {onsent,prevPrompts,setRecentPrompt,newChat} =useContext(Context)

  const loadPrompt =async (prompt) =>{
    setRecentPrompt(prompt)
    await onsent(prompt)
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={()=>setEXtended(prev=>!prev)} className="menu" src={assets.menu_icon} />
        <div onClick={()=>newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ?<p>New Chat</p>:null}
        </div>
        {extended ? (
          <div className="resent">
            <p className="resent-title">Resent</p>
            {prevPrompts.map((item,index)=>{
                 return (
                  <div onClick={()=>loadPrompt(item)} className="resent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0,18)}...</p>
                </div>
                 )
            })}
        
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item resent-entry">
          <img src={assets.question_icon} alt="" />
          {extended?<p>Help</p>:null}
        </div>
        <div className="bottom-item resent-entry">
          <img src={assets.history_icon} alt="" />
          {extended?<p>Activity</p>:null}
        </div>
        <div className="bottom-item resent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended?<p>Settings</p>:null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
