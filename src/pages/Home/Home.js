import React, { Component } from 'react';
import './Home.scss';
import background from '../../assets/images/scaffold-bg.jpg';
import logo from '../../assets/logos/logo@2x.png';
import Button from '../../components/Button/Button';
import Triangle from '../../components/Triangle/Triangle';

class Home extends Component {
    render() {
        return (
            <main className='home'>
                <section className='home__hero'>
                    <div className='home__hero-left'>
                        <img className='home__logo' src={logo} alt="scafit logo" />
                        <h1 className='home__heading'>Easy component scaffolding for efficient React development</h1>
                        <Button text="explore more"/>
                    </div>
                    <div className='home__hero-right'>
                        <img className='home__background-image' src={background} alt="scaffolding background" />
                        <div className='home__triangle'>
                            <Triangle />
                            <Triangle last={true} />
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Home;
