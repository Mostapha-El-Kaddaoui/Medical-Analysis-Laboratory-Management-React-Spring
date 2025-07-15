import '../../style/support.css'
import { useEffect, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, Legend
} from 'recharts';
import { Card, CardContent } from '../ui/card';

export default function TypeAnalyseChart(props) {
  const [dateChartData, setDateChartData] = useState([]);
  const [typeChartData, setTypeChartData] = useState([]);
  const data = props.data;
console.log("AnalyseCharts data:", data);

  const COLORS = ['#4F46E5', '#EF4444', '#10B981', '#F59E0B', '#3B82F6', '#E11D48', '#8B5CF6', '#14B8A6'];

  useEffect(() => {
    PaintCharts();
  }, [data]);

  const PaintCharts = () => {
    const countByDate = data.reduce((acc, { dateAnalyse }) => {
      acc[dateAnalyse] = (acc[dateAnalyse] || 0) + 1;
      return acc;
    }, {});

    const countByType = data.reduce((acc, { typeAnalyse }) => {
      acc[typeAnalyse] = (acc[typeAnalyse] || 0) + 1;
      return acc;
    }, {});

    const newDateChartData = Object.entries(countByDate).map(([dateAnalyse, count]) => ({
      dateAnalyse,
      count,
    }));

    const newTypeChartData = Object.entries(countByType).map(([typeAnalyse, count]) => ({
      typeAnalyse,
      count,
    }));

    setDateChartData(newDateChartData);
    setTypeChartData(newTypeChartData);
  };

  return (
    <div className='h-max w-full rounded-l-lg bg-white p-8'>
      <div className='w-full flex justify-between'>
        <div className='font-mont'>
          <h2 className='text-2xl text-slate-700 font-semibold'>Statistiques des Analyses</h2>
          <p className='text-base text-slate-500'>Analysez les tendances et répartitions des analyses</p>
        </div>
      </div>

      {/* Grid 1: Bar Charts */}
      <div className='w-full h-max grid grid-cols-2 gap-4 mt-4'>
        {/* BarChart - Par Date */}
        <Card className="w-full">
          <CardContent className="h-[300px]">
            <h2 className="text-left text-lg font-semibold my-2 text-slate-700 font-mont">
              Analyses par date
            </h2>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dateChartData} margin={{ top: 20, right: 40, left: 0, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dateAnalyse" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#4F46E5" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* BarChart - Par Type */}
        <Card className="w-full">
          <CardContent className="h-[300px]">
            <h2 className="text-left text-lg font-semibold my-2 text-slate-700 font-mont">
              Analyses par type
            </h2>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={typeChartData} margin={{ top: 20, right: 40, left: 0, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="typeAnalyse" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#008236" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Grid 2: Line Chart & Pie Chart */}
      <div className='w-full h-max grid grid-cols-2 gap-4 mt-4'>
        {/* LineChart - Tendance */}
        <Card className="w-full">
          <CardContent className="h-[300px]">
            <h2 className="text-left text-lg font-semibold my-2 text-slate-700 font-mont">
              Tendance des analyses
            </h2>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dateChartData} margin={{ top: 20, right: 40, left: 0, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dateAnalyse" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#f97316" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* PieChart - Répartition par type */}
        <Card className="w-full">
          <CardContent className="h-[300px]">
            <h2 className="text-left text-lg font-semibold my-2 text-slate-700 font-mont">
              Répartition des types d’analyses
            </h2>
            <ResponsiveContainer className={"w-full h-full"}>
              <PieChart>
                <Pie
                  data={typeChartData}
                  dataKey="count"
                  nameKey="typeAnalyse"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {typeChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
