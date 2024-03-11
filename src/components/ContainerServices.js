import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAreaChart, faCode, faCropSimple } from '@fortawesome/free-solid-svg-icons';
import "../styles/ContainerServices.css";


function ContainerServices() {
    return (
        <div id="services">
            <div className="container">
                <div className="services-list">
                    <div  style={{ color: '#fff' }}>
                        <FontAwesomeIcon icon={faAreaChart} className="fa-3x text-primary mb-3" style={{ background: 'none'}} />
                        <h2 style={{ color: '#000000',background: 'none', fontFamily:'monospace' }}>Mobile App Development</h2>
                        <p style={{ color: '#000000',background: 'none', fontFamily:'monospace' }}>Développement d'application mobile Android & IOS. <br /><br /> Framework : Flutter</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCode} className="fa-3x text-primary mb-3" style={{ background: 'none' }} />
                        <h2 style={{ color: '#000000',background: 'none', fontFamily:'monospace' }}>Web Development</h2>
                        <p style={{ color: '#000000',background: 'none', fontFamily:'monospace' }}>Développement d'application web, de site web vitrine, de portfolio, etc.</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCropSimple} className="fa-3x text-primary mb-3" style={{ background: 'none'}} />
                        <h2 style={{color: '#000000',background: 'none', fontFamily:'monospace' }}>UI/UX Design</h2>
                        <p style={{ color: '#000000',background: 'none', fontFamily:'monospace' }}>Développement d'interface d'application web, mobile, de maquette d'application.<br />Réalisations de visuels destinés au web et au print (affiches, logo, flyers et beaucoup d'autres).</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContainerServices;
