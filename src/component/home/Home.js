import './home.css';
import homeImg from '../../assets/images/img-hero.png';

const Home = () => {
    return ( 
        <section className="home" id='home'>
            <div className="home-text">
                <h2>Be The Fastest In Delivery Your <span>Food</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit ut aliquam, purus sit amet</p>
                <button className='btn home-btn'>Get Started</button>
            </div>
            <div className="home-img">
                <img src={homeImg}/>
            </div>
        </section>
     );
}
 
export default Home;