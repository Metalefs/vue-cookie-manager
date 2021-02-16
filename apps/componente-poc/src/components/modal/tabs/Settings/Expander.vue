<template>
    <div class="Expander" :class="{'active' :open}" >
        <div class="Expander__trigger" 
         @click="open = !open"
            :class="open ? 'active':'beforeBorder'">
            <div class="Expander__trigger_in">
                <a class="Expander__title" >
                    {{ title }}
                </a>
            </div>
            <div class="Expander__trigger_action" >
                <label :for="title">{{active?"habilitado":"desabilitado"}}</label>
                <button @click.stop="ToogleActive()"
                    :id="title">
                <VueToggles
                        
                        :value="active"
                        height="20"
                        width="38"
                        checkedText=""
                        uncheckedText=""
                        checkedBg="#28a745"
                        uncheckedBg="#e3e1e8"
                    />
                </button>
            </div>
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
        @Prop({default: ""}) readonly Title:string;
        @Prop({default: false})Active:boolean;
        @Prop({default: "bottomToTop"}) readonly Animation:string;
        Open:boolean = false;

        mounted(){
            if(localStorage.getItem("security-policy-accept-"+this.Title) == "true")
                this.Active = true;
        }

        @Emit('toogleActive')
        ToogleActive(){
            this.active = !this.active ;
            return {name:this.Title,active:this.active}
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