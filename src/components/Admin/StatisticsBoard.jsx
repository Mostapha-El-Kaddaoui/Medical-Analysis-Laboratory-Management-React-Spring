import React from 'react';
import '../../style/support.css'
import logo from '../../assets/logo.png';
import { FiHome, FiBarChart2, FiCalendar, FiUsers, FiSettings } from 'react-icons/fi';
import { MdSecurity } from 'react-icons/md';

export default function StatisticsBoard() {
    
    return (
        <div className='h-max w-full rounded-l-lg bg-white p-8'>
            <div className='w-full flex justify-between'>
                <div className='font-mont'>
                    <h2 className='text-2xl text-slate-700 font-semibold'>Statistiques Générales</h2>
                    <p className='text-base text-slate-500'>Aperçu des chiffres clés de la plateforme</p>
                </div>
            </div>
            <div className='w-full flex gap-x-8 mt-4'>
                <div className='relative text-white overflow-hidden bg-indigo-700 rounded-lg w-full p-4 h-40'>
                    <svg className='absolute z-10 -top-32 -right-20' width="250" height="250" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="125" cy="125" r="120" className='fill-indigo-600' />
                    </svg>
                    <svg className='absolute z-10 top-0 -right-20' width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="60" className='fill-indigo-800' />
                    </svg>
                    <div className='relative z-20'>
                        <div className='p-2 rounded bg-indigo-800 w-max'>
                            <FiHome />
                        </div>
                        <div className='mt-4'>
                            <h3 className='text-4xl font-mont font-semibold'>5 000</h3>
                        </div>
                        <div className=''>
                            <h3 className='text-base font-mont'>Nombre total des clients</h3>
                        </div>
                    </div>
                </div>

                <div className='relative text-white overflow-hidden bg-slate-700 rounded-lg h-40 w-full p-4'>
                    <svg className='absolute -top-32 -right-20' width="250" height="250" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="125" cy="125" r="120" className='fill-slate-800' />
                    </svg>
                    <svg className='absolute top-0 -right-20' width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="60" className='fill-slate-600' />
                    </svg>
                    <div className='relative z-20'>
                        <div className='p-2 rounded bg-slate-800 w-max'>
                            <FiBarChart2 />
                        </div>
                        <div className='mt-4'>
                            <h3 className='text-4xl font-mont font-semibold'>5 000</h3>
                        </div>
                        <div className=''>
                            <h3 className='text-base font-mont'>Nombre total des clients</h3>
                        </div>
                    </div>
                </div>

                <div className='relative text-white overflow-hidden bg-amber-500 rounded-lg h-40 w-full p-4'>
                    <svg className='absolute -top-32 -right-20' width="250" height="250" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="125" cy="125" r="120" className='fill-amber-600' />
                    </svg>
                    <svg className='absolute top-0 -right-20' width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="60" className='fill-amber-400' />
                    </svg>
                    <div className='relative z-20'>
                        <div className='p-2 rounded bg-amber-600 w-max'>
                            <FiCalendar />
                        </div>
                        <div className='mt-4'>
                            <h3 className='text-4xl font-mont font-semibold'>5 000</h3>
                        </div>
                        <div className=''>
                            <h3 className='text-base font-mont'>Nombre total des clients</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}