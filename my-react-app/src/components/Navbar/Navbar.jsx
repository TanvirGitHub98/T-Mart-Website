import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5 gap-6 mb-8 fixed bg-slate-400 top-0 w-full text-white">
      <div className="flex-grow">
        <h1 className="font-bold text-lg">@T-Mart</h1>
      </div>

      <div className="flex gap-6">
        <Link to={'/home'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/products'}>Products</Link>
        <Link to={'/contact'}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
