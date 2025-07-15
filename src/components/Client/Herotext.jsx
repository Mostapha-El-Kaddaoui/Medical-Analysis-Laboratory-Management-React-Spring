import '../../style/support.css'

export default function Herotext() {
  return (
    <div className='w-full pt-20'>
        <div className="w-11/12 mx-auto h-full">
        	<div className="mx-auto w-3/4">
            	<h1 className='text-center text-6xl font-mont font-semibold text-slate-700 '>AL-QUDS LABORATOIRE D'ANALYSES MÉDICALES</h1>
                <p className='text-center text-lg font-mont text-slate-500 mt-8'>Bienvenue sur notre site. Consultez vos résultats d'analyses sanguines en ligne, sans vous déplacer. Pour toute question ou prise de rendez-vous, contactez-nous directement.</p>
                <div className='mx-auto w-max flex gap-4 mt-12'>
             <button className='bg-red-500 text-lg font-mont text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300'>
                Accéder à mes résultats
              </button>
                  <button className='bg-white text-lg font-mont border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition duration-300'>
                Nous contacter
              </button>
                </div>
            </div>
        	<div className='w-full h-80 mt-20 bg-[url("https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center bg-no-repeat rounded-lg shadow-xl'>
        	</div>
        </div>
    </div>
  );
}
