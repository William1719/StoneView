import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { HeroUser } from './Page-of-parts/Hero/HeroUser.jsx'
import { NavbarUser } from './Page-of-parts/Navbar/NavbarUser.jsx'
import { EmailSender } from './Page-of-parts/Gmail/EmailSender.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavbarUser/>
    <HeroUser/>
    <EmailSender/>

  </React.StrictMode>,
)
