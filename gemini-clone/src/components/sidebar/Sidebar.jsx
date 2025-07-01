// 
import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { useSidebar } from '../context/Context'  // 🆕 context import

const Sidebar = () => {
  const [extended, setExtended] = useState(false)
  const { triggerNewChat } = useSidebar(); // 🆕 context method

  return (
    <div className='sidebar'>
      <div className="top">
        <img
          onClick={() => setExtended(prev => !prev)}
          className='menu'
          src={assets.menu_icon}
        />

        <div className="new-chat" onClick={triggerNewChat}> {// inside Sidebar.jsx
<div className="new-chat" onClick={handleNewChat}>
  <img src={assets.plus_icon} />
  {extended ? <p>New Chat</p> : null}
</div>
}
          <img src={assets.plus_icon} />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className='recent-title'>Recent</p>
            <div className='recent-entry'>
              <img src={assets.message_icon} />
              <p>What is react ...</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} />
          {extended ? <p>Help</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} />
          {extended ? <p>Activity</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
