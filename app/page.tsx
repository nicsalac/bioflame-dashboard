"use client";
import React, { useState } from 'react';

export default function BioFlameDashboard() {
  // Process 1.0 Logic: State for Telemetry
  const [telemetry] = useState({
    methane: 0.00,
    temp: 28.5,
    ph: 7.2,
    alert: "System Healthy"
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      {/* NAVIGATION - Responsive Flexbox */}
      <nav className="bg-[#2C4A3B] text-white p-4 shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
             BioFlame
          </h1>
          <div className="flex gap-2 items-center">
            <span className="text-[10px] bg-green-900/50 px-2 py-1 rounded-full border border-green-700 font-bold uppercase tracking-wider">
              Node: Tanay, Rizal
            </span>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-4 md:p-8">
        {/* HEADER */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-slate-800">Operational Overview</h2>
          <p className="text-slate-500 text-sm italic">Dashboard</p>
        </div>

        {/* SENSOR GRID - Responsive Column Logic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10">
          
          {/* Methane Card - Process 1.2 */}
          <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-200">
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-2 text-center">Methane (CH4)</p>
            <div className="flex items-baseline justify-center gap-2">
              <h3 className="text-5xl font-black text-slate-800 tracking-tighter">{telemetry.methane}</h3>
              <span className="text-slate-400 font-bold text-xs">PPM</span>
            </div>
          </div>

          {/* Temp Card */}
          <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-200">
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-2 text-center">Temp</p>
            <div className="flex items-baseline justify-center gap-2">
              <h3 className="text-5xl font-black text-slate-800 tracking-tighter">{telemetry.temp}</h3>
              <span className="text-slate-400 font-bold text-xs">°C</span>
            </div>
          </div>

          {/* pH Card */}
          <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-200 text-center">
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-2">pH Level</p>
            <h3 className="text-5xl font-black text-slate-800 tracking-tighter">{telemetry.ph}</h3>
          </div>

        </div>

        {/* LOWER GRID - Processes 2.0 & 3.0 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Process 2.1: Slurry Input Form */}
          <section className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <h4 className="text-xl font-bold text-slate-800 mb-1">Batch Management</h4>
            <p className="text-slate-500 text-xs mb-6 font-medium">Record Waste Input</p>
            
            <div className="space-y-4">
              <input 
                type="number" 
                placeholder="Batch Weight (kg)" 
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
              />
              <button className="w-full bg-[#2C4A3B] text-white font-black py-4 rounded-2xl hover:bg-green-800 transition-colors uppercase tracking-widest text-sm">
                Update Slurry Inventory
              </button>
            </div>
          </section>

          {/* Process 3.3: Safety Alerts */}
          <section className="bg-green-50 p-8 rounded-[2.5rem] border border-green-200 shadow-sm flex flex-col justify-center text-center">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-600 mb-4 italic">Safety Monitor (3.0)</h4>
            <div className="text-4xl font-black text-slate-800 mb-2 uppercase tracking-tighter">
              {telemetry.alert}
            </div>
            <p className="text-slate-500 text-[10px] max-w-[250px] mx-auto font-medium">
              Real-time threshold evaluation successful. No critical methane leaks detected.
            </p>
          </section>

        </div>
      </main>

      <footer className="text-center mt-12 text-slate-300 text-[10px] font-bold uppercase tracking-[0.4em]">
        PUP Computer Engineering • 2026
      </footer>
    </div>
  );
}
