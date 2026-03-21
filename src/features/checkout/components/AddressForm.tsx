import { useFormContext } from 'react-hook-form';
import RHFTextField from './form-ui/TextField';

export default function AddressForm() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <h2 className="font-semibold text-xl text-gray-600 mb-4">Shipping address</h2>
      
      <div className="grid gap-4 gap-y-4 text-sm grid-cols-1 md:grid-cols-2">
        <div className="md:col-span-1">
          <RHFTextField name="firstName" label="First Name" />
        </div>
        
        <div className="md:col-span-1">
          <RHFTextField name="lastName" label="Last Name" />
        </div>
        
        <div className="md:col-span-2">
          <RHFTextField name="address1" label="Address line 1" />
        </div>
        
        <div className="md:col-span-1">
          <RHFTextField name="city" label="City" />
        </div>
        
        <div className="md:col-span-1">
          <RHFTextField name="zip" label="Zip / Postal code" />
        </div>

        <div className="md:col-span-1">
          <label htmlFor="state" className="block text-gray-600 mb-1">State / Province</label>
          <select
            id="state"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5"
            {...register("state")}
          >
            <option value="">Select State...</option>
            <option value="hcm">Hồ Chí Minh</option>
            <option value="hn">Hà Nội</option>
            <option value="dn">Đà Nẵng</option>
          </select>
          {errors.state && <p className="text-red-600 mt-1 text-xs">{errors.state.message as string}</p>}
        </div>

        <div className="md:col-span-1">
           <label htmlFor="country" className="block text-gray-600 mb-1">Country</label>
           <select
            id="country"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5"
            {...register("country")}
          >
            <option value="">Select Country...</option>
            <option value="vn">Việt Nam</option>
            <option value="jp">Japan</option>
          </select>
          {errors.country && <p className="text-red-600 mt-1 text-xs">{errors.country.message as string}</p>}
        </div>
      </div>
    </div>
  );
}