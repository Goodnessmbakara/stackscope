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
    <div className="w-full overflow-x-auto rounded-lg border border-border shadow-sm bg-white custom-scrollbar relative">
      <table className="w-full text-left border-collapse min-w-[600px]">
        <thead 
          style={{ 
            backgroundColor: 'var(--midnight-navy)', 
            color: 'var(--white)',
            position: 'sticky',
            top: 0,
            zIndex: 20
          }}
        >
          <tr>
            {columns.map((col) => (
              <th 
                key={col.key} 
                className="text-label py-3 px-4 font-medium whitespace-nowrap select-none group"
                style={{ cursor: col.sortable ? 'pointer' : 'default', height: '48px' }}
                onClick={() => col.sortable && handleSort(col.key)}
              >
                <div className="flex items-center gap-1">
                  {col.label}
                  {col.sortable && (
                     <span className={`opacity-0 group-hover:opacity-50 transition-opacity ${sortConfig.key === col.key ? 'opacity-100 flex flex-col' : ''}`}>
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
        <tbody>
          {isLoading ? (
            // Skeleton Loader Rows
            Array.from({ length: 5 }).map((_, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-light-gray'} style={{ height: '48px' }}>
                {columns.map((col, j) => (
                  <td key={j} className="px-4 py-3 border-b border-border">
                    <div className="animate-pulse bg-gray-200 h-4 rounded w-3/4"></div>
                  </td>
                ))}
              </tr>
            ))
          ) : sortedData?.length === 0 ? (
            // Empty State
            <tr>
              <td colSpan={columns.length} className="px-4 py-8 text-center text-muted border-b border-border" style={{ height: '160px' }}>
                <div className="flex flex-col items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-2 opacity-50">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  <span className="text-body font-medium">{emptyMessage}</span>
                </div>
              </td>
            </tr>
          ) : (
            // Data Rows
            sortedData.map((row, i) => {
              const isActive = activeRowId === row.id;
              
              return (
                <tr 
                  key={row.id || i}
                  onClick={() => onRowClick && onRowClick(row)}
                  className={`
                    border-b border-border transition-colors group
                    ${i % 2 === 0 ? 'bg-white' : 'bg-light-gray'}
                    ${onRowClick ? 'cursor-pointer hover:bg-teal-bg' : ''}
                  `}
                  style={{
                    height: '48px',
                    ...(isActive ? {
                      backgroundColor: 'var(--teal-bg)',
                      boxShadow: 'inset 3px 0 0 0 var(--teal)'
                    } : {})
                  }}
                >
                  {columns.map((col) => (
                    <td key={col.key} className="px-4 py-3 text-body-small text-charcoal">
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
