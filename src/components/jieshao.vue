<template>
<div style="margin-top: 80px;">
    <a-grid :cols="{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2, xxl: 2 }" :colGap="20" :rowGap="20"  class="grid-demo-grid pet">
      <a-grid-item style="max-width: 590px; margin: 0 auto;"  class="demo-item pet-jieshao">
        <h2>love you pet</h2>
        <h3>充分与您的宠物建立信任</h3>
       <p>随着时代的发展宠物在我们生活中的占比是越来越大了，不再仅限是看家护院或是捕捉蛇虫鼠蚁的动物了。而是成为了我们家庭中的情感陪伴，无论是在孩子的成长过程中，独居青年的工作生活，老人的退休陪伴，都有了更多宠物在参与。在养宠生活中宠佩思，愿意和你一起创造更加美好的养宠生活。</p>
<button>
    查看更多
    <div class="arrow-wrapper">
        <div class="arrow"></div>
    </div>
</button>
    </a-grid-item>
      <a-grid-item id="pet-1" class="demo-item petimg1"><img src="../assets/petimg1.jpg" alt="">
    </a-grid-item>
      <!--  -->
      <a-grid-item  class="demo-item petimg1"><img src="../assets/petimg2.jpg" alt="">
    </a-grid-item>
    <!--  -->
    <a-grid-item style="max-width: 590px; margin: 0 auto;"  class="demo-item pet-jieshao">
        <h2>Make your pet happy</h2>
        <h3>让您的宠物感到快乐</h3>
       <p>宠物不仅可以陪伴我们度过孤独的时光，还可以帮助我们减轻压力和焦虑。它们的存在它们的存在让我们感受到了无条件的爱和关怀，让我们更加热爱生活。同时，宠物也需要我们的关注和照顾，我们需要为它们提供足够的食物、水和空间，让它们健康快乐。</p>
       <button>
    查看更多
    <div class="arrow-wrapper">
        <div class="arrow"></div>
    </div>
</button>
    </a-grid-item>
    </a-grid>
</div>
  </template>
  
  <style scoped>
  /* From Uiverse.io by satyamchaudharydev */ 
button {
   margin: 48px 0 0 16px;
  --primary-color: #ffc387;
  --secondary-color: #fff;
  --hover-color: #FA8C35;
  --arrow-width: 10px;
  --arrow-stroke: 2px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  color: #FDFFFC;
  padding: 1em 1.8em;
  background: var(--primary-color);
  display: flex;
  transition: 0.2s background;
  align-items: center;
  gap: 0.6em;
  font-weight: bold;
}

button .arrow-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

button .arrow {
  margin-top: 1px;
  width: var(--arrow-width);
  background: var(--primary-color);
  height: var(--arrow-stroke);
  position: relative;
  transition: 0.2s;
}

button .arrow::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  border: solid var(--secondary-color);
  border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
  display: inline-block;
  top: -3px;
  right: 3px;
  transition: 0.2s;
  padding: 3px;
  transform: rotate(-45deg);
}

button:hover {
  background-color: var(--hover-color);
}

button:hover .arrow {
  background: var(--secondary-color);
}

button:hover .arrow:before {
  right: 0;
}
  /* 媒体查询区块 */
  @media screen and (max-width:1200px) {
  #pet-1{
    grid-row: 1;
  }
  }
  .pet{
    max-width: 1200px; 
    margin: 0 auto;
  }
  .petimg1{
    margin: 0 auto;
    max-width: 590px;


  }
  .petimg1>img{
    border-radius: 20px;
    margin-top: 24px;
    display: inline-block;
    width: 100%;
    height: 360px;

  }
    .pet-jieshao{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: #FA8C35;
        /* grid-row: 2; */
    }
    .pet-jieshao>h2{
        margin-top: 16px;
    }
    .pet-jieshao>h3{
        margin-top: 48px;
        color: #FDFFFC;
       font-size: 30px;
       line-height: 48px;
    }
    .pet-jieshao>p{
        margin-top: 16px;
        color: #B7B7B7;
       font-size: 18px;
       line-height: 29px;
    }

  
  </style>
  