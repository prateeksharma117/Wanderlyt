import Hero from '../components/HeroStyle'
import NavBar from '../components/NavBar'
import Destination from '../components/destination'
import Footer from '../components/footer'
import Trip from '../components/trip'
import home_hero_img from '../images/home_hero_img.jpg'

const Home = () => {
    return (
        <>
            <NavBar/>
            <Hero
                cName='hero'
                heroImg={home_hero_img}
                title='Start Your Journey Today'
                text='Choose Your Favorite Destination.'
                url='/'
                btnClass='show'
                buttonText='Travel Plan'
            />
            <Destination/>
            <Trip/>
            <Footer/>
        </>
    )
}

export default Home