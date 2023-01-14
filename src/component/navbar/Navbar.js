import "./navbar.css";
import foodLogo from "../../assets/images/food 2.png";

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <h2>Let’sFood</h2>
        <img src={foodLogo} />
      </div>

      <ul className="navList">
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#howItWork">How it works</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="box-icon">
        <i class="bx bx-search"></i>
        <div>
          <i class="bx bxs-cart-alt"></i>
        </div>
        <div className="sign-in">
          <i class="bx bx-right-arrow-alt"></i>
          <p>Sign in</p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
