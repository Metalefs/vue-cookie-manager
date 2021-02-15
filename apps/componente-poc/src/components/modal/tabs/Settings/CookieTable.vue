<template>
    <div class="cookie-table-wrap" v-if="TableCookies.length>1"> 
        <div class="cookie_categories"  v-if="TableCookiesCategories.length>1">
            <div v-for="grupo in TableCookiesCategories" :key="grupo.tipo" 
                @click="CurrentGroup = grupo"
                :class="{'cookie_active':CurrentGroup.tipo == grupo.tipo}"
                >
                {{grupo.nome}}
            </div>
        </div>
        <div class="cookie-table" style="border-radius: 2rem;">
            <div class="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                    <tr>
                    <th>Nome</th>
                    <th>Dominio</th>
                    <th>Expiração</th>
                    <th>Descrição</th>
                    </tr>
                </thead>
                </table>
            </div>
            <div class="tbl-content" >
                <table cellpadding="0" cellspacing="0" border="0">
                    <tbody >
                        <tr v-for="cookie in TableCookies" :key="cookie.name">
                            <td label="Nome"  v-if="isCurrentGroup(cookie)">{{cookie.name}}</td>
                            <td label="Dominio"  v-if="isCurrentGroup(cookie)">{{cookie.domain}}</td>
                            <td label="Expiração"  v-if="isCurrentGroup(cookie)">{{cookie.expires}}</td>
                            <td label="Descrição"  v-if="isCurrentGroup(cookie)">{{cookie.descricao}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import { Prop } from 'vue-property-decorator';
    import { CustomCookie, GrupoCookie, TipoGrupoPlugin } from '../../../../../../../libs/shared/src/interfaces';
   
    @Component
    export default class CookieTable extends Vue{
        @Prop() readonly TableCookies:CustomCookie[] = [];
        @Prop() readonly TableCookiesCategories:CustomCookie[] = [];
        private currentGroup: any = {nome:'Essencial',tipo:1};

        
        set CurrentGroup(group){
            this.currentGroup = group;
        }
        get CurrentGroup(){
            return this.currentGroup;
        }

        isCurrentGroup(cookie:CustomCookie):boolean{
            if(this.CurrentGroup != undefined)
                if(cookie?.grupo?.tipo == this.CurrentGroup?.tipo){
                    return true;
                }
            return false; 
        }
    }
</script>


<style lang="scss" scoped>
    @import '../../../../assets/styles/Tables/table.scss';
</style>