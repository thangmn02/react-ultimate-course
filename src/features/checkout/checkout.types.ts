import * as yup from 'yup';

export interface ICheckoutForm {
  firstName: string;
  lastName: string;
  address1: string;
  city: string;
  state: string; 
  zip: string;
  country: string;
  cardName: string;
  cardNumber: string;
  expDate: string;
  cvv: string;
}

export const addressSchema = yup.object({
  firstName: yup.string().required("Vui lòng nhập First Name"),
  lastName: yup.string().required("Vui lòng nhập Last Name"),
  address1: yup.string().required("Vui lòng nhập địa chỉ"),
  city: yup.string().required("Vui lòng nhập thành phố"),
  zip: yup.string().required("Vui lòng nhập mã bưu điện"),
  state: yup.string().required("Vui lòng chọn Tỉnh/Thành phố"),
  country: yup.string().required("Vui lòng chọn Quốc gia"),
});

export const paymentSchema = yup.object({
  cardName: yup.string().required("Vui lòng nhập tên trên thẻ"),
  cardNumber: yup.string().required("Vui lòng nhập số thẻ"),
  expDate: yup.string().required("Vui lòng nhập ngày hết hạn"),
  cvv: yup.string().min(3).max(4).required("CVV không hợp lệ"),
});