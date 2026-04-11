import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Stepper, Step, StepLabel, Typography, Box } from '@mui/material';
import { type ICheckoutForm, addressSchema, paymentSchema } from './checkout.types';
import AddressForm from './components/AddressForm';
import PaymentForm from './components/PaymentForm';
import Review from './components/Review';

const steps = ['Shipping address', 'Payment details', 'Review your order'];

const defaultValues: ICheckoutForm = {
  firstName: '',
  lastName: '',
  address1: '',
  city: '',
  state: '',
  zip: '',
  country: '',
  cardName: '',
  cardNumber: '',
  expDate: '',
  cvv: '',
};
export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);


  const currentSchema = activeStep === 0 ? addressSchema : paymentSchema;

  const methods = useForm<ICheckoutForm>({

    resolver: yupResolver(currentSchema as any), 
    defaultValues,
    mode: 'onTouched',
  });

  const { handleSubmit, trigger } = methods;

  const handleNext = async () => {
    const isStepValid = await trigger(); 
    if (isStepValid) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

 
  const onSubmit = (data: ICheckoutForm) => {
    console.log('Dữ liệu cuối cùng để gửi API:', data);
    setActiveStep(steps.length); 
  };

  function getStepContent(step: number) {
    switch (step) {
      case 0: return <AddressForm />;
      case 1: return <PaymentForm />;
      case 2: return <Review />;
      default: return <Typography>Unknown step</Typography>;
    }
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex justify-center items-start pt-10">
      <div className="container max-w-screen-md mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-10">
          
          <Typography variant="h4" align="center" className="font-bold mb-8 text-gray-800">
            Checkout
          </Typography>

          <Stepper activeStep={activeStep} className="mb-10">
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === steps.length ? (
            <div className="text-center">
              <Typography variant="h5" gutterBottom>Cảm ơn bạn đã đặt hàng!</Typography>
              <Typography variant="subtitle1">Mã đơn hàng của bạn là #12345.</Typography>
            </div>
          ) : (
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                
                <Box className="mb-8">
                  {getStepContent(activeStep)}
                </Box>

                <div className="flex justify-between mt-8 pt-6 border-t">
                  {activeStep !== 0 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="text-gray-600 hover:text-black font-medium px-4 py-2"
                    >
                      Back
                    </button>
                  )}
                  
                  <button
                    type="button"
                  
                    onClick={activeStep === steps.length - 1 ? handleSubmit(onSubmit) : handleNext}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded shadow-lg transition-all"
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </button>
                </div>
              </form>
            </FormProvider>
          )}
        </div>
      </div>
    </div>
  );
}