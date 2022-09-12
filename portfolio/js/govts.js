/* globals Chart:false, feather:false */

(() => {
    'use strict'
  
    feather.replace({ 'aria-hidden': 'true' })
  
    // Graphs
    const ctx = document.getElementById('myChart')
    // eslint-disable-next-line no-unused-vars
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          '100年 班次 65',
          '101年 班次 67',
          '102年 班次 57',
          '103年 班次 48',
          '104年 班次 56',
          '105年 班次 75',
          '106年 班次 73',
          '107年 班次 76',
          '108年 班次 89',
          '109年 班次 72'
        ],
        datasets: [{
          data: [
            1207,
            1155,
            993,
            813,
            995,
            1119,
            1247,
            1199,
            1433,
            1266
          ],
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })
  })()