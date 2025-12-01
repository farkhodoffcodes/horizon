import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

interface StatsCardProps {
  title: string;
  value: string;
  subtitle?: string;
  chartData?: any[];
  chartColor?: string;
  delay?: string; // animation delay class
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, subtitle, chartData, chartColor = "#82ca9d", delay = "", className = "" }) => {
  return (
    <div className={`glass-card p-6 rounded-3xl flex flex-col justify-between ${delay} ${className} hover:bg-glass-100 transition-colors duration-500`}>
      <div>
        <h3 className="text-glass-300 text-sm font-medium tracking-wide uppercase mb-1">{title}</h3>
        <div className="text-3xl font-bold text-white tracking-tight">{value}</div>
        {subtitle && <div className="text-xs text-glass-300 mt-2">{subtitle}</div>}
      </div>
      
      {chartData && (
        <div className="h-16 mt-4 w-full opacity-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartColor} stopOpacity={0.3}/>
                  <stop offset="95%" stopColor={chartColor} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Tooltip cursor={false} content={<></>} />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke={chartColor} 
                fillOpacity={1} 
                fill={`url(#gradient-${title})`} 
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default StatsCard;