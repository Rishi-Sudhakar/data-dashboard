// src/components/Dashboard/Dashboard.js
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { gsap } from 'gsap';
import ScrollMagic from 'scrollmagic';
import Table from './Table';
import './Dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const dashboardRef = useRef(null);

  useEffect(() => {
    axios.get('https://api.restful-api.dev/objects')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerElement: dashboardRef.current,
      triggerHook: 0.9,
      reverse: false,
    })
      .setTween(gsap.fromTo(dashboardRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }))
      .addTo(controller);

    return () => {
      controller.destroy(true);
    };
  }, []);

  return (
    <div className="dashboard" ref={dashboardRef}>
      <h1>Product Dashboard</h1>
      <Table data={data} />
    </div>
  );
};

export default Dashboard;
