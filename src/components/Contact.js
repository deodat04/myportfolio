import picture from '../assets/mitm2.jpg'

function Contact(){
    return(
        <div id ="about"> //change the id to do responsive
        <div className="containeur">
            <div className="row">
                <div className="about-col-1">
                    <img src={picture}/>  //change
                </div>
                <div className="about-col-2">
                    <h1 className="sub-title">About Me</h1> 
                    <p> Je m'appelle Déodat ADANDEDJAN, nom de dev : @deodat04. Ma passion est tournée vers tout ce qui
                        touche à l'innovation, à la technologie et aux sciences informatiques. Très vite après
                        l'obtention de mon Baccalauréat série scientifique, j'ai commencé mes recherches dans cet
                        univers si captivant. J'ai dès lors entamé mes études à l'Institut de Formation et de Recherche
                        en Informatique (IFRI) en spécialité de Génie Logiciel. Actuellement en 3ème année de
                        Licence, j'ai pu apprendre énormément et développer plusieurs compétences. Cela ne m'a pas
                        empêché de suivre des formations dans d'autres branches de l'informatique, telles que le design
                        graphique et la cybersécurité (IBM). Je n'ai pas fini d'apprendre et d'explorer ce grand univers
                        qu'est l'informatique mais avec de la détermination tout est possible. </p>
                    <div className="tab-titles">
                        <p className="tab-links active-link" onclick="openTab('skills')">Skills</p>
                        <p className="tab-links" onclick="openTab('experience')">Experience</p>
                        <p className="tab-links" onclick="openTab('education')">Education</p>
                    </div>
                    <div className="tab-contents active-tab" id="skills">
                        <ul>
                            <li><span>Développement d'applications</span>Développement d'application desktop</li>
                            <li><span>Développement Web</span>Développement d'application Web</li>
                            <li><span>UI/UX</span>Design d'interfaces web et d'applications</li>
                            <li><span>Analyse SOC</span>Analyse de systemes pour la sécurité</li>

                        </ul>
                    </div>
                    <div className="tab-contents" id="experience">
                        <ul>
                            <li><span>Août 2023 - Septembre 2023</span>Stage Academique à l'Institut Ola Technologie</li>
                        </ul>
                    </div>
                    <div className="tab-contents" id="education">
                        <ul>
                            <li><span>Juillet 2023</span> 2ème annnée de license en Génie Logiciel à l'IFRI
                                (Institut de Formation et de Recherche en Informatique)</li>
                                <li><span>Août 2023</span> NSE 3 Network Security Associate by Fortinet </li>
                            <li><span>Juillet 2023</span> NSE 2 Network Security Associate by Fortinet </li>
                            <li><span>Juin 2023</span> NSE 1 Network Security Associate by Fortinet </li>
                            <li><span>Juin 2023</span> Badge Cybersecurity Fundamentals by IBM, ITExperience INC
                            </li>
                            <li><span>Décembre 2022 à Janvier 2023</span>Formation en Design graphique</li>
                            <li><span>Juillet 2022</span> Formation en Anglais à TBC Africa (A2 elementary level)
                            </li>
                            <li><span>2021</span>BAC D au College Catholique Père Aupiais(Mention Bien)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Contact;