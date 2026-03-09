import React from 'react';

const NetworkActivity = () => {
  return (
    <div className="flex flex-col gap-8 pb-12 w-full">
      <div className="flex items-center justify-between">
        <h1 className="heading-display text-charcoal m-0">Network Activity</h1>
      </div>
      <div className="bg-white border border-border rounded-xl p-8 flex flex-col items-center justify-center min-h-[400px]">
        <h2 className="heading-2 text-charcoal mb-4">Network Activity Coming Soon</h2>
        <p className="text-body text-muted text-center max-w-md">
          This view will feature daily active addresses, transaction volume, fee trends, and block time distributions.
        </p>
      </div>
    </div>
  );
};

export default NetworkActivity;
