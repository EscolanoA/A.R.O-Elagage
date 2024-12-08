import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function Home() {
    return (
        <div id="homepage">
            <div id='home'></div>
            <div className="logobar">
                <div className='logo'></div>
                <div className='menubuttonAnimation'><button className='menubutton'></button></div>
            </div>
            <div className="bgimage">
                <h1 className="title">A.R.O Elagage</h1>
                <h2 className='subtitle'>Service d'élagage basé a St Josheph  de Rivière depuis 2020</h2>
            </div>
        </div>
    );
}

export default Home;