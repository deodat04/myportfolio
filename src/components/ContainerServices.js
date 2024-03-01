import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAreaChart, faCode, faCropSimple } from '@fortawesome/free-solid-svg-icons';
import "../styles/ContainerServices.css";


function ContainerServices() {
    return (
        <div id="services">
            <div className="container">
                <div className="services-list">
                    <div>
                        <FontAwesomeIcon icon={faAreaChart} className="fa-3x text-primary mb-3" />
                        <h2 style={{ color: '#fff', background: '#262626' }}>App Development</h2>
                        <p style={{ color: '#fff', background: '#262626' }}>Développement d'application desktop en fonction des fonctionnalités demandées. <br /> Framework : Qt Creator <br /> Languages : C++.</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCode} className="fa-3x text-primary mb-3" />
                        <h2 style={{ color: '#fff', background: '#262626' }}>Web Development</h2>
                        <p style={{ color: '#fff', background: '#262626' }}>Développement d'application web, de site web vitrine, de portfolio, etc.</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCropSimple} className="fa-3x text-primary mb-3" />
                        <h2 style={{ color: '#fff', background: '#262626' }}>UI/UX Design</h2>
                        <p style={{ color: '#fff', background: '#262626' }}>Développement d'interface d'application web, mobile, de maquette d'application.<br />Réalisations de visuels destinés au web et au print (affiches, logo, flyers et beaucoup d'autres).</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContainerServices;
