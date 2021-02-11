<template>
  <div id="security-policy">
    <div :class="modal.isOpen ? 'transparent' : ''" id="cookie-law-info-bar" data-nosnippet="true" data-cli-style="cli-style-v2" style="background-color: rgb(12, 12, 12); color: rgb(255, 255, 255); font-family: Arial, Helvetica, sans-serif; bottom: 0px; position: fixed; display: block;">
      <div class="avatar show-modal-icon"></div>
      <span>
        <div class="cli-bar-container cli-style-v2">
          <div class="cli-bar-message">Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua experiência em nossos serviços, personalizar publicidade e recomendar conteúdo de seu interesse.  Caso queira personalizar os cookies basta clicar em Gestão de Cookies. 
            <a href="https://www.portnet.com.br/politica-de-privacidade/" target="_blank">Política de Privacidade. </a>
          </div>
          <div class="cli-bar-btn_container">
            <a role="button"  @click="toggleModal()"  tabindex="0" class="cli_settings_button" style="margin: 0px 10px 0px 5px; color: rgb(255, 255, 255);">Gestão de cookies</a>
            <a role="button" tabindex="0" data-cli_action="accept" id="cookie_action_close_header" class="medium cli-plugin-button cli-plugin-main-button cookie_action_close_header cli_action_button" style="display: inline-block; color: rgb(255, 255, 255); background-color: rgb(243, 96, 40);">Aceitar</a>
          </div>
        </div>
      </span>
    </div>

    <modal v-if="modal.isOpen" :has-mask="modal.hasMask" :can-click-mask="modal.canClickMask" :has-x="modal.hasX" @toggle="toggleModal">

      <div class="tabs" slot="header">
        <ul class="lg" slot="header">
          <li @click="goToStep(1)"> 
            <a class="btn btn-default"  v-bind:class="{ active: this.config.step == 1 }" title="Settings"> Configurações </a>
          </li>
          <li @click="goToStep(2)" style=""> 
            <a class="btn btn-default"  v-bind:class="{ active: this.config.step == 2 }" title="Privacy pоlicy"> Politica de Privacidade </a>
          </li>
          <li @click="goToStep(3)" style=""> 
            <a class="btn btn-default"  v-bind:class="{ active: this.config.step == 3 }" title="Cооkie declaration"> Declaração de Uso de Cookies </a>
          </li>
          <li @click="goToStep(4)" style=""> 
            <a class="btn btn-default"  v-bind:class="{ active: this.config.step == 4 }" title="Data Request Form"> Formulário de Requisição de Dados </a>
          </li>
        </ul>
      </div>

      <article slot="body" v-cloak>
        <section>
          <Settings :config="config" @skip="skip(1)"></Settings>
        </section>
        <section>
          <PrivacyPolicy></PrivacyPolicy>
        </section>
        <section>
          <CookieDeclaration></CookieDeclaration>
        </section>
        <section>
          <DataRequestForm></DataRequestForm>
        </section>
      </article>

      <footer slot="footer">
        <!-- <button class="forward-actions accent save"  @click="finish">Salvar</button> -->
      </footer>

    </modal>
  </div>

</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Modal from './components/Modal.vue';
import Settings from './components/Settings.vue';
import PrivacyPolicy from './components/PrivacyPolicy.vue';
import CookieDeclaration from './components/CookieDeclaration.vue';
import DataRequestForm from './components/DataRequestForm.vue';

@Component({
  components: {
    Modal,
    Settings,
    PrivacyPolicy,
    CookieDeclaration,
    DataRequestForm
  },
})
export default class App extends Vue {
  
  modal: {
    isOpen:boolean,
    hasMask:boolean,
    canClickMask:boolean,
    hasX:boolean
  } = {
    isOpen : false,
    hasMask : true,
    canClickMask : true,
    hasX : false,
  }

  config :{
    step: number,
    max: number,
    showDots: boolean,
    orientation: string,
  } = {
    step : 1,
    max : 1,
    showDots : true,
    orientation : 'row'
  }

  constructor(){
    super();
   
  }
 
  get isFirstStep(): boolean {
      return (this.config.step === 1);
  }
  get isLastStep(): boolean{
    return (this.config.step === this.config.max)
  }
  get hasDots(): boolean{
    return (this.config.max > 1 && this.config.showDots)
  }
  get x_multiplier() :number{
    return (this.config.orientation === 'row' ? -1 : 0)
  }
  get y_multiplier() :number{
    return (this.config.orientation === 'row' ? 0 : -1)
  }
  get axis() :string{
    return (this.config.orientation === 'row' ? 'row' : 'column')
  }
  get axisReverse() :string{
    return (this.config.orientation === 'row' ? 'row-reverse' : 'column-reverse')
  }
  get cross() :string{
    return (this.config.orientation === 'row' ? 'column' : 'row')
  }
  get crossReverse() :string{
    return (this.config.orientation === 'row' ? 'column-reverse' : 'row-reverse')
  }
  get nextIcon() :string{
    return (this.config.orientation === 'row' ? 'fa-arrow-right' : 'fa-arrow-down')
  }
  get backIcon() :string{
    return (this.config.orientation === 'row' ? 'fa-arrow-left' : 'fa-arrow-up')
  }

  @Watch('orientation')
  onPropertyChanged() {
    this.setCssVars();
  }

  $sections:any;
  toggleModal(step:number) {
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
  }
  $el:any;
  setCssVars(){
    this.$el.style.setProperty('--x', (((this.config.step * 100) - 100) * this.x_multiplier) + '%')
    this.$el.style.setProperty('--y', (((this.config.step * 100) - 100) * this.y_multiplier) + '%')
    this.$el.style.setProperty('--axis', this.axis)
    this.$el.style.setProperty('--axis-reverse', this.axisReverse)
    this.$el.style.setProperty('--cross', this.cross)
    this.$el.style.setProperty('--cross-reverse', this.crossReverse)
    // this.$el.style.setProperty('--vision', this.xray)
  }
  currentSection:any;
  goToStep(step:number){
    this.config.step = step > this.config.max ? this.config.max : step < 1 ? 1 : step
    this.currentSection = this.$sections[this.config.step-1]
    this.$sections.forEach(function(section:any){
      section.classList.remove('current')
    })
    this.currentSection.classList.add('current')
    this.currentSection.scrollTop = 0
    this.setCssVars()
  }
  skip(step:number){
    this.config.step+=step
    this.goToStep(this.config.step)
  }
  reset(){
    this.goToStep(1)
  }
  finish(){
    this.toggleModal(0)
  }
}
</script>

<style lang="scss">
 @import "./styles/App.scss";
</style>
