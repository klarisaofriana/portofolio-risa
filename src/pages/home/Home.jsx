import React from 'react';
import Profile from '../../assets/home.jpeg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./home.css"

const Home = () => {
    return (
        <section className="home section grid">
            <img src={Profile} alt='' className='home__img' />

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title"><span>Saya Klarisa Ofriana.</span><br />
                        Web Developer
                    </h1>
                    <p className="home__description">Mahasiswa di Politeknik Negeri Batam, jurusan Teknik Informatika, program studi Teknologi Rekayasa Perangkat Lunak. Saya sangat antusias untuk menjelajahi dunia TI.</p>

                    <Link to='/about' className='button'>
                        Selengkapnya Tentang Saya{''}
                        <span className='button__icon'><FaArrowRight /></span>
                    </Link>
                </div>
            </div>

            <div className="color__block"></div>
        </section>
    )
}

export default Home;