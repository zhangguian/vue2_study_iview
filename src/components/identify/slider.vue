<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-10-24 13:54:28
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-05 20:56:30
-->
<template>
  <div class="slider-box" :class="sliderStatus?'success' : ''">
    <i  @mousedown="sliderMove" :class="`i-icon ${sliderStatus?succIcon : startIcon}`"></i>
    <div :class="sliderStatus?'success' : 'slidetounlock'">{{sliderStatus?succText:startText}}</div>
  </div>
</template>

<script>
export default {
  name: 'IviewSlider',
  props: {
    // 开始图标
    startIcon: {
      type: String,
      default:  'icon-jiantou_yemian_xiangyou'
    },
    // 成功图标
    succIcon: {
      type: String,
      default: 'icon-chenggong'
    },
    //开始的文字
    startText: {
      type: String,
      default: '请拖动滑块,完成验证'
    },
    //成功文字
    succText: {
      type: String,
      default: '验证成功'
    },
     //失败之后的函数
    errorFun: {
      type: Function
    },
    //或者用值来进行监听
    status: {
      type: String
    }
  },
  data() {
    return {
      sliderStatus: false
    };
  },

  mounted() {
    
  },

  methods: {
     sliderMove(e) {
      console.log('e :>> ', e);
      let slider = e.target
      let startX = e.clientX // 滑块初始X坐标
      let sliderWidth = slider.offsetWidth // 获取滑块宽度
      let parentWidth = slider.parentElement.offsetWidth // 获取父元素的宽度
      let MaxX = parentWidth - sliderWidth // 获取可滑行的最大距离
      if(this.sliderStatus) return false

      document.onmousemove = (e) => {
        let endX = e.clientX
        this.disX = endX - startX // 鼠标移动的距离 从滑块初始X坐标，到鼠标移动的横向距离
        if(this.disX <= 0) this.disX = 0 
        if(this.disX>=MaxX-sliderWidth) this.disX = MaxX//减去滑块的宽度,体验效果更好
  			slider.style.transition = '.1s all'
				slider.style.transform = 'translateX('+this.disX+'px)'
				e.preventDefault()
      }
			document.onmouseup = ()=> {
				if(this.disX !== MaxX){
					slider.style.transition = '.5s all';
					slider.style.transform = 'translateX(0)';
					//执行失败的函数
					this.errorFun && this.errorFun();
				}else{
					this.sliderStatus = true;
					if(this.status){
						this.$parent[this.status] = true;
					}
					//执行成功的函数
					this.successFun && this.successFun();
				}
        document.onmousemove = null;
				document.onmouseup = null;
			}
    }
  },
};
</script>

<style lang="less" scoped>
.slider-box {
    background: #e8e8e8;
    position: relative;
    transition: 1s all;
    user-select: none;
    text-align: center;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    i {
      position: absolute;
      left: 0;
      font-size: 24px;
      width: 60px;
      height: 100%; 
      color: #b4aeae;
      background-color: #fff;
      border: 1px solid rgba(180,174,174, .25);
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
}
.slidetounlock{
  background:-webkit-gradient(linear,left top,right top,color-stop(0,#4d4d4d),color-stop(.4,#4d4d4d),color-stop(.5,#fff),color-stop(.6,#4d4d4d),color-stop(1,#4d4d4d));
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  -webkit-animation: slidetounlock 3s infinite;
  -webkit-text-size-adjust:none
}
@-webkit-keyframes slidetounlock{
  0% {
    background-position:-200px 0
  } 
  100% {
    background-position:200px 0
  }
}
.success {
  background-color: #7AC23C;
	color: #fff!important;
   i {
     color: #7AC23C;
   }
}
</style>