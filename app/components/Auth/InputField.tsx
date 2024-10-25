import { VscEye, VscEyeClosed } from "react-icons/vsc";

interface InputFieldProps {
  id: string;
  name: string;
  type: string;
  autoComplete: string;
  required: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  label: string;
  isValid: boolean;
  errorMessage: string;
  showPassword?: boolean;
  setShowPassword?: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputField = ({
  id,
  name,
  type,
  autoComplete,
  required,
  value,
  onChange,
  inputRef,
  label,
  isValid,
  errorMessage,
  showPassword,
  setShowPassword,
}: InputFieldProps) => (
  <div className="relative">
    <input
      id={id}
      name={name}
      type={type}
      autoComplete={autoComplete}
      required={required}
      className="peer h-12 sm:h-14 w-full border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-transparent focus:outline-none focus:border-indigo-400 bg-transparent transition-colors duration-300"
      placeholder=" "
      value={value}
      onChange={onChange}
      ref={inputRef}
    />
    <label
      htmlFor={id}
      className="absolute left-0 -top-3.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 dark:peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-indigo-400 peer-focus:text-sm"
    >
      {label} <span className="text-red-500">*</span>
    </label>
    {value && !isValid && (
      <p className="mt-2 text-xs text-pink-600 dark:text-pink-400">
        {errorMessage}
      </p>
    )}
    {showPassword !== undefined && setShowPassword && (
      <button
        type="button"
        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300"
        onClick={() => setShowPassword(!showPassword)}
        aria-label="Toggle password visibility"
      >
        {showPassword ? (
          <VscEyeClosed className="text-xl sm:text-2xl" />
        ) : (
          <VscEye className="text-xl sm:text-2xl" />
        )}
      </button>
    )}
  </div>
);

export default InputField;
