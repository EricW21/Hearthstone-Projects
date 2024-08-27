

import ApexCharts from 'apexcharts';

export function LineGraph({results}){
    function handleGraphButton(time, chart){
        const today = new Date();
         // Number of days to subtract

        const previousDate = new Date(today);
        previousDate.setDate(today.getDate() - time);
        chart.updateOptions({ yaxis: [{
          y: 100,
          borderColor: '#999',
          label: {
            show: true,
            text: 'Support',
            style: {
              color: "#fff",
              background: '#00E396'
            }
          }
        }] });
        chart.zoomX(
            
            previousDate.getTime(),
            today.getTime()
          )
    }
    
      
      let chart;
      const initializeChart = () => {
        const fetchData = results.map(result => [result.timeStamp, result.rating]);
        
        
        const today = new Date(); 
        if (results.length!==0) {
          let last = results[results.length-1];
          fetchData.push([today.getTime(),last.rating])
        }
        
        let options = {
            series: [{
            data: fetchData,
            name:"Rating"
          }],
            chart: {
            id: 'area-datetime',
            type: 'area',
            height: 350,
            curve:'straight',
            zoom: {
              autoScaleYaxis: true
            }
          },
          stroke: {
            curve: 'straight',
          },
          annotations: {
            yaxis: [{
              
              y: 500,
              borderColor: '#999',
              label: {
                show: true,
                text: 'Support',
                style: {
                  color: "#fff",
                  background: '#00E396'
                }
              }
            }],
            xaxis: [{
              
              borderColor: '#999',
              yAxisIndex: 0,
              label: {
                show: true,
                text: 'Rally',
                style: {
                  color: "#fff",
                  background: '#775DD0'
                }
              }
            }]
          },
          dataLabels: {
            enabled: false
          },
          markers: {
            size: 0,
            style: 'hollow',
          },
          xaxis: {
            type: 'datetime',
            
            tickPlacement: 'on',
            labels: {
                datetimeFormatter: {
                  year: 'yyyy',
                  month: 'MMM \'yy',
                  day: 'dd MMM',
                  hour: 'HH:mm'
                }
              }
            
          },
          tooltip: {
            x: {
              format: 'dd MMM yyyy hh tt'
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 100]
            }
          },
          };
        
        
        
        chart = new ApexCharts(document.getElementById('chart'), options);
        chart.render();
        
        
        
      };
      

        initializeChart();
        handleGraphButton(1,chart);
        return (
            <div>
                <div className="toolbar">
                <button onClick={() => handleGraphButton(1,chart)}>Last Day</button>
                <button onClick={() => handleGraphButton(2,chart)}>Last 2 Days</button>
                <button onClick={() => handleGraphButton(7,chart)}>Last Week</button>
                
              
              </div>
              <div id="chart"></div>
              <br></br>
              <br></br>
            </div>
          );
        
        
    }
