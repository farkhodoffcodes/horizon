import React, { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Wallet, 
  Activity, 
  CreditCard, 
  Send, 
  RefreshCw, 
  MoreHorizontal, 
  Copy, 
  QrCode, 
  ArrowLeft, 
  ChevronDown, 
  Smartphone, 
  Repeat, 
  CheckCircle2,
  Layers
} from 'lucide-react';
import StatsCard from './StatsCard';

const data = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 5000 },
  { name: 'Thu', value: 2780 },
  { name: 'Fri', value: 1890 },
  { name: 'Sat', value: 2390 },
  { name: 'Sun', value: 3490 },
];

const barData = [
  { name: 'A', value: 20 },
  { name: 'B', value: 45 },
  { name: 'C', value: 30 },
  { name: 'D', value: 80 },
  { name: 'E', value: 50 },
  { name: 'F', value: 65 },
];

type ViewState = 'main' | 'send' | 'receive' | 'buy' | 'more';

const DeFiDashboard: React.FC = () => {
  const [view, setView] = useState<ViewState>('main');
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderContent = () => {
    switch(view) {
      case 'send':
        return (
          <div className="animate-fade-in h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <button onClick={() => setView('main')} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h2 className="text-xl font-bold">Send Assets</h2>
            </div>
            
            <div className="flex-1 flex flex-col gap-4">
              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-wide">Recipient Address</label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="0x..." 
                    className="w-full bg-black/20 border border-white/10 rounded-xl p-4 pr-10 focus:outline-none focus:border-blue-500/50 transition-colors font-mono text-sm"
                  />
                  <QrCode className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-wide">Amount</label>
                <div className="relative">
                  <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00" 
                    className="w-full bg-black/20 border border-white/10 rounded-xl p-4 pr-20 focus:outline-none focus:border-blue-500/50 transition-colors text-2xl font-bold"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-white/5 px-2 py-1 rounded-lg cursor-pointer hover:bg-white/10">
                    <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold">E</div>
                    <span className="text-sm font-medium">ETH</span>
                    <ChevronDown className="w-3 h-3 text-gray-400" />
                  </div>
                </div>
                <div className="text-right text-xs text-gray-500">Available: 4.2 ETH</div>
              </div>

              <button className="mt-auto w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                Confirm Send
              </button>
            </div>
          </div>
        );

      case 'receive':
        return (
          <div className="animate-fade-in h-full flex flex-col items-center text-center">
            <div className="w-full flex items-center gap-3 mb-6">
              <button onClick={() => setView('main')} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h2 className="text-xl font-bold ml-auto mr-auto pr-9">Receive Assets</h2>
            </div>

            <div className="bg-white p-4 rounded-2xl mb-6 shadow-xl">
               <QrCode className="w-48 h-48 text-black" strokeWidth={1} />
            </div>

            <div className="w-full space-y-2 mb-8">
              <label className="text-xs text-gray-400 uppercase tracking-wide">Your Ethereum Address</label>
              <div 
                onClick={handleCopy}
                className="w-full bg-black/20 border border-white/10 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors group"
              >
                <span className="font-mono text-sm text-gray-300 truncate mr-4">0x71C...9A23</span>
                {copied ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5 text-gray-500 group-hover:text-white" />}
              </div>
              <div className="text-xs text-gray-500">Only send ETH and ERC-20 tokens to this address.</div>
            </div>

            <div className="flex gap-4 w-full">
              <button className="flex-1 bg-white/5 hover:bg-white/10 py-3 rounded-xl text-sm font-medium transition-colors">Share Address</button>
              <button className="flex-1 bg-white/5 hover:bg-white/10 py-3 rounded-xl text-sm font-medium transition-colors">Request Payment</button>
            </div>
          </div>
        );

      case 'buy':
        return (
           <div className="animate-fade-in h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <button onClick={() => setView('main')} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h2 className="text-xl font-bold">Buy Crypto</h2>
            </div>
            
            <div className="space-y-4">
               {[
                 { name: 'MoonPay', rate: '1 ETH ≈ $3,450.12', fee: '1.5%', best: true },
                 { name: 'Transak', rate: '1 ETH ≈ $3,448.50', fee: '2.1%', best: false },
                 { name: 'Ramp', rate: '1 ETH ≈ $3,452.00', fee: '1.8%', best: false },
               ].map((provider, i) => (
                 <div key={i} className="glass-card p-4 rounded-xl flex items-center justify-between cursor-pointer hover:border-blue-500/50 transition-colors group">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                          <CreditCard className="w-5 h-5 text-gray-300" />
                       </div>
                       <div>
                          <div className="font-bold flex items-center gap-2">
                            {provider.name} 
                            {provider.best && <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">Best Rate</span>}
                          </div>
                          <div className="text-xs text-gray-400">{provider.rate}</div>
                       </div>
                    </div>
                    <div className="text-right">
                       <div className="text-sm font-medium text-gray-300">Fee: {provider.fee}</div>
                    </div>
                 </div>
               ))}
            </div>

            <div className="mt-auto pt-6 text-center text-xs text-gray-500">
               Services provided by third-party partners.
            </div>
          </div>
        );

      case 'more':
        return (
          <div className="animate-fade-in h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <button onClick={() => setView('main')} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h2 className="text-xl font-bold">More Actions</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
               {[
                 { icon: <Repeat className="w-6 h-6"/>, label: "Swap", desc: "Exchange tokens" },
                 { icon: <Activity className="w-6 h-6"/>, label: "Stake", desc: "Earn rewards" },
                 { icon: <Layers className="w-6 h-6"/>, label: "Bridge", desc: "Cross-chain" },
                 { icon: <Smartphone className="w-6 h-6"/>, label: "WalletConnect", desc: "Scan QR" },
               ].map((action, i) => (
                 <button key={i} className="glass-card p-4 rounded-xl flex flex-col items-center justify-center text-center gap-3 hover:bg-white/5 transition-colors aspect-square">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                       {action.icon}
                    </div>
                    <div>
                       <div className="font-bold">{action.label}</div>
                       <div className="text-xs text-gray-500">{action.desc}</div>
                    </div>
                 </button>
               ))}
            </div>
          </div>
        );

      default: // Main View
        return (
          <div className="animate-fade-in">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none">
              <Wallet className="w-32 h-32 text-blue-500" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-glass-300 text-sm font-medium tracking-wide uppercase">Total Balance</span>
              </div>
              <div className="text-6xl font-bold tracking-tight mb-6">
                $24,592.40
                <span className="text-lg text-emerald-400 font-medium ml-4 inline-flex items-center bg-emerald-400/10 px-2 py-1 rounded-lg align-middle">
                  <ArrowUpRight className="w-4 h-4 mr-1" /> +12.5%
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                 <ActionBtn icon={<Send className="w-5 h-5"/>} label="Send" onClick={() => setView('send')} color="group-hover:text-blue-400" />
                 <ActionBtn icon={<ArrowDownRight className="w-5 h-5"/>} label="Receive" onClick={() => setView('receive')} color="group-hover:text-blue-400" />
                 <ActionBtn icon={<CreditCard className="w-5 h-5"/>} label="Buy" onClick={() => setView('buy')} color="group-hover:text-blue-400" />
                 <ActionBtn icon={<MoreHorizontal className="w-5 h-5"/>} label="More" onClick={() => setView('more')} color="group-hover:text-blue-400" />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="pt-28 px-4 pb-20 max-w-7xl mx-auto min-h-screen">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 animate-slide-up">
        <div>
          <h1 className="text-4xl font-bold mb-2">DeFi Wallet</h1>
          <p className="text-gray-400">Exploratory mission with DeFi Horizon & navigating vast possibilities</p>
        </div>
        <div className="flex gap-3 mt-4 md:mt-0">
           <button className="glass-btn px-4 py-2 rounded-full text-sm flex items-center gap-2">
              <RefreshCw className="w-3 h-3" /> Sync
           </button>
           <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Connect Wallet
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column - Balance & Stats */}
        <div className="lg:col-span-2 space-y-6">
          {/* Main Balance Card / Interaction Area */}
          <div className="glass-card rounded-[2rem] p-8 relative overflow-hidden group min-h-[340px] flex flex-col justify-center animate-slide-up" style={{animationDelay: '0.1s'}}>
            {renderContent()}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <StatsCard 
               title="Revenue" 
               value="$8,245" 
               subtitle="+15% this week" 
               chartData={data} 
               chartColor="#3b82f6"
               className="h-64"
            />
             <div className="glass-card p-6 rounded-3xl flex flex-col justify-between h-64 hover:bg-glass-100 transition-colors">
                <div className="flex justify-between items-start">
                   <div>
                      <h3 className="text-glass-300 text-sm font-medium tracking-wide uppercase mb-1">Asset Allocation</h3>
                      <div className="text-2xl font-bold text-white tracking-tight">Diverse</div>
                   </div>
                   <Activity className="w-5 h-5 text-glass-300" />
                </div>
                <div className="h-32 w-full mt-4 flex items-end justify-between gap-2">
                   {barData.map((d, i) => (
                      <div key={i} className="w-full bg-white/5 rounded-t-lg relative group overflow-hidden" style={{height: `${d.value}%`}}>
                         <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-red-600/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </div>

        {/* Right Column - Recent Activity & Tokens */}
        <div className="lg:col-span-1 space-y-6 animate-slide-up" style={{animationDelay: '0.3s'}}>
          
          <div className="glass-card p-6 rounded-3xl h-full">
            <h3 className="text-lg font-semibold mb-6 flex items-center justify-between">
              Your Assets
              <button className="text-xs text-blue-400">View All</button>
            </h3>
            
            <div className="space-y-4">
              {[
                { name: 'Bitcoin', symbol: 'BTC', amount: '0.45', value: '$12,450', color: 'bg-orange-600' },
                { name: 'Ethereum', symbol: 'ETH', amount: '4.2', value: '$8,200', color: 'bg-blue-600' },
                { name: 'Solana', symbol: 'SOL', amount: '145', value: '$3,150', color: 'bg-purple-600' },
                { name: 'USDC', symbol: 'USDC', amount: '792', value: '$792', color: 'bg-blue-500' },
              ].map((coin, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${coin.color} flex items-center justify-center text-white font-bold text-xs shadow-lg`}>
                       {coin.symbol[0]}
                    </div>
                    <div>
                      <div className="font-medium text-sm group-hover:text-blue-400 transition-colors">{coin.name}</div>
                      <div className="text-xs text-gray-500">{coin.amount} {coin.symbol}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-sm">{coin.value}</div>
                    <div className="text-xs text-emerald-400">+2.4%</div>
                  </div>
                </div>
              ))}
            </div>

             <div className="mt-8 pt-6 border-t border-white/5">
                <div className="bg-gradient-to-r from-blue-900/30 to-red-900/30 p-4 rounded-xl text-center border border-white/5">
                   <p className="text-xs text-blue-200 mb-2">Asset Protection Active</p>
                   <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[98%] shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                   </div>
                </div>
             </div>
          </div>

        </div>

      </div>
    </div>
  );
};

const ActionBtn = ({icon, label, color = "group-hover:text-white", onClick}: {icon: React.ReactNode, label: string, color?: string, onClick?: () => void}) => (
  <button onClick={onClick} className="flex flex-col items-center gap-2 group">
    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300">
      <div className={`text-white ${color} transition-colors`}>
        {icon}
      </div>
    </div>
    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">{label}</span>
  </button>
)

export default DeFiDashboard;