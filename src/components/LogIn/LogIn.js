import React, { useState } from "react"
import { Link } from "gatsby"
import API from "../../helpers/api"
import "./login.css"
import { Formik } from "formik"
import { validateLogin } from "../../helpers/validation"

export default () => {
  return (
    <section className="login">
      <div className="login_block">
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={values => validateLogin(values)}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const res = await API.post("artist/login", {
                emailAddress: values.email,
                password: values.password,
              })

              localStorage.setItem("access_token", res.data.AccessToken)
            } catch (error) {
              //TODO: Some error handling mechanism
            }

            setSubmitting(false)
            // console.log("the resp ", res)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div
                className={` input ${
                  errors.email && touched.email ? "errored" : ""
                } `}
              >
                <i className="fas fa-envelope"></i>
                <input
                  name="email"
                  value={values.email}
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your email"
                />
                {/* <div className="error-message">
                  {errors.email && touched.email && errors.email}
                </div> */}
              </div>
              <div
                className={` input ${
                  errors.password && touched.password ? "errored" : ""
                } `}
              >
                <i className="fas fa-lock"></i>
                <input
                  name="password"
                  value={values.password}
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Password"
                />
                {/* {errors.password && touched.password && errors.password} */}
              </div>
              <button
                disabled={isSubmitting}
                className="login_btn"
                type="submit"
              >
                Log In
              </button>
            </form>
          )}
        </Formik>
        <Link to="recover">Forgot Password</Link>
        <div className="signup_link">
          <p>don't have an account?</p>
          <Link to="signup">Create Account</Link>
        </div>
      </div>
    </section>
  )
}
