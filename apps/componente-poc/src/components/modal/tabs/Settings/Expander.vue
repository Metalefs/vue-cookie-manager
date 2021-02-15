<template>
    <div class="Expander" :class="{'active' :open}" >
        <div class="Expander__trigger" 
            
            :class="open ? 'active':'beforeBorder'">
            <svg @click="open = !open" 
            class="Expander__trigger-Icon" 
            :class="{'open' :open}" 
            width="40" height="12" 
            stroke="#4a6e78">
                <polyline points="12,2 20,10 28,2" stroke-width="1" fill="none"></polyline>
            </svg>
            <a class="Expander__title" @click="open = !open">
                {{ title }}
                <span>{{ative?"habilitado":"desabilitado"}}</span>
            </a>
            <VueToggles
                    @click="ToogleActive()"
                    :value="active"
                    height="20"
                    width="38"
                    checkedText=""
                    uncheckedText=""
                    checkedBg="#28a745"
                    uncheckedBg="#e3e1e8"
                />
        </div>
        <transition :name="animation">
            <div class="Expander__body" v-show="open">
                <slot name="body"></slot>
            </div>
        </transition>
    </div>
</template>


<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import { Emit, Prop, Watch } from 'vue-property-decorator';
    import VueToggles from 'vue-toggles';

    @Component({
        components:{
            VueToggles
        }
    })
    export default class Expander extends Vue{
        @Prop({default: ""}) readonly Title:string = "";
        @Prop({default: false})Active:boolean;
        @Prop({default: "bottomToTop"}) readonly Animation:string = "";
        Open:boolean = false;
        @Emit('toogleActive')
        ToogleActive(){
            this.active = !this.active ;
            return {name:this.Title,active:this.Active}
        }

        get title():string{
            return this.Title;
        }
        get active():boolean{
            return this.Active;
        }
        get open():boolean{
            return this.Open ? true : false;
        }
        get animation():string{
            return this.Animation;
        }
        set active(value:boolean){
            this.Active = value;
        }
        set open(value:boolean){
            this.Open = value;
        }
    }
</script>


<style lang="scss" scoped>
    @import '../../../../assets/styles/Elements/expander.scss';
    .pos-abs{
        right:0px;
        position:absolute;
    }
</style>