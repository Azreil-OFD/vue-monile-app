<template>
    <div v-for="day in days">

        <div v-if="day.schedule != 0">
            <h2>{{ dned[day.day] }}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Пара</th>
                        <th>Преподаватель</th>

                        <th>Кабинет</th>
                        <!-- остальные заголовки -->
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="item in day.schedule">
                        <td>{{ para[item.para] }}</td>
                        <td>{{ formatName(item.teacher) }}</td>
                        <td>{{ cabs(item.lecture) }}</td>
                        <!-- остальные данные -->
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>
  
<script setup>
import { ref, computed } from "vue"
const Schedule = `
<m:return>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>УП.11. Учебная практика</m:UF_ID_SUBJECT>
					<m:UF_PARA>7</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>23.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>УП.11. Учебная практика</m:UF_ID_SUBJECT>
					<m:UF_PARA>8</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>23.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>УП.11. Учебная практика</m:UF_ID_SUBJECT>
					<m:UF_PARA>9</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>23.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>УП.11. Учебная практика</m:UF_ID_SUBJECT>
					<m:UF_PARA>10</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>23.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>УП.11. Учебная практика</m:UF_ID_SUBJECT>
					<m:UF_PARA>11</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>23.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>УП.11. Учебная практика</m:UF_ID_SUBJECT>
					<m:UF_PARA>12</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>23.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>УП.11. Учебная практика</m:UF_ID_SUBJECT>
					<m:UF_PARA>1</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>22.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>УП.11. Учебная практика</m:UF_ID_SUBJECT>
					<m:UF_PARA>2</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>22.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>УП.11. Учебная практика</m:UF_ID_SUBJECT>
					<m:UF_PARA>3</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>22.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>УП.11. Учебная практика</m:UF_ID_SUBJECT>
					<m:UF_PARA>4</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>22.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>УП.11. Учебная практика</m:UF_ID_SUBJECT>
					<m:UF_PARA>5</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>22.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>УП.11. Учебная практика</m:UF_ID_SUBJECT>
					<m:UF_PARA>6</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>22.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Арипова Зульфия Барисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>Экономика отрасли</m:UF_ID_SUBJECT>
					<m:UF_PARA>1</m:UF_PARA>
					<m:UF_LECTURE>А221 (Л) Испытания материалов и контроля качества сварных соединений</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>24.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Арипова Зульфия Барисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>Экономика отрасли</m:UF_ID_SUBJECT>
					<m:UF_PARA>2</m:UF_PARA>
					<m:UF_LECTURE>А221 (Л) Испытания материалов и контроля качества сварных соединений</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>24.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Раимбакиева Айгуль Фахрисламовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>Иностранный язык в профессиональной деятельности</m:UF_ID_SUBJECT>
					<m:UF_PARA>3</m:UF_PARA>
					<m:UF_LECTURE>А418   Иностранный язык</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>24.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Раимбакиева Айгуль Фахрисламовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>Иностранный язык в профессиональной деятельности</m:UF_ID_SUBJECT>
					<m:UF_PARA>4</m:UF_PARA>
					<m:UF_LECTURE>А418   Иностранный язык</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>24.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Бадрак Петр Александрович</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>Физическая культура</m:UF_ID_SUBJECT>
					<m:UF_PARA>5</m:UF_PARA>
					<m:UF_LECTURE>Б123_Тренажерный зал</m:UF_LECTURE>
					<m:UF_ZONE>Физкультурный корпус</m:UF_ZONE>
					<m:UF_DATE>24.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Бадрак Петр Александрович</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>Физическая культура</m:UF_ID_SUBJECT>
					<m:UF_PARA>6</m:UF_PARA>
					<m:UF_LECTURE>Б123_Тренажерный зал</m:UF_LECTURE>
					<m:UF_ZONE>Физкультурный корпус</m:UF_ZONE>
					<m:UF_DATE>24.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>МДК.12.01 16199 Оператор электронно-вычислительных и вычислительных машин</m:UF_ID_SUBJECT>
					<m:UF_PARA>7</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>24.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>МДК.12.01 16199 Оператор электронно-вычислительных и вычислительных машин</m:UF_ID_SUBJECT>
					<m:UF_PARA>8</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>24.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>МДК.11.01 Технология разработки и защиты баз данных</m:UF_ID_SUBJECT>
					<m:UF_PARA>9</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>24.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>МДК.11.01 Технология разработки и защиты баз данных</m:UF_ID_SUBJECT>
					<m:UF_PARA>10</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>24.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>МДК.12.01 16199 Оператор электронно-вычислительных и вычислительных машин</m:UF_ID_SUBJECT>
					<m:UF_PARA>7</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>21.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>МДК.12.01 16199 Оператор электронно-вычислительных и вычислительных машин</m:UF_ID_SUBJECT>
					<m:UF_PARA>8</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>21.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>МДК.12.01 16199 Оператор электронно-вычислительных и вычислительных машин</m:UF_ID_SUBJECT>
					<m:UF_PARA>9</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>21.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>МДК.12.01 16199 Оператор электронно-вычислительных и вычислительных машин</m:UF_ID_SUBJECT>
					<m:UF_PARA>10</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>21.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>МДК.11.01 Технология разработки и защиты баз данных</m:UF_ID_SUBJECT>
					<m:UF_PARA>11</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>21.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>МДК.11.01 Технология разработки и защиты баз данных</m:UF_ID_SUBJECT>
					<m:UF_PARA>12</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>21.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT> МДК 12.03 Наладчик технологического оборудования</m:UF_ID_SUBJECT>
					<m:UF_PARA>5</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>20.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT> МДК 12.03 Наладчик технологического оборудования</m:UF_ID_SUBJECT>
					<m:UF_PARA>6</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>20.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>МДК.04.02 Обеспечение качества функционорования компьютерных систем</m:UF_ID_SUBJECT>
					<m:UF_PARA>7</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>20.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>МДК.04.02 Обеспечение качества функционорования компьютерных систем</m:UF_ID_SUBJECT>
					<m:UF_PARA>8</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>20.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>МДК.04.02 Обеспечение качества функционорования компьютерных систем</m:UF_ID_SUBJECT>
					<m:UF_PARA>9</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>20.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>МДК.04.02 Обеспечение качества функционорования компьютерных систем</m:UF_ID_SUBJECT>
					<m:UF_PARA>10</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>20.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>МДК.04.02 Обеспечение качества функционорования компьютерных систем</m:UF_ID_SUBJECT>
					<m:UF_PARA>11</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>20.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
				<m:Tab>
					<m:UF_ID_TEACHER>Козырева Вера Варисовна</m:UF_ID_TEACHER>
					<m:UF_ID_GROUP>ИС 1.20</m:UF_ID_GROUP>
					<m:UF_ID_SUBJECT>МДК.04.02 Обеспечение качества функционорования компьютерных систем</m:UF_ID_SUBJECT>
					<m:UF_PARA>12</m:UF_PARA>
					<m:UF_LECTURE>А425 (К) Информатики и информационных технологий</m:UF_LECTURE>
					<m:UF_ZONE>Учебно-административный корпус</m:UF_ZONE>
					<m:UF_DATE>20.11.2023 0:00:00</m:UF_DATE>
					<m:UF_SUBSET>0</m:UF_SUBSET>
				</m:Tab>
			</m:return>
`
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

    return code// "А425 (К)"

}
const parser = new DOMParser();
const xml = parser.parseFromString(Schedule, "text/xml");

