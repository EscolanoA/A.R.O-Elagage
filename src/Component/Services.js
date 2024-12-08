import React from 'react';

function Services() {
    return(
        <div className="servicespage">
            <div id="services"></div>
            <div className='servicescontainer'>
                <div id='card1'>
                    <div id='card1bg'></div>
                    <div className='cardinfocontainer'>
                        <div className='servicetitle'><span>Taille raisonnée</span></div>
                        <div className='servicedescription'>Taille d'éclaircie, sanitaire, restructuration, architecturée.</div>
                        <button className='servicebtn'>En savoir plus</button>
                    </div>
                </div>

                <div id='card2'>
                    <div id='card2bg'></div>
                    <div className='cardinfocontainer'>
                        <div className='servicetitle'><span>Abattage et démontage</span></div>
                        <div className='servicedescription'>Abattage et démontage de tous type d'arbre. Abattage en direct ou contrôlé. Démontage avec ou sans rétention.</div>
                        <button className='servicebtn'>En savoir plus</button>
                    </div>
                </div>

                <div id='card3'>
                    <div id='card3bg'></div>
                    <div className='cardinfocontainer'>
                        <div className='servicetitle'><span>Soins aux arbres</span></div>
                        <div className='servicedescription'>Haubanage dynamique et statique, lutte contre les nuisibles, suppression de nids de chenilles et pose de pièges.</div>
                        <button className='servicebtn'>En savoir plus</button>
                    </div>
                </div>

                <div id='card4'>
                    <div id='card4bg'></div>
                    <div className='cardinfocontainer'>
                        <div className='servicetitle'><span>Gestion déchets verts</span></div>
                        <div className='servicedescription'>Broyage et évacuation de tous types de déchets verts. Rognage de souche, sciage de grume, confection de mobilier et sculpture.</div>
                        <button className='servicebtn'>En savoir plus</button>
                    </div>
                </div>

                <div id='card5'>
                    <div id='card5bg'></div>
                    <div className='cardinfocontainer'>
                        <div className='servicetitle'><span>Entretien de jardin</span></div>
                        <div className='servicedescription'>Petits travaux de jardinage, taille et rabattage de haie, débroussaillage etc...</div>
                        <button className='servicebtn'>En savoir plus</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;