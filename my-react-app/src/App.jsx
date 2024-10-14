import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <div className="h-[10%]">
        <Navbar />
      </div>
      <div className="h-[85%] overflow-auto">
        <Outlet />
      </div>
      <div className="h-[5%] bg-slate-400 text-white">
          <Footer/>
      </div>
    </div>
  );
}

export default App;
