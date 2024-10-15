import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './Home.css'

const Home = () => {
    return(
        <div id='container'>
            <Navbar />
            <div id='center'>
                <div id='left'>
                    LEFT PANEL
                </div>
                <div id='right'>
                    RIGHT PANEL
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home