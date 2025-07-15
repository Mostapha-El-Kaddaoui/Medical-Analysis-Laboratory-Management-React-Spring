import '../../style/support.css'
import Card from './Card';
export default function About() {
  return (
    <div className='w-full pt-20'>
    	<div className='w-11/12 h-96 mx-auto grid grid-cols-2'>
        	<div className='flex flex-col items-start'>
              <span className='text-sm font-mont font-semibold text-slate-700'>AL-QUDS LABORATOIRE</span>
              <h1 className='text-6xl font-mont font-semibold text-slate-700 mt-8'><span className="text-red-500">Votre santé,</span> notre priorité</h1>
			  <p className='text-lg font-mont text-slate-500 mt-8 w-1/2'>Notre laboratoire propose des analyses médicales fiables et rapides. Consultez vos résultats en ligne et contactez-nous pour toute information complémentaire.</p>
              <button className='bg-slate-700 font-mont text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 mt-8 text-lg'>
                Accéder à mes résultats
              </button>
            </div>
            <div className='flex items-end'>
                <Card mtop="0px" mleft="-50px" img="https://images.unsplash.com/photo-1599556147783-7edf67c327e0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <Card mtop="50px" mleft="-100px" img="https://images.unsplash.com/photo-1614308456595-a59d48697ea8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <Card mtop="100px" mleft="-150px" img="https://hayshine.co.uk/wp-content/uploads/2023/04/Blood-testing-logo.jpeg"/>
            </div>
    	</div>
    </div>
  );
}
