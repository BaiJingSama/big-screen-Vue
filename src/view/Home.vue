<template>
  <div>
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
    <div class="x">你好</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../assets/style/helper.scss';

header {
  height: px(61);
  width: 100%;
  border: 1px solid red;
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

.x {
  width: px(961);
  height: px(91);
  border: 1px solid red;
}
</style>