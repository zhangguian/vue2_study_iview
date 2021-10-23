<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-10-22 20:59:59
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-10-23 13:14:40
-->
<template>
  <div class="canvas" style="margin-top: 2px;">
    <canvas id="check" :width="contentWidth" :height="contentHeight" @click="drawVertify"></canvas>
  </div>
</template>

<script>
export default {
  name: 'IviewNumverify',
  props: {
    contentWidth: {
      type: Number,
      default: 120
    },
    contentHeight: {
      type: Number,
      default: 36
    },
    identifyCode: {
      type: String,
      default: '1234'
    },
    fontSizeMin: {
      type: Number,
      default: 16
    },
    fontSizeMax: {
      type: Number,
      default: 40
    },

  },
  data() {
    return {
      
    };
  },

  mounted() {
    this.drawCanvas()
  },

  methods: {
    drawVertify() {
      console.log('1111 :>> ', '1111');
      this.drawCanvas()
    },
    /**
      * 产生一个随机数 可设置随机数区间
      * @param {[Number]} min [随机数区间下限]
      * @param {[Number]} max [随机数区间上限]
      * @return {[Number]} [返回一个在此区间的随机数]
      */
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    /**
      * 返回一个随机颜色 可设置颜色区间
      * @param {[Number]} min [颜色下限]
      * @param {[Number]} max [颜色上限]
      * @return {[String]} [随机颜色]
      */
      randomColor(min, max) {
        let r = this.randomNum(min, max)
        let g = this.randomNum(min, max)
        let b = this.randomNum(min, max)
        // return 'rgb(' + r + ',' + g + ',' + b + ')'
        return `rgb(${r},${g},${b})`;
      },
    /**
      * 随机字符串数组
      * @return {[Array]} [随机数组]
      */
    randomStr() {
      const str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789";
      return str.split("").sort(function () {
        return Math.random() - 0.5
      })
    },
    /**
      * 绘制文本字符串
      * @param {[String]} canvasId [canvas的id]
      * @param {[Number]} canvasW [canvas的width]
      * @param {[Number]} canvasH [canvas的height]
      * @param {[Number]} num [绘制验证码的字数]
      * @param {[Number]} fsMin [字体大小下限]
      * @param {[Number]} fsMax [字体大小上限]
      * @param {[Number]} frMin [字体旋转偏移下限]
      * @param {[Number]} frMax [字体旋转偏移上限]
      * @param {[Number]} min [颜色下限]
      * @param {[Number]} max [颜色上限]
      * @return {[String]} [随机字符串]
      */
    drawText(canvasId,canvasW,canvasH,num,fsMin,fsMax,frMin,frMax,min,max) {
      let str = ''
      for(let i = 0; i < num; i++) {
        const char = this.randomStr()[Math.floor(0, this.randomStr.length)]
        const fs = this.randomNum(fsMin, fsMax)

        canvasId.font = fs + 'px Verdana'

        canvasId.fillStyle = this.randomColor(min, max)
        // 保存绘制状态
        canvasId.save()
        // context.translate(x,y);
        // x 添加到水平坐标（x）上的值
        // y 添加到垂直坐标（y）上的值
        canvasId.translate(canvasW / num * i + canvasW /20, 0)

        // 变换角度
        canvasId.rotate(this.randomNum(frMin, frMax) * Math.PI /180)
        // context.fillText(text,x,y,maxWidth);
        // text 规定在画布上输出的文本。
        // x 开始绘制文本的 x 坐标位置（相对于画布）。
        // y 开始绘制文本的 y 坐标位置（相对于画布）。
        // maxWidth 可选。允许的最大文本宽度，以像素计。
        canvasId.fillText(char, 0, (canvasH + fs) / 2.5, canvasW / num)

        // 返回之前保存过的路径状态和属性
        canvasId.restore()
         str += char
      }
      return str
    },

    /**
      * 绘制背景
      * @param {[String]} canvasId [canvas的id]
      * @param {[Number]} canvasW [canvas的width]
      * @param {[Number]} canvasH [canvas的height]
      * @param {[Number]} min [下限]
      * @param {[Number]} max [上限]
      */
    drawBg(canvasId, canvasW, canvasH, min, max) {
    
      // 绘制canvas背景
      canvasId.fillStyle = this.randomColor(min, max);
    
      // 填充颜色
      canvasId.fillRect(0, 0, canvasW, canvasH);
    
    },
    /**
      * 绘制干扰 圆点
      * @param {[String]} canvasId [canvas的id]
      * @param {[Number]} canvasW [canvas的width]
      * @param {[Number]} canvasH [canvas的height]
      * @param {[Number]} num [绘制的数量]
      * @param {[Number]} r [圆点半径]
      * @param {[Number]} min [下限]
      * @param {[Number]} max [上线]
      */
    drawCircle(canvasId, canvasW, canvasH, num, r, min, max) {
      for (var i = 0; i < num; i++) {
    
      // 开始绘制 （拿起笔）
      canvasId.beginPath()
    
      // context.arc(x,y,r,sAngle,eAngle,counterclockwise); （绘制）
      // x 圆的中心的 x 坐标。
      // y 圆的中心的 y 坐标。
      // r 圆的半径。
      // sAngle 起始角，以弧度计。（弧的圆形的三点钟位置是 0 度）。
      // eAngle 结束角，以弧度计。
      // counterclockwise 可选。规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针。
      canvasId.arc(this.randomNum(0, canvasW), this.randomNum(0, canvasH), r, 0, 2 * Math.PI)
    
      // 填充颜色
      canvasId.fillStyle = this.randomColor(min, max)
    
      // 填充
      canvasId.fill()
    
      // 闭合绘制 （放开笔）
      canvasId.closePath()
      }
    },
    /**
      * 绘制干扰 线段
      * @param {[String]} canvasId [canvas的id]
      * @param {[Number]} canvasW [canvas的width]
      * @param {[Number]} canvasH [canvas的height]
      * @param {[Number]} num [绘制的数量]
      * @param {[Number]} min [下限]
      * @param {[Number]} max [上线]
      */
    drawLine(canvasId, canvasW, canvasH, num, min, max) {
      for (var i = 0; i < num; i++) {
    
      // 开始绘制 （拿起笔）
      canvasId.beginPath();
    
      // 绘制开始点
      canvasId.moveTo(this.randomNum(0, canvasW), this.randomNum(0, canvasH));
    
      // 绘制结束点
      canvasId.lineTo(this.randomNum(0, canvasW), this.randomNum(0, canvasH));
    
      canvasId.strokeStyle = this.randomColor(min, max);
    
      canvasId.stroke();
    
      canvasId.closePath();
    
      }
    
 },
 // 绘制验证码
  drawCanvas() {
   var canvasId = document.getElementById("check").getContext("2d");
   var ctxW = document.getElementById("check").clientWidth;
   var ctxH = document.getElementById("check").clientHeight;
  // 清空canvas
  canvasId.clearRect(0, 0, 200, 60);
 
  // 绘制背景
  this.drawBg(canvasId, ctxW, ctxH, 200, 255);
 
  // 绘制干扰圆点
  this.drawCircle(canvasId, ctxW, ctxH, 20, 5, 200, 255);
 
  // 绘制干扰线段
  this.drawLine(canvasId, ctxW, ctxH, 20, 0, 255);
 
  // 绘制验证码
  var str = this.drawText(canvasId, ctxW, ctxH, 4, 10, 50, -30, 30, 0, 100);
 
  return str;
 
 }
  },
};
</script>

<style lang="less" scoped>

</style>