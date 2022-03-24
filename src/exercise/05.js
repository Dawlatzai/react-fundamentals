// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({size, content, ...otherProps}) => (
  <div className={`box ${size}`} {...otherProps}>
    {content}
  </div>
)

function App() {
  return (
    <>
      <Box
        size="box--small"
        style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
        content="small lightblue box"
      />
      <Box
        size="box--medium"
        style={{backgroundColor: 'pink', fontStyle: 'italic'}}
        content="medium pink box"
      />
      <Box
        size="box--large"
        style={{backgroundColor: 'orange', fontStyle: 'italic'}}
        content="large orange box"
      />
    </>
  )
}

export default App
