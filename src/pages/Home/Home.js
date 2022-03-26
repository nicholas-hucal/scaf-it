import './Home.scss';
import SiteLink from '../../components/SiteLink/SiteLink';
import Triangle from '../../components/Triangle/Triangle';
import Card from '../../components/Card/Card';
import homepage from '../../data/homepage';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
    return (
        <div className='home'>
            <section className='home__hero'>
                <div className='home__hero-left'>
                    <img className='home__logo' src={homepage.logo} alt={homepage.logoAlt} />
                    <h1 className='home__heading'>{homepage.heading}</h1>
                    <SiteLink to={homepage.link} text={homepage.linkText} />
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
            <section className='home__mailing-list'>
                <h2 className='home__sub-heading'>subscribe to our mailing list for updates</h2>
                <input className='home__list-input' type='text' placeholder='subscribe with email' />
            </section>
            <section id='contact' className='home__contact'>
                <div className='home__contact-column'>
                    <h3>SCAFit</h3>
                </div>
                <div className='home__contact-column'>
                    <h3>Tech Stack</h3>
                </div>
            </section>
        </div>
    );
}

export default Home;
