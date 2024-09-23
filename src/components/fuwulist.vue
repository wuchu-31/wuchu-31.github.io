<template>
<div class="fwlist">
    
    <a-grid style="max-width: 1200px; margin:0 auto;" :cols="{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2, xxl: 2 }" :colGap="48" :rowGap="160" class="grid-demo-grid">
      <a-grid-item style=" margin: 0 auto;" class="demo-item">
        <h6 style="margin-top: 16px; font-size: 20px; color: #FA8C35;line-height: 32px;">Pet cleaning</h6>
        <h2 style="color: #FDFFFC; font-size: 30px; line-height: 48px; margin-top: 48px;">宠物上门洗澡服务</h2>
        <p style="color: #B7B7B7; font-size: 18px; line-height: 29px; max-width: 570px; margin-top: 16px;">毛孩子提供宠物美容、洁牙、SPA、驱虫、断甲等护理服务，提供安全、卫生、便捷的宠物上门洗澡服务。清洁身体、保持干净卫生 给狗狗洗澡，不仅能帮它去除皮毛上的油垢脏物，还能及时发现狗狗身上的异常现象，比如跳蚤、耳螨、皮肤病等，早防治，让您的爱宠保持健康。</p>
      </a-grid-item>
      <a-grid-item style="margin: 0 auto;" class="demo-item">
        <img class="tu-img" src="../assets/zhishi1.jpg" alt="">
      </a-grid-item>
      <a-grid-item style="margin: 0 auto;" class="demo-item">
        <img class="tu-img" src="../assets/B6.jpg" alt="">
      </a-grid-item>
      <a-grid-item style="margin: 0 auto;" class="demo-item">
        <h6 style=" margin-top: 16px;font-size: 20px;color: #FA8C35;line-height: 32px;">Pet cleaning</h6>
        <h2 style="color: #FDFFFC; font-size: 30px; line-height: 48px; margin-top: 48px;">宠物上门洗澡服务</h2>
        <p style="color: #B7B7B7; font-size: 18px; line-height: 29px; max-width: 570px; margin-top: 16px; max-height: 148px;">毛孩子提供宠物美容、洁牙、SPA、驱虫、断甲等护理服务，提供安全、卫生、便捷的宠物上门洗澡服务。清洁身体、保持干净卫生 给狗狗洗澡，不仅能帮它去除皮毛上的油垢脏物，还能及时发现狗狗身上的异常现象，比如跳蚤、耳螨、皮肤病等，早防治，让您的爱宠保持健康。</p>
        <div class="wenzi">
          <p>配备先进的检查设备，如高清 X 光机、专业血液分析仪等，确保能够准确诊断宠物的身体状况，为后续的治疗提供可靠依据。</p>
          <img  src="../assets/b5.jpg" alt="">
        </div>
      </a-grid-item>
    </a-grid>
</div>
  </template>
  
  <style scoped>
  .wenzi{
    display: flex;
    flex-direction: row;
  }
  .wenzi>img{
  max-height: 145px;
  margin-top: 48px;
  margin-left: 48px;
  border-radius: 20px;
  }
  .wenzi>p{
    margin-top: 48px;
    max-width: 208px;
    color: #B7B7B7;
    font-size: 18px;
    line-height: 29px;

  }
  .tu-img{
    max-width: 570px;
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
  .fwlist{
    width: 100%;
    margin-top: 80px;
  }
  .fwlist>h6{
    max-width: 1200px;
    margin: 0 auto;
  }

  </style>
  