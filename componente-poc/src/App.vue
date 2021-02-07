
<template>
  <div id="app">
    <button class="show-modal" @click="toggleModal()">Privacidade</button>
    <modal v-if="modal.isOpen" :has-mask="modal.hasMask" :can-click-mask="modal.canClickMask" :has-x="modal.hasX" @toggle="toggleModal">
      <h3 slot="header">PORTNET-LGPD/POC</h3>
      <article slot="body" v-cloak>
        <section>
          <p>Aplicação desenvolvida com VueJS.</p>
          <p>Implementado via script unico, sem dependencias externas. Tamanho aproximado de 100kb e 37kb com GZIP </p>
          <p><button class="accent" @click="skip(1)">Próximo</button></p>
          <p><label><input type="checkbox" v-model="showDots" /> Exibir marcações</label></p>
          <p>
            <b>movimento</b><br />
            <label><input type="radio" v-model="orientation" value="row" /> horizontal</label><br />
            <label><input type="radio" v-model="orientation" value="column" /> vertical</label>
          </p>
        </section>
        <section>
          <div>
            <h3>Step 2:</h3>
            <p>Desafios restantes: </p>
            <ol>
              <li>Desenvolver GESTOR DE COOKIES</li>
              <li>Desenvolver gerador de scripts</li>
              <li>Desenvolver identificação única do cliente</li>
            </ol>
            <p><button class="primary" @click="goToStep(5)">Final</button></p>
            <p><button class="primary" @click="toggleModal">Fechar</button></p>
            <p><button class="primary" @click="skip(1)">Próximo</button></p>
          </div>
        </section>
        <section>
          <h3>Step 4:</h3>
          <p><button @click="reset()">Reset</button></p>
          <p><button class="primary" @click="skip(1)">Próximo</button></p>
        </section>
        <section>
          <h3>Step 5: </h3>
          <p><button class="primary" @click="toggleModal">Fechar</button></p>
        </section>
      </article>
    <footer slot="footer">
      <div class="forward-actions">
<!--         <button class="secondary skip" :disabled="isLastStep" v-show="!isLastStep" @click="skip(2)">Skip</button> -->
        <button class="primary next" :disabled="isLastStep" v-show="!isLastStep" @click="skip(1)">próximo</button>
        <button class="accent save"  @click="finish">fechar</button>
      </div>
      
      <div class="back-actions">
        <button class="secondary cancel prev" :disabled="isFirstStep" xv-show="!isFirstStep" @click="skip(-1)">anterior</button>
      </div>
    </footer>
    </modal>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  data() {
    return {
    modal: {
      isOpen: false,
      hasMask: true,
      canClickMask: true,
      hasX: false
    },
    step: 1,
    max: 1,
    showDots: true,
    orientation: 'row',
    // xray: 'hidden'
    }
  },
  computed: {
    isFirstStep: function(){
      return (this.step === 1)
    },
    isLastStep: function(){
      return (this.step === this.max)
    },
    hasDots: function(){
      return (this.max > 1 && this.showDots)
    },
    x_multiplier: function(){
      return (this.orientation === 'row' ? -1 : 0)
    },
    y_multiplier: function(){
      return (this.orientation === 'row' ? 0 : -1)
    },
    axis: function() {
      return (this.orientation === 'row' ? 'row' : 'column')
    },
    axisReverse: function() {
      return (this.orientation === 'row' ? 'row-reverse' : 'column-reverse')
    },
    cross: function() {
      return (this.orientation === 'row' ? 'column' : 'row')
    },
    crossReverse: function() {
      return (this.orientation === 'row' ? 'column-reverse' : 'row-reverse')
    },
    nextIcon: function() {
      return (this.orientation === 'row' ? 'fa-arrow-right' : 'fa-arrow-down')
    },
    backIcon: function() {
      return (this.orientation === 'row' ? 'fa-arrow-left' : 'fa-arrow-up')
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
          self.max = self.$sections.length
          self.goToStep(step)
        }, 1)
      }
    },
    setCssVars: function(){
      this.$el.style.setProperty('--x', (((this.step * 100) - 100) * this.x_multiplier) + '%')
      this.$el.style.setProperty('--y', (((this.step * 100) - 100) * this.y_multiplier) + '%')
      this.$el.style.setProperty('--axis', this.axis)
      this.$el.style.setProperty('--axis-reverse', this.axisReverse)
      this.$el.style.setProperty('--cross', this.cross)
      this.$el.style.setProperty('--cross-reverse', this.crossReverse)
      // this.$el.style.setProperty('--vision', this.xray)
    },
    goToStep: function(step){
      this.step = step > this.max ? this.max : step < 1 ? 1 : step
      this.currentSection = this.$sections[this.step-1]
      this.$sections.forEach(function(section){
        section.classList.remove('current')
      })
      this.currentSection.classList.add('current')
      this.currentSection.scrollTop = 0
      this.setCssVars()
    },
    skip: function(step){
      this.step+=step
      this.goToStep(this.step)
    },
    reset: function(){
      this.goToStep(1)
    },
    finish: function(){
      this.toggleModal()
    }
  },
  components: {
    Modal
  }
}
</script>

<style lang="scss">
  @import "./App.scss";
</style>
