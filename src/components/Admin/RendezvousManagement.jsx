import '../../style/support.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiCheck, FiDelete, FiSettings, FiHome, FiBarChart2, FiCalendar } from 'react-icons/fi';
import { MdClose } from "react-icons/md";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import StatisticsBoard from './StatisticsBoard';
import RendezvousChart from './RendezvousCharts';


export default function RendezvousManagement() {
    const [data, setData] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 5;
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    useEffect(() => {
        getRendezvous();
    }, []); // au chargement uniquement


    const getRendezvous = async () => {
        try {
            const response = await axios.get(`http://localhost:8086/rendezvous`);
            setData(response.data);
            setFilteredData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8086/rendezvous/${id}`);
            getRendezvous();
        } catch (error) {
            console.log(error);
        }
    }
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: '',
        date: ''
    });
    const initialFormData = (id) => {
        setFormData({
            nom: data.find(item => item.id === id)?.nom || '',
            numero: data.find(item => item.id === id)?.numero || '',
            message: data.find(item => item.id === id)?.message || '',
            date: data.find(item => item.id === id)?.date || ''
        });
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
    const handleShowPopup = (id) => {
        initialFormData(id);
        setSelectedId(id);
        setShowPopup(true);
    }
    const handleClosePopup = () => {
        setShowPopup(false);
        setSelectedId(null);
        setFormData({
            nom: '',
            numero: '',
            message: '',
            date: ''
        });
    }
    const handleUpdate = async (e, id) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8086/rendezvous/${id}`, formData);
            getRendezvous();
            setShowPopup(false);
        } catch (error) {
            console.log(error);
        }
    }
    const handleSearch = (e) => {
        e.preventDefault();
        const filteredData = data.filter((item) =>
            (item.nom || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
            (item.numero || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
            (item.message || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
            (item.date || '').toLowerCase().includes(searchTerm.toLowerCase()) 
        );
        setFilteredData(filteredData);
        setCurrentPage(1);
    };
    return (
        <div className='w-full h-screen flex flex-col gap-y-6 overflow-y-auto '>
            {/* thsi is statistics*/}
            <StatisticsBoard />
            {/* This is the table for rendezvous management */}
            <div className='h-max w-full rounded-l-lg bg-white p-8'>
                <div className='w-full flex justify-between items-end'>
                    <div className='font-mont'>
                        <h2 className='text-2xl text-slate-700 font-semibold'>Gestion des Rendez-vous</h2>
                        <p className='text-base text-slate-500'>Visualisez et gérez les rendez-vous des patients</p>
                    </div>
                     <div className='font-mont flex gap-x-2 h-min w-1/2'>
                        <input
                            type="text"
                            placeholder="Rechercher par nom ou code..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="px-4 py-2 border border-indigo-300 rounded-lg w-full outline-none"
                        />
                        <button
                            onClick={handleSearch}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
                        >
                            Rechercher
                        </button>

                    </div>
                </div>
                <div className='w-full mt-6'>
                    <table className="w-full rounded-lg overflow-hidden text-sm text-left rtl:text-right text-gray-500 rounded-lg">
                        <thead className="text-base text-gray-200 uppercase bg-gray-700 font-bold font-mont" >
                            <tr>
                                <th className="border px-4 py-2">ID</th>
                                <th className="border px-4 py-2">Nom</th>
                                <th className="border px-4 py-2">Numéro</th>
                                <th className="border px-4 py-2">Message</th>
                                <th className="border px-4 py-2">Date</th>
                                <th className="border px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((item) => (
                                <tr key={item.id} className="bg-gray-200 border-b border-gray-300 text-sm font-semibold font-mont text-slate-700">
                                    <td className="px-6 py-4 w-10">{item.id}</td>
                                    <td className="px-6 py-4 w-40">{item.nom}</td>
                                    <td className="px-6 py-4 w-20">{item.numero}</td>
                                    <td className="px-6 py-4 ">{item.message}</td>
                                    <td className="px-6 py-4 w-40">{item.date}</td>
                                    <td className="flex gap-x-2 px-6 py-4 text-white text-center">
                                        <button className='p-2 rounded bg-indigo-700 w-max'>
                                            <FiCheck />
                                        </button>
                                        <button onClick={() => handleShowPopup(item.id)} className='p-2 rounded bg-green-500 w-max'>
                                            <FiSettings />
                                        </button>
                                        <button onClick={() => handleDelete(item.id)} className='p-2 rounded bg-amber-500 w-max'>
                                            <FiDelete />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-left mt-4 gap-2 font-mont">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            className="px-3 py-1 bg-slate-200 text-slate-800 rounded hover:bg-slate-300"
                            disabled={currentPage === 1}
                        >
                            Precedant
                        </button>

                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index + 1)}
                                className={`px-3 py-1 rounded ${currentPage === index + 1
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            className="px-3 py-1 bg-slate-200 text-slate-800 rounded hover:bg-slate-300"
                            disabled={currentPage === totalPages}
                        >
                            Suivant
                        </button>
                    </div>
                </div>
                {showPopup && (
                    <div className='absolute top-0 right-0 z-30 w-full h-full bg-blury flex items-center'>
                        <div className='bg-white w-1/2 mx-auto rounded-lg p-4 relative'>
                            <button onClick={handleClosePopup} className='absolute -top-5 -right-5 text-white bg-indigo-800 p-2 rounded-full text-3xl'>
                                <MdClose />
                            </button>
                            <div className=''>
                                <div className='font-mont'>
                                    <h2 className='text-2xl text-slate-700 font-semibold'>Des Nombres</h2>
                                    <p className='text-base text-slate-500'>Une petit statistique sur l'entreprise</p>
                                </div>
                                <form className='mt-4 grid grid-cols-2 gap-2' onSubmit={(e) => handleUpdate(e, selectedId)}
                                >
                                    <div className="mb-4">
                                        <label className="text-lg font-medium text-slate-700">Nom</label>
                                        <input
                                            name="nom"
                                            type="text"
                                            value={formData.nom}
                                            onChange={handleChange}
                                            className="bg-white w-full border border-gray-300 text-slate-900 text-lg font-mont rounded-lg outline-none py-2 px-4"
                                            placeholder="Nom ou identifiant patient"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="text-lg font-medium text-gray-700">Numéro</label>
                                        <input
                                            name="numero"
                                            type="text"
                                            value={formData.numero}
                                            onChange={handleChange}
                                            className="bg-white w-full border border-gray-300 text-slate-900 text-lg font-mont rounded-lg outline-none py-2 px-4"
                                            placeholder="Votre numéro téléphone"
                                            required
                                        />
                                    </div>
                                    <div className='mb-4 col-span-2'>
                                        <label className="text-lg font-medium text-gray-700">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="bg-white w-full border border-gray-300 text-slate-400 text-lg font-mont rounded-lg outline-none py-2 px-4 h-32"
                                            placeholder="Votre message ou note"
                                        ></textarea>
                                    </div>
                                    <div className="mb-4 col-span-2">
                                        <label className="text-lg font-medium text-gray-700">Date de rendez-vous</label>
                                        <input
                                            name="date"
                                            type="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="bg-white w-full border border-gray-300 text-slate-900 text-lg font-mont rounded-lg outline-none py-2 px-4"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="w-full col-span-2 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300">
                                        Réserver
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* Charts */}
            <RendezvousChart data={data} />
        </div>
    );
}