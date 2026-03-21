import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

interface RHFCheckboxProps {
  name: string;
  label: string;
}

const RHFCheckbox: React.FC<RHFCheckboxProps> = ({ name, label }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={<Checkbox {...field} checked={!!field.value} color="primary" />}
          label={label}
        />
      )}
    />
  );
};

export default RHFCheckbox;