import '../../style/support.css'
import p1 from '../../assets/p-1.png'
import p2 from '../../assets/p-2.png'
import p3 from '../../assets/p-3.png'
import p4 from '../../assets/p-4.png'
import p5 from '../../assets/p-5.png'


export default function Partners() {
  return (
    <div className='w-full pt-72'>
        <div className='w-11/12 mx-auto'>
        	<span className='text-sm font-mont font-semibold text-slate-700'>Nos partenaires</span>
          <h1 className='text-6xl font-mont font-semibold text-slate-700 mt-8'>Nos <span className='text-red-500'>partenaires</span></h1>
        	<p className='text-lg font-mont text-slate-500 mt-8 w-1/2'>Nous collaborons avec des établissements de santé et des professionnels pour garantir la qualité de vos analyses médicales.</p>
          <div className='flex justify-between items-center mt-8'>
            <img src={p1} className="w-44" alt="" />
            <img src={p2} className="w-44" alt="" />
            <img src={p4} className="w-44" alt="" />
            <img src={p3} className="w-44" alt="" />
            <img src={p5} className="w-44" alt="" />
          </div>
        </div>
    </div>
  );
}
