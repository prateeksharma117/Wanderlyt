import Hero from '../components/HeroStyle'
import NavBar from '../components/NavBar'
import AboutUs from '../components/aboutus'
import Footer from '../components/footer'
import about_hero_img from '../images/about_hero_img.jpg'

const About=()=>
{
    return(
        <>
        <NavBar />
        <Hero
                cName='hero-mid'
                heroImg={about_hero_img}
                title='About'
                url='/'
                btnClass='hide'
                />
                <AboutUs/>
                <Footer/>
        </>
    )
}

export default About