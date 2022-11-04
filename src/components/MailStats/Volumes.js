import "./Volumes.css";

const Volumes = (props) => {

  console.log(props.data)

  const diskData = props.data;
  return (<div>
    {diskData.map((el) => {
      return (
        
        
            <div>
              <div className="serverlabelDisk">
                <p>{el.serverName}</p>
              </div>
              <div className="displayFrame">
                <div className="header">Drive</div>
                <div className="header">Total Space</div>
                <div className="header">Free Space</div>
                <div className="headerBar"></div>
                <div className="header">% Free</div>
              </div>

          {el.volumes.map((vol) => {

            console.log(vol.capacityGB, vol.freeSpaceGB);

           
           let volumeCapacity
                
                vol.capacityGB >= 1024
                  ? (volumeCapacity = Math.floor(vol.capacityGB / 1024)
                      .toString()
                      .concat(" TB"))
                  : (volumeCapacity = Math.floor(vol.capacityGB)
                      .toString()
                      .concat(" GB"));
          

            let volumeFreeSpace

                vol.freeSpaceGB >= 1024
             ? (volumeFreeSpace = (Math.floor((vol.freeSpaceGB/1024)))
                 .toString()
                 .concat(" TB"))
             : (volumeFreeSpace = Math.floor(vol.freeSpaceGB)
                 .toString()
                .concat(" GB"));
            
            const percentFree = Math.floor((vol.freeSpaceGB / vol.capacityGB) * 100);

            const perCentFreeString = (percentFree).toString().concat("%")

            let bgColor

            (percentFree < 15) ? (percentFree < 8 ? bgColor = "IndianRed" : bgColor = "Gold") : bgColor = "YellowGreen"

            console.log(perCentFreeString)

            const style = {
              backgroundColor: bgColor ,
              width: perCentFreeString,
            };
              
              return (
                <div className="volumesMainGrid">
                  <div className="driveLabelDisk">{vol.label}</div>
                  <div className="totalSizeDisk">{volumeCapacity}</div>
                  <div className="freeSpaceDisk">{volumeFreeSpace}</div>
                  <div className="freeSpaceChartBarDisk">
                    <div
                      className="diskBar"
                      style={
                        style
                      }
                    ></div>
                  </div>
                  <div className="freeSpacePerCentDisk">{percentFree}%</div>
                </div>
              );
                       } )}
            </div>
        // );
      
      
      
      
      )
    })}

     </div>)
    }
  

          
     
//     });
 
// };

export default Volumes
