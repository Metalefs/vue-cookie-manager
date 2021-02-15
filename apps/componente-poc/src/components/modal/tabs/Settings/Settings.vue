<template>
    <div class="cli-privacy-content">
        <h4 class="cli-privacy-content-text">Visão Geral de Privacidade</h4>
        <p class="cli-privacy-content-text" v-html="textoVisaoGeralDePrivacidade"></p>
        <h4 class="cli-privacy-content-text">Configurações</h4>

        <div class="cookie_category_description" >
            
        </div>
        <div class="Accordion">
            <Expander v-for="grupo in tableCookiesCategories"
                @toogleActive="HandleCookie"
                :key="grupo.tipo" :Title="grupo.nome" Animation="bottomToTop">
                <div slot="body">
                    <CookieTable :TableCookies="tableCookies"   
                    :CurrentGroup="grupo.tipo"></CookieTable>
                </div>
             </Expander>
        </div>

        <aside>
            <button>Ativar todos</button>
            <button>Desativar todos</button>
        </aside>
        
    </div>
</template>


<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import { Prop } from 'vue-property-decorator';
    import { CustomCookie } from '../../../../../../../libs/shared/src/interfaces';
    import CookieTable from './CookieTable.vue';
    import Expander from './Expander.vue';
    import {removeDuplicates} from '../../../../core/helper/objHelper';

    @Component({
        components:{
            CookieTable,
            Expander
        }
    })
    export default class Settings extends Vue{
        @Prop() readonly config:any;
        @Prop({default: ""}) readonly textoVisaoGeralDePrivacidade:string;
        @Prop({default: []}) readonly Cookies:CustomCookie[];
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
        HandleCookie(event:any){
            console.log(event)
        }
    }
</script>


<style lang="scss" scoped>
    @import "../../../../assets/styles/Modal/index.scss";
    .Accordion {
        overflow: hidden;
        margin: 10px;
    }
</style>