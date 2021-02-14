<template>
    <div  v-if="TableCookies.length>1"> 
        <!-- <div class="cookie-categories">
            <button v-for="grupo in TableCookiesCategories" :key="grupo.nome" @click="CurrentGroup = grupo">{{grupo.nome}}</button>
        </div> -->
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
            <div class="tbl-content">
                <table cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                        <tr v-for="cookie in TableCookies" :key="cookie.name">
                            <td label="Nome">{{cookie.name}}</td>
                            <td label="Dominio">{{cookie.domain}}</td>
                            <td label="Expiração">{{cookie.expires}}</td>
                            <td label="Descrição">{{cookie.descricao}}</td>
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
    import { CustomCookie, TipoGrupoPlugin } from '../../../../../../../libs/shared/src/interfaces';
   
    @Component
    export default class CookieTable extends Vue{
        @Prop() readonly TableCookies:CustomCookie[] = [];

        private currentGroup: any;

        get TableCookiesCategories(){
            console.log(this.TableCookies?.map(x => x.grupo).sort().filter(function(item, pos, ary) {
                            return !pos || item?.nome != ary[pos - 1]?.nome;
                        }));
            return this.TableCookies?.map(x => x.grupo).sort().filter(function(item, pos, ary) {
                            return !pos || item?.nome != ary[pos - 1]?.nome;
                        });
        }
        set CurrentGroup(group){
            this.currentGroup = group;
        }
        get CurrentGroup(){
            return this.currentGroup;
        }
    }
</script>


<style lang="scss" scoped>
    @import '../../../../assets/styles/Tables/table.scss';
</style>