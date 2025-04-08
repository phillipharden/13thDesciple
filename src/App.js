import "./styles/App.css";
import "./styles/ShoeStrap.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import BackgroundVideo from "./components/BackgroundVideo";

const App = () => {
  return <>
  <BackgroundVideo />
  <Header />
  <main>
    <HomeScreen />
  </main>
  <Footer />
  </>;
};

export default App;
