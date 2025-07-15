
import '../../style/support.css';
import AnalysesManagement from './AnalysesManagement';
export default function AddAnalyse() {

    return (
        <div className='w-full h-screen flex flex-col gap-y-6 overflow-y-auto '>
            <div className='h-max w-full rounded-l-lg bg-white p-8 font-mont'>
                <div className='w-full flex justify-between'>
                    <div className='font-mont'>
                        <h2 className='text-2xl text-slate-700 font-semibold'>Statistiques des Rendez-vous</h2>
                        <p className='text-base text-slate-500'>Suivez l’évolution et la répartition des rendez-vous</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4 py-6'>
                    <div class="flex items-center justify-center w-full col-span-2">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-indigo-800">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p class="mb-2 text-sm text-white"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-white">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg font-medium text-gray-700">Nom</label>
                        <input type="text" placeholder="Nom" className="p-2 border border-slate-300 rounded" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg font-medium text-gray-700">Prénom</label>
                        <input type="text" placeholder="Prénom" className="p-2 border border-slate-300 rounded" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg font-medium text-gray-700">Code de l'analyse</label>
                        <input type="text" placeholder="Code de l'analyse" className="p-2 border border-slate-300 rounded" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg font-medium text-gray-700">Type d'analyse</label>
                        <input type="text" placeholder="Type d'analyse" className="p-2 border border-slate-300 rounded" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg font-medium text-gray-700">Date de rendez-vous</label>
                        <input
                            name="date"
                            type="date"
                            className="bg-white border border-gray-300 text-slate-900 text-lg rounded-lg outline-none py-2 px-4"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg font-medium text-gray-700">Résultats de l'analyse</label>
                        <textarea
                            placeholder="Résultats de l'analyse"
                            className="p-2 border border-slate-300 rounded"
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="col-span-2 w-full">
                        <button
                            type="submit"
                            className="w-full bg-indigo-800 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
                        >
                            Ajouter Analyse
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
