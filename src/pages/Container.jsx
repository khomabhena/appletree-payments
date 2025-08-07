import React, { useContext } from 'react'
import MainPage from './MainPage'
import MobileNavigation from '../components/MobileNavigation'
import MyContext from '../context/MyContext'
import Header from '../sections/Header'
import PaymentSolutions from '../sections/PaymentSolutions'
import UseCases from '../sections/UseCases'
import PaymentMethods from '../sections/PaymentMethods'
import About from '../sections/About'
import ContactUs from '../sections/ContactUs'
import FormCurves from '../components/FormCurves'
import Footer from '../sections/Footer'

const Container = () => {
  const {mobileNav} = useContext(MyContext)
  return (
    <>
      {
        mobileNav && <MobileNavigation />}
        <MainPage>
          <Header />
          <PaymentSolutions />
          <UseCases />
          <PaymentMethods />
          <About />
          <ContactUs />
          <Footer />
        </MainPage>
      
    </>
  )
}

export default Container
