import React, { useState } from 'react';
import '../../style/support.css'
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='w-full h-20 md:h-28 flex items-center sticky top-0 z-50 bg-white shadow-sm'>
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <div className='flex items-center'>
          <img src={logo} className='w-32 md:w-44' alt="Logo du laboratoire" />
        </div>
        {/* Desktop menu */}
        <div className='hidden md:flex items-center'>
          <ul className='flex items-center gap-8 text-slate-700 font-mont text-base font-semibold'>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/rendezvous">Prendre un rendez vous</Link></li>
            <li><Link to="/analyses">Mes analyses</Link></li>
            <li><Link to="/services">Nos services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <Link to="/espace-patient">
                <button className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300'>
                  Espace patient
                </button>
              </Link>
            </li>
          </ul>
        </div>
        {/* Mobile menu icon */}
        <div className='md:hidden flex items-center'>
          <button onClick={() => setMenuOpen(true)} aria-label="Ouvrir le menu">
            <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile menu overlay */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex">
            <div className="fixed top-0 left-0 w-full max-w-xs bg-white h-full shadow-lg transition-transform duration-300 ease-in-out transform translate-y-0 animate-slideDown">
              <div className="flex justify-between items-center px-6 py-4 border-b">
                <img src={logo} className='w-32' alt="Logo du laboratoire" />
                <button onClick={() => setMenuOpen(false)} aria-label="Fermer le menu">
                  <svg className="w-7 h-7 text-slate-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ul className='flex flex-col gap-6 px-6 py-8 text-slate-700 font-mont text-lg font-semibold'>
                <li><Link to="/" onClick={()=>setMenuOpen(false)}>Accueil</Link></li>
                <li><Link to="/rendezvous" onClick={()=>setMenuOpen(false)}>Prendre un rendez vous</Link></li>
                <li><Link to="/analyses" onClick={()=>setMenuOpen(false)}>Mes analyses</Link></li>
                <li><Link to="/services" onClick={()=>setMenuOpen(false)}>Nos services</Link></li>
                <li><Link to="/contact" onClick={()=>setMenuOpen(false)}>Contact</Link></li>
                <li>
                  <Link to="/espace-patient" onClick={()=>setMenuOpen(false)}>
                    <button className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 w-full'>
                      Espace patient
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
            {/* Click outside to close */}
            <div className="flex-1" onClick={()=>setMenuOpen(false)}></div>
          </div>
        )}
      </div>
      {/* Mobile menu slide down animation */}
      <style>{`
        @keyframes slideDown {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
}
