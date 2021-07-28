<template>
    <div class="cli-privacy-content">
        <h4 class="cli-privacy-content-text">Visão Geral de Privacidade</h4>
        <p class="cookie_category_description cli-privacy-content-text" v-html="textoVisaoGeralDePrivacidade"></p>
        <h4 class="cli-privacy-content-text">Configurações</h4>

        <div class="cookie_category_description cli-privacy-content-text" >
            Escolha quais cookies você nos permite usar.
        </div>

        <!-- <div class="Accordion">
            <div v-for="grupo in tableCookiesCategories" :key="grupo.tipo">
                <input type="checkbox" class="check" :name="grupo.nome" :id="grupo.nome">
                <label :for="grupo.nome" class="">
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                    <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                    <polyline points="1 9 7 14 15 4"></polyline>
                </svg>
                {{grupo.nome}}
                </label>
            </div>
        </div> -->

        <!-- <div class="Accordion">
            <CookieTableMobile :TableCookies="tableCookies"  
            :TableCookiesCategories="tableCookiesCategories"></CookieTableMobile>
        </div> -->

        <aside style="display:flex;justify-content:flex-end;margin:10px">
            <button @click="Active = !Active">{{Active?'Desativar Todos':'Ativar Todos'}}</button>
        </aside>
        
        <div class="Accordion">
            <Expander v-for="grupo in tableCookiesCategories"
                @toogleActive="HandleCookie" :Active="active"
                :key="grupo.tipo" :Title="grupo.nome" Animation="bottomToTop">
                <div slot="body">
                    <CookieTable :TableCookies="tableCookies"   
                    :CurrentGroup="grupo.tipo"></CookieTable>
                </div>
             </Expander>
        </div>

        
    </div>
</template>


<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import { Prop } from 'vue-property-decorator';
    import { CustomCookie, TipoGrupoPlugin } from '../../../../../../../libs/shared/src/interfaces';
    import CookieTable from './CookieTable.vue';
    import CookieTableMobile from './CookieTableMobile.vue';
    import Expander from './Expander.vue';
    import {removeDuplicates} from '../../../../core/helper/objHelper';
    import {BlacklistService} from '../../../../core/services/cookies/blacklist.service';
    import {CBLocalStorage} from '../../../../core/data/cb_group_enum';

    @Component({
        components:{
            CookieTable,
            CookieTableMobile,
            Expander
        }
    })
    export default class Settings extends Vue{
        @Prop() readonly config:any;
        @Prop({default: ""}) readonly textoVisaoGeralDePrivacidade:string;
        @Prop({default: []}) readonly Cookies:CustomCookie[];
        @Prop({default: false}) active:boolean;
        skip(){
            this.$emit('skip')
        }
        HandleCookie(event:{name:string, active:boolean}){
            localStorage.setItem(CBLocalStorage.Accept+"-"+event.name, event.active.toString());
            localStorage.setItem(CBLocalStorage.AcceptAll, "false");
        }
        mounted(){
            this.Active = localStorage.getItem(CBLocalStorage.AcceptAll) == "true";
        }

        blockPluginGroup(group:CustomCookie[]){
            // group.forEach(plugin=>{
            //     BlacklistService.block();
            // });
        }

        unblockPluginGroup(group:CustomCookie[]){
            group.forEach(plugin=>{
                BlacklistService.unblock();
            });
        }

        set Active(value:boolean){
            this.active = value;
            localStorage.setItem(CBLocalStorage.AcceptAll,this.active.toString());
           
            this.tableCookiesCategories.forEach(cat=>{
                localStorage.setItem(CBLocalStorage.Accept+"-"+cat.name, this.active.toString());
            })
        }
        get Active():boolean{
            return this.active;
        }
        get tableCookies():CustomCookie[] {
            return this.Cookies
        }
        get tableCookiesCategories():CustomCookie[]{
            let cookieCategories = this.Cookies.map((x)=>x.grupo);
            return removeDuplicates(cookieCategories,'nome');
        }
    }
</script>


<style lang="scss" scoped>  
    @import "../../../../assets/styles/Modal/index.scss";
    .Accordion {
        overflow: hidden;
        margin: 20px 10px;
    }
    label{
        font-size: 15px;
        margin: 0;
        text-transform: uppercase;
        font-weight: 500;
    }
    .check{
            border: 2px solid #FFFFFF;
        cursor: pointer;
        position: relative;
        margin: auto;
        width: 40px;
        height: 40px;
        -webkit-tap-highlight-color: transparent;
        transform: translate3d(0,0,0);
        display: inline-block;
        position: relative;
        flex: 0 0 18px;
        box-sizing: content-box;
        width: 18px;
        height: 18px;
        line-height: 0;
        white-space: nowrap;
        cursor: pointer;
        vertical-align: bottom;
        padding: 11px;
        &:before{
            content: "";
            position: absolute;
            top: -15px;
            left: -15px;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: rgba(#223254,.03);
            opacity: 0;
            transition: opacity .2s ease;
            }
        svg{

            position: relative;
            z-index: 1;
            fill: none;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke: #C8CCD4;
            stroke-width: 1.5;
            transform: translate3d(0,0,0);
            transition: all .2s ease;
            path{
            stroke-dasharray: 60;
            stroke-dashoffset: 0;
            }
            polyline {
            stroke-dasharray: 22;
            stroke-dashoffset: 66;
            }
        }
        &:hover {
            &:before{
            opacity: 1;
            }
            svg{
            stroke: #4285F4;
            
            }
        }
    }

    .cbx:checked + .check{
        svg{
            width: 20px;
            height: 20px;
            stroke: #4285F4;
            path{

                stroke-dashoffset: 60;
                transition: all .3s linear;
            }
            polyline{

                stroke-dashoffset: 42;
                transition: all .2s linear;
                transition-delay: .15s;
            }
        }
    }

</style>