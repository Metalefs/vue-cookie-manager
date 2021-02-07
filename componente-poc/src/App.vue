<template>
  <div id="security-policy">
    <button  v-if="!modal.isOpen" class="expand show-modal from from-contents" @click="toggleModal()">
      <div class="avatar show-modal-icon"></div>
      <p class="show-modal-text">Privacidade</p>
    </button>

    <modal v-if="modal.isOpen" :has-mask="modal.hasMask" :can-click-mask="modal.canClickMask" :has-x="modal.hasX" @toggle="toggleModal">

      <div class="tabs" slot="header">
        <ul class="lg" slot="header">
          <li @click="goToStep(1)"> 
            <a class="btn btn-default"  v-bind:class="{ active: this.config.step == 1 }" title="Settings"> Settings </a>
          </li>
          <li @click="goToStep(2)" style=""> 
            <a class="btn btn-default"  v-bind:class="{ active: this.config.step == 2 }" title="Privacy pоlicy"> Privacy pоlicy </a>
          </li>
          <li @click="goToStep(3)" style=""> 
            <a class="btn btn-default"  v-bind:class="{ active: this.config.step == 3 }" title="Cооkie declaration"> Cооkie declaration </a>
          </li>
          <li @click="goToStep(4)" style=""> 
            <a class="btn btn-default"  v-bind:class="{ active: this.config.step == 4 }" title="Data Request Form"> Data Request Form </a>
          </li>
        </ul>
      </div>

      <article slot="body" v-cloak>
        <section>
          <Settings :config="config" @skip="skip(1)"></Settings>
        </section>
        <section>
          <PrivacyPolicy></PrivacyPolicy>
          <p><button class="primary" @click="goToStep(5)">Final</button></p>
          <p><button class="primary" @click="toggleModal">Fechar</button></p>
          <p><button class="primary" @click="skip(1)">Próximo</button></p>
        </section>
        <section>
          <CookieDeclaration></CookieDeclaration>
          <p><button @click="reset()">Reset</button></p>
          <p><button class="primary" @click="skip(1)">Próximo</button></p>
        </section>
        <section>
          <DataRequestForm></DataRequestForm>
          <p><button class="primary" @click="toggleModal">Fechar</button></p>
        </section>
      </article>

      <footer slot="footer">
        <!-- <div class="forward-actions">
        </div> -->
        <!-- <div class="back-actions">
          <button class="secondary cancel prev" :disabled="isFirstStep" xv-show="!isFirstStep" @click="skip(-1)">anterior</button>
        </div> -->
        <button class="forward-actions accent save"  @click="finish">Fechar</button>
      </footer>

    </modal>
  </div>

</template>

<script>
import Modal from './components/Modal.vue';
import Settings from './components/Settings.vue';
import PrivacyPolicy from './components/PrivacyPolicy.vue';
import CookieDeclaration from './components/CookieDeclaration.vue';
import DataRequestForm from './components/DataRequestForm.vue';

export default {
  components: {
    Modal,
    Settings,
    PrivacyPolicy,
    CookieDeclaration,
    DataRequestForm
  },
  data() {
    return {
      modal: {
        isOpen: false,
        hasMask: true,
        canClickMask: true,
        hasX: false
      },
      config :{
        step: 1,
        max: 1,
        showDots: true,
        orientation: 'row',
        // xray: 'hidden'
      }
    }
  },
  computed: {
    isFirstStep: function(){
      return (this.config.step === 1)
    },
    isLastStep: function(){
      return (this.config.step === this.config.max)
    },
    hasDots: function(){
      return (this.config.max > 1 && this.config.showDots)
    },
    x_multiplier: function(){
      return (this.config.orientation === 'row' ? -1 : 0)
    },
    y_multiplier: function(){
      return (this.config.orientation === 'row' ? 0 : -1)
    },
    axis: function() {
      return (this.config.orientation === 'row' ? 'row' : 'column')
    },
    axisReverse: function() {
      return (this.config.orientation === 'row' ? 'row-reverse' : 'column-reverse')
    },
    cross: function() {
      return (this.config.orientation === 'row' ? 'column' : 'row')
    },
    crossReverse: function() {
      return (this.config.orientation === 'row' ? 'column-reverse' : 'row-reverse')
    },
    nextIcon: function() {
      return (this.config.orientation === 'row' ? 'fa-arrow-right' : 'fa-arrow-down')
    },
    backIcon: function() {
      return (this.config.orientation === 'row' ? 'fa-arrow-left' : 'fa-arrow-up')
    },
    
  },
  watch: {
    orientation: 'setCssVars',
    // xray: 'setCssVars'
  },
  methods: {
    toggleModal: function(step) {
      step = step || 1
      this.modal.isOpen = !this.modal.isOpen
      if(this.modal.isOpen) {
        let self = this
        setTimeout(function(){
          self.$sections = self.$el.querySelectorAll('section')
          self.config.max = self.$sections.length
          self.goToStep(step)
        }, 1)
      }
    },
    setCssVars: function(){
      this.$el.style.setProperty('--x', (((this.config.step * 100) - 100) * this.x_multiplier) + '%')
      this.$el.style.setProperty('--y', (((this.config.step * 100) - 100) * this.y_multiplier) + '%')
      this.$el.style.setProperty('--axis', this.axis)
      this.$el.style.setProperty('--axis-reverse', this.axisReverse)
      this.$el.style.setProperty('--cross', this.cross)
      this.$el.style.setProperty('--cross-reverse', this.crossReverse)
      // this.$el.style.setProperty('--vision', this.xray)
    },
    goToStep: function(step){
      this.config.step = step > this.config.max ? this.config.max : step < 1 ? 1 : step
      this.currentSection = this.$sections[this.config.step-1]
      this.$sections.forEach(function(section){
        section.classList.remove('current')
      })
      this.currentSection.classList.add('current')
      this.currentSection.scrollTop = 0
      this.setCssVars()
    },
    skip: function(step){
      this.config.step+=step
      this.goToStep(this.config.step)
    },
    reset: function(){
      this.goToStep(1)
    },
    finish: function(){
      this.toggleModal()
    }
  }
}
</script>

<style lang="scss">
  @import "./styles/App.scss";
</style>
