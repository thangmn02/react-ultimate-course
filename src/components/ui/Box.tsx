import React from "react";

function Box({ title, description, price, updatePrice }: any) {
  console.log("Box re-render ----------")
  return (
    <div>
      Title: {title} <br />
      Description: {description} <br />
      Price: {price} <br />

      <button type="button" onClick={updatePrice}>Update Price</button>

    </div>
  )
}
export default React.memo(Box);
// function customEqual(prevProps, nextProps) {
//   console.log('customEqual:', {
//     prevProps,
//     nextProps
//   })
//   return prevProps.title === nextProps.title
//   // return true
// }

// export default React.memo(Box, customEqual);