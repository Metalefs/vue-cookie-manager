<template>
    <div class="cli-privacy-content">
        <h4 class="cli-privacy-content-text">Visão Geral de Privacidade</h4>
        <p class="cli-privacy-content-text" v-html="textoVisaoGeralDePrivacidade"></p>
        <h4>Configurações</h4>

        <div class="cookie_category_description" >
            
        </div>

        <CookieTable :TableCookies="tableCookies" :TableCookiesCategories="tableCookiesCategories"></CookieTable>
        <button>Ativar todos</button>
        <button>Desativar todos</button>
    </div>
</template>


<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import { Prop } from 'vue-property-decorator';
    import { CustomCookie } from '../../../../../../../libs/shared/src/interfaces';
    import CookieTable from './CookieTable.vue';
    import {removeDuplicates} from '../../../../core/helper/objHelper';

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
        get tableCookiesCategories(){
            let cookieCategories = this.Cookies.map((x)=>x.grupo);
            return removeDuplicates(cookieCategories,'nome');
        }
    }
</script>


<style lang="scss" scoped>
   
</style>