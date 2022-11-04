/* eslint-disable react-hooks/exhaustive-deps */

import axios from "axios";
import { useState, useEffect } from "react";
import "./QueueStats.css";
import {GridLoader} from "react-spinners"

const QueueStats = () => {
  const [queueStats, setQueueStats] = useState([]);
  const [loading, setLoading] = useState(false)

  const readQueueStatsDB = async function () {
    setLoading(true)

    console.log('trigger Axios')

    const certDataJSON = await axios.get(
      `https://mailstats-api.onrender.com/api/v1/queueStats`
    );

    console.log(certDataJSON.data);

    const STATS_SORTED_ASC = certDataJSON.data.sort(
      (objA, objB) =>
        Number(new Date(objA.documentID)) - Number(new Date(objB.documentID))
    );

    // console.log(certDataJSON.status);

    if (certDataJSON.status === 200) {
      setQueueStats(STATS_SORTED_ASC);
      setLoading(false)
    }
  };
 useEffect(() => {
   readQueueStatsDB()
 }, []);
    // readQueueStatsDB();

  useEffect(() => {
    const timer = setInterval(() => readQueueStatsDB(), 30000);

   
    return () => clearInterval(timer);
  }, []);


  const loadSpinner = <GridLoader color="#4f5e7d" loading={loading} size={33} />;
 

  

  const itemsToRender = queueStats.filter((el) => el.serverName !== "NoData");

  console.log(itemsToRender)

  return (
    <div className="QueueStats">
      <div className="pagelabel">
        <p>SMTP Queue Stats</p>
      </div>
      <div className="spinnerQueue">{loadSpinner}</div>

      {itemsToRender.map((item) => (
        <div className="listItemWrapperQueue">
          <div className="listItemWrapperInnerQueue">
            <ul>
              <li className="listItemQueue1">
                <div className="serverlabelQueue">
                  <p>{item.serverName}</p>
                </div>
              </li>
              <li className="listItemQueue2">
                <div className="queueLabel">
                  <p className="label">Queue:</p> {item.queueName}
                </div>
                <div className="messageCount">{item.messageCount}</div>
              </li>
            </ul>
          </div>

          {/* <div className="messageCount">{item.messageCount}</div> */}
        </div>
      ))}
    </div>
  );
};

export default QueueStats;
