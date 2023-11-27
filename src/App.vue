<script setup>
import Home from "./components/Home.vue";
import Rasp from "./components/Rasp.vue";
import Assessments from "./components/Assessments.vue";
import { ref } from "vue";

const mode = ref("События");
</script>

<template>
  <div class="header_top">
    <h1>{{ mode }}</h1>

    <div>
      <img src="./assets/logo.jpg" alt="Avatar" class="avatar" />
      <h3>Иван И.</h3>
    </div>
  </div>

  <div class="buttons">
    <button
      class="blob-btn"
      @click="mode = 'События'"
      :class="{ active: mode == 'События' }"
    >
      События
      <span class="blob-btn__inner">
        <span class="blob-btn__blobs">
          <span class="blob-btn__blob"></span>
          <span class="blob-btn__blob"></span>
          <span class="blob-btn__blob"></span>
          <span class="blob-btn__blob"></span>
        </span>
      </span>
    </button>
    <button
      class="blob-btn"
      @click="mode = 'Расписание'"
      :class="{ active: mode == 'Расписание' }"
    >
      Расписание
      <span class="blob-btn__inner">
        <span class="blob-btn__blobs">
          <span class="blob-btn__blob"></span>
          <span class="blob-btn__blob"></span>
          <span class="blob-btn__blob"></span>
          <span class="blob-btn__blob"></span>
        </span>
      </span>
    </button>

    <button
      class="blob-btn"
      @click="mode = 'Оценки'"
      :class="{ active: mode == 'Оценки' }"
    >
      Оценки
      <span class="blob-btn__inner">
        <span class="blob-btn__blobs">
          <span class="blob-btn__blob"></span>
          <span class="blob-btn__blob"></span>
          <span class="blob-btn__blob"></span>
          <span class="blob-btn__blob"></span>
        </span>
      </span>
    </button>
  </div>

  <Home v-if="mode == 'События'"></Home>
  <Rasp v-if="mode == 'Расписание'"></Rasp>
  <Assessments v-if="mode == 'Оценки'"></Assessments>
</template>

<style scoped>
.header_top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.header_top h1 {
  font-size: 29px;
}
.header_top div {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  padding: 1px 5px;
}
.header_top div h3 {
  font-size: 18px;
  border-bottom: 1px solid rgb(179, 179, 179);
}
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  border: 2px solid rgb(105, 105, 105);
}

.tab {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.buttons {
  text-align: center;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.blob-btn {
  z-index: 1;
  position: relative;
  padding: 5px 10px;
  text-align: center;
  text-transform: uppercase;
  color: #6c6c6c;
  font-size: 13px;
  background-color: transparent;
  outline: none;
  border: none;
  transition: color 0.5s;
  cursor: pointer;
  border-radius: 30px;
}

.blob-btn:before {
  content: "";
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #6c6c6c;
  border-radius: 30px;
}

.blob-btn:after {
  content: "";
  z-index: -2;
  position: absolute;
  left: 3px;
  top: 3px;
  width: 100%;
  height: 100%;
  transition: all 0.3s 0.2s;
  border-radius: 30px;
}

.blob-btn:hover {
  color: #ffffff;
  border-radius: 30px;
}

.blob-btn:hover:after {
  transition: all 0.3s;
  left: 0;
  top: 0;
  border-radius: 30px;
}

.blob-btn__inner {
  z-index: -1;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background: #ffffff;
}

.blob-btn__blobs {
  position: relative;
  display: block;
  height: 100%;
  filter: url("#goo");
}

.blob-btn__blob {
  position: absolute;
  top: 2px;
  width: 25%;
  height: 100%;
  background: #6c6c6c;
  border-radius: 100%;
  transform: translate3d(0, 150%, 0) scale(1.7);
  transition: transform 0.45s;
}

@supports (filter: url("#goo")) {
  .blob-btn__blob {
    transform: translate3d(0, 150%, 0) scale(1.4);
  }
}

.blob-btn__blob:nth-child(1) {
  left: 0%;
  transition-delay: 0s;
}

.blob-btn__blob:nth-child(2) {
  left: 30%;
  transition-delay: 0.08s;
}

.active {
  text-decoration: underline;
}

.blob-btn__blob:nth-child(3) {
  left: 60%;
  transition-delay: 0.16s;
}

.blob-btn__blob:nth-child(4) {
  left: 90%;
  transition-delay: 0.24s;
}

.blob-btn:hover .blob-btn__blob {
  transform: translateZ(0) scale(1.1);
}

@supports (filter: url("#goo")) {
  .blob-btn:hover .blob-btn__blob {
    transform: translateZ(0) scale(1.6);
  }
}
</style>
