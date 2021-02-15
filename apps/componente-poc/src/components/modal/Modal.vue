<template>

    <transition name="modal">
      <div class="modal in">

        <div class="modal-mask" v-if="hasMask" @click="clickMask"></div>

        <div class="modal-wrapper">
          
          <div class="modal-header">
            <slot name="header">
              
            </slot>

            <button type="button" @click="clickX" class="cli-modal-close" id="cliModalClose">
              <svg class="" viewBox="0 0 24 24"><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"></path><path d="M0 0h24v24h-24z" fill="none"></path></svg>
              <span class="wt-cli-sr-only">Fechar</span>
            </button>
          </div>
          <div class="modal-body">
            <slot name="body">
              Body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              Footer
            </slot>
          </div>
        </div>
      </div>
    </transition>
  
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
      name: 'Modal',
      
      props: [
        'hasX',
        'hasMask',
        'canClickMask'
      ],
      methods: {
        clickX: function(){
          this.$emit('toggle')
        },
        clickMask: function(){
          if(this.canClickMask) {
            this.$emit('toggle')
          }
        }
      }
    });
</script>

<style scoped lang="scss">
  @import "../../assets/styles/Modal/index.scss";
  
</style>