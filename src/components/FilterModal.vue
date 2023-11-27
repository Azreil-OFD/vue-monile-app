<template>
  <div>
    <div class="card" @click="openModal">Фильтры</div>
    <div v-if="isModalOpen" @click="closeModal" class="modal">
      <div class="modal-content">
        <div class="header">
          <span class="close" @click="closeModal">&times;</span>
          <input type="button" value="Получить" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup(props) {
    const isModalOpen = ref(false);

    function openModal() {
      isModalOpen.value = true;
    }

    function closeModal() {
      isModalOpen.value = false;
    }

    return {
      isModalOpen,
      openModal,
      closeModal,
    };
  },
};
</script>

<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 30% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 85%;
  border-radius: 15px;
  min-height: 50%;
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.schedule_card {
  width: 100%;
  border: 1px solid #3a3a3a;

  text-align: center;
  border-spacing: 0px;
  border-collapse: unset;
  border-radius: 20px;
}

.yesteday {
  background-color: rgb(237, 255, 249);
}

td {
  border-bottom: 0.5px solid #3a3a3a;
}
</style>
