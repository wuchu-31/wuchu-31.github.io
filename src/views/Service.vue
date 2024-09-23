
<style>
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
  background-image: url(../assets/ban.jpg);
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

/* 服务模块设置 */
.fuwu{
    width: 100%;
    height: 776px;
    background-color: #222222;
}
/* 服务介绍区块 */
.fuwulist{
    width: 100%;
    height: 1172px;
    background-image: url(../assets/背景.png);
    background-position: center center;
    background-size: cover;
}
/* 宣传模块 */
.xuanchuan{
  width: 100%;
  height: 470px;
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
    .fuwu{
        height: 1084px;
    }
    .fuwulist{
      height: 2200px;
      background-image: none;
      background-color: #0C0B0B;
    }
    .xuanchuan{
      height: 900px;
    }
    .foter{
    height: 1000px;
  }
  }
@media screen and (max-width:770px) {
  .xuanchuan{
      height: 1200px;
    }
    .fuwu{
        height: 1700px;
    
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
        Care for your beloved pets  <br>with<b style="color: #FA8C35;"> all your heart!</b>
        <p style="font-size: 20px; line-height: 32px; margin-top: 16px;">我们始终努力为您的爱宠提供最好的
            服务业务。</p>
      
<!-- <button class="button">查看我们的服务</button>
<button class="button" style=" margin-left: 16px;">雇佣我们</button> -->

      </div>
    </div>
    </header>
    <div class="fuwu">
        <!-- 服务展示模块 -->
         <fuwu/>
    </div>
    <div class="fuwulist">
        <!-- 服务左右栏展示模块 -->
         <fuwulist/>
    </div>
    <div class="xuanchuan">
      <!-- 宣传模块 -->
      <xuanchan/>
    </div>
    <div class="foter">
      <!-- 页脚模块 -->
       <foter/>
    </div>
</body>
</template>
<script>
import { useCounterStore } from '@/stores/counter';
const store=useCounterStore();
import foter from '@/components/foter.vue'
import daohanglang from '../components/daohanglang.vue'
import fuwu from '@/components/fuwu.vue';
import fuwulist from '@/components/fuwulist.vue';
import xuanchan from '@/components/xuanchan.vue';
import { ref } from 'vue';
export default{
    data(){
        return{
            
        }
    },
  components:{
    daohanglang,
    foter,
    fuwu,
    fuwulist,
    xuanchan,

  },
  setup(){
    
    
  },
  beforeMount(){
  
  store.changeid(2)
  
  }


}
</script>