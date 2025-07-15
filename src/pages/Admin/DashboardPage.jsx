import React from 'react';
import SideNavBar from '../../components/Admin/SideNavBar';
import RendezvousManagement from '../../components/Admin/RendezvousManagement';
import AnalysesManagement from '../../components/Admin/AnalysesManagement';
import AddAnalyse from '../../components/Admin/AddAnalyse';
import AddRendezvous from '../../components/Admin/AddRendezvous';
import { useState } from 'react';
import '../../style/support.css';

export default function DashboardPage() {
    const [activeComponent, setActiveComponent] = useState('rendezvous');

    const sideContent = () => {
        switch (activeComponent) {
            case 'rendezvous':
                return <RendezvousManagement />;
            case 'analyses':
                return <AnalysesManagement />;
            case 'addAnalyse':
                return <AddAnalyse />;
            case 'addRendezvous':
                return <AddRendezvous />;
            default:
                return <RendezvousManagement />;
        }
    };
    return (
        <div className='w-full h-screen bg-slate-700 flex justify-between gap-x-6'>
            <SideNavBar setActiveComponent={setActiveComponent} />
            {sideContent()}
        </div>
    );
}
