import '../../style/support.css'
import Success from './Success';
import React, { useState } from 'react';
import axios from 'axios';

export default function APherotext() {
    const [formData, setFormData] = useState({
        analysisCode: '',
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
    const [recuperationSuccess, setRecuperationSuccess] = useState(false);
    const [patientName, setPatientName] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8086/analyses/${formData.analysisCode}`);
            setRecuperationSuccess(true);
            setPatientName(response.data.nom);
        } catch (error) {
            console.error("Erreur lors de la récupération des analyses :", error);
        }
    }
    return (
        <div className='w-full py-20'>
            <div className="w-11/12 mx-auto h-full">
                <div className="mx-auto w-3/4">
                    <h1 className='text-center text-6xl font-mont font-semibold text-slate-700 '>Vérifiez la disponibilité de vos analyses sanguines</h1>
                    <p className='text-center text-lg font-mont text-slate-500 mt-8'>Cette page est dédiée aux patients souhaitant savoir si leurs résultats d'analyses sanguines sont prêts. Saisissez vos informations pour effectuer la recherche en ligne, sans vous déplacer au laboratoire.</p>
                    <form onSubmit={handleSubmit}>
                        <div className='mx-auto w-max flex gap-4 mt-12'>
                            <input name="analysisCode" value={formData.analysisCode}
                                onChange={handleChange} type="text" className="bg-gray-100 w-96 border border-gray-300 text-gray-900 text-lg font-mont rounded-lg outline-none py-2 px-4" placeholder="Nom ou identifiant patient" required />
                            <button className='bg-red-500 text-lg font-mont text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300'>
                                Vérifier l'état de mes analyses
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {recuperationSuccess && <Success titre={`Monsieur Madame, ${patientName}, vos résultats sont prêts à être récupérés`} message="Visitez notre laboratoire le plus proche pour récupérer vos résultats."
            />}
        </div>
    );
}
