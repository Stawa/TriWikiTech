export default {
  title: "Register",
  description:
    "Create an account to access your personalized learning experience.",
  emailAddress: {
    label: "Email",
    errorMessage: "Please enter a valid email address.",
  },
  fullName: {
    label: "Display Name",
  },
  email: {
    label: "Email Address",
    note: "We'll send you a verification email to confirm your address",
  },
  username: {
    label: "Username",
  },
  password: {
    label: "Password",
    note: "Password must contain at least 8 characters, including uppercase, lowercase, number, and special character.",
  },
  confirmPassword: {
    label: "Confirm Password",
    confirm: "Re-enter your password to confirm"
  },
  acceptTerms: {
    label: "I accept the ",
  },
  termsOfService: {
    label: "Terms of Service",
  },
  privacyPolicy: {
    label: "Privacy Policy",
  },
  createAccount: "Create Account",
  alreadyHaveAccount: "Already have an account?",
  signIn: "Sign In",
  socialLogin: {
    or: "or",
    github: {
      label: "GitHub",
    },
    google: {
      label: "Google",
    },
  },
  errors: {
    allFieldsRequired: "All fields are required",
    invalidEmailFormat: "Invalid email format",
    passwordRequirements: "Password does not meet requirements",
    passwordsDoNotMatch: "Passwords do not match",
    registrationFailed: "Registration failed",
    emailAlreadyExists: "The following email already exists",
    defaultError: "An error occurred during registration",
    externalLoginNotImplemented: "External login not implemented yet.",
    emailAlreadyInUse: "The following email already exists",
    defaultErrorDuringRegistration: "An error occurred during registration",
    usernameRequirements:
      "Username must be 3-16 characters long and contain only lowercase letters, numbers, and underscores.",
    fullNameRequirements:
      "Display name must be 3-24 characters long and contain only letters, numbers, and spaces.",
    usernameAlreadyTaken: "Username is already taken",
  },
  form: {
    submit: "Register",
    processing: "Processing...",
    title: "Get Started with TriWikiTech",
    description: "Create your account to start exploring and learning",
  },
  validation: {
    emailRequired: "Email is required",
    fullNameRequired: "Display name is required",
    passwordRequired: "Password is required",
    confirmPasswordRequired: "Please confirm your password",
    termsRequired: "You must accept the Terms of Service and Privacy Policy",
  },
};
