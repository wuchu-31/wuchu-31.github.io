<template>
  <div class="zhishi-pet">
    <h2>最新知识</h2>
    <p>宠物是我们生活中的伴侣，我们需要为它们提供美好的生活
条件和医疗保健。
宠物护理涵盖各个方面，包括饮食、卫生、疾病预防等。</p>
    <a-grid style="max-width: 1200px; margin: 0 auto; margin-top: 48px;" :cols="{ xs: 1, sm: 1, md: 2, lg: 2, xl: 3, xxl: 3 }" :colGap="20" :rowGap="20" class="grid-demo-grid">
      <a-grid-item class="demo-item">
<div class="card">
    <div class="card-image1">
    </div>
    <i class="rqi">9月11日</i>
    <div class="category"> 这个夏天如何让你的狗保持凉爽</div>
    <div class="heading"> 虽然花更多的时间在户外对所有相关的人来说都是锻炼和乐趣的一个很好的来源，但请记住，炎热的天气对我们的宠物并不好....
        <div class="author"><span class="name">阅读更多</span></div>
    </div>
</div>

      </a-grid-item>
      <a-grid-item class="demo-item">
<div class="card">
    <div class="card-image2">
    </div>
    <i class="rqi">9月12日</i>
    <div class="category"> 夏天如何喂食不容易生病</div>
    <div class="heading"> 夏季食盆里的粮食无论是鲜粮还是干粮都应遵循“少投多餐”，一顿没吃完的食物里掺杂着口水，在高温下没多久就会快速变质.......
        <div class="author"><span class="name">阅读更多</span></div>
    </div>
</div>

      </a-grid-item>
      <a-grid-item class="demo-item">
<div class="card">
    <div class="card-image3">
    </div>
    <i class="rqi">9月13日</i>
    <div class="category"> 预防宠物热应激和中暑的提示</div>
    <div class="heading"> 切勿在阳光明媚的日子或炎热的天气里将您的宠物留在停放的汽车中，即使窗户打开，即使几分钟。通过常识、避免过度劳累以及保持您.......
        <div class="author"><span class="name">阅读更多</span></div>
    </div>
</div>

      </a-grid-item>

    </a-grid>
  </div>
  </template>
  
  <style scoped>
  .rqi{
    float: right;
    margin: 20px 16px 0 0;
    color: #FA8C35;
    font-size: 16px;
    line-height: 26px;
  }
  
  .zhishi-pet{
    width: 100%;
    margin-top: 80px;
  }
  .zhishi-pet>p{

    margin: 0 auto;
    margin-top: 16px;
    color: #B7B7B7;
    font-size: 18px;
    line-height: 29px;
    max-width: 730px;
    text-align: center;
  }
  .zhishi-pet>h2{
    text-align: center;
    color: #FFFFFF;
    font-size: 35px;
    line-height: 48px;
  }
  /* From Uiverse.io by alexmaracinaru */ 
.card {
    margin: 0 auto;
  max-width: 386px;
  height: 518px;
  background: #0C0B0B;
  border-radius: 6px;
  outline: 1px solid rgba(255, 255, 255, .2);
}

.card-image1 {

  max-width: 386px;
  height: 234px;
  background-image: url(../assets/zhishi1.jpg);
  background-size: cover;
  background-position: center center;
}
.card-image2 {
  max-width: 386px;
  height: 234px;
  background-image: url(../assets/g4.jpg);
  background-size: cover;
  background-position: center center;
}
.card-image3 {
  max-width: 386px;
  height: 234px;
  background-image: url(../assets/b5.jpg);
  background-size: cover;
  background-position: center center;
}


.category {
  text-transform: uppercase;
  font-size:22px;
  line-height: 36px;
  font-weight: 600;
  color: #FDFFFC;
margin: 64px 0 0 16px;
}

.category:hover {
  cursor: pointer;
}

.heading {
  max-width: 346px;
  font-size: 16px;
  line-height: 26px;
  /* font-weight: 600; */
  color: #B7B7B7;
  margin: 16px 0 0 16px;
}

.heading:hover {
  cursor: pointer;
}

.author {
  color: #FA8C35;
  font-weight: 600;
padding: 48px 0 0 0px;
}

.name {
  font-weight: 600;
}

.name:hover {
  cursor: pointer;
}
  </style>
  