<template>
    <p>
        <span v-for="line in wrappedLines">{{ line }}</span>
    </p>
</template>
  
<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        }
    },

    computed: {
        wrappedLines() {
            return this.text.replace(/(\S+\s+)/g, (str) => {
                return str.replace(/(.{30})(\s+|$)/g, '$1\n');
            })
                .split('\n')
                .filter(line => line.trim() !== '');
        }
    }
}
</script>
  
<style>
p {
    white-space: pre-wrap;
}
</style>