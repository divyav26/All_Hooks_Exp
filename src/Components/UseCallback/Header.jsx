import React from 'react'

const Header = () => {
    console.log("header render")
  return (
    <div>
      <h1>Header Render  !!!!</h1>
    </div>
  )
}

export default React.memo(Header)
