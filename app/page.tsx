import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import Specialties from './components/Specialties'
import Client from './components/Client'
import Team from './components/Team'
import FeaturedWork from './components/FeaturedWork'
import CaseStudy from './components/CaseStudy'
import Connect from './components/Connect'
import Footer from './components/Footer'

export default function Home() {
    return (
        <main className="min-h-screen w-full mx-auto container relative pt-[50px] sm:mt-[30px]">
            <Header />
            <Hero />
            <Specialties />
            <Client />
            <Team />
            <FeaturedWork />
            <CaseStudy />
            <Connect />
            <Footer />
        </main>
    )
}
