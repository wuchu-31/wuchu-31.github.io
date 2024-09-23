<template>
  <div class="dog">
    <div style="max-width: 1200px; margin: 0 auto;"><img src="../assets/Group 2.png" alt=""></div>
  </div>
<div class="yejiao">
    <a-grid style="max-width: 1200px; margin: 0 auto;" :cols="{  xs: 1, sm: 1, md: 2, lg: 2, xl: 3, xxl: 3  }" :colGap="48" :rowGap="20" class="grid-demo-grid">
      <a-grid-item style="margin:  0 auto;" class="demo-item">
        <div class="yejiao-logo">
            <img style="width: 50px; height: 50px;" src="../assets/logo.png" alt="">
            <h2>毛孩子宠物护理</h2>
        </div>
        <p class="yejiao-wen">毛孩子护理，专注宠物健康生活，做铲屎官更爱用的综合养宠服务平台，致力于用数字化科技为亿万铲屎官提供最省心、放心、安心的一站式养宠爱宠生活服务及保障体系。</p>
    </a-grid-item>
      <a-grid-item style="margin: 0 auto;" class="demo-item">
        <h2 style="color: #F7F7F7; font-size: 19px; line-height: 30px;">页面</h2>
        <div class="logo-ul">
            <ul class="ul-1">
                <li><span class="iconfont icon-a-1_daohang-dakai-40">  <RouterLink to="service">家</RouterLink></span></li>
                <li><span class="iconfont icon-a-1_daohang-dakai-40"> 关于我们</span></li>
                <li><span class="iconfont icon-a-1_daohang-dakai-40">  <RouterLink to="service">服务业务</RouterLink> </span></li>
                <li><span class="iconfont icon-a-1_daohang-dakai-40"> 博客</span></li>
                <li><span class="iconfont icon-a-1_daohang-dakai-40"> 联系我们</span></li>
            </ul>
            <ul class="ul-1">
                <li><span class="iconfont icon-a-1_daohang-dakai-40"> 支持</span></li>
                <li><span class="iconfont icon-a-1_daohang-dakai-40"> 隐私问题</span></li>
                <li><span class="iconfont icon-a-1_daohang-dakai-40"> 售后保障</span></li>
                <li><span class="iconfont icon-a-1_daohang-dakai-40"> 常见问题</span></li>
                
            </ul>
        </div>
      </a-grid-item>
      <a-grid-item style="margin:0 auto;" class="demo-item">
        <div class="">
            <h2 style="color: #F7F7F7; font-size: 19px; line-height: 30px;">通讯</h2>
            <h2 style="color: #F7F7F7; font-size: 19px; line-height: 30px; margin-top: 48px;">现在就在这订阅</h2>
        </div>
        <!-- /* From Uiverse.io by alexruix */  -->
<div class="input-group">
    <input type="email" class="input" id="Email" name="Email" placeholder="电子邮件地址" autocomplete="off">
    <input class="button--submit" value="即刻订阅" type="submit">
</div>
<h2 style="color: #F7F7F7; font-size: 19px; line-height: 30px; margin-top: 16px;max-width: 280px;">订阅我们的邮件列表并获取您的电子邮件收件箱的更新。</h2>
    </a-grid-item>
    </a-grid>
    <hr style=" max-width: 1200px; margin: 0 auto;margin-top: 80px; opacity: .2;">
    <p style="color: #F7F7F7; margin: 0 auto; margin-top: 48px;  max-width: 1200px; padding-left: 16px; cursor: pointer;">粤ICP备168xxxxxxx号</p>
</div>
  </template>
  
  <style scoped>
  .dog{
    width: 100%;
    height: 160px;
    background-color: #222222;
  }
  .logo-ul{
    margin-top: 32px;
    display: flex;
    flex-direction: row;
  }
  .ul-1{
    width: 160px;
  }
  .ul-1>li{
    transition: .5s;
    cursor: pointer;
    margin-top: 16px;
    color: #FFFFFF;
    font-size: 15px;
    line-height: 24px;
    font-weight: bold;
    flex-direction: row;
    align-items: center;
  }
  .ul-1 li:hover{
    color: #FA8C35;
  }
  .yejiao{
    width: 100%;
    margin-top: 80px;
  }
  .yejiao-logo{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .yejiao-logo>h2{
    color: #FA8C35;
    font-size: 30px;
    line-height: 48px;
    font-weight: 500;
 
  }
  .yejiao-wen{
    max-width: 316px;
    margin: 16px 0 0 0;
    color: #FFFFFF;
    font-size: 16px;
    line-height: 26px;
  }
 /* From Uiverse.io by alexruix */ 
.input-group {
    margin-top: 16px;
  display: flex;
  align-items: center;
}

.input {
  min-height: 50px;
  max-width: 150px;
  padding: 0 1rem;
  color: #fff;
  font-size: 15px;
  border: 1px solid #ffc387;
  border-radius: 6px 0 0 6px;
  background-color: transparent;
}

.button--submit {
  min-height: 50px;
  padding: .5em 1em;
  border: none;
  border-radius: 0 6px 6px 0;
  background-color: #ffc387;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color .3s ease-in-out;
}

.button--submit:hover {
  background-color: #FA8C35;
}

.input:focus, .input:focus-visible {
  border-color: #FA8C35;
  outline: none;
}

  </style>
  <script>
    import { RouterLink } from 'vue-router';
import '../assets/iconfont/font_q0pud9cy6sp/iconfont.css'



</script>

  