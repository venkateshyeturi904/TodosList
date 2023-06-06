import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position : "relative", 
    top : "10vh", 
    width : "100%"
  }
  return (
    <footer className="bg-dark text-light py-2" style={footerStyle}>
        <p className="text-center p-1">
          Copyright &copy; MyTodosList.com
        </p>
    </footer>
  )
}
