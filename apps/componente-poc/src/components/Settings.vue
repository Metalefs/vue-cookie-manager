<template>
    <div class="cli-privacy-content">
        <h4>Visão Geral de Privacidade</h4>
        <p class="cli-privacy-content-text" v-html="textoVisaoGeralDePrivacidade">

        </p>
    </div>
</template>


<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import { Prop } from 'vue-property-decorator';
    @Component
    export default class Settings extends Vue{
        @Prop() readonly config:any;
        @Prop() readonly textoVisaoGeralDePrivacidade:string = "";
        skip(){
            this.$emit('skip')
        }
    }
</script>


<style lang="scss">

</style>