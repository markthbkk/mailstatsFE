
import axios from "axios";
import { useState, useEffect } from "react";
import "./ServiceStats.css";
import { GridLoader } from "react-spinners";

const ServiceStats = () => {
  const [serviceStats, setServiceStats] = useState([]);
  const [loading, setLoading] = useState(false);

  const readServiceStatsDB = async function () {

    setLoading(true);

    console.log('trigger Axios')

    const certDataJSON = await axios.get(
      `https://mailstats-api.onrender.com/api/v1/serviceStats`
    );

    console.log(certDataJSON.data);

    const STATS_SORTED_ASC = certDataJSON.data.sort(
      (objA, objB) =>
        Number(new Date(objA.documentID)) - Number(new Date(objB.documentID))
    );

    // console.log(certDataJSON.status);

    if (certDataJSON.status === 200) {
      setServiceStats(STATS_SORTED_ASC);
       setLoading(false);
    }
  };
 useEffect(() => {
   readServiceStatsDB()
 }, []);
    // readQueueStatsDB();

  useEffect(() => {
    const timer = setInterval(() => readServiceStatsDB(), 30000);

   
    return () => clearInterval(timer);
  }, []);

  const loadSpinner = (
    <GridLoader color="#4f5e7d" loading={loading} size={33} />
  );

  const itemsToRender = serviceStats.filter((el) => el.serverName !== "NoData");

  console.log(itemsToRender)

  return (
    <div className="ServiceStats">
      <div className="pagelabel">
        <p>SMTP Service Stats</p>
      </div>
      <div className="spinnerSVC">{loadSpinner}</div>
      {itemsToRender.map((item) => (
        <div className="listItemWrapperSVC">
          <div className="listItemWrapperInner">
            <ul>
              <li className="listItemSVC">
                <div className="serverlabel">
                  <p>{item.serverName}</p>
                </div>
              </li>
              <li className="listItemSVC">
                <p className="servicelabel">Service:</p>
                <p>{item.serviceName}</p>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceStats;
