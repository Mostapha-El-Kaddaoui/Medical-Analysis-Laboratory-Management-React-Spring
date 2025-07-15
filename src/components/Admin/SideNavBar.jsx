import React from 'react';
import '../../style/support.css'
import logo from '../../assets/logo.png';
import { FiHome, FiBarChart2, FiCalendar, FiUsers, FiSettings } from 'react-icons/fi';
import { MdSecurity } from 'react-icons/md';

export default function SideNavBar({ setActiveComponent }) {
  return (
    <div className="h-full w-60 bg-white rounded-r-lg py-8 items-center flex flex-col">
        <div className='w-4/5 h-full'>
        	<div className="">
                <img src={logo} className='w-full' alt="Logo du laboratoire" />
            </div>
            <div className='flex flex-col mt-8'>
        <h3 className='text-xl font-mont font-semibold text-slate-700'>Navigation</h3>
        <ul className='ml-2 text-base font-mont text-slate-500 flex flex-col gap-y-4 mt-4'>
          <li onClick={() => setActiveComponent('dashboard')} className='hover:text-red-500 transition duration-300 cursor-pointer flex items-center gap-2'>
            <FiHome /> Dashboard
          </li>
          <li onClick={() => setActiveComponent('analyses')} className='hover:text-red-500 transition duration-300 cursor-pointer flex items-center gap-2'>
            <FiBarChart2 /> Analyses
          </li>
          <li onClick={() => setActiveComponent('rendezvous')} className='hover:text-red-500 transition duration-300 cursor-pointer flex items-center gap-2'>
            <FiCalendar /> Rendez-vous
          </li>
          <li onClick={() => setActiveComponent('patients')} className='hover:text-red-500 transition duration-300 cursor-pointer flex items-center gap-2'>
            <FiUsers /> Patients
          </li>
        </ul>
      </div>

      {/* SETTINGS Section */}
      <div className='flex flex-col mt-8'>
        <h3 className='text-xl font-mont font-semibold text-slate-700'>Ajouter</h3>
        <ul className='ml-2 text-base font-mont text-slate-500 flex flex-col gap-y-4 mt-4'>
          <li onClick={() => setActiveComponent('addAnalyse')} className='hover:text-red-500 transition duration-300 cursor-pointer flex items-center gap-2'>
            <FiSettings /> Une analyse
          </li>
          <li onClick={() => setActiveComponent('addRendezvous')} className='hover:text-red-500 transition duration-300 cursor-pointer flex items-center gap-2'>
            <MdSecurity /> Un rendez vous
          </li>
          <li className='hover:text-red-500 transition duration-300 cursor-pointer flex items-center gap-2'>
            <FiCalendar /> Notifications
          </li>
          <li className='hover:text-red-500 transition duration-300 cursor-pointer flex items-center gap-2'>
            <FiUsers /> Utilisateurs
          </li>
        </ul>
      </div>
        </div>
    </div>
  );
}