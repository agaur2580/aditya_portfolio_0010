import ContactForm from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import LenisScroll from './components/LenisScroll'
import Skill from './components/Skill'
import SiteFx from './components/SiteFx'
import { Analytics } from "@vercel/analytics/react"

export default function App() {
    return (
        <>
            <LenisScroll />
            <SiteFx />
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skill />
            <Services />
            <ContactForm />
            <Footer />
            <Analytics/>
        </>
    )
}