import './menu.css';
import { foods } from '../../data';

const Menu = () => {
    return ( 
        <section className="menu" id='menu'>
            <div className='menu-text'>
                <span>Our menu</span>
                <h2>Our Popular Menu</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
            </div>
            <div className='popular-menu'>
                {foods.map(food =>(
                    <div className='menu-item' key={food.title}>
                        <div className='food-img'><img src={food.image}/></div>
                        <div className='food-text'>
                            <div className='title-text'>
                                <h5>{food.title}</h5>
                                <p>{food.subtitle}</p>
                            </div>
                            <div className='price-text'>
                                <p>{food.price}</p>
                                <i class='bx bxs-heart'></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className='btn moreBtn'>More Menu</button>
        </section>
     );
}
 
export default Menu;