/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-11-16 14:46:04
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-11-16 19:16:26
 */
export default {
  option: {
   title: {
     text: '',
     subtext: '迭代每日纳入/解决缺陷',
     left: 'left',
     textStyle: {
       fontSize: 30
     },
     subtextStyle: {
       fontSize: 13
     }
   },
   tooltip: {
     trigger: 'item',
     formatter: '{a} <br/>{b} : {c}'
   },
   legend: {
     left: 'right',
     top: '10',
     textStyle: {
       fontSize: 10
     }
   },
   label: {
    show: true,
    position: 'top'
  },
   xAxis: {
     type: 'category',
     name: 'x',
     splitLine: { show: false },
     data: ['02-01', '02-02', '02-03', '02-04', '02-05', '02-06']
   },
   grid: {
     left: '3%',
     right: '4%',
     bottom: '3%',
     containLabel: true
   },
   yAxis: {
     type: 'value',
     splitLine: {
      show: false 
    }
   },
   series: [
     {
       name: '新纳入',
       type: 'bar',
       itemStyle: {
         color: "#ff5075"
       },
       barWidth: 9
       // data: [20, 25, 23, 25, 25,30]
     },
     {
       name: '已解决',
       type: 'bar',
       itemStyle: {
         color: "#41d69a"
       },
       barWidth: 9
       // data: [20, 25, 23, 25, 25,30]
     },
   ]
 }
}