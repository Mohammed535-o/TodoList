import React from 'react'

export const Footer = () => {
  let footerStyle = {
     position : "relative",
     top : "100vh",
     width : "100%"
  }
  return (
    <footer className='bg-dark text-light pb-3 pt-3' style={footerStyle}>
      <p className="text-center">Copyrights @ MyTodoList.com</p>        
    </footer>
  )
}
