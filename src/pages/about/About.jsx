import React from 'react';
import Info from '../../components/Info';
import Stats from '../../components/Stats';
import { FaDownload } from 'react-icons/fa';
import CV from '../../assets/klarisa-Cv.pdf';
import Skills from '../../components/Skills';
import { resume } from '../../data';
import ResumeItem from '../../components/ResumeItem';
import './about.css';

const About = () => {
    return (
        <main className='section container'>
            <section className='about'>
                <h2 className='section__title'>
                    Tentang <span>Saya</span>
                </h2>
                <div className='about__container grid'>
                    <div className='about__info'>
                        <h3 className='section__subtitle'>Informasi Pribadi</h3>

                        <ul className='info__list grid'>
                            <Info />
                        </ul>

                        <a href={CV} download='' className='button'>Unduh Cv
                            <span className='button__icon'>
                                <FaDownload />
                            </span>
                        </a>
                    </div>
                    <div className="stats grid">
                        <Stats />
                    </div>
                </div>
            </section>

            <div className="separator"></div>

            <section className='skills'>
                <h3 className="section__subtitle subtitle__center">Keahlian Saya</h3>

                <div className="skills__container grid">
                    <Skills />
                </div>
            </section>

            <div className="separator"></div>

            <section className='resume'>
                <h3 className="section__subtitle subtitle__center">Pengalaman
                </h3>

                <div className="resume__container grid">
                    <div className="resume__data">
                        {resume.map((val) => {
                            if (val.category === 'Pengalaman') {
                                return <ResumeItem key={val.id} {...val} />;
                            }
                        })}
                    </div>

                    <div className="resume__data">
                        {resume.map((val) => {
                            if (val.category === 'Pengalaman') {
                                return <ResumeItem key={val.id} {...val} />;
                            }
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;