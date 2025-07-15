import '../../style/support.css'
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent } from '../ui/card';
export default function DateRendezvousChart(props) {
    const [chartData, setChartData] = useState([]);
    const data = props.data;
    useEffect(() => {
        PaintChart();
    }, [data]);

    const PaintChart = () => {
        const countByDate = data.reduce((acc, { date }) => {
            acc[date] = (acc[date] || 0) + 1;
            return acc;
        }, {});

        const newChartData = Object.entries(countByDate).map(([date, count]) => ({
            date,
            count,
        }));

        setChartData(newChartData);
    }
    return (
        <div className='h-max w-full rounded-l-lg bg-white p-8'>
            <div className='w-full flex justify-between'>
                <div className='font-mont'>
                    <h2 className='text-2xl text-slate-700 font-semibold'>Statistiques des Rendez-vous</h2>
                    <p className='text-base text-slate-500'>Suivez l’évolution et la répartition des rendez-vous</p>
                </div>
            </div>
            <div className='w-full h-max grid grid-cols-2 gap-4 mt-4'>
                <div className='w-full h-max '>
                    <Card className="w-full pt-4 ">
                        <CardContent className="h-80  outline-none">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={chartData} margin={{ top: 20, right: 40, left: 0, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="count" fill="#4F46E5" radius={[6, 6, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