const tabs = [];

const tabElements = xml.getElementsByTagName("m:Tab");
for (let i = 0; i < tabElements.length; i++) {

    const tab = tabElements[i];
    console.log(tab)
    const teacher = tab.getElementsByTagName("m:UF_ID_TEACHER")[0].textContent;
    const group = tab.getElementsByTagName("m:UF_ID_GROUP")[0].textContent;
    const subject = tab.getElementsByTagName("m:UF_ID_SUBJECT")[0].textContent;
    const para = tab.getElementsByTagName("m:UF_PARA")[0].textContent;
    const lecture = tab.getElementsByTagName("m:UF_LECTURE")[0].textContent;
    const zone = tab.getElementsByTagName("m:UF_ZONE")[0].textContent;
    const date = tab.getElementsByTagName("m:UF_DATE")[0].textContent;
    const subset = tab.getElementsByTagName("m:UF_SUBSET")[0].textContent;

    tabs.push({
        teacher,
        group,
        subject,
        para,
        lecture,
        zone,
        date,
        subset
    });
}
const dned = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const datas = {
    0: [], // Воскресенье
    1: [], // Понедельник
    2: [], // Вторник
    3: [], // Среда
    4: [], // Четверг
    5: [], // Пятница
    6: []  // Суббота
};

tabs.forEach(tab => {


    const parts = tab.date.split(".");
    const day = parts[0];
    const month = parts[1] - 1; // Month is 0-indexed
    const year = parts[2].split(" ")[0];
    const time = parts[2].split(" ")[1];

    const date = new Date(year, month, day, ...time.split(":"));

    const dayOfWeek = date.getDay();

    console.log(dayOfWeek);
    datas[dayOfWeek].push(tab);
});




const data = ref(datas)
const days = computed(() => {
    return Object.keys(datas).map(key => {
        return {
            day: key,
            schedule: datas[key]
        }
    })
})
console.log(days)
</script>
  
<style></style>