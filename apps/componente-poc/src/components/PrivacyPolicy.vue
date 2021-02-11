<template>
    <div>
        <h4> Politica de Privacidade </h4>
        <div class="cli-privacy-content-text" v-html="texto"></div>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import { Prop } from 'vue-property-decorator';
    @Component
    export default class PrivacyPolicy extends Vue{
      @Prop() readonly texto:string= "";
    }
</script>
<style scoped>

</style>