import { useState } from 'react'
import { logInUser, registerUser } from '../utils/operations'

export default function Modal(props) {

    const [tab, setTab] = useState(1)
    const [formData, setFormData] = useState({username: '', password1: '', password2: ''})
    const [wrongCredVisible, setWrongCredVisible] = useState(false)
    const [succRegMsg, setSuccRegMsg] = useState('')
    const [failRegMsg, setFailRegMsg] = useState('')


    const handleChange = (event) => {
        setWrongCredVisible(false)
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
    
    const handleLogIn = async (e) => {
        e.preventDefault()
        const {userId, userName, accessToken} = await logInUser(
            formData.username, formData.password1
        )
        if (userId) {
            props.setUserInfo(
                {
                    userId: userId, 
                    userName: userName, 
                    accessToken: accessToken
                }
            ) 
            props.setModalIsOpen(false)
        } else {
            setWrongCredVisible(true)
        }
    }

    const handleRegistration = (e) => {
        e.preventDefault()
        
        let response
        
        if (formData.password1 === formData.password2) {
            response = registerUser(formData.username, formData.password1)
            console.log("here   " + response)
        } else {
            setFailRegMsg(`Passwords don't match.`)
        }

        if (response) {
            setTab(1)
            setFormData({username: '', password1: '', password2: ''})
            setSuccRegMsg(`Registration complete! Log in to start.`)
        }
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
                    {succRegMsg !== '' && succRegMsg}
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
                        className="modal-btn"
                        type="submit"
                    >Log In</button>
                    {wrongCredVisible && <p className="modal-msg">Incorrect username or password.</p>}
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
                        className="modal-btn"
                        type="submit"
                    >Register</button>
                    {failRegMsg !== '' && failRegMsg}
                </form>
            </div>
        </div>
    </div>
  )
}
