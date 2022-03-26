import './Home.scss';
import SiteLink from '../../components/SiteLink/SiteLink';
import Triangle from '../../components/Triangle/Triangle';
import Card from '../../components/Card/Card';
import homepage from '../../utils/homepage';
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
            <section className='home__features'>
                {homepage.cards.map(card => <Card key={uuidv4()} card={card} />)}
            </section>
        </div>
    );
}

export default Home;
