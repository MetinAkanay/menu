import React from 'react'
import AboutSection from './Components/AboutSection'
import MenuSection from './Components/MenuSection'
import ContactSection from './Components/ContactSection'

function PageContent() {
  return (
    <div className="w3-content" style={{ maxWidth: 1100 }}>
        <AboutSection />
        <MenuSection />
        <ContactSection />
    </div>
  )
}

export default PageContent