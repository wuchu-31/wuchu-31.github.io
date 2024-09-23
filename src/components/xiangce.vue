<template>
    <div class="xiangce1">
        <h2>我们的时光相册</h2>
        <p>拍照的意义，大概就是记录下毛孩子的美好欢乐时光，在以后的某一天忽然发现，还可以回忆起这些美好的瞬间。</p>
        <a-grid style="max-width: 1200px; margin: 0 auto; margin-top: 48px;" :cols="{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4, xxl: 4 }" :colGap="0" :rowGap="0" class="grid-demo-grid">
      <a-grid-item class="demo-item"><img style="width: 100%; height: 100%;" src="../assets/g1.jpg" alt=""></a-grid-item>
      <a-grid-item class="demo-item"><img style="width: 100%; height: 100%;" src="../assets/g2.jpg" alt=""></a-grid-item>
      <a-grid-item class="demo-item"><img style="width: 100%; height: 100%;" src="../assets/g3.jpg" alt=""></a-grid-item>
      <a-grid-item class="demo-item"><img style="width: 100%; height: 100%;" src="../assets/g4.jpg" alt=""></a-grid-item>
      <a-grid-item class="demo-item"><img style="width: 100%; height: 100%;" src="../assets/g5.jpg" alt=""></a-grid-item>
      
      <a-grid-item style=" grid-row: span 2; grid-column: span 2;" class="demo-item" :span="{ xl: 2, xxl: 2 }">
        <img style="width: 100%; height: 100%;" src="../assets/g9.jpg" alt="">
      </a-grid-item>
      <a-grid-item class="demo-item"><img style="width: 100%; height: 100%;" src="../assets/g6.jpg" alt=""></a-grid-item>
      <a-grid-item class="demo-item"><img style="width: 100%; height: 100%;" src="../assets/g7.jpg" alt=""></a-grid-item>
     
    
      <a-grid-item style="grid-column: 4;" class="demo-item" ><img style="width: 100%; height: 100%;" src="../assets/g8.jpg" alt=""></a-grid-item suffix>
    </a-grid>
    </div>
  </template>
  
  <style scoped>
  .xiangce1{
    text-align: center;
    margin-top: 80px;
  }
  .xiangce1>h2{
   color: #FDFFFC;
   font-size: 35px;
   line-height: 48px;
  }
  .xiangce1>p{
    margin-top: 16px;
   color: #B7B7B7;
   font-size: 18px;
   line-height: 29px;
  }
  .grid-demo-grid .demo-item,
  .grid-demo-grid .demo-suffix {
   
    line-height: 48px;
    color: var(--color-white);
    text-align: center;
  }
  .grid-demo-grid .demo-item:nth-child(2n) {
    background-color: rgba(var(--arcoblue-6), 0.9);
  }
  .grid-demo-grid .demo-item:nth-child(2n + 1) {
    background-color: var(--color-primary-light-4);
  }
  </style>
  