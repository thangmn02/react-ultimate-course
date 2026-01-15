
/*
const person = {
  firstName: 'tony',
  isMale: true,
  hasLoading: false,
  colors: ['blue', 'red'],
  address={{
    city: 'hcm',
    ward: 14,
    country: {
      name: 'VN'
    }
  }}
}
// access properties in object
1. person.firstName, person.isMale
2. person['firstName'], person['isMale']

// desctructuring object
const firstName = person.firstName
const hasLoading = person.hasLoading
const nameCountry = person.adddress.country.name

const { firstName, hasLoading } = person; es6

// spread operator

// rest operator: lấy tất cả cac properties còn lai trong object
const { firstName, hasLoading, ...restProps } = person; es6
*/

interface PersonProps extends React.PropsWithChildren {
  firstName?: string,
  age: number,
  onClick: () => void,
  address: {
    city: string,
    ward: number,
    country: {
      name: string
    }
  },
  title: string,
  description: string,
  component1: React.ReactNode,
  component2: React.ElementType,
  // children: React.ReactNode,
}

function Person({ 
  firstName = 'John Doe', // optional
  age, 
  onClick,
  address: {
    city,
    country: {
      name
    }
  },
  title,
  description,
  component1,
  component2: Component2, // change name properties
  children,
  ...restProps
}: PersonProps) {
  console.log('rest props: ', restProps)
  return (
    <div>
      First Name: {firstName} <br />
      Age: {age} <br />
      Country: {name} <br />
      City: {city} <br />
      Greeting Title: {title} <br />
      Greeting Description: {description} <br />
      Name bird: {restProps['name-bird']} <br />
      Component1: {component1} <br />
      Component2: {<Component2 />} <br />
      {children} <br />
      <button type="button" onClick={onClick}>Update</button>
    </div>
  )
}

function Button() {
  return (
    <button>this is button</button>
  )
}

function Props() {
  const greeting = {
    title: 'greeting',
    description: 'greeting description'
  }
  return (
    <div>
      <h1>Props</h1>
      <Person 
        // firstName="tony" // string
        isMale={true} // boolean
        colors={['blue', 'red']} // array
        age={18} //number
        onClick={() => {
          console.log('clicked')
        }} // function
        address={{
          city: 'hcm',
          ward: 14,
          country: {
            name: 'VN'
          }
        }}
        name-bird="Edge"
        component1={<Button />} // React Node
        component2={Button} // React Element Type
        // title={greeting.title}
        // description={greeting.description}
        {...greeting} // speard operator
      >
        this is children person
      </Person>
    </div>
  )
}

export default Props