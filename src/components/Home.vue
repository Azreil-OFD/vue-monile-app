<script setup>

import { ref, onMounted, watch } from 'vue';

const activities = ref([

  {
    "title": "Spring Fling",
    "description": "The annual Spring Fling event celebrates the arrival of spring with fun activities like games, music, food trucks, and raffles.",
    "content": `# Spring Fling 2022  
**Date:** April 20, 2000  
**Time:** 12:00 PM - 5:00 PM  
**Location:** Main Quad  


![Текст с описанием картинки](https://i.pinimg.com/236x/3a/0b/c9/3a0bc9274b8781d5d3423ade51fdaf6f.jpg)

Join us for our annual Spring Fling event! This year's Spring Fling will feature:

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Row 1    | Cell 2   | Cell 3   |
| Row 2    | Cell 5   | Cell 6   |
| Row 3    | Cell 8   | Cell 9   |

- Live music from the school's jazz band 
- Carnival games hosted by campus clubs
- Local food trucks with tasty snacks and meals
- Mechanical bull riding
- Raffle with prizes donated from local businesses

Don't miss out on the fun! Bring your friends and celebrate the spring season at this awesome campus event.`,

    "date": "2023-04-20T12:00:00.000"
  },


  {
    "title": "Fall Festival",
    "description": "An autumn celebration with apple picking, hayrides, pie eating contests and more.",
    "content": `# Fall Festival   
**Date:** October 5, 2000  
**Time:** 10am - 6pm  
**Location:** College Orchard   

Get ready for some good old-fashioned autumn fun at our annual Fall Festival! Activities will include:

- Apple picking - Pick your own apples from our college's orchard. $5 for a bag.
- Hayrides - Take a tractor-pulled ride through the orchard and surrounding fields. $2 per person.
- Pie eating contest - Compete to eat an entire pie the fastest! Sign-ups start at noon. 
- Pumpkin painting - Paint mini pumpkins from the pumpkin patch. Supplies provided.
- Apple cider and donuts - Enjoy complimentary treats!

Don't miss out on a day filled with apples, hayrides, contests and more! Bring your family and friends for a full day of fall fun.

`,
    "date": "2023-10-05T10:00:00.000"
  },

  {
    "title": "Homecoming Bonfire",
    "description": "Students gather for a bonfire, pep rally and fireworks to kick off homecoming weekend.",
    "content": `# Homecoming Bonfire  
**Date:** September 15, 2000  
**Time:** 8:00 PM - 11:00 PM  
**Location:** Johnson Field  

Get pumped up for Homecoming Weekend at the annual Homecoming Bonfire! 

- 8:00 PM - Bonfire lighting ceremony and pep rally. Cheer on the football team!
- 9:00 PM - Performances by the college marching band.
- 10:00 PM - Fireworks show over Johnson Field.
- 11:00 PM - Bonfire winds down.

Bring your friends and get excited for the big game at this Homecoming tradition! The pep band, cheerleaders and football team will get the crowd hyped with chants, music and more. Stick around for the huge fireworks show at 10PM! 

This is an alcohol-free event. Campus police will be present to ensure safety and enforce policies.

Go Eagles!

` ,
    "date": "2023-09-15T20:00:00.000"
  },
  {
    "title": "Homecoming Bonfire",
    "description": "Students gather for a bonfire, pep rally and fireworks to kick off homecoming weekend.",
    "content": `# Dillinger
## _The Last Markdown Editor, Ever_

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Dillinger is a cloud-enabled, mobile-ready, offline-storage compatible,
AngularJS-powered HTML5 Markdown editor.

- Type some Markdown on the left
- See HTML in the right
- ✨Magic ✨

` ,
    "date": "2023-09-16T20:00:00.000"
  }
]);
const search = ref('')
const modalOpen = ref(false)

const filteredActivities = computed(() => {
  return activities.value.filter(a => {
    return a.title.toLowerCase().includes(search.value.toLowerCase()) ||
      a.description.toLowerCase().includes(search.value.toLowerCase()) ||
      new Date(a.date).toLocaleString('default', { month: 'long' }).toLowerCase().includes(search.value.toLowerCase())
  })
})

async function f() {
  const response = await fetch("http://127.0.0.1:8000/events/");
  const data = await response.json();
  activities.value = data;
};
// setInterval(f, 1000);



</script>

<template>
  <main>
    <section v-for="month in  Object.keys(groupByMonth(filteredActivities)) ">

      <h2>{{ month }}</h2>

      <ModalView v-for="activity in  groupByMonth(filteredActivities)[month] " :post="activity">
      </ModalView>
    </section>
  </main>
</template>

<script>
import { computed } from 'vue';
import ModalView from './ModalView.vue';

function compare(a, b) {
  var dateA = new Date(a.date);
  var dateB = new Date(b.date);

  return dateB - dateA;
}

const groupByMonth = (activities) => {
  const grouped = {};
  activities.sort(compare);

  for (let activity of activities) {
    const date = new Date(activity.date);
    const month = date.toLocaleString('default', { month: 'long' });

    if (!grouped[month]) {
      grouped[month] = [];
    }

    grouped[month].push(activity);
  }

  return grouped;
}

</script>

<style>
body {
  font-family: Arial, sans-serif;
  font-family: 'M PLUS Rounded 1c', sans-serif;
}

header {
  background-color: #f1f1f1;
  padding: 20px 10px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 22px);
  display: flex;
  flex-direction: row;
}

.logo {
  width: 6vh;
  background-color: #f1f1f1;
  margin-top: 7px;
  height: 4.8vh;
  border-radius: 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
  line-height: 2.2em;
  margin-right: 10px;
  font-size: 2.4vh;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: row;
}

input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}

section {
  margin-bottom: 50px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

/* Стили по умолчанию */




@media (max-width: 768px) {
  /* Стили для экранов до 768px */

  .card {
    width: 85%;
  }
}

@media (max-width: 576px) {
  /* Стили для экранов до 576px */

  .card {
    flex-direction: row;
  }

  .left {
    text-align: center;
    width: 90%;
  }

  .right {
    text-align: left;
    padding-left: 40px;
    width: 90%;
  }


}
</style>