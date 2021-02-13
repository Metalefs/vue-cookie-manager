<template>
    <div  v-if="TableCookies.length>1"> 
        <div style="    border-radius: 2rem;">
            <div class="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                    <tr>
                    <th>Nome</th>
                    <th>Dominio</th>
                    <th>Expiração</th>
                    <th>Descricao</th>
                    </tr>
                </thead>
                </table>
            </div>
            <div class="tbl-content">
                <table cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                        <tr v-for="cookie in TableCookies" :key="cookie.name">
                            <td>{{cookie.name}}</td>
                            <td>{{cookie.domain}}</td>
                            <td>{{cookie.expires}}</td>
                            <td>{{cookie.descricao}}</td>
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
    import { CustomCookie } from '../../../../../../../libs/shared/src/interfaces';
   
    @Component
    export default class CookieTable extends Vue{
        @Prop() readonly TableCookies:CustomCookie[] =[] ;
    }
</script>


<style lang="scss" scoped>
    @import '../../../../assets/styles/Tables/table.scss';
</style>