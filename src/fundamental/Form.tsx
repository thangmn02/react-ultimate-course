import React from "react"

/* Uncontroller Component/Input
- Uncontrolled inputs are like traditional HTML form inputs:
- They remember what you typed. You can then get their value using a ref.
- Don’t cause re-render component.
- The input value is not being managed by React.

Controller Component/Input
- The value  is handled by the react state.
- Cause re-render component

lib form: react hook form
validate form: zod or yup
*/


function Form() {
  const firstNameRef = React.useRef<HTMLInputElement>(null);
  const [lastName, setLastName] = React.useState('');
  const [form, setForm] = React.useState({
    age: 0,
    gender: 'male',
    city: 'tphcm'
  })

  function submitForm() {
    console.log('submitForm: ', {
      firstName: firstNameRef.current?.value,
      lastName,
      form
    })
  }

  function onChangeForm(event: any) {
    setForm(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  console.log('Form Render')
  return (
    <div>
      <h1>Form</h1>
      First Name: <input type="text" defaultValue="tony" id="firstName" ref={firstNameRef} />
      <br />
      Last Name:  <input type="text" value={lastName} id="firstName" onChange={event => setLastName(event.target.value)}  />
      <br />
      Age: <input type="text" value={form.age} name="age" onChange={onChangeForm}  />
      <br />
      Gender 
      <select value={form.gender} onChange={onChangeForm} name="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <br />
      City: <input type="text" value={form.city} onChange={onChangeForm} name="city" />
     
      <br />
      <br />
      <button type="button" onClick={submitForm}>Submit</button>
    </div>
  )
}

export default Form