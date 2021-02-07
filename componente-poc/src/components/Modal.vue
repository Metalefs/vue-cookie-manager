<template>

    <transition name="modal">
      <div class="modal">

        <div class="modal-mask" v-if="hasMask" @click="clickMask"></div>

        <div class="modal-wrapper">
          
          <div class="modal-header">
            <slot name="header">
              
            </slot>
            <div class="x-touch"  @click="clickMask">
                <div class="x">
                  <div class="line1"></div>
                  <div class="line2"></div>
                </div>
            </div>
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
  [v-cloak] {
    display: none;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: grid;
    // align-items: center;
    // justify-content: center;
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
    }
    &-wrapper {
      position: relative;
      width: 65vw;
      max-width: 60em;
      min-width: 30em;
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