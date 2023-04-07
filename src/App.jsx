import React from 'react'
import Navbar from './components/Navbar'
import styles from './style'
// import {Clients,Hero} from './components'
import Hero from './components/Hero'
import Stats from './components/Stats'
import { Business,Billing,CardDeal,Testimonials,Clients,CTA,Footer } from './components'

//this project is made by    "  npm create-app vite@latest "   and it will open by npm run dev

const App = () => (
    <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>

               <Navbar/>
            </div>
        </div>
        <div className={`${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero/>
          </div>
        </div>
        <div className={`${styles.flexStart} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats/>
            <Business/>
            <Billing/>
            <CardDeal/>
            <Testimonials/>
            <Clients/>
            <CTA/>
            <Footer/>
          </div>
        </div>
    </div>

  )

export default App