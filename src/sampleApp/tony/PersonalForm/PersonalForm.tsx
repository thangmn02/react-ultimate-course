import React from 'react'
import { useForm, Controller } from "react-hook-form"
import { TextField } from "@mui/material"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

/*
form: react hook form, formik, tanstack form...
validate: yup or zod...
*/

interface IUser {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  address: string,
  city: string,
  district: string,
  password: string,
  confirm_password: string
}

interface IForm {
 firstName: string,
 lastName: string,
 email: string,
 address: string,
 city: string,
 district: string,
 password: string,
 confirm_password: string
}

const defaultForm = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  city: '',
  district: ''
}

const schema = yup
  .object({
    firstName: yup.string().required("Please enter First Name"),
    lastName: yup.string().required(),
    email: yup
      .string()
      .email("Please provide a valid email address") // Built-in email format validation
      .required("Email address is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirm_password: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref('password')], "Passwords must match"), 
  })

function PersonalForm() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(schema) as any,
  })
  const [users, setUsers] = React.useState<IUser[]>([]);

  const onSubmit = (data: IForm) => {
    console.log("data: ", data)
    setUsers((prevState: any) => {
      const newUser = {
        id: Date.now(),
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        address: data.address,
        city: data.city,
        district: data.district
      }
      return [...prevState, newUser]
    })
    reset(defaultForm)
  }

  function handleEditUser(user: IUser) {
    console.log("handleEditUser: ", user)
    setValue('firstName', user.firstName);
    setValue('lastName', user.lastName);
    setValue('email', user.email);
    setValue('address', user.address);
    setValue('city', user.city);
    setValue('district', user.district);
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100 ">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">
            Responsive Form
          </h2>
          <p className="text-gray-500 mb-6">
            Form is mobile responsive. Give it a try.
          </p>
          <br />

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-3">
                      {/* <label htmlFor="full_name">First Name</label> */}
                      {/* <input
                        type="text"
                        id="firstName"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        {...register("firstName", {
                          required: 'Please enter first name',
                          minLength: {
                            value: 4,
                            message: "First Name must be at least 4 characters long"
                          }
                        })}
                      /> */}
                      {/* {errors.firstName && (
                        <p className="text-red-600 my-2">{errors.firstName.message}</p>
                      )} */}
                      <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => {
                          return (
                            <TextField 
                              {...field}
                              id="firstName" 
                              label="First Name" 
                              variant="outlined" 
                              fullWidth
                              error={Boolean(errors.firstName)}
                              helperText={errors.firstName?.message}
                            />
                          )
                        }}
                      />

                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="full_name">Last Name</label>
                      <input
                        type="text"
                        id="fullName"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        {...register("lastName", {
                          required: 'Please enter last name',
                          minLength: {
                            value: 4,
                            message: "Last Name must be at least 4 characters long"
                          }
                        })}
                      />
                      {errors.lastName && (
                        <p className="text-red-600 my-2">{errors.lastName.message}</p>
                      )}  
                     </div>

                    <div className="md:col-span-5">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="text"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="email@domain.com"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-red-600 my-2">{errors.email.message}</p>
                      )}  
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="full_name">Address</label>
                      <input
                        type="text"
                        id="address"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        {...register("address", {
                          required: 'Please enter address',
                          minLength: {
                            value: 4,
                            message: "Address must be at least 4 characters long"
                          }
                        })}
                      />
                      {errors.address && (
                        <p className="text-red-600 my-2">{errors.address.message}</p>
                      )} 
                    </div>
                    <div className="md:col-span-3">
                      <label htmlFor="full_name">City</label>
                      <select
                        id="city"
                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        {...register("city")}
                      >
                        <option value="hcm">TP. Ho Chi Minh</option>
                        <option value="hn">Ha Noi</option>
                        <option value="hue">Hue</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="full_name">District</label>
                      <select
                        id="district"
                        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        {...register("district")}
                      >
                        <option value="phunhuan">Phu Nhuan</option>
                        <option value="govap">Go Vap</option>
                      </select>
                    </div>

                    <div className="md:col-span-3">
                      <Controller
                        name="password"
                        control={control}
                        render={({ field }) => {
                          return (
                            <TextField 
                              {...field}
                              id="password" 
                              label="Password" 
                              variant="outlined" 
                              fullWidth
                              error={Boolean(errors.password)}
                              helperText={errors.password?.message}
                            />
                          )
                        }}
                      />
                    </div>

                    <div className="md:col-span-3">
                      <Controller
                        name="confirm_password"
                        control={control}
                        render={({ field }) => {
                          return (
                            <TextField 
                              {...field}
                              id="confirm_password" 
                              label="Confirm Password" 
                              variant="outlined"
                              // type='password' 
                              fullWidth
                              error={Boolean(errors.confirm_password)}
                              helperText={errors.confirm_password?.message}
                            />
                          )
                        }}
                      />
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          type="submit"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-screen-lg mx-auto">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  First Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email address
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  City
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr className="odd:bg-white  even:bg-gray-50 border-b ">
                  <td className="px-6 py-4 text-center" colSpan={6}>
                    No data
                  </td>
                </tr>
              ) : (
                <>
                  {users.map((user) => {
                    return (
                      <tr
                        key={user.id}
                        className="odd:bg-white  even:bg-gray-50 border-b "
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {user.firstName}
                        </th>
                        <td className="px-6 py-4">{user.lastName}</td>
                        <td className="px-6 py-4">{user.email}</td>
                        <td className="px-6 py-4">{user.address}</td>
                        <td className="px-6 py-4">{user.city}</td>
                        <td className="px-6 py-4 flex items-center">
                          <div 
                            className="font-medium text-blue-600 cursor-pointer mr-4"
                            onClick={() => handleEditUser(user)}
                            >
                            Edit
                          </div>
                          <div className="font-medium text-red-600 cursor-pointer">
                            Delete
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="container max-w-screen-lg mx-auto">
        <div className="flex items-center justify-end mt-4">
          <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing{' '}
            {users.length > 10 && (
              <>
                <span className="font-semibold text-gray-900">1</span> to{' '}
                <span className="font-semibold text-gray-900">10</span> of{' '}
              </>
            )}
            <span className="font-semibold text-gray-900">{users.length}</span>{' '}
            Entries
          </span>
          <div className="inline-flex xs:mt-0 ml-2">
            <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-blue-800 rounded-s hover:bg-gray-900 ">
              <svg
                className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
              Prev
            </button>
            <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-blue-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 ">
              Next
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalForm