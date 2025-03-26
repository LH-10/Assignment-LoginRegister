"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./SignupPage.css"

function SignupPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: "Name",
    phone: "91828121",
    email: "Marry@emial",
    password: "Marry123",
    companyName: "Marry",
    isAgency: "yes",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/account")
  }

  return (
    <div className="signup-container">
      <h1>
        Create your
        <br />
        PopX account
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name *</label>
          <input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone number *</label>
          <input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address *</label>
          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="companyName">Company name *</label>
          <input id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} />
        </div>

        <div className="form-group">
          <p className="radio-label">Are you an Agency?</p>
          <div className="radio-group">
            <div className="radio-option">
              <input
                type="radio"
                id="agency-yes"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === "yes"}
                onChange={handleChange}
              />
              <label htmlFor="agency-yes">Yes</label>
            </div>
            <div className="radio-option">
              <input
                type="radio"
                id="agency-no"
                name="isAgency"
                value="no"
                checked={formData.isAgency === "no"}
                onChange={handleChange}
              />
              <label htmlFor="agency-no">No</label>
            </div>
          </div>
        </div>

        <button type="submit" className="btn-submit">
          Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupPage

