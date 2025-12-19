import React from 'react'
import AuthProvider from './AuthProvider'
import CartProvider from './CartProvider'
import ThemeProvider from './ThemeProvider'
import FontProvider from './FontProvider'
import LayoutProvider from './LayoutProvider'

export default function CombinedProvider({children}) {
  return (
    <div>
        {/* <AuthProvider>
            <CartProvider>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </CartProvider>
        </AuthProvider> */}

        <FontProvider>
            <LayoutProvider>
                {children}
            </LayoutProvider>
        </FontProvider>
    </div>
  )
}
