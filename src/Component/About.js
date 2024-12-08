function About() {
    return(
        <div id="aboutpage">
            <div id="about"></div>
            <div id="aboutcontainer">
                <div id="abouttopbg"></div>
                <div id="catchphrasecontainer">
                    <q id="quote">Passioné de nature depuis plus de 20 ans, mon travail s'inscrit aujou'dhui dans une démarche qui respecte la psysiologie de l'arbre.</q>
                    <div id="quoteimg"></div>
                </div>
                <div id="aboutinfos">
                    <div id="infos">
                        <div className="infosection">
                            <div className="infotitle">Mon entreprise</div>
                            <div className="infotext">Aprés plus de 20 ans de passion, A.R.O Elagage se crée en 2020 dans le but d'éxercer mon métier de passion tout en respect de l'arbre et de la nature.</div>         
                        </div>

                        <hr></hr>

                        <div className="infosection">
                            <div className="infotitle">Mon partage</div>
                            <div className="infotext">Dans la vision de transmettre ce qui me passionne, je suis formateur au métier de l'élagage au lycée de St Joseph de Rivière</div>         
                        </div>
                        
                        <hr></hr>

                        <div className="infosection">
                            <div className="infotitle">Mon équipe</div>
                            <div className="infotext">Je travail seul avec plusieurs équipes indépendantes dans le but d'exercer ma vision des choses tout en ayant une collaboration.<br></br><q>On n'est jamais aussi bien servi que par soi-même.</q></div>         
                        </div>
                    </div>
                    <div id="infosimg"></div>
                </div>
            </div>
        </div>
    )
};

export default About;