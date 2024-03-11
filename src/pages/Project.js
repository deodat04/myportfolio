import { FiGithub } from 'react-icons/fi';
import "../styles/Project.css";
import Certification from '../components/Certification';

const Project = () => {
    return (
        <div className='h-screen mx-5 sm:mx-auto pt-32'>
              <h1 className="sub-title" style={{textAlign: "center", color: "#213F99", fontFamily: "monospace",}}>My projects</h1>
            <div className='max-w-5xl md:px-4 py-8 pb-32 mx-auto space-y-28'>
                <section className='p-4 md:p-8 bg-gray-100 rounded-lg shadow-custom'>
                    <h1 className='font-bold text-lg md:text-xl text-blue-500 pb-4'>Gestion ParcAuto</h1>
                    <div className='grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center overflow-hidden'>
                        <blockquote className='sm:col-span-2'>
                            <p className='text-xs md:text-base'>
                                Il s'agit d'une application web de gestion location de voitures. Elle permet entre autre de gérer les voitures du parc (création, modification, suppression, listing),
                                lister les individus ayant loués une voiture, permettre à des individus d'emprunter et de rendre des voitures.
                                La consultation de la liste des véhicules est possible en mode non connecté mais la modification, la suppression et l’ajout de véhicules sont des fonctionnalités possibles uniquement pour les profils administrateurs.
                            </p>
                            <cite className='inline-flex items-center mt-8 not-italic'>
                                <span className='hidden w-6 h-px bg-gray-400 sm:inline-block'></span>
                                <p className='text-xs md:text-base text-gray-500 sm:ml-3'>
                                    PHP, Laravel, MySQL
                                </p>
                            </cite>
                            <div className='flex pt-8 space-x-4'>
                                <div>
                                    <a href='https://github.com/deodat04/ParcAuto_Gestion-Laravel.git' target='_blank' rel='noopener noreferrer'>
                                        <FiGithub size='30px' />
                                    </a>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </section>
<br/><br/>
                <section className='p-4 md:p-8 bg-gray-100 rounded-lg shadow-custom'>
                    <h1 className='font-bold text-lg md:text-xl text-blue-500 pb-4'>EventFlow</h1>
                    <div className='grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center overflow-hidden'>
                        <blockquote className='sm:col-span-2'>
                            <p className='text-xs md:text-base'>
                               EventFlow est une Application mobile de réservation de tickets d'évènements. Elle permet,
                               l'achat de billets pour divers événements et autorise la création d'événements par les utilisateurs.
                               Il y a trois types d'utilisateurs : Utilisateurs Classique, Organisateurs et Administrateurs.
                            </p>
                            <cite className='inline-flex items-center mt-8 not-italic'>
                                <span className='hidden w-6 h-px bg-gray-400 sm:inline-block'></span>
                                <p className='text-xs md:text-base text-gray-500 sm:ml-3'>
                                    Flutter, Dart, Firebase, Kkiapay
                                </p>
                            </cite>
                            <div className='flex pt-8 space-x-4'>
                                <div>
                                    <a href='https://github.com/deodat04/EventFlow-Mobile_App.git' target='_blank' rel='noopener noreferrer'>
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
