interface CommonTranslations {
  title: string;
  description?: string;
  errors: Record<string, string>;
  socialLogin: {
    github: { label: string };
    google: { label: string };
    or: string;
  };
  email: {
    label: string;
    errorMessage: string;
  };
  password: {
    label: string;
    errorMessage: string;
  };
  signIn: string;
}

interface LoginTranslations extends CommonTranslations {
  rememberMe: string;
  forgotPassword: string;
  noAccount: string;
  signUp: string;
}

interface RegisterTranslations extends CommonTranslations {
  displayName: {
    label: string;
  };
  confirmPassword: {
    label: string;
  };
  acceptTerms: {
    label: string;
  };
  createAccount: string;
  alreadyHaveAccount: string;
}

export type { LoginTranslations, RegisterTranslations };
