import Hero from '../components/HeroStyle'
import NavBar from '../components/NavBar'
import Footer from '../components/footer'
import Trip from '../components/trip'
import service_hero_img from '../images/service_hero_img.jpg'


const Service = () => {
    return (
        <>
            <NavBar />
            <Hero
                cName='hero-mid'
                heroImg={service_hero_img}
                title='Service'
                url='/'
                btnClass='hide'
            />
            <Trip/>
            <Footer/>
        </>
    )
}

export default Service