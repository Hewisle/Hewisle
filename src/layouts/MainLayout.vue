<template>
  <q-layout class="layout-wrapper">
    <div class="background"></div>
    <div class="background--stars"></div>
    <q-scroll-area>
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-scroll-area>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
});
</script>
<style lang="scss" scoped>
.background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  height: 100vh;
  z-index: -1;
  background-size: cover;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid slice' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3CradialGradient id='a' cx='40%25' cy='52%25' r='70%25' gradientTransform='translate(.018 -.1) skewX(-10)'%3E%3Cstop stop-color='%23101033' offset='0'/%3E%3Cstop stop-color='%232F1B3F' offset='35%25'/%3E%3Cstop stop-color='%23101033' offset='75%25'/%3E%3Cstop stop-color='%23101033' offset='100%25'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23a)' transform='scale(1.2)'/%3E%3C/svg%3E");
}
.background--stars {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  height: 100vh;
  z-index: -1;
  background-size: cover;
  background-image: url("data:image/svg+xml,%3Csvg width='1920' height='1078' viewBox='0 0 1920 1078' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.2'%3E%3Cpath d='M301.5 94L304.755 104.019L315.29 104.019L306.767 110.211L310.023 120.231L301.5 114.039L292.977 120.231L296.233 110.211L287.71 104.019L298.245 104.019L301.5 94Z' fill='%23FFBE0B'/%3E%3Cpath d='M600.5 171L603.082 179.292H611.437L604.678 184.416L607.26 192.708L600.5 187.584L593.74 192.708L596.322 184.416L589.563 179.292H597.918L600.5 171Z' fill='%23FFBE0B'/%3E%3Cpath d='M416.5 633L417.959 637.837H422.682L418.861 640.826L420.321 645.663L416.5 642.674L412.679 645.663L414.139 640.826L410.318 637.837H415.041L416.5 633Z' fill='%23FFBE0B'/%3E%3Cpath d='M370.5 347L373.082 354.946H381.437L374.678 359.857L377.26 367.804L370.5 362.893L363.74 367.804L366.322 359.857L359.563 354.946H367.918L370.5 347Z' fill='%23FFBE0B'/%3E%3Cpath d='M275 911L277.694 918.946H286.413L279.359 923.857L282.053 931.804L275 926.893L267.947 931.804L270.641 923.857L263.587 918.946H272.306L275 911Z' fill='%23FFBE0B'/%3E%3Cpath d='M1063 556L1064.8 561.528H1070.61L1065.91 564.944L1067.7 570.472L1063 567.056L1058.3 570.472L1060.09 564.944L1055.39 561.528H1061.2L1063 556Z' fill='%23FFBE0B'/%3E%3Cpath d='M1364 448L1366.47 455.946H1374.46L1368 460.857L1370.47 468.804L1364 463.893L1357.53 468.804L1360 460.857L1353.54 455.946H1361.53L1364 448Z' fill='%23FFBE0B'/%3E%3Cpath d='M995.5 234L999.204 245.056H1011.19L1001.49 251.889L1005.2 262.944L995.5 256.111L985.802 262.944L989.506 251.889L979.808 245.056H991.796L995.5 234Z' fill='%23FFBE0B'/%3E%3Cpath d='M573 746L576.592 756.71H588.217L578.812 763.33L582.405 774.04L573 767.42L563.595 774.04L567.188 763.33L557.783 756.71H569.408L573 746Z' fill='%23FFBE0B'/%3E%3Cpath d='M778.5 866L780.633 872.564H787.535L781.951 876.621L784.084 883.186L778.5 879.129L772.916 883.186L775.049 876.621L769.465 872.564H776.367L778.5 866Z' fill='%23FFBE0B'/%3E%3Ccircle cx='122.5' cy='285.5' r='3.5' fill='%23FFBE0B'/%3E%3Ccircle cx='774' cy='464' r='4' fill='%23FFBE0B'/%3E%3Ccircle cx='130.5' cy='836.5' r='4.5' fill='%23FFBE0B'/%3E%3Ccircle cx='1153.5' cy='797.5' r='2.5' fill='%23FFBE0B'/%3E%3Cellipse cx='1185' cy='831.5' rx='3' ry='2.5' fill='%23FFBE0B'/%3E%3Cpath d='M1621.5 911L1625.2 922.056H1637.19L1627.49 928.889L1631.2 939.944L1621.5 933.111L1611.8 939.944L1615.51 928.889L1605.81 922.056H1617.8L1621.5 911Z' fill='%23FFBE0B'/%3E%3Cpath d='M1756 619L1757.57 623.837H1762.66L1758.54 626.826L1760.11 631.663L1756 628.674L1751.89 631.663L1753.46 626.826L1749.34 623.837H1754.43L1756 619Z' fill='%23FFBE0B'/%3E%3Cpath d='M1526 147L1528.69 155.292H1537.41L1530.36 160.416L1533.05 168.708L1526 163.584L1518.95 168.708L1521.64 160.416L1514.59 155.292H1523.31L1526 147Z' fill='%23FFBE0B'/%3E%3Cpath d='M1288 735L1290.69 742.601H1299.41L1292.36 747.298L1295.05 754.899L1288 750.202L1280.95 754.899L1283.64 747.298L1276.59 742.601H1285.31L1288 735Z' fill='%23FFBE0B'/%3E%3Cellipse cx='1668' cy='322.5' rx='4' ry='3.5' fill='%23FFBE0B'/%3E%3C/g%3E%3C/svg%3E%0A");
}
.q-page-container::v-deep() .q-page {
  transition: min-height 0.5s ease 0s;
}

// Stoopid Safari does something weird on desktop with fill-available
@media not all and (min-resolution: 0.001dpcm) and (min-width: 1025px) {
  @supports (-webkit-appearance: none) and (stroke-color: transparent) {
    .layout-wrapper,
    .q-scrollarea {
      height: 100% !important;
    }
  }
}

.layout-wrapper,
.q-scrollarea {
  height: 100%;
  height: 100vh;
  height: -webkit-fill-available;
}
</style>
