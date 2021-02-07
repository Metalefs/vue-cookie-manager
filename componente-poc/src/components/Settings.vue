<template>
    <div>
        <p>Aplicação desenvolvida com VueJS.</p>
        <p>Implementado via script unico, sem dependencias externas. Tamanho aproximado de 100kb e 37kb com GZIP </p>
        <p><button class="accent" @click="skip(1)">Próximo</button></p>
        <p><label><input type="checkbox" v-model="showDots" /> Exibir marcações</label></p>
        <p>
        <b>movimento</b><br />
        <label><input type="radio" v-model="orientation" value="row" /> horizontal</label><br />
        <label><input type="radio" v-model="orientation" value="column" /> vertical</label>
        </p>
    </div>
</template>


<script>
  export default {
  name: 'Settings',
   
  props: [
    'modal',
  ],
}
</script>


<style lang="scss">

</style>