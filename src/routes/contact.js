import Hero from '../components/HeroStyle'
import NavBar from '../components/NavBar'
import ContactForm from '../components/contactform'
import Footer from '../components/footer'
import contact_hero_img from '../images/contact_hero_img.jpg'


const Contact = () => {
    return (
        <>
            <NavBar/>
            <Hero
                cName='hero-mid'
                heroImg={contact_hero_img}
                title='Contact'
                url='/'
                btnClass='hide'
            />
            <ContactForm/>
            <Footer/>
        </>
    )
}

export default Contact