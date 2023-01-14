import './App.css';
import Comment from './component/comment/Comment';
import Footer from './component/footer/Footer';
import Home from './component/home/Home';
import HowItWork from './component/howItWork/HowItWork';
import Menu from './component/menu/Menu';
import Navbar from './component/navbar/Navbar';
import SignUp from './component/signup/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <HowItWork />
      <Menu />
      <Comment />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
