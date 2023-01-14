import "./howitwork.css";
import order from '../../assets/images/order 1.png';
import delivery from '../../assets/images/delivery 1.png';
import quality from '../../assets/images/courier 1.png';

const HowItWork = () => {
  return (
    <section className="howItWork" id="howItWork">
      <div className="work-text">
        <span>How it works</span>
        <h2>What We Serve</h2>
        <p>
          Product Quality Is Our Priority, And Always Guarantees<br /> Halal And
          Safety Until It Is In Your Hands.
        </p>
      </div>
      <div className="work-feature">
        <div className="features">
            <img src={order}/>
            <h2>Easy To Order</h2>
            <p>You only order through the app</p>
        </div>
        <div className="features">
            <img src={delivery}/>
            <h2>Fastest Delivery</h2>
            <p>Delivery will be on time</p>
        </div>
        <div className="features">
            <img src={quality}/>
            <h2>Best Quality</h2>
            <p>The best quality of food for you</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
