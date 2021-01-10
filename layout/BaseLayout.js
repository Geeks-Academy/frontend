import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'

const BaseLayout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            {children}
        </>
    )
}


export default BaseLayout;