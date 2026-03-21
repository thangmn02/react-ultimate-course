import { TextField, type TextFieldProps } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

type RHFTextFieldProps = TextFieldProps & { name: string };

export default function RHFTextField({ name, ...other }: RHFTextFieldProps) {
  const { control, formState: { errors } } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          id={name}
          variant="outlined"
          fullWidth
          error={!!errors[name]} 
          helperText={errors[name]?.message as string} 
          {...other}
        />
      )}
    />
  );
}