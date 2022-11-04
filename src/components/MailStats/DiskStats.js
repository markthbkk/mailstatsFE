/* eslint-disable react-hooks/exhaustive-deps */

import axios from "axios";
import { useState, useEffect } from "react";
import "./DiskStats.css";
import { GridLoader } from "react-spinners"
import Volumes from './Volumes'

const DiskStats = () => {
  const [diskStats, setDiskStats] = useState([]);
  const [loading, setLoading] = useState(false)

  const readDiskStatsDB = async function () {
    setLoading(true)

    console.log('trigger Axios')

    const certDataJSON = await axios.get(
      `https://mailstats-api.onrender.com/api/v1/diskStats`
    );

    // console.log(certDataJSON.data);

    const STATS_SORTED_ASC = certDataJSON.data.sort(
      (objA, objB) => {return objA.serverName.localeCompare(objB.serverName); }
        
    );

    // console.log(certDataJSON.status);

    if (certDataJSON.status === 200) {
      setDiskStats(STATS_SORTED_ASC);
      setLoading(false)
    }
  };
  useEffect(() => {
    readDiskStatsDB()
  }, []);
  

  useEffect(() => {
    const timer = setInterval(() => readDiskStatsDB(), 300000);

   
    return () => clearInterval(timer);
  }, []);


  const loadSpinner = <GridLoader color="#4f5e7d" loading={loading} size={33} />;
 

  

  const itemsToRender = diskStats.filter((el) => el.serverName !== "NoData");

  console.log(itemsToRender)

  return (
    <div className="DiskStats">
      <div className="pagelabelDisk">
        <p>Exchange Disk Stats</p>
      </div>
      <div className="spinnerSVC">{loadSpinner}</div>

      <div className="WrapperDisk">
        <Volumes data={itemsToRender} />
      </div>
    </div>
  );
};

export default DiskStats;
