import { FiGithub } from 'react-icons/fi';
import "../styles/Project.css";
import Certification from './Certification';

const Project = () => {
    return (
        <div className='h-screen mx-5 sm:mx-auto pt-32'>
              <h1 className="sub-title" style={{textAlign: "center", color: "#213F99", fontFamily: "monospace",}}>My projects</h1>
            <div className='max-w-5xl md:px-4 py-8 pb-32 mx-auto space-y-28'>
                <section className='p-4 md:p-8 bg-gray-100 rounded-lg shadow-custom'>
                    <h1 className='font-bold text-lg md:text-xl text-blue-500 pb-4'>Animesthetic Social Media</h1>
                    <div className='grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center overflow-hidden'>
                        <blockquote className='sm:col-span-2'>
                            <p className='text-xs md:text-base'>
                                Animesthetic Social Media Web App project! This Django-based web application allows users to connect with friends,
                                share updates, and engage in social networking activities.
                                If you would like to contribute to this project, please visit my github and start contributing.
                            </p>
                            <cite className='inline-flex items-center mt-8 not-italic'>
                                <span className='hidden w-6 h-px bg-gray-400 sm:inline-block'></span>
                                <p className='text-xs md:text-base text-gray-500 sm:ml-3'>
                                    Python, Javascript, HTML, Django, CSS, DbSqlite
                                </p>
                            </cite>
                            <div className='flex pt-8 space-x-4'>
                                <div>
                                    <a href='https://github.com/prasad-chavan1/Animesthetic-Social-Media' target='_blank' rel='noopener noreferrer'>
                                        <FiGithub size='30px' />
                                    </a>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </section>
<br/><br/>
                <section className='p-4 md:p-8 bg-gray-100 rounded-lg shadow-custom'>
                    <h1 className='font-bold text-lg md:text-xl text-blue-500 pb-4'>Animesthetic Social Media</h1>
                    <div className='grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center overflow-hidden'>
                        <blockquote className='sm:col-span-2'>
                            <p className='text-xs md:text-base'>
                                Animesthetic Social Media Web App project! This Django-based web application allows users to connect with friends,
                                share updates, and engage in social networking activities.
                                If you would like to contribute to this project, please visit my github and start contributing.
                            </p>
                            <cite className='inline-flex items-center mt-8 not-italic'>
                                <span className='hidden w-6 h-px bg-gray-400 sm:inline-block'></span>
                                <p className='text-xs md:text-base text-gray-500 sm:ml-3'>
                                    Python, Javascript, HTML, Django, CSS, DbSqlite
                                </p>
                            </cite>
                            <div className='flex pt-8 space-x-4'>
                                <div>
                                    <a href='https://github.com/prasad-chavan1/Animesthetic-Social-Media' target='_blank' rel='noopener noreferrer'>
                                        <FiGithub size='30px' />
                                    </a>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </section>
                <br/><br/>
                <Certification />
            </div>    
            <footer style={{ color: '#000000',background: 'none', fontFamily:'monospace' }}>
        Powered by @deodat04 <br /> Copyright © 2024 Tous droits réservés
      </footer>        
        </div>
        
    )
}

export default Project;
