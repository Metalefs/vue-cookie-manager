<template>

    <transition name="modal">
      <div class="modal cli-modal.cli-blowup">

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

<script>
  export default {
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
  }
</script>

<style scoped lang="scss">
  [v-cloak] {
    display: none;
  }
  .cli-modal-close {
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;
      -webkit-appearance: none;
      width: 40px;
      height: 40px;
      padding: 0;
      border-radius: 50%;
      padding: 10px;
      background: transparent;
      border: none;
      min-width: 40px;
  }
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: grid;
    margin:auto;
    max-height: 60px;
    transition: max-height 0.15s ease-out;
    padding: 20px;
    &-mask {
      background: rgb(0 0 0 / 20%);
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
    }
    &-body{
      max-height: 50vh;
      overflow-y: scroll;
      position: relative;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 100%;
      pointer-events: auto;
      background-color: #fff;
      background-clip: padding-box;
      border-radius: .2rem;
      box-sizing: border-box;
      outline: 0;
      font-family: 'Open Sans',Helvetica,Arial,Lucida,sans-serif;
      & h4,h1{
        font-family: inherit;
        font-size: 16px;
        margin-bottom: 15px;
        margin: 10px 0;
      }
    }
    &-wrapper {
      position: relative;
      width: 65vw;
      // max-width: 60em;
      // min-width: 30em;
      max-height: 67vh;
      margin: auto;
      background: #fff;
      color: #333;
      flex-direction: var(--cross, column);
      border-radius: .2em;
      box-shadow: 0 0 0 1px rgba(0,0,0,.2), 0 1em 2em -1em;
      display: flex;
    }
    &-x {
      cursor: pointer;
      font-size: 2em;
      line-height: .5;
      opacity: .15;
      &:hover {
        opacity: .65;
      }
    }
    &-enter-active,
    &-leave-active {
      transition: opacity .25s
    }
    &-enter,
    &-leave-to {
      opacity: 0;
    }
    &-header{
      padding: 10px;
      position: relative;
      text-align: left;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 0 0 1px rgba(#000, .1);
      &:not(:empty) {
        padding: 1em;
      }
    }
  }
  .x-touch {
    align-items: center;
    align-self: center;
    cursor: pointer;
    display: flex;
    height: 50px;
    justify-content: center;
    margin-left: auto;
    width: 50px;
  }
  .x {
    color: #000000;
    background-color: #929292;
    border-radius: 10px;
    height: 20px;
    position: relative;
    width: 20px;
  }
  .x-touch:hover .x {
    color: #000000;
  }
  .line1 {
    color: #000000;
    height: 12px;
    position: absolute;
    transform: translateX(9px) translateY(4px) rotate(45deg);
    width: 2px;
  }
  .line2 {
    background: #000000;
    height: 12px;
    position: absolute;
    transform: translateX(9px) translateY(4px) rotate(-45deg);
    width: 2px;
  }
</style>