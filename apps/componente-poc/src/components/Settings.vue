<template>
    <div class="cli-privacy-content">
        <h4>Visão Geral de Privacidade</h4>
        <p  class="cli-privacy-content-text">Nosso site utiliza cookies, inclusive de parceiros, para o correto funcionamento do site, melhorar a sua experiência de navegação e possibilitar o acesso aos nossos conteúdos. Clique abaixo para saber mais sobre os cookies que utilizamos. Ainda está ...</p>
    </div>
</template>


<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'Settings',
        props: [
            'config',
        ],
        methods: {
            skip: function(){
                this.$emit('skip')
            },
        },
    })
</script>


<style lang="scss">

</style>