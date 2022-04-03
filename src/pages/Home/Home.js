import './Home.scss';
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Triangle from '../../components/Triangle/Triangle';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import homepage from '../../data/homepage';
import email from '../../assets/icons/mail.svg';
import github from '../../assets/brands/git-square.svg';
import linkedIn from '../../assets/brands/linkedin.svg';
import TriangleSingle from '../../components/TriangleSingle/TriangleSingle';

const Home = () => {

    useEffect(() => {
        document.title = "SCAFit | Home";  
    }, []);

    return (
        <>
            <div className='home'>
                <section className='home__hero' id='home'>
                    <div className='home__hero-left'>
                        <img className='home__logo' src={homepage.logo} alt={homepage.logoAlt} />
                        <h1 className='home__heading'>{homepage.heading}</h1>
                        <Button type="link" to={homepage.link} tri="grey" text={homepage.linkText}/>
                    </div>
                    <div className='home__hero-right'>
                        <img className='home__background-image' src={homepage.background} alt={homepage.backgroundAlt} />
                        <div className='home__triangle'>
                            <Triangle />
                            <Triangle last={true} />
                        </div>
                    </div>
                </section>
                <section id='features' className='home__features'>
                    {homepage.cards.map(card => <Card key={uuidv4()} card={card} />)}
                </section>
                <section className='home__footer' id="contact" >
                    <TriangleSingle color="blue" piece='left'/>
                    <div className='home__details'>
                        <div className='home__details-column'>
                            Contact
                            <Link to="" className='home__contact-link'><img className='home__contact-icons' src={linkedIn} alt="connect via linkedin"/> LinkedIn</Link>
                            <Link to="" className='home__contact-link'><img className='home__contact-icons' src={github} alt="connect via github"/> Github</Link> 
                            <Link to="" className='home__contact-link'><img className='home__contact-icons' src={email} alt="connect via email"/> Email</Link>
                        </div>
                        <div className='home__details-column'>
                            About<br/>
                            {homepage.details}
                        </div>
                    </div>
                    <TriangleSingle color="green" piece='right'/>
                </section>
                <Footer/>
            </div>
        </>
    );
}

export default Home;
