import "./App.css";
import Banner from "./component/Banner/Banner";
import Footer from "./component/Footer/Footer";
import Home from './page/Home/Home';

const App = () => {
  return (
    <div className="main-app">
      <Banner />
      <div className="l-main">
        <Home/>
      </div>
      <Footer />
    </div>
  );
};

export default App;
