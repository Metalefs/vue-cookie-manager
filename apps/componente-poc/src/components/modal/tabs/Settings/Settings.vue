<template>
    <div class="cli-privacy-content">
        <h4 class="cli-privacy-content-text">Visão Geral de Privacidade</h4>
        <p class="cli-privacy-content-text" v-html="textoVisaoGeralDePrivacidade"></p>
        <h4>Configurações</h4>

        <div class="cookiescript_category_description" >
            
        </div>

        <CookieTable :TableCookies="tableCookies"></CookieTable>
    </div>
</template>


<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import { Prop } from 'vue-property-decorator';
    import { CustomCookie } from '../../../../../../../libs/shared/src/interfaces';
    import CookieTable from './CookieTable.vue';

    @Component({
        components:{
            CookieTable
        }
    })
    export default class Settings extends Vue{
        @Prop() readonly config:any;
        @Prop() readonly textoVisaoGeralDePrivacidade:string = "";
        @Prop() readonly Cookies:CustomCookie[] =[];
        skip(){
            this.$emit('skip')
        }
        get tableCookies():CustomCookie[] {
            return this.Cookies
        }
    }
</script>


<style lang="scss" scoped>
   
</style>