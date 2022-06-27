import React from 'react';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Layout.css'

const Layout = ({children}) => (
    <div className="Layout">
        <div className="LayoutIn">
        <Navbar />
        {children}
        <Footer />
        </div>
    </div>
)

export default Layout