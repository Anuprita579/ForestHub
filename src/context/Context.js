import React, { createContext } from 'react'

function Context({children}) {
    const Cart = createContext();
  return (
    <>
        <Cart.Provider> {children}</Cart.Provider> 
    </>
  )
}

export default Context
