<template>
    <div>
        <h2 class="schedule_title">{{ dned[day.day] }}</h2>
        <table class="schedule_card" @click="openModal(day.day)">
            <thead>
                <tr>
                    <th>Пара</th>
                    <th>Наименование</th>
                    <th>Кабинет</th>
                    <!-- остальные заголовки -->
                </tr>
            </thead>

            <tbody>
                <tr v-for="item in day.schedule">

                    <td>{{ para[item.para] }}</td>
                    <!-- <td>{{ formatName(item.teacher) }}</td> -->
                    <td>{{ formatsubject(item.subject) }}</td>
                    <td>{{ cabs(item.lecture) }}</td>
                </tr>
            </tbody>
        </table>

        <div v-if="isModalOpen" @click="closeModal" class="modal">
            <div class="modal-content">
                <div class="header">
                    <span class="close" @click="closeModal">&times;</span>
                    <h2>Расписание занятий</h2>
                    <RaspModalEl v-for="para in paraSort" :day="para"></RaspModalEl>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {
    ref
} from "vue";
import MarkdownIt from "markdown-it";
import RaspModalEl from './RaspModalEl.vue';

const markdown = new MarkdownIt();

export default {
    props: {
        day: {
            type: Object,
            required: true,
        },
    },
    components: {
        RaspModalEl
    },

    setup(props) {
        const currentId = ref(0)
        const isModalOpen = ref(false);

        function openModal(id) {
            currentId.value = id
            isModalOpen.value = true;
        }

        function closeModal() {
            isModalOpen.value = false;
        }

        const para = {
            1: 1,
            2: 1,
            3: 2,
            4: 2,
            5: 3,
            6: 3,
            7: 4,
            8: 4,
            9: 5,
            10: 5,
            11: 6,
            12: 6,
        }
        const paraSort = ref({
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],

        })
        for (let key in props.day.schedule) {
            paraSort.value[para[props.day.schedule[key].para]].push(props.day.schedule[key])
        }

        function formatsubject(subject) {
            let result = "";
            subject = subject.trim()
            const one = subject.split(' ')[0];
            const two = subject.split(' ')[1];

            if (one == "МДК" || one == "Физическая") {
                result = one + " " + two
            } else {
                result = one
            }

            return one
        }

        function cabs(cab) {
            const firstSpaceIndex = cab.indexOf(' ');

            // Извлекаем подстроку до первого пробела 
            const code = cab.substring(0, firstSpaceIndex);

            return code.split("_")[0] // "А425 (К)"

        }
        const dned = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

        return {
            isModalOpen,
            openModal,
            closeModal,
            markdown,
            formatsubject,
            cabs,
            dned,
            para,
            paraSort
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

td {
    border-bottom: 0.5px solid #3a3a3a;
}
</style>
