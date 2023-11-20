<template>
    <div>
        <div class="card" @click="openModal">
            <div class="left">
                <span>
                    {{ new Date(post.date).toLocaleString('default', {
                        day: "2-digit"
                    }) }}
                </span>

            </div>

            <div class="right">
                <h3>{{ post.title }}</h3>

                <p>
                    {{ truncate(post.description, 50) }}
                </p>

            </div>
        </div>


        <div v-if="isModalOpen" @click="closeModal" class="modal">
            <div class="modal-content">
                <div class="header">
                    <span class="close" @click="closeModal">&times;</span>

                </div>
                <div v-html="markdown.render(post.content)">
                </div>
            </div>
        </div>
    </div>
</template>
   
<script>
import { ref } from "vue";
import MarkdownIt from "markdown-it";


const markdown = new MarkdownIt();


export default {
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
    setup(props) {

        const isModalOpen = ref(false);

        function openModal() {
            isModalOpen.value = true;
        }

        function closeModal() {
            isModalOpen.value = false;
        }


        function truncate(str, maxLength = 50) {
            if (str.length > maxLength) {
                return str.slice(0, maxLength) + '...';
            } else {
                return str;
            }
        }
        const content = ref(props.post.content);

        return { isModalOpen, openModal, closeModal, truncate, markdown };


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

.table {
    width: 100%;
    margin-bottom: 20px;
    border: 1px solid #dddddd;
    border-collapse: collapse;
}

.table th {
    font-weight: bold;
    padding: 5px;
    background: #efefef;
    border: 1px solid #dddddd;
}

.table td {
    border: 1px solid #dddddd;
    padding: 5px;
}

.modal-content {
    background-color: #fefefe;
    margin: 30% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
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





.left {
    text-align: center;
    flex: 1;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    min-width: 80px;
    min-height: 90px;
    max-width: 80px;
    max-height: 90px;
    align-items: center;
    justify-content: center;


}

.left span {
    font-size: 60px;
}

.right {
    text-align: right;
    text-wrap: wrap;
    word-break: break-all;
    text-align: left;
    padding-left: 40px;

}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}</style>