import React, { useState } from 'react'

const Signup = () => {

    const initialState = {
        email: '',
        password: '',
    }

    const [formValues, setFormValue] = useState(initialState)
    const [formErrors, setFormErrors] = useState({})

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
        if (!formValues.firstName) {
            errors.firstName = "First Name is Required"
        }
        if (!formValues.lastName) {
            errors.lastName = "Last Name is Required"
        }

        //Check if there are no errors
        if (Object.keys(errors).length === 0) {
        } 
        return errors
    }
    return (
        <section id="form" className='side-padding'>
            <div className="group d-flex justify-content-center align-items-center">
                <span style={{ fontSize: "2rem", padding: "1rem" }}>Sign Up Form</span>
            </div>
            <div className="group form d-flex flex-column justify-content-center align-items-center">
                <h1>Hello {formValues.firstName}</h1>
                <h1 className="form-errors">{signUpErrors}</h1>
                <form method="post" onSubmit={handleSubmit} name="form">
                    <label htmlFor="email" className="group">First Name</label>
                    <div className="form-divs">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            values={formValues.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <p className="form-errors">{formErrors.firstName}</p>
                    <label htmlFor="email" className="group">Last Name</label>
                    <div className="form-divs">
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            values={formValues.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <p className="form-errors">{formErrors.lastName}</p>
                    <label htmlFor="email" className="group">Email</label>
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
                    <label htmlFor="password" className="group">Password</label>    
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
                    >Sign Up</button>
                </form>
                <p className="mt-5">Already have an Account? <span><a href="/signin">Sign In</a></span></p>
                </div>
        </section>
    )
}

export default Signup