import { useState } from 'react'

export default function Modal(props) {

    const [tab, setTab] = useState(1)

    const changeTab = (index) => {
        setTab(index)
    }

  return (
    <div className="overlay">
        <div className="modal">
            <div className="modal-top">
                <div className="modal-tabs">
                    <button 
                        className={tab === 1 ? "tab active-tab" : "tab"}
                        onClick={() => changeTab(1)}
                    >Log In</button>
                    <button 
                        className={tab === 2 ? "tab active-tab" : "tab"}
                        onClick={() => changeTab(2)}
                    >Register</button>
                </div>
                <button 
                    className="modal-close-btn"
                    type="button"
                    onClick={() => props.setModalIsOpen(false)}
                >X</button>
            </div>
            <div className="modal-content">
                <div 
                className={tab === 1 ? 
                    "content active-content" : 
                    "content"
                }>
                    <input type="text" placeholder="email" />
                    <input type="text" placeholder="password" />
                    <button 
                        type="submit"
                    >Log In</button>
                </div>
                
                <div 
                className={tab === 2 ? 
                    "content active-content" : 
                    "content"
                }>
                    <input type="text" placeholder="username" />
                    <input type="text" placeholder="password" />
                    <input type="text" placeholder="re-enter password" />
                    <button 
                        type="submit"
                    >Register</button>
                </div>
            </div>
        </div>
    </div>
  )
}
