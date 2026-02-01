/* RESTful API - CRUD
Create - POST - /api/user
Read - GET - /api/user
Update - UPDATE - /api/user/:id
Delete - DELETE - /api/user/:id
*/

export const fetchUser = () => {
  return fetch('xxx')
          .then(res => res.json())
          .then(data => data)
}

export const createUser = (name: string) => {
  const bodyData = {
    name
  }
  return fetch('xxx', {
        method: 'POST',
        body: JSON.stringify(bodyData)
      })
      .then(res => res.json())
      .then(data => data)
}