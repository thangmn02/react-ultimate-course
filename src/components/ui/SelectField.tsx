import React from 'react';

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  labelText: string;
  labelClass?: string;
  error?: string;
  errorsClass?: string;
  htmlFor: string;
  options: string[];
}

const SelectField: React.FC<SelectFieldProps> = ({
  labelText,
  labelClass = '',
  error = '',
  errorsClass = '',
  htmlFor,
  options,
  className,
  ...props
}) => {
  return (
    <>
      <label htmlFor={htmlFor} className={labelClass}>{labelText}</label>
      <select id={htmlFor} className={className} {...props}>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      {error && <span className={errorsClass}>{error}</span>}
    </>
  );
};

export default SelectField;