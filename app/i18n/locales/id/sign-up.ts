export default {
  title: "Daftar",
  description:
    "Buat akun untuk mengakses pengalaman belajar yang dipersonalisasi.",
  emailAddress: {
    label: "Email",
    errorMessage: "Silakan masukkan alamat email yang valid.",
  },
  fullName: {
    label: "Nama Tampilan",
    note: "Ini adalah nama yang akan ditampilkan kepada pengguna lain",
  },
  email: {
    label: "Alamat Email",
    note: "Kami akan mengirimkan email verifikasi untuk mengkonfirmasi alamat Anda",
  },
  username: {
    label: "Nama Pengguna",
    note: "Pilih nama pengguna yang unik (3-16 karakter, huruf kecil, angka, dan garis bawah saja)",
  },
  password: {
    label: "Kata Sandi",
    note: "Kata sandi harus memiliki minimal 8 karakter, termasuk huruf besar, huruf kecil, angka, dan karakter khusus.",
  },
  confirmPassword: {
    label: "Konfirmasi Kata Sandi",
    note: "Masukkan kembali kata sandi Anda untuk konfirmasi",
  },
  acceptTerms: {
    label: "Saya menerima ",
  },
  termsOfService: {
    label: "Ketentuan Layanan",
  },
  privacyPolicy: {
    label: "Kebijakan Privasi",
  },
  createAccount: "Buat Akun",
  alreadyHaveAccount: "Sudah punya akun?",
  signIn: "Masuk",
  form: {
    submit: "Daftar",
    processing: "Memproses...",
    title: "Mulai dengan TriWikiTech",
    description: "Buat akun Anda untuk mulai menjelajahi dan belajar",
    orContinueWith: "atau lanjutkan dengan",
  },
  validation: {
    emailRequired: "Email wajib diisi",
    fullNameRequired: "Nama tampilan wajib diisi",
    passwordRequired: "Kata sandi wajib diisi",
    confirmPasswordRequired: "Silakan konfirmasi kata sandi Anda",
    termsRequired: "Anda harus menerima Ketentuan Layanan dan Kebijakan Privasi",
    passwordRequirements: {
      minLength: "Minimal 8 karakter",
      hasUpperCase: "Satu huruf besar",
      hasLowerCase: "Satu huruf kecil",
      hasNumber: "Satu angka",
      hasSpecialChar: "Satu karakter khusus (@$!%*?&)",
    },
  },
  errors: {
    allFieldsRequired: "Semua kolom wajib diisi",
    invalidEmailFormat: "Format email tidak valid",
    invalidUsernameFormat: "Nama pengguna harus 3-16 karakter dan hanya berisi huruf kecil, angka, dan garis bawah",
    invalidFullNameFormat: "Nama tampilan harus 3-24 karakter dan hanya berisi huruf, angka, dan spasi",
    passwordRequirements: "Kata sandi tidak memenuhi persyaratan",
    passwordsDoNotMatch: "Kata sandi tidak cocok",
    registrationFailed: "Pendaftaran gagal",
    emailAlreadyExists: "Email berikut sudah terdaftar",
    defaultError: "Terjadi kesalahan saat pendaftaran",
    externalLoginNotImplemented: "Login eksternal belum diimplementasikan.",
    emailAlreadyInUse: "Email berikut sudah digunakan",
    defaultErrorDuringRegistration: "Terjadi kesalahan saat pendaftaran",
    usernameRequirements:
      "Nama pengguna harus 3-16 karakter dan hanya berisi huruf kecil, angka, dan garis bawah.",
    fullNameRequirements:
      "Nama tampilan harus 3-24 karakter dan hanya berisi huruf, angka, dan spasi.",
    usernameAlreadyTaken: "Nama pengguna sudah digunakan",
  },
  socialLogin: {
    or: "atau",
    github: {
      label: "GitHub",
    },
    google: {
      label: "Google",
    },
  },
};
