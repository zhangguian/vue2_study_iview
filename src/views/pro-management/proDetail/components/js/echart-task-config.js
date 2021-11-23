/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-11-16 14:36:11
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-11-16 19:16:33
 */
export default {
  option: {
   title: {
     text: '',
     subtext: '任务完成趋势',
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
       name: '完成',
       type: 'line',
       smooth: true,
       lineStyle: {
         type: 'solid',
       },
       itemStyle: {
         color: "#41d69a"
       },
       // data: [20, 25, 23, 25, 25,30]
     },
   ]
 }
}