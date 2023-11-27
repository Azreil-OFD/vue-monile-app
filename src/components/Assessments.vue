<template>
  <div>
    <div class="card">
      <label for="months">Выберите месяц:</label>
      <select id="months" v-model="selectedMonth">
        <option v-for="subject in months" :key="subject" :value="subject">
          {{ subject }}
        </option>
      </select>
      <label for="subject">Выберите предмет:</label>
      <select id="subject" v-model="selectedSubject">
        <option v-for="subject in subjects" :key="subject" :value="subject">
          {{ subject }}
        </option>
      </select>
    </div>
    <div v-if="grtadees">
      <div class="card">Общий балл: {{ grtadees[0].grades.month_avg }}</div>
      <div class="container">
        <div class="card_grades">
          <div class="date_grades">Дата</div>
          <div class="assessment">Оценка</div>
        </div>
        <div class="card_grades" v-for="grades in grtadees[0].grades.dates">
          <div class="date_grades">
            {{
              new Date(grades[0]).toLocaleDateString("ru-RU", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            }}
          </div>
          <div class="assessment">{{ grades[1] }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
select {
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
}

.card {
  margin-top: 20px;
  flex-direction: column;
}

.card_grades {
  width: 90%;
  border-bottom: 1px solid gainsboro;
  height: 30px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import { ref, watch } from "vue";

import jsonData from "../grtadees.json";
export default {
  setup(props) {
    const Month = ref("");
    const selectedMonth = ref("");
    const selectedSubject = ref("");
    const grtadees = ref("");
    let monthsToDates = {
      Январь: 1,
      Февраль: 2,
      Март: 3,
      Апрель: 4,
      Май: 5,
      Июнь: 6,
      Сентябрь: 9,
      Октябрь: 10,
      Ноябрь: 11,
      Декабрь: 12,
    };
    function findSubjectAndMonth(subject, month, jsonData) {
      var date = new Date(monthsToDates[month] + " 1, 2023");

      return jsonData.filter(function (data) {
        return (
          data.subject === subject &&
          monthsToDates[data.month] - 1 === date.getMonth()
        );
      });
    }

    watch(
      selectedMonth,
      (newMonth, oldMonth) => {
        grtadees.value = findSubjectAndMonth(
          selectedSubject.value,
          selectedMonth.value,
          jsonData
        );
        console.log(grtadees);
      },
      { immediate: false }
    );
    watch(
      selectedSubject,
      (newMonth, oldMonth) => {
        grtadees.value = findSubjectAndMonth(
          selectedSubject.value,
          selectedMonth.value,
          jsonData
        );
      },
      { immediate: false }
    );
    let subjects = [
      "Введение в программирование",
      "Основы алгоритмизации",
      "Структуры данных",
      "Объектно-ориентированное программирование",
      "Компьютерные сети",
      "Базы данных",
      "Математика",
      "Английский язык",
      "Операционные системы",
      "Веб-программирование",
    ];

    let months = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];

    return {
      subjects,
      months,
      selectedMonth,
      selectedSubject,
      jsonData,
      grtadees,
    };
  },
};
</script>
