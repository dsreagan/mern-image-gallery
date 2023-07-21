import { useState } from 'react'
import { logInUser, registerUser } from '../utils/operations'

export default function Modal(props) {

    const [tab, setTab] = useState(1)
    const [formData, setFormData] = useState({username: '', password1: '', password2: ''})

    const handleChange = (event) => {
        setFormData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    const changeTab = (index) => {
        setTab(index)
    }

    // Here 
    // deal with login success and failure
    const handleLogIn = (e) => {
        e.preventDefault()
        const {userId, userName, accessToken} = logInUser(
            formData.username, formData.password1
        )
        props.setUserInfo(userId, userName, accessToken)
    }

    const handleRegistration = (e) => {
        e.preventDefault()
        // register
        formData.password1 === formData.password2 && 
            registerUser(formData.username, formData.password1)

        setTab(1)
        setFormData({username: '', password1: '', password2: ''})

        // log ine
        // // this doesn't work
        // handleLogIn()
        // // this doesn't even work
        // const {userId, userName, accessToken} = logInUser(
        //     formData.username, formData.password1
        // )
        // props.setUserInfo(userId, userName, accessToken)
        // // maybe just reset the form and get them to log in
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
                <form 
                    className={tab === 1 ? 
                        "content active-content" : 
                        "content"
                    }
                    onSubmit={handleLogIn}
                >
                    <input 
                        type="text" 
                        placeholder="username" 
                        onChange={handleChange}
                        value={formData.username}
                        name="username"
                    />
                    <input 
                        type="text" 
                        placeholder="password"
                        onChange={handleChange}
                        value={formData.password1}
                        name="password1"
                    />
                    <button 
                        type="submit"
                    >Log In</button>
                </form>
                <form 
                    className={tab === 2 ? 
                        "content active-content" : 
                        "content"
                    }
                    onSubmit={handleRegistration}
                >
                    <input 
                        type="text" 
                        placeholder="username" 
                        onChange={handleChange}
                        value={formData.username}
                        name="username"
                    />
                    <input 
                        type="text" 
                        placeholder="password" 
                        onChange={handleChange}
                        value={formData.password1}
                        name="password1"
                    />
                    <input 
                        type="text" 
                        placeholder="re-enter password" 
                        onChange={handleChange}
                        value={formData.password2}
                        name="password2"
                    />
                    <button 
                        type="submit"
                    >Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}
