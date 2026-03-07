import React from 'react'

interface InputFieldProps {
  labelText: string,
  labelClass?: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  errorFullname?: string,
  errorsClass?: string,
  htmlFor?: string,
  id: string,
  type?: string,
  name: string,
  className?: string
}

function InputField({
  labelText,
  labelClass = '',
  errorsClass = '',
  errorFullname = '',
  htmlFor,
  ...inputRestProps
}: InputFieldProps) {
  return (
    <>
      <label htmlFor={htmlFor} className={labelClass}>{labelText}</label>
      <input
        {...inputRestProps}
      />
      {errorFullname && <span className={errorsClass}>{errorFullname}</span>}
    </>
  )
}

export default InputField