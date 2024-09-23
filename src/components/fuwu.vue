<template>
<div class="fuwujies">
    <h2>我们的服务</h2>
    <p>我们为您的爱宠提供科学的饮食管理、洗护美容、医疗护理、运动娱乐和心理关爱，保证您的爱宠拥有健康、快乐和幸福的生活。</p>
    <a-grid style="max-width: 1200px; margin: 0 auto; margin-top: 48px;" :cols="{xs: 1, sm: 1, md: 2, lg: 2, xl: 3, xxl: 3  }" :colGap="48" :rowGap="48" class="grid-demo-grid">
      <a-grid-item style="margin: 0 auto;" class="demo-item">
        <h4 style="color: #FDFFFC; font-size: 22px; line-height: 35px;">提供科学配比餐食</h4>
        <div class="fuwuzi">
            <p>不仅呵护爱宠健康，还提供美味狗饭。营养丰富，精心制作，让你的狗狗吃得开心，主人放心。</p>
            <img style="width: 100px; height: 100px; margin-left: 48px;" src="../assets/biao1.svg" alt="">
        </div>
    </a-grid-item>
      <a-grid-item style="margin: 0 auto;" class="demo-item">
        <h4 style="color: #FDFFFC; font-size: 22px; line-height: 35px;">宠物体检</h4>
        <div class="fuwuzi">
            <p>专业宠物护理，专注犬类检查。从身体到心理，全面评估狗狗健康状况，为可爱的它们提供贴心守护。</p>
            <img style="width: 100px; height: 100px; margin-left: 48px;" src="../assets/biao2.svg" alt="">
        </div>
    </a-grid-item>
      <a-grid-item style="margin: 0 auto;" class="demo-item">
        <h4 style="color: #FDFFFC; font-size: 22px; line-height: 35px;">宠物皮肤病检查</h4>
        <div class="fuwuzi">
            <p>专业宠物护理，专注皮肤病检查。经验丰富的团队，精准诊断宠物皮肤问题，提供有效治疗方案，呵护宠物健康。</p>
            <img style="width: 100px; height: 100px; margin-left: 48px;" src="../assets/biao3.svg" alt="">
        </div>
    </a-grid-item>
      <a-grid-item style="margin: 0 auto;" class="demo-item">
        <h4 style="color: #FDFFFC; font-size: 22px; line-height: 35px;">宠物清洗</h4>
        <div class="fuwuzi">
            <p>重视宠物清洗。温柔对待每只小可爱，用专业的清洁产品和手法，让宠物干净清爽，活力满满。</p>
            <img style="width: 100px; height: 100px; margin-left: 48px;" src="../assets/biao4.svg" alt="">
        </div>
    </a-grid-item>
      <a-grid-item style="margin: 0 auto;" class="demo-item">
        <h4 style="color: #FDFFFC; font-size: 22px; line-height: 35px;">配备专业兽医</h4>
        <div class="fuwuzi">
            <p>携手专业兽医。为宠物进行全方位检查，精准诊断疾病，以精湛医术和贴心服务，守护宠物健康。</p>
            <img style="width: 100px; height: 100px; margin-left: 48px;" src="../assets/biao5.svg" alt="">
        </div>
    </a-grid-item>
      <a-grid-item style="margin: 0 auto;" class="demo-item">
        <h4 style="color: #FDFFFC; font-size: 22px; line-height: 35px;">宠物急救</h4>
        <div class="fuwuzi">
            <p>配备专业急救设施。遇紧急情况迅速响应，为宠物生命保驾护航，让主人安心，宠物健康有保障。</p>
            <img style="width: 100px; height: 100px; margin-left: 48px;" src="../assets/biao6.svg" alt="">
        </div>
    </a-grid-item>
     
    </a-grid>
</div>
  </template>
  
  <style scoped>
  .fuwuzi>p{
    margin-top: 16px;
    max-width: 216px;
    color: #B7B7B7;
    font-size: 16px;
    line-height: 26px;
  }
  .fuwuzi{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .fuwujies{
    width: 100%;
    margin-top: 160px;
  }
  .fuwujies h2{
    text-align: center;
    color: #FDFFFC;
    font-size: 36px;
    line-height: 56px;
  }
  .fuwujies>p{
    margin: 0 auto;
    margin-top: 16px;
    text-align: center;
    max-width: 730px;
    color: #B7B7B7;
    font-size: 18px;
    line-height: 29px;
  }

  </style>
  