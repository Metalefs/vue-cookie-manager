<template>

    <transition name="modal">
      <div class="modal">
        <div class="modal-mask" v-if="hasMask" @click="clickMask"></div>
        <div class="modal-wrapper">
         <div class="modal-header">
            <slot name="header">
              Header
            </slot>
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
          <div class="modal__x" v-if="hasX" @click="clickX">&times;</div>
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
  :root {
  --accent: #8fd1f2;
}

[v-cloak] {
  display: none;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &-mask {
    background: rgba(#000,.65);
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
  &-wrapper {
    position: relative;
    width: 65vw;
    max-width: 60em;
    min-width: 30em;
    max-height: 65vh;
    height: 30em;
    background: #fff;
    color: #333;
    display: flex;
    flex-direction: var(--cross, column);
    border-radius: .2em;
    box-shadow: 0 0 0 1px rgba(0,0,0,.2), 0 1em 2em -1em;
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
}
.modal-body{
  overflow-y: scroll;
}


</style>