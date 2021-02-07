<template>
    <div>
        <h3>Settings:</h3>
        <p>Aplicação desenvolvida com VueJS.</p>
        <p>Implementado via script unico. </p>
        <p>Sem dependencias externas.</p>
        <p>Tamanho aproximado de 100kb (37kb com compressão). </p>
        <p><button class="accent" @click="skip">Próximo</button></p>
        <p><label><input type="checkbox" v-model="config.showDots" /> Exibir marcações</label></p>
        <p>
        <b>Movimento</b><br />
        <label><input type="radio" v-model="config.orientation" value="row" /> Horizontal</label><br />
        <label><input type="radio" v-model="config.orientation" value="column" /> Vertical</label>
        </p>
    </div>
</template>


<script>
  export default {
    name: 'Settings',
    props: [
        'config',
    ],
    methods: {
        skip: function(){
            this.$emit('skip')
        },
    },
}
</script>


<style lang="scss">

</style>