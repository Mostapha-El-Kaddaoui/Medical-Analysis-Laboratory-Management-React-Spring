
import '../../style/support.css';
import axios from 'axios';
import React, { useState } from 'react';

export default function AddAnalyse() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: '',
        date: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }


    const [creationSuccess, setCreationSuccess] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8086/rendezvous', formData)
            console.log('Réservation réussie:', response.data);
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='w-full h-screen flex flex-col gap-y-6 overflow-y-auto '>
            <div className='h-max w-full rounded-l-lg bg-white p-8 font-mont'>
                <div className='w-full flex justify-between'>
                    <div className='font-mont'>
                        <h2 className='text-2xl text-slate-700 font-semibold'>Statistiques des Rendez-vous</h2>
                        <p className='text-base text-slate-500'>Suivez l’évolution et la répartition des rendez-vous</p>
                    </div>
                </div>
                <div className="font-mont mt-6">
                    <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className="">
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
                            <div className="">
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
                            <div className='col-span-2'>
                                <label className="text-lg font-medium text-gray-700">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="bg-white w-full border border-gray-300 text-slate-400 text-lg font-mont rounded-lg outline-none py-2 px-4 h-32"
                                    placeholder="Votre message ou note"
                                ></textarea>
                            </div>
                            <div className="col-span-2">
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
                            <button
                                type="submit"
                                className="col-span-2 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300"
                            >
                                Réserver
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
