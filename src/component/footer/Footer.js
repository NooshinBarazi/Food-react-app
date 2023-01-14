import "./footer.css";
import foodLogo from "../../assets/images/food 2.png";

const Footer = () => {
  return (
    <section className="footer" id="contact">
      <div className="footer-bar">
        <div className="col col-1">

          <div className="logo">
            <h2>Let’sFood</h2>
            <img src={foodLogo} />
          </div>

          <p>Jalan Semangka Raya, Telaga Murni,Cikarang Barat, Kab. Bekasi</p>

          <div className="social-media">
            <a href="#"><i class='bx bxl-instagram'></i></a>
            <a href="#"><i class='bx bxl-facebook'></i></a>
            <a href="#"><i class='bx bxl-twitter' ></i></a>
          </div>

        </div>
        <div className="col col-2">
          <h5>Company</h5>
          <p>About Us</p>
          <p>Career</p>
          <p>How It Work</p>
        </div>
        <div className="col col-3">
          <h5>Policy</h5>
          <p>FAQ</p>
          <p>Privacy</p>
          <p>Shipping</p>
        </div>
        <div className="col col-4">
          <h5>Get In Touch</h5>
          <p>+62 896 7311 2766</p>
          <p>food@example.com</p>
        </div>
      </div>
      <div className="copyRight">
        <p>© 2022 Let’sFood. ALL RIGHT RESERVED.</p>
      </div>
    </section>
  );
};

export default Footer;
