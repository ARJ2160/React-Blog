import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { useHistory } from 'react-router-dom';

const SignIn = () => {

    const initialState = {
        email: '',
        password: '',
    }

    const [formValues, setFormValue] = useState(initialState)
    const [formErrors, setFormErrors] = useState({})
    // let navigate = useNavigate()
    const form = document.forms['form']

    const handleChange = e => {
        const { name, value } = e.target
        setFormValue({ ...formValues, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setFormErrors(validate(formValues))
    }

    const validate = formValues => {
        
        const errors = {}
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (!formValues.email) {
            errors.email = "Email is Required"
        }
        else if (!regex.test(formValues.email)) {
            errors.email = "Enter valid Email"
        }
        if (!formValues.password) {
            errors.password = "Password is Required"
        }
    
        // Check if there are no errors
        if (Object.keys(errors).length === 0) {
            form.reset()
        }
        return errors
    }

    return (
        <section id="form" className='side-padding'>
            <div className="group d-flex justify-content-center align-items-center">
                <span style={{ fontSize: "2rem", padding: "1rem" }}>Sign In Form</span>
            </div>
            <div className="group form d-flex flex-column justify-content-center align-items-center">
                <h1 className="form-errors">{}</h1>
                <form method="post" onSubmit={handleSubmit} name="form">
                    <label htmlFor="email">Email</label>
                    <div className="form-divs">
                        <input
                            type="text"
                            name="email"
                            id = "email"
                            placeholder="Email"
                            values={formValues.email}
                            onChange={handleChange}
                        />
                    </div>
                    <p className="form-errors">{formErrors.email}</p>
                    <label htmlFor="password">Password</label>    
                    <div className="form-divs">
                        <input
                            type="password"
                            name="password"
                            id = "password"    
                            placeholder="Password"
                            values={formValues.password}
                            onChange={handleChange}
                        />
                    </div>
                    <p className="form-errors">{formErrors.password}</p>
                    <button
                        type="submit"
                        className="form-btn mt-5"
                    >Sign in</button>
                </form>
                <p className="mt-5">Dont have an Account? <span><a href="/">Sign Up</a></span></p>
            </div>
        </section>
    )
}

export default SignIn