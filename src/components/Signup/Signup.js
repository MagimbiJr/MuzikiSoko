import React from "react"
import { Link } from "gatsby"
import API from "../../helpers/api"
import "./signup.css"
import { Formik } from "formik"
import { validateSignup } from "../../helpers/validation"

export default () => (
  <section className="signup">
    <h2>Sign Up</h2>
    <div className="signup_block">
      <Formik
        initialValues={{
          fullNames: "",
          stageName: "",
          phoneNumber: "",
          emailAddress: "",
          biography: "",
          nationalId: "",
          nationality: "",
          password: "",
        }}
        validate={values => validateSignup(values)}
        onSubmit={async (values, { setSubmitting }) => {
          const res = await API.post("artist", {
            password: values.password,
            fullNames: values.fullNames,
            phoneNumber: values.phoneNumber,
            emailAddress: values.emailAddress,
            biography: values.biography,
            nationalId: values.nationalId,
            nationality: values.nationality,
          })
          setSubmitting(false)
          console.log("the resp ", res)
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
            <div className="signup_input">
              <i className="fas fa-user"></i>
              <input
                value={values.fullNames}
                onChange={handleChange}
                onBlur={handleBlur}
                name="fullNames"
                type="name"
                placeholder="Full Name "
              />
              <div className="error-message">
                {errors.fullNames && touched.fullNames && errors.fullNames}
              </div>
            </div>
            <div className="signup_input">
              <i className="fas fa-user"></i>
              <input
                type="stageName"
                onChange={handleChange}
                name="stageName"
                onBlur={handleBlur}
                value={values.stageName}
                placeholder="Stage Name"
              />
              <div className="error-message">
                {errors.stageName && touched.stageName && errors.stageName}
              </div>
            </div>
            <div className="signup_input">
              <i className="fas fa-envelope"></i>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.emailAddress}
                type="text"
                name="emailAddress"
                placeholder="Email Address"
              />
              <div className="error-message">
                {errors.emailAddress &&
                  touched.emailAddress &&
                  errors.emailAddress}
              </div>
            </div>
            <div className="signup_input">
              <i className="fas fa-envelope"></i>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phoneNumber}
                name="phoneNumber"
                type="text"
                placeholder="Phone Number"
              />
              <div className="error-message">
                {errors.phoneNumber &&
                  touched.phoneNumber &&
                  errors.phoneNumber}
              </div>
            </div>
            <div className="signup_input">
              <i className="fas fa-envelope"></i>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.biography}
                name="biography"
                type="text"
                placeholder="Biography"
              />
              <div className="error-message">
                {errors.biography && touched.biography && errors.biography}
              </div>
            </div>
            <div className="signup_input">
              <i className="fas fa-envelope"></i>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nationalId}
                name="nationalId"
                type="text"
                placeholder="National ID"
              />
              <div className="error-message">
                {errors.nationalId && touched.nationalId && errors.nationalId}
              </div>
            </div>
            <div className="signup_input">
              <i className="fas fa-envelope"></i>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nationality}
                name="nationality"
                type="text"
                placeholder="Nationality"
              />
              <div className="error-message">
                {errors.nationality &&
                  touched.nationality &&
                  errors.nationality}
              </div>
            </div>
            <div className="signup_input">
              <i className="fas fa-lock"></i>
              <input
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="signup_input">
              <i className="fas fa-lock"></i>
              <input
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                name="password_confirmation"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <div className="signup_input_p">
              <input type="checkbox" className="checkbox" />
              <p>
                I agree <Link to="/">Terms and Conditions</Link> and{" "}
                <Link to="/">Privacy Policy</Link>
              </p>
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="signup_btn"
            >
              Sign Up
            </button>
          </form>
        )}
      </Formik>
    </div>
  </section>
)
