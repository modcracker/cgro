'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, Sparkles, HelpCircle, Key, Mail, CheckCircle2 } from 'lucide-react';

export default function VerifiedContact() {
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [verified, setVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const generateChallenge = () => {
    const a = Math.floor(Math.random() * 8) + 2; // 2 to 9
    const b = Math.floor(Math.random() * 7) + 2; // 2 to 8
    setNumA(a);
    setNumB(b);
    setUserAnswer('');
    setVerified(false);
    setErrorMessage('');
  };

  // Generate a random arithmetic question upon mount
  useEffect(() => {
    const handle = setTimeout(() => {
      generateChallenge();
    }, 0);
    return () => clearTimeout(handle);
  }, []);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const correct = numA * numB;
    if (parseInt(userAnswer) === correct) {
      setVerified(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Incorrect answer. Please try again.');
    }
  };

  return (
    <div className="bg-stone-950 p-5 rounded-xl border border-stone-800 text-stone-300 shadow-lg space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
          <ShieldCheck className="text-emerald-400" size={13} />
        </div>
        <span className="text-[10px] font-mono tracking-widest text-emerald-400 font-bold uppercase">
          HUMAN VERIFICATION
        </span>
      </div>

      {!verified ? (
        <form onSubmit={handleVerify} className="space-y-3">
          <p className="text-[11px] text-stone-400 leading-normal">
            To view our contact email, please solve this simple math question to confirm you are a human reader. This helps us prevent automated email harvesting:
          </p>
          <div className="p-3 bg-stone-900 rounded border border-stone-800/80 flex items-center justify-between">
            <span className="text-xs font-mono text-amber-400">
              Solve: <strong className="text-stone-100 text-sm">{numA} &times; {numB}</strong> = ?
            </span>
            <input
              type="number"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Answer"
              className="w-20 bg-stone-950 text-stone-100 border border-stone-700/80 px-2 py-1 text-center font-mono text-xs rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
              required
            />
          </div>
          {errorMessage && (
            <p className="text-[10px] font-mono text-rose-500">{errorMessage}</p>
          )}
          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-grow bg-emerald-500 hover:bg-emerald-600 text-stone-950 px-3 py-2 rounded text-[11px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer text-center"
            >
              Verify &amp; Reveal Email
            </button>
            <button
              type="button"
              onClick={generateChallenge}
              className="px-2 py-1 border border-stone-800 hover:border-stone-600 text-stone-400 rounded text-[10px] font-mono"
            >
              Reset
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-3 animate-fade-in">
          <div className="p-3 bg-emerald-950/40 border border-emerald-900/60 rounded-lg text-xs space-y-2">
            <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-bold text-[10px]">
              <CheckCircle2 size={12} />
              <span>VERIFICATION SUCCESSFUL</span>
            </div>
            <p className="text-stone-300 leading-relaxed text-[11px]">
              The contact email address is:
            </p>
            <div className="bg-stone-950 select-all p-2.5 rounded border border-stone-850 font-mono text-xs text-amber-300 text-center tracking-wider font-bold">
              info [at] calgro [dot] com
            </div>
            <p className="text-[10px] text-stone-500 leading-tight">
              Please substitute <span className="font-semibold text-stone-400">[at]</span> with <code className="text-stone-400">@</code> and <span className="font-semibold text-stone-400">[dot]</span> with <code className="text-stone-400">.</code> when emailing. Only serious inquiries will receive a response.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
