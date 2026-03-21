import { Typography, Grid, List, ListItem, ListItemText } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const products = [
  { name: 'Professional plan', desc: 'Monthly subscription', price: '$15.00' },
  { name: 'Hardware', desc: 'Devices needed for development', price: '$69.99' },
  { name: 'Shipping', desc: 'Plus taxes', price: '$9.99' },
];

export default function Review() {
  const { getValues } = useFormContext();
  const formValues = getValues();

  return (
    <>
      <Typography variant="h6" gutterBottom>Order summary</Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>$94.98</Typography>
        </ListItem>
      </List>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>Shipping</Typography>
          <Typography gutterBottom>{`${formValues.firstName} ${formValues.lastName}`}</Typography>
          <Typography gutterBottom>{`${formValues.address1}, ${formValues.city}, ${formValues.country}`}</Typography>
        </Grid>
        
        <Grid container direction="column" size={{ xs: 12, sm: 6 }}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>Payment details</Typography>
          <Grid container>
            <Grid size={6}><Typography gutterBottom>Card type</Typography></Grid>
            <Grid size={6}><Typography gutterBottom>Visa</Typography></Grid>
            <Grid size={6}><Typography gutterBottom>Card holder</Typography></Grid>
            <Grid size={6}><Typography gutterBottom>{formValues.cardName}</Typography></Grid>
            <Grid size={6}><Typography gutterBottom>Card number</Typography></Grid>
            <Grid size={6}><Typography gutterBottom>{formValues.cardNumber}</Typography></Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}