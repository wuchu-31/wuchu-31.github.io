<template>
    <div class="biaoti">
        <h3>我们做什么</h3>
        <p>为铲屎官创造美好养宠生活,让每一只宠物都能享受健康生活.</p>
    </div>
    <a-grid style="max-width: 1200px; margin: 0 auto;" :cols="{ xs: 1, sm: 1, md: 2, lg: 2, xl: 3, xxl: 3 }":colGap="20" :rowGap="20" class="grid-demo-grid">
      <a-grid-item class="demo-item">
<div class="card">
    <div class="card-image1">
    </div>
    <div class="category"> 遛狗 </div>
    <div class="heading"> 在您工作繁忙之余帮您解决狗狗的日常运动
        <div class="author"><span class="name">阅读更多</span></div>
    </div>
</div>

      </a-grid-item>
      <a-grid-item class="demo-item">
        <div class="card">
    <div class="card-image2"></div>
    <div class="category"> 喂食 </div>
    <div class="heading"> 帮您科学的搭配适合您宠物的健康饮食
        <div class="author"><span class="name">阅读更多</span></div>
    </div>
</div>
      </a-grid-item>
      <a-grid-item class="demo-item">
        <div class="card">
    <div class="card-image3"></div>
    <div class="category"> 宠物体检 </div>
    <div class="heading">帮您的宠物进行精细的检查防止患病
        <div class="author"><span class="name">阅读更多</span></div>
    </div>
</div>
      </a-grid-item>
    </a-grid>
  </template>
  
  <style scoped>
  @media screen and (max-width:950px) {
    
    
  }
/* From Uiverse.io by alexmaracinaru */ 
.card {
    margin: 0 auto;
  max-width: 386px;
  height: 445px;
  background: #0C0B0B;
  border-radius: 6px;
  outline: 1px solid rgba(255, 255, 255, .2);
}

.card-image1 {

  max-width: 386px;
  height: 309px;
  background-image: url(../assets/img3.jpg);
  background-size: 100% 100%;
  background-position: center center;
}
.card-image2 {
  max-width: 386px;
  height: 309px;
  background-image: url(../assets/b1.png);
  background-size: 100% 100%;
  background-position: center center;
}
.card-image3 {
  max-width: 386px;
  height: 309px;
  background-image: url(../assets/b5.jpg);
  background-size: 100% 100%;
  background-position: center center;
}


.category {
  text-transform: uppercase;
  font-size:22px;
  line-height: 36px;
  font-weight: 600;
  color: #FDFFFC;
margin: 16px 0 0 16px;
}

.category:hover {
  cursor: pointer;
}

.heading {
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
padding: 24px 0 0 0px;
}

.name {
  font-weight: 600;
}

.name:hover {
  cursor: pointer;
}



  .biaoti{
    margin-top: 160px;
    height: 160px;
    color: #ffffff;
    text-align: center;
  }
  .biaoti>h3{
   
    line-height: 56px;
    font-size: 35px;
  }
  .biaoti>p{
    margin-top: 16px;
    color: #b7b7b7;
    font-size: 20px;
    line-height: 32px;
  }
 
 
  </style>
  