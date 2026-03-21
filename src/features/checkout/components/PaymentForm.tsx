import { Grid, Typography } from '@mui/material';
import RHFTextField from './form-ui/TextField';
import RHFCheckbox from './form-ui/Checkbox';

export default function PaymentForm() {
  return (
    <>
      <Typography variant="h6" gutterBottom>Payment method</Typography>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}><RHFTextField name="cardName" label="Name on card" /></Grid>
        <Grid size={{ xs: 12, md: 6 }}><RHFTextField name="cardNumber" label="Card number" /></Grid>
        <Grid size={{ xs: 12, md: 6 }}><RHFTextField name="expDate" label="Expiry date (MM/YY)" /></Grid>
        <Grid size={{ xs: 12, md: 6 }}><RHFTextField name="cvv" label="CVV" /></Grid>
        <Grid size={12}>
          <RHFCheckbox name="saveCard" label="Remember credit card details for next time" />
        </Grid>
      </Grid>
    </>
  );
}