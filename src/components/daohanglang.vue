<template>
<nav id="nav">
  <div class="biaoti"> <img src="../assets/logo.png" alt="">毛孩子宠物护理</div>
  
  <div class="show">
    <ul  class="daohang show">
    <li> <RouterLink to="/"><p @click="change(1)" ref="home">家</p></RouterLink>  </li>
    <li> <RouterLink to="/service"><p @click="change(2)" ref="fuwu">服务业务</p></RouterLink> </li>
    <li> 关于我们</li>
    <li>联系我们</li>
    <li>
      <!-- /* From Uiverse.io by Yaya12085 */  -->
<div class="input-container">
  <input required="" placeholder="关键字" type="">
  <button class="invite-btn" type="button">
    搜索
  </button>
 
</div>
</li>
  </ul>
  </div>
  <img id="hanbao" @click="daohanglan" class="hanbao" ref="dhl" src="../assets/汉堡图标.png" alt="">
  <div id="daohang-show" class="daohang-show">
    <ul  class="ul-show">
      <li> <RouterLink to="/"><p @click="change(1)" ref="">家</p></RouterLink>  </li>
    <li ><RouterLink style="list-style: none;" to="/service">服务业务</RouterLink></li>
    <li>关于我们</li>
    <li>联系我们</li>
  </ul>
</div>
  </nav>
</template>
<style scoped> 
.ul-show li[id='daozi1']{
  color: #FA8C35;
  border-bottom:1px solid #FA8C35;
}
.ul-show{
  width: 100%;
  height: 250px;
  align-items: center;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
}
.ul-show>li{
  line-height: 24px;
  font-size: 15px;
  flex-wrap: 1;
  color: #ffffff;
}

.ul-show>li:hover{

border-bottom: 1px solid #ffffff;
border-bottom-width: 1px;
border-bottom-style: solid;
}
.daohang-show{
  transition: .5s;
  display: none;
  top: 80px;
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 0px;
  overflow: hidden;
  background-color: #0C0B0B;

}
.show{
  list-style: none;
}
  @media screen and (max-width:1010px) {
 .show{
  display: none;
 }
 #hanbao{
  display: block;
  cursor: pointer;
 }
 #daohang-show{
  display: block;
 }

  }
.hanbao{
  display: none;
  margin-top: 16px;
  width: 50px;
  height: 50px;

}

.daozi{
  border-bottom: 1px solid #ffffff;
}
.daohang{
  cursor: pointer;
  font-weight: 600;
  width: 652px;
  height: 44px;
  font-size: 16px;
  margin: 16px 48px 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: #ffffff;
}
.daohang>li{
  height: 100%;
  line-height: 44px;
  transition: all 2s;
}
.daohang>li>a{
  text-decoration: none;
  padding: 0;
  margin: 0;
  outline: none;
  color: #ffffff;
}
.daohang>li:nth-child(-n+4):hover{

    border-bottom: 1px solid ;
    border-bottom-width: 1px;
    border-bottom-style: solid;
}
.biaoti{
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
margin: 16px 0px 0px 48px;
font-size: 30px;
}
.biaoti>img{
  
  height: 50px;
  width: 50px;
}
nav{
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
  width: 100%;
 
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";;
}
.navchange{
  transition: .5s;
  height: 70px;
  background-color: #0C0B0B;
  position: fixed;
  z-index: 3;
}
.daohang li[id='daozi']{
  color: #FA8C35;
  border-bottom:1px solid #FA8C35;
}
.navchange1{
  transition: 1s;
  height: 80px;
  background-color: none;
}

/* From Uiverse.io by Yaya12085 */ 
.input-container {
  position: relative;
  display: flex;
  /* height: 2.8rem; */
  width: 100%;
  min-width: 200px;
  max-width: 250px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, .05);
}

.input-container input {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  border: 1px solid  rgb(176 190 197);
  background-color: transparent;
  padding: 0.625rem 70px 0.625rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  /* color: rgb(69 90 100); */
  outline: none;
  transition: all .15s cubic-bezier(0.4, 0, 0.2, 1);
}

.input-container input:focus {
  border: 1px solid #FA8C35;
}

.invite-btn {
  position: absolute;
  width: 65px;
  right: 4px;
  top: 4px;
  bottom: 4px;
  z-index: 10;
  border-radius: 4px;
  background-color: #FA8C35;
  color: #fff;
  padding-top: .25rem;
  padding-bottom: .25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  text-align: center;
  vertical-align: middle;
  font-size: 16px;
  line-height: 26px;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  transition: .6s ease;
}

.invite-btn:hover {
  right: 2px;
  top: 2px;
  bottom: 2px;
  border-radius: 8px;
}

.input-container input:placeholder-shown ~ .invite-btn {
  pointer-events: none;
  background-color: #ffc387;
  opacity: 1;
}

</style>
<script>
import { watch } from 'vue';
import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter';
const store=useCounterStore()

export default{
  data(){
    return{
    cishu:1
    }
  },
  methods:{
    // 点击触发汉堡导航栏
    daohanglan(){
      if(this.cishu==1){
        this.cishu=2;
        this.$refs.dhl.style.transform='rotate(-90deg)';
        document.getElementById('daohang-show').style.height='250px';
        document.body.style.overflow='hidden';
        
      }
      else{
       
        this.cishu=1;
        this.$refs.dhl.style.transform='rotate(0deg)'
        document.getElementById('daohang-show').style.height='0px';
        document.body.style.overflow='visible';
      }
    },
    change(e){
      if( store.id==1){
        this.$refs.home.style.color='#FA8C35';
      this.$refs.home.style.borderBottom="1px solid #FA8C35"
      this.$refs.fuwu.style.color='#ffffff';
      this.$refs.fuwu.style.borderBottom="none"
      }
      if(store.id==2){
      this.$refs.home.style.color='#ffffff';
      this.$refs.home.style.borderBottom="none"
        this.$refs.fuwu.style.color='#FA8C35';
      this.$refs.fuwu.style.borderBottom="1px solid #FA8C35"
      }
      else{
        store.changeid(1)
      }
    
      
    }
 

  },
 mounted(){
      this.change()
  },

  setup(){
    
  const viewH=ref(window.scrollY);
    function view(){
      viewH.value=window.scrollY;
    }
    window.addEventListener('scroll',view);
   watch(()=>viewH.value,(newvalue,oldvalue)=>{
    // console.log(newvalue);
    
      if(newvalue>80){
       
        document.getElementById('nav').classList.add('navchange');
        document.getElementById('nav').style.height='70px';
        document.getElementById('daohang-show').style.top='70px';
      
      }
      if(newvalue<80){
        document.getElementById('nav').classList.add('navchange1');
        document.getElementById('nav').classList.remove('navchange');
        document.getElementById('nav').style.height='80px';
        document.getElementById('daohang-show').style.top='80px';
      }
   })
   
    
  }
}


</script>