<template>
    <div class="card" v-if="day != 0">
        <div class="card__title"><span class="card__title__span">{{ paraN[day[0].para] }} пара</span></div>
        <div class="card__wrapper ">
            <span class="card__subject">
                {{ day[0].subject }}
            </span>
            <table>
                <tbody>
                    <tr>
                        <td>{{ para[day[0].para] }}</td>
                        <td>{{ para[day[1].para] }} </td>
                    </tr>
                    <tr>
                        <td>{{ cabs(day[0].lecture) }}</td>
                        <td>{{ cabs(day[1].lecture) }}</td>
                    </tr>
                </tbody>
            </table>

            <span class="card__teacher">
                {{ day[0].teacher }}
            </span>
        </div>
    </div>
</template>

<script >
export default {
    props: {
        day: {
            type: Object,
            required: true,
        }
    },
    setup(props) {
        const para = {
            1: "08:00 - 08:45",
            2: "09:05 - 09:50",
            3: "10:00 - 10:45",
            4: "11:05 - 11:50",
            5: "12:15 - 13:00",
            6: "13:10 - 13:55",
            7: "14:15 - 15:00",
            8: "15:10 - 15:55",
            9: "16:05 - 16:50",
            10: "17:00 - 17:45",
            11: "17:55 - 18:40",
            12: "18:50 - 19:35",
        }
        const paraN = {
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

        function formatName(fullName) {

            const lastName = fullName.split(' ')[0]; // извлекаем фамилию
            const firstName = fullName.split(' ')[1]; // извлекаем имя
            const middleName = fullName.split(' ')[2]; // извлекаем отчество 

            return `${lastName} ${firstName[0]}.${middleName[0]}.`;

        }

        function cabs(cab) {
            const firstSpaceIndex = cab.indexOf(' ');

            // Извлекаем подстроку до первого пробела 
            const code = cab.substring(0, firstSpaceIndex);

            return code.split("_")[0] // "А425 (К)"

        }
        return {
            para,
            paraN,
            formatName,
            cabs
        };

    },
};

</script>

<style scoped>
.card {
    position: relative;
    background-color: white;
    box-shadow: none;
    width: 100%;
    padding: 0;
    padding-top: 20px;
    padding-bottom: 2px;
    margin: 0;

}

.card__title {
    position: absolute;
    left: 15vh;
    top: 1vh;
    padding: 2vh;

    background-color: #929292;
    padding: 0;
}

.card__title__span {
    margin: 2vh;
}

.card__wrapper {
    background-color: #ececec;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 2vh;
    display: flex;
    flex-direction: column;

}

table {
    border: 1px solid #3a3a3a;
    border-left: none;
    border-right: none;
    text-align: center;
    border-spacing: 0px;
    border-collapse: inherit;
}

td {
    border: 1px solid black;
    text-align: center;
}

td:last-child {
    border-right: none;
}

td:first-child {
    border-left: none;
}
</style>
