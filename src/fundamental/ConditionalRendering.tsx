
/* && - vế trái and vế phải
- vế trái là true, nó sẽ lấy vế phải
- vế trái là false, nó sẽ lấy vế trái

tony && thang -> thang
'' && tony -> '' 
tony && thang && react -> react
tony && '' && thang -> ''

|| - nó sẽ lấy giá trị của true đầu tiên
tony || thang || '' -> tony
'' || tony -> tony
'' || thang || tony -> thang
*/

export default function ConditionalRendering() {
  return (
    <div>
      <h1>ConditionalRendering</h1>
    </div>
  )
}
