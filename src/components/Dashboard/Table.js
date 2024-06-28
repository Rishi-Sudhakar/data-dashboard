// src/components/Dashboard/Table.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Table.css';

const Table = ({ data }) => {
  const tableRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(tableRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  return (
    <table ref={tableRef} className="styled-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Color</th>
          <th>Capacity</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.data?.color || 'N/A'}</td>
            <td>{item.data?.['capacity'] || item.data?.['capacity GB'] + ' GB' || 'N/A'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
