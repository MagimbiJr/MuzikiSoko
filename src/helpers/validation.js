export const validateLogin = values => {
  const errors = {}
  if (!values.email) {
    errors.email = "Email address is required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }

  if (!values.password) {
    errors.password = "Password field is required"
  }

  return errors
}

export const validateSignup = values => {
  const errors = {}
  if (!values.emailAddress) {
    errors.emailAddress = "Email address is required"
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailAddress)
  ) {
    errors.emailAddress = "Invalid email address"
  }

  if (!values.password) {
    errors.password = "Password field is required"
  }

  if (!values.fullNames) {
    errors.fullNames = "Full Name is required "
  }

  if (!values.stageName) {
    errors.stageName = "Stage name is required"
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone Number field is required"
  }

  if (!values.biography) {
    errors.biography = "Biography field is required"
  }
  if (!values.nationality) {
    errors.nationality = "Nationality field is required"
  }

  return errors
}
