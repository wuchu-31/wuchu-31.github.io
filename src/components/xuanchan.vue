<template>
<div class="xuanc">
    <a-grid style="max-width: 1200px; margin: 0 auto;" :cols="{  xs: 1, sm: 1, md: 1, lg: 1, xl: 3, xxl: 3 }" :colGap="16" :rowGap="48" class="grid-demo-grid">
      <a-grid-item style="margin: 0 auto;" class="demo-item">
        <img src="../assets/dog2.png" alt="">
    </a-grid-item>
      <a-grid-item :span="2" class="demo-item">
        <ul class="xc-list">
            <li class="xcli-list">
                <img style="max-width: 24px; max-height: 24px;" src="../assets/c1.png" alt="">
                <h6 style="margin-top: 10px; color:#FDFFFC;font-size: 20px; line-height: 32px; ">宠物舒心</h6>
                <p style="color: #B7B7B7; font-size: 16px; line-height: 26px;">毛孩子宠物护理，用心呵护每一个小可爱。精湛技术让宠物容光焕发，贴心服务使宠物舒心自在。好评如潮，为毛孩子的幸福护航。</p>
            </li>
            <li class="xcli-list">
                <img style="max-width: 24px; max-height: 24px;" src="../assets/c2.png" alt="">
                <h6 style="margin-top: 10px; color:#FDFFFC;font-size: 20px; line-height: 32px; ">技术专业 </h6>
                <p style="color: #B7B7B7; font-size: 16px; line-height: 26px;">宠物护理，尽显专业风范。从毛发打理到健康呵护，每一处细节都精益求精。技术精湛，服务一流，好评如潮，值得信赖。</p>
            </li>
            <li class="xcli-list">
                <img style="max-width: 24px; max-height: 24px;" src="../assets/c3.png" alt="">
                <h6 style="margin-top: 10px; color:#FDFFFC;font-size: 20px; line-height: 32px; ">高知名度</h6>
                <p style="color: #B7B7B7; font-size: 16px; line-height: 26px;">知名宠物护理，专业水准非凡。精心照料每只萌宠，技术卓越服务优。好评如潮传四方，是宠物们的理想之选。</p>
            </li>
            <li class="xcli-list">
                <img style="max-width: 24px; max-height: 24px;" src="../assets/c4.png" alt="">
                <h6 style="margin-top: 10px; color:#FDFFFC;font-size: 20px; line-height: 32px; ">好评如潮</h6>
                <p style="color: #B7B7B7; font-size: 16px; line-height: 26px;">宠物护理专业贴心，让毛孩子焕然一新。技术精湛，服务周到，好评如潮，是宠物们的温馨港湾，强烈推荐！</p>
            </li>
        </ul>
    </a-grid-item>
    </a-grid>
</div>
  </template>
  
  <style scoped>
  .xcli-list{
    max-width: 370px;
    display: flex;
    flex-direction: column;
  }
  .xc-list{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  .xuanc{
    width: 100%;
    margin-top: 80px;
  }

  </style>
  