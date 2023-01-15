<template>
  <div class="home">
    <header>
      <div class="before">
        <span>13:36:25</span>
        <span>2023年1月15日</span>
      </div>
      <div class="title">蜀都市公安局大屏作战平台</div>
      <div class="time">
        <span>13:36:25</span>
        <span>2023年1月15日</span>
      </div>
    </header>
    <main>
      <section class="section1"></section>
      <section class="section2"></section>
      <section class="section3"></section>
      <section class="section4"></section>
    </main>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../assets/style/helper.scss';

.home {
  flex: 1;
  display: flex;
  flex-direction: column;

  header {
    height: px(61);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 px(40);
    background: #070d27;
    background-size: cover;

    .before {
      display: flex;
      flex-direction: column;
      align-items: center;
      visibility: hidden;
      font-size: px(14);
      letter-spacing: px(1);
    }

    .title {
      font-size: px(22);
      color: #dee1e6;
      letter-spacing: px(2);
      text-shadow: 0 0 px(2) white;
    }

    .time {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: px(14);
      color: #838ba0;
      letter-spacing: px(1);
      text-shadow: 0 0 px(2) #838ba0;
    }
  }

  main {
    flex: 1;
    display: grid;
    grid-template:
      "box1 box1 box4" 90fr
      "box2 box3 box4" 570fr / 360fr 570fr 390fr;

    >.section1 {
      grid-area: box1;
      background: skyblue;
    }

    >.section2 {
      grid-area: box2;
      background: lightgray;
    }

    >.section3 {
      grid-area: box3;
      background: lightblue;
    }

    >.section4 {
      grid-area: box4;
      background: salmon;
    }
  }
}
</style>