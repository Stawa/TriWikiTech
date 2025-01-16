export default {
  title: "Sign Up",
  description:
    "Create an account to access your personalized learning experience.",
  emailAddress: {
    label: "Email",
    errorMessage: "Please enter a valid email address.",
  },
  fullName: {
    label: "Display Name",
    note: "This is how your name will appear to other users",
  },
  email: {
    label: "Email Address",
    note: "We'll send you a verification email to confirm your address",
  },
  username: {
    label: "Username",
    note: "Choose a unique username (3-16 characters, lowercase letters, numbers, and underscores only)",
  },
  password: {
    label: "Password",
    note: "Password must contain at least 8 characters, including uppercase, lowercase, number, and special character.",
  },
  confirmPassword: {
    label: "Confirm Password",
    note: "Re-enter your password to confirm",
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
  form: {
    submit: "Sign Up",
    processing: "Processing...",
    title: "Get Started with TriWikiTech",
    description: "Create your account to start exploring and learning",
    orContinueWith: "or continue with",
  },
  validation: {
    emailRequired: "Email is required",
    fullNameRequired: "Display name is required",
    passwordRequired: "Password is required",
    confirmPasswordRequired: "Please confirm your password",
    termsRequired: "You must accept the Terms of Service and Privacy Policy",
    passwordRequirements: {
      minLength: "At least 8 characters",
      hasUpperCase: "One uppercase letter",
      hasLowerCase: "One lowercase letter",
      hasNumber: "One number",
      hasSpecialChar: "One special character (@$!%*?&)",
    },
  },
  errors: {
    allFieldsRequired: "All fields are required",
    invalidEmailFormat: "Invalid email format",
    invalidUsernameFormat:
      "Username must be 3-16 characters long and contain only lowercase letters, numbers, and underscores",
    invalidFullNameFormat:
      "Display name must be 3-24 characters long and contain only letters, numbers, and spaces",
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
  socialLogin: {
    or: "or",
    github: {
      label: "GitHub",
    },
    google: {
      label: "Google",
    },
  },
};
