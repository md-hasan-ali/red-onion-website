import './App.css';
import About from './components/AboutUs/About';
import Banner from './components/Banner/Banner';
import Foods from './components/Foods/Foods';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Foods></Foods>
      <About></About>
    </div>
  );
}

export default App;
