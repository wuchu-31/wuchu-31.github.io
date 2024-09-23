<style scoped>
.beiji{
  position: absolute;
  width: 100%;
  height: 900px;
  background: linear-gradient(75deg, rgb(6 6 6 / 64%) 8%, transparent);
    background-image: linear-gradient(75deg, rgba(6, 6, 6, 0.64) 8%, transparent);
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-repeat: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: initial;
}
body{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
header{
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(../assets/banner1.jpg);
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 900px;
}
.banner-left{
  margin:320px 0px 0px 15%;
  font-size: 50px;
  line-height: 72px;
  font-family: 'Raleway', sans-serif;
  color: #ffffff;
}


/* From Uiverse.io by cssbuttons-io */ 
.button {
  margin-top: 48px;
  background: none;
  display: inline-block;
  padding: 12px 24px;
  border: 1px solid #ffffff;
  border-radius: 4px;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  font-size: 19px;
  cursor: pointer;
  color: #ffffff;
  z-index: 1;
}

.button:before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%) scaleY(1) scaleX(1.25);
  top: 100%;
  width: 140%;
  height: 180%;
  /* background-color: rgba(0, 0, 0, 0.05); */
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.button:after {
  content: "";
  position: absolute;
  left: 55%;
  transform: translateX(-50%) scaleY(1) scaleX(1.45);
  top: 180%;
  width: 160%;
  height: 190%;
  background-color: #FA8C35;
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.button:hover {
  color: black;
  border: 1px solid #FA8C35;
}

.button:hover:before {
  top: -35%;
  background-color: #FA8C35;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.button:hover:after {
  top: -45%;
  background-color: #FA8C35;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}
section{
  width: 100%;
  height: 845px;
  background-color: #0C0B0B;
}

/* 左右介绍模块 */
.jieshao{
  width: 100%;
  height: 950px;
  background-color: #222222;
}

/* 时光相册模块 */
.xiangce{
  width: 100%;
  height: 1072px;
  background-color: #0C0B0B;
}
/* 过度展示模块 */
.guodu{
  width: 100%;
  height:602px;
  background-image: url(../assets/过度.png);
  background-position: center center;
  background-size: cover;
}
/* 最新知识模块 */
.zhishi{
  width: 100%;
  height: 800px;
  background-color: #222222;
}
/* 页脚展示模块 */
.foter{
  width: 100%;
  height: 703px;
  background-color: #060606;
}

/* 媒体查询区块 */
@media screen and (max-width:1200px) {
  #section{
    height: 1375px;
  }
  .jieshao{
    height: 1700px;
  }
  .zhishi{
    height: 1400px;
  }
  .foter{
    height: 1000px;
  }
  }
@media screen and (max-width:770px) {
  #section{
    height: 1840px;
  }
  .zhishi{
    height: 1918px;
  }
  .foter{
    height: 1150px;
  }
  }
</style>


<template>
 <body>
  <header>
    <div class="beiji">
      <daohanglang/>
      <div class="banner-left">
        Providing Special Care<br> For<b style="color: #FA8C35;"> Your Pets!</b>
        <p style="font-size: 20px; line-height: 32px; margin-top: 16px;">我们为您的宠物提供特殊护理！</p>
      
<button class="button">查看我们的服务</button>
<button class="button" style=" margin-left: 16px;">雇佣我们</button>

      </div>
    </div>
    </header>
    <section id="section">
      <wedo/>

    </section>
    <div class="jieshao">
      <!-- 左右分栏介绍模块 -->
       <jieshao/>
    </div>
    <div class="xiangce">
      <!-- 相册展示模块 -->
      <xiangce/>
    </div>
    <div class="guodu">
      <!-- 过度展示模块 -->
       <guodu/>
    </div>
    <div class="zhishi">
      <!-- 知识展示模块 -->
       <zhishi/>
    </div>
    
    <div class="foter">
      
      <!-- 页脚展示模块 -->
       <foter/>
    </div>


 </body>


</template>

<script>
import { useCounterStore } from '@/stores/counter'
const store=useCounterStore();
import foter from '@/components/foter.vue'
import daohanglang from '../components/daohanglang.vue'
import wedo from '../components/wedo.vue'
import jieshao from '../components/jieshao.vue'
import xiangce from '../components/xiangce.vue'
import guodu from '@/components/guodu.vue'
import zhishi from '@/components/zhishi.vue'

export default{
    data(){
        return{
         
        }
    },
  components:{
    daohanglang,
    wedo,
    jieshao,
    xiangce,
    guodu,
    zhishi,
    foter,

  },
  beforeMount(){
  
  store.changeid(1)
  
  }
  
}



</script>