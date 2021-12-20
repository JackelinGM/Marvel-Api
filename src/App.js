import './App.css';
import { Footer } from './component/Footer';
import { Characters } from './component/Characters';
import { Navbar } from './component/Navbar';

function App() {
  return (
    <div>
    <Navbar />
    <Characters />
    <Footer />
    </div>
  );
}

export default App;
