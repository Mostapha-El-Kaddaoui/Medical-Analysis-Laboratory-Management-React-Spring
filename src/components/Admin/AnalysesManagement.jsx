import React from 'react';
import '../../style/support.css'
import StatisticsBoard from './StatisticsBoard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FiCheck, FiSettings, FiDelete } from 'react-icons/fi';
import AnalyseCharts from './AnalyseCharts';
export default function AnalysesManagement() {
    const [data, setData] = useState([]);
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
        getAnalyses();
    }, []);
    const getAnalyses = async () => {
        try {
            const response = await axios.get(`http://localhost:8086/analyses`);
            setData(response.data);
            setFilteredData(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    const handleSearch = (e) => {
        e.preventDefault();
        const filteredData = data.filter((item) =>
            (item.nom || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
            (item.prenom || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
            (item.codeAnalyse || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
            (item.typeAnalyse || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
            (item.resultat || '').toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filteredData);
        setCurrentPage(1);
    };

    return (
        <div className='w-full h-screen flex flex-col gap-y-6 overflow-y-auto'>
            {/* this is statistics*/}
            <StatisticsBoard />
            {/* This is the table for analyses management */}
            <div className='h-max w-full rounded-l-lg bg-white p-8'>
                <div className='w-full flex justify-between items-end'>
                    <div className='font-mont'>
                        <h2 className='text-2xl text-slate-700 font-semibold'>Gestion des Analyses</h2>
                        <p className='text-base text-slate-500'>Consultez et administrez toutes les analyses réalisées</p>
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
                                <th className="border px-4 py-2">Prenom</th>
                                <th className="border px-4 py-2">Resultat</th>
                                <th className="border px-4 py-2">Type d'Analyse</th>
                                <th className="border px-4 py-2">Code d'Analyse</th>
                                <th className="border px-4 py-2">Date</th>
                                <th className="border px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((item) => (
                                <tr key={item.id} className="bg-gray-200 border-b border-gray-300 text-sm font-semibold font-mont text-slate-700">
                                    <td className="px-6 py-4">{item.id}</td>
                                    <td className="px-6 py-4">{item.nom}</td>
                                    <td className="px-6 py-4">{item.prenom}</td>
                                    <td className="px-6 py-4">{item.resultat}</td>
                                    <td className="px-6 py-4">{item.typeAnalyse}</td>
                                    <td className="px-6 py-4">{item.codeAnalyse}</td>
                                    <td className="px-6 py-4">{item.dateAnalyse}</td>
                                    <td className="flex gap-x-2 px-6 py-4 text-white text-center">
                                        <button className='p-2 rounded bg-indigo-700 w-max'>
                                            <FiCheck />
                                        </button>
                                        <button className='p-2 rounded bg-green-500 w-max'>
                                            <FiSettings />
                                        </button>
                                        <button className='p-2 rounded bg-amber-500 w-max'>
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
            </div>
            {/* This type analyse chart */}
            <AnalyseCharts data={data} />
        </div>
    );
}