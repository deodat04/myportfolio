import React from 'react';
import NSE1 from "../assets/NSE1.png"
import NSE2 from "../assets/NSE2.png"
import NSE3 from "../assets/NSE3.png"
import portfolio from "../assets/portfolio_deodat04view.png";
import ecommerce from "../assets/ecommerce_view.png";
import sportiva from "../assets/sportiva_view.png";
import "../styles/Home.css";

const Certification = () => {
    return (
        <div className='p-4 md:p-8 bg-gray-100 rounded-lg'>
                <h1 className="sub-title" style={{textAlign: "center", color: "#213F99", fontFamily: "monospace",}}>Others</h1>
                <h4 className="sub-title" style={{textAlign: "center", color: "#000000", fontFamily: "monospace",}}>Cybersecurity Certificate</h4>
            <div className='row row-cols-1 row-cols-md-3 g-4 mt-4 d-flex justify-content-center'>
                <div className='col d-flex justify-content-center'>
                    <div>
                        <a href='https://training.fortinet.com/mod/customcert/verify_certificate.php?id=ktAE1Wewu1'>
                            <img src={NSE1} className='card-img-top' alt='NSE1 Certificate' style={{ maxWidth: 250 }}/>
                        </a>
                    </div>
                </div>
                <div className='col d-flex justify-content-center'>
                    <div >
                        <a href='https://training.fortinet.com/mod/customcert/verify_certificate.php?id=l3VkWhZRmT'>
                            <img src={NSE2} className='card-img-top' alt='NSE2 Certificate' style={{ maxWidth: 250 }} />
                        </a>
                    </div>
                </div>
                <div className='col d-flex justify-content-center'>
                    <div >
                        <a href='https://training.fortinet.com/mod/customcert/verify_certificate.php?id=sY7us3u6Ca'>
                            <img src={NSE3} className='card-img-top' alt='NSE3 Certificate' style={{ maxWidth: 250 }} />
                        </a>
                    </div>
                </div>
            </div>
            <br/><br/>
            <h4 className="sub-title" style={{textAlign: "center", color: "#000000", fontFamily: "monospace",}}>Design Graphic</h4>
            <div className="work-list">
            <div className="work">
              <img src={portfolio} alt="" />
              <div className="layer">
                <h2 style={{ color: '#ffffff',background: 'none', fontFamily:'monospace' }}>Portfolio HomePage</h2>
              </div>
            </div>
            <div className="work">
              <img src={ecommerce} alt="" />
              <div className="layer">
                <h2 style={{ color: '#ffffff',background: 'none', fontFamily:'monospace' }}>Site ecommerce</h2>
              </div>
            </div>
            <div className="work">
              <img src={sportiva} alt="" />
              <div className="layer">
                <h2 style={{ color: '#ffffff',background: 'none', fontFamily:'monospace' }}>Plateforme de Sport</h2>
              </div>
            </div>
          </div>
          <br/><br/>
          <br/><br/>
        </div>
    );
}

export default Certification;
