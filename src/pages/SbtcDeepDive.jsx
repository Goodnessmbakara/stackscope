import React from 'react';

const SbtcDeepDive = () => {
  return (
    <div className="flex flex-col gap-8 pb-12 w-full">
      <div className="flex items-center justify-between">
        <h1 className="heading-display text-charcoal m-0">sBTC Deep Dive</h1>
      </div>
      <div className="bg-white border border-border rounded-xl p-8 flex flex-col items-center justify-center min-h-[400px]">
        <h2 className="heading-2 text-charcoal mb-4">sBTC Analytics Coming Soon</h2>
        <p className="text-body text-muted text-center max-w-md">
          This view will feature live sBTC minting, redemption volume, peg health, and protocol-specific allocations once the sBTC API endpoints are integrated.
        </p>
      </div>
    </div>
  );
};

export default SbtcDeepDive;
