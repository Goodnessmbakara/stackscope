import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const DataTable = ({ columns, data, isLoading, emptyMessage = "No data available", onRowClick, activeRowId }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    if (!sortConfig.key) return data;
    
    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-border-muted shadow-2xl bg-bg-surface custom-scrollbar relative">
      <table className="w-full text-left border-collapse min-w-[600px]">
        <thead className="bg-bg-deep/80 backdrop-blur-md sticky top-0 z-20 border-b border-border-muted">
          <tr>
            {columns.map((col) => (
              <th 
                key={col.key} 
                className="text-label py-4 px-4 whitespace-nowrap select-none group border-b border-border-muted"
                style={{ cursor: col.sortable ? 'pointer' : 'default' }}
                onClick={() => col.sortable && handleSort(col.key)}
              >
                <div className="flex items-center gap-2">
                  <span className="group-hover:text-primary transition-colors">{col.label}</span>
                  {col.sortable && (
                     <span className={`transition-all ${sortConfig.key === col.key ? 'text-primary' : 'opacity-20 group-hover:opacity-100'}`}>
                       {sortConfig.key === col.key ? (
                         sortConfig.direction === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                       ) : (
                         <div className="flex flex-col"><ChevronUp size={10} className="mb-[-4px]" /><ChevronDown size={10} /></div>
                       )}
                     </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border-muted">
          {isLoading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <tr key={i} className="bg-bg-surface" style={{ height: '56px' }}>
                {columns.map((col, j) => (
                  <td key={j} className="px-4 py-3">
                    <div className="animate-pulse bg-bg-surface-lighter h-4 rounded w-3/4"></div>
                  </td>
                ))}
              </tr>
            ))
          ) : sortedData?.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-4 py-20 text-center text-muted h-[200px]">
                <div className="flex flex-col items-center justify-center animate-fade-in">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-4 opacity-20">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  <span className="text-body font-semibold">{emptyMessage}</span>
                  <p className="text-xs opacity-50 mt-2">No on-chain records found for this query.</p>
                </div>
              </td>
            </tr>
          ) : (
            sortedData.map((row, i) => {
              const isActive = activeRowId === row.id;
              
              return (
                <tr 
                  key={row.id || i}
                  onClick={() => onRowClick && onRowClick(row)}
                  className={`
                    transition-all duration-200 group
                    ${onRowClick ? 'cursor-pointer hover:bg-white/5' : ''}
                    ${isActive ? 'bg-primary/10' : 'bg-transparent'}
                  `}
                  style={{ height: '56px' }}
                >
                  {columns.map((col) => (
                    <td key={col.key} className={`px-4 py-3 text-[13px] font-medium font-mono ${isActive ? 'text-primary' : 'text-text-primary'}`}>
                      {col.render ? col.render(row[col.key], row) : row[col.key]}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
