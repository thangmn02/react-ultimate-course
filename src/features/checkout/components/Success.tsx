import { Typography, Button, Box } from '@mui/material';

export default function Success() {
  return (
    <Box sx={{ textAlign: 'center', py: 5 }}>
      <Typography variant="h5" gutterBottom>
        Thank you for your order!
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4 }}>
        Your order number is <strong>#140396</strong>. We have emailed your order confirmation and will update you once its shipped.
      </Typography>
      <Button variant="contained" onClick={() => alert('Chuyển trang...')}>
        Go to my orders
      </Button>
    </Box>
  );
}