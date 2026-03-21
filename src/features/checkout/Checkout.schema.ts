import * as yup from 'yup';

export const addressSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  address1: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  zip: yup.string().required('Zip / Postal code is required'),
  country: yup.string().required('Country is required'),
});

export const paymentSchema = yup.object().shape({
  cardName: yup.string().required('Name on card is required'),
  cardNumber: yup.string().required('Card number is required'),
  expDate: yup.string().required('Expiry date is required'),
  cvv: yup.string().required('CVV is required').length(3, 'CVV must be 3 digits'),
});