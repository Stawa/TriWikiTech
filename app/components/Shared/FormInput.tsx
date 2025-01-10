import { type IconType } from "react-icons";

interface FormInputProps {
  id: string;
  name: string;
  label: string;
  type?: "text" | "email" | "textarea";
  icon: IconType;
  placeholder: string;
  defaultValue?: string;
  required?: boolean;
  rows?: number;
}

export function FormInput({
  id,
  name,
  label,
  type = "text",
  icon: Icon,
  placeholder,
  defaultValue,
  required = false,
  rows,
}: FormInputProps) {
  const inputClasses = `
    w-full px-5 py-4 rounded-xl
    bg-white dark:bg-gray-800
    border border-gray-200 dark:border-gray-700
    text-gray-900 dark:text-white
    placeholder-gray-400 dark:placeholder-gray-500
    shadow-sm
    transition-all duration-200
    focus:ring-2 focus:ring-indigo-500/20 dark:focus:ring-indigo-500/30
    focus:border-indigo-500 dark:focus:border-indigo-500
    hover:border-gray-300 dark:hover:border-gray-600
  `;

  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        <Icon className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" />
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={`${inputClasses} resize-none`}
          required={required}
          aria-required={required}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={inputClasses}
          required={required}
          aria-required={required}
        />
      )}
    </div>
  );
}
