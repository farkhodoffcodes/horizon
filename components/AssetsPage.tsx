import React from 'react';
import { ArrowUpRight, ArrowDownRight, Search, Filter } from 'lucide-react';

const assets = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC', price: '$64,230.50', change: '+2.4%', cap: '$1.2T', vol: '$34B' },
  { id: 2, name: 'Ethereum', symbol: 'ETH', price: '$3,450.12', change: '+1.8%', cap: '$420B', vol: '$15B' },
  { id: 3, name: 'Solana', symbol: 'SOL', price: '$145.80', change: '-0.5%', cap: '$65B', vol: '$2.1B' },
  { id: 4, name: 'Cardano', symbol: 'ADA', price: '$0.45', change: '+5.2%', cap: '$16B', vol: '$450M' },
  { id: 5, name: 'Ripple', symbol: 'XRP', price: '$0.62', change: '+0.1%', cap: '$34B', vol: '$1.2B' },
  { id: 6, name: 'Polkadot', symbol: 'DOT', price: '$7.20', change: '-1.2%', cap: '$10B', vol: '$200M' },
  { id: 7, name: 'Chainlink', symbol: 'LINK', price: '$18.40', change: '+8.4%', cap: '$11B', vol: '$800M' },
  { id: 8, name: 'Avalanche', symbol: 'AVAX', price: '$45.30', change: '+3.1%', cap: '$17B', vol: '$500M' },
];

const AssetsPage: React.FC = () => {
  return (
    <div className="pt-28 px-4 pb-20 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 animate-slide-up">
        <h1 className="text-4xl font-bold mb-4 md:mb-0">Market Assets</h1>
        
        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative group flex-1 md:flex-none">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
             <input 
               type="text" 
               placeholder="Search assets..." 
               className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-blue-500/50 w-full md:w-64 transition-colors"
             />
          </div>
          <button className="glass-btn w-10 h-10 rounded-full flex items-center justify-center">
             <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="glass-card rounded-3xl overflow-hidden animate-slide-up" style={{animationDelay: '0.1s'}}>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5">
                <th className="p-6 text-xs text-gray-400 uppercase tracking-wider font-medium">Asset</th>
                <th className="p-6 text-xs text-gray-400 uppercase tracking-wider font-medium text-right">Price</th>
                <th className="p-6 text-xs text-gray-400 uppercase tracking-wider font-medium text-right">24h Change</th>
                <th className="p-6 text-xs text-gray-400 uppercase tracking-wider font-medium text-right hidden md:table-cell">Market Cap</th>
                <th className="p-6 text-xs text-gray-400 uppercase tracking-wider font-medium text-right hidden lg:table-cell">Volume (24h)</th>
                <th className="p-6 text-xs text-gray-400 uppercase tracking-wider font-medium text-right">Trade</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset, i) => (
                <tr key={asset.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                       <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-xs font-bold border border-white/10">
                          {asset.symbol[0]}
                       </div>
                       <div>
                          <div className="font-medium text-white">{asset.name}</div>
                          <div className="text-xs text-gray-500">{asset.symbol}</div>
                       </div>
                    </div>
                  </td>
                  <td className="p-6 text-right font-medium">{asset.price}</td>
                  <td className="p-6 text-right">
                    <span className={`inline-flex items-center text-xs px-2 py-1 rounded-full ${asset.change.startsWith('+') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                      {asset.change.startsWith('+') ? <ArrowUpRight className="w-3 h-3 mr-1"/> : <ArrowDownRight className="w-3 h-3 mr-1"/>}
                      {asset.change}
                    </span>
                  </td>
                  <td className="p-6 text-right text-gray-400 hidden md:table-cell">{asset.cap}</td>
                  <td className="p-6 text-right text-gray-400 hidden lg:table-cell">{asset.vol}</td>
                  <td className="p-6 text-right">
                    <button className="text-xs font-medium text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors">
                       Trade
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssetsPage;