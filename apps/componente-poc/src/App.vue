<template>
  <div id="security-policy" v-if="ativo">
    <div
      :class="{ in: !bar.isOpen }"
      id="cookie-law-info-again"
      @click="toggleModalBar()"
    >
      <span id="cookie_hdr_showagain">Privacy &amp; Cookies Policy</span>
    </div>

    <div
      :class="{ transparent: modal.isOpen, out: !bar.isOpen }"
      id="cookie-law-info-bar"
      data-nosnippet="true"
      data-cli-style="cli-style-v2"
      style="
        background-color: rgb(12, 12, 12);
        color: rgb(255, 255, 255);
        font-family: Arial, Helvetica, sans-serif;
        bottom: 0px;
        position: fixed;
      "
    >
      <span>
        <div class="cli-bar-container cli-style-v2">
          <div class="avatar show-modal-icon"></div>
          <div class="cli-bar-message">
            {{ TextoBarraModal }}
            <a
              style="color: #f36028"
              href="https://www.portnet.com.br/politica-de-privacidade/"
              target="_blank"
              >Política de Privacidade.
            </a>
          </div>
          <div class="cli-bar-btn_container">
            <a
              role="button"
              @click="toggleModal()"
              tabindex="0"
              class="cli_settings_button"
              style="margin: 0px 10px 0px 5px; color: rgb(255, 255, 255)"
              >Gestão de cookies</a
            >
            <a
              role="button"
              @click="toggleModalBar()"
              tabindex="0"
              data-cli_action="accept"
              id="cookie_action_close_header"
              class="medium cli-plugin-button cli-plugin-main-button cookie_action_close_header cli_action_button"
              style="
                display: inline-block;
                color: rgb(255, 255, 255);
                background-color: rgb(243, 96, 40);
              "
              >Aceitar</a
            >
          </div>
        </div>
      </span>
    </div>

    <modal
      :class="modal.isOpen ? 'in' : 'out'"
      :has-mask="modal.hasMask"
      :can-click-mask="modal.canClickMask"
      :has-x="modal.hasX"
      @toggle="toggleModal"
    >
      <div class="tabs" slot="header">
        <ul class="lg" slot="header">
          <li @click="goToStep(1)">
            <a
              class="btn btn-default"
              v-bind:class="{ active: this.config.step == 1 }"
              title="Settings"
            >
              Configurações
            </a>
          </li>
          <li @click="goToStep(2)" style="">
            <a
              class="btn btn-default"
              v-bind:class="{ active: this.config.step == 2 }"
              title="Privacy pоlicy"
            >
              Politica de Privacidade
            </a>
          </li>
          <li @click="goToStep(3)" style="">
            <a
              class="btn btn-default"
              v-bind:class="{ active: this.config.step == 3 }"
              title="Cооkie declaration"
            >
              Declaração de Uso de Cookies
            </a>
          </li>
          <li @click="goToStep(4)" style="">
            <a
              class="btn btn-default"
              v-bind:class="{ active: this.config.step == 4 }"
              title="Data Request Form"
            >
              Formulário de Requisição de Dados
            </a>
          </li>
        </ul>
      </div>

      <article slot="body" v-cloak>
        <section>
          <Settings
            :Cookies="ComputedCookies"
            :textoVisaoGeralDePrivacidade="TextoVisaoGeral"
            :config="config"
            @skip="skip(1)"
          ></Settings>
        </section>
        <section>
          <PrivacyPolicy :Texto="TextoPrivacy"></PrivacyPolicy>
        </section>
        <section>
          <CookieDeclaration :Texto="TextoCookie"></CookieDeclaration>
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
import { Component, Vue, Watch } from "vue-property-decorator";
import Modal from "./components/modal/Modal.vue";
import Settings from "./components/modal/tabs/Settings/Settings.vue";
import PrivacyPolicy from "./components/modal/tabs/PrivacyPolicy.vue";
import CookieDeclaration from "./components/modal/tabs/CookieDeclaration.vue";
import DataRequestForm from "./components/modal/tabs/DataRequestForm.vue";
import * as service from "./core/services/componente.service";
import { getAllCookies } from "./core/services/cookies/cookie.service";
import { CustomCookie } from "../../../libs/shared/src/interfaces";
import moment from "moment";

@Component({
  components: {
    Modal,
    Settings,
    PrivacyPolicy,
    CookieDeclaration,
    DataRequestForm,
  },
})
export default class App extends Vue {
  private TextoBarraModal: string = "";
  private ativo = true;
  private TextoCookieDeclaration: string = "";
  private TextoPrivacyPolicy: string = "";
  private TextoVisaoGeralDePrivacidade: string = "";
  private cookies: CustomCookie[] = [];

  bar: {
    isOpen: boolean;
  } = {
    isOpen: true,
  };

  modal: {
    isOpen: boolean;
    hasMask: boolean;
    canClickMask: boolean;
    hasX: boolean;
  } = {
    isOpen: false,
    hasMask: true,
    canClickMask: true,
    hasX: false,
  };

  config: {
    step: number;
    max: number;
    showDots: boolean;
    orientation: string;
  } = {
    step: 3,
    max: 1,
    showDots: true,
    orientation: "row",
  };

  constructor() {
    super();
  }

  mounted() {
    var result = service.getStatusCliente();
    this.ativo = result == 0 ? false : true;
    service.getTextoBarraComponente().then((x): any => {
      this.TextoBarra = x.data;
    });
    service.getVisaoGeralDePrivacidade().then((x): any => {
      this.TextoVisaoGeral =
        x.data.length >= 445 ? x.data.substring(0, 445) + "..." : x.data;
    });
    service.getCookieDeclaration().then((x): any => {
      this.TextoCookie = x.data;
    });
    service.getPrivacyPolicy().then((x): any => {
      this.TextoPrivacy = x.data;
    });
    getAllCookies().then((x) => {
      this.ComputedCookies = x.data as CustomCookie[];
      moment.locale("pt-br");

      this.ComputedCookies.forEach((x) => {
        x.expires = moment((x.expires as number) * 1000).fromNow();
      });
      console.log(this.ComputedCookies);
    });
  }

  get TextoBarra(): string {
    return this.TextoBarraModal;
  }
  get TextoVisaoGeral(): string {
    return this.TextoVisaoGeralDePrivacidade;
  }
  get TextoCookie(): string {
    return this.TextoCookieDeclaration;
  }
  get TextoPrivacy(): string {
    return this.TextoPrivacyPolicy;
  }
  get ComputedCookies(): CustomCookie[] {
    return this.cookies;
  }
  set TextoBarra(value: string) {
    this.TextoBarraModal = value;
  }
  set TextoVisaoGeral(value: string) {
    this.TextoVisaoGeralDePrivacidade = value;
  }
  set TextoCookie(value: string) {
    this.TextoCookieDeclaration = value;
  }
  set TextoPrivacy(value: string) {
    this.TextoPrivacyPolicy = value;
  }
  set ComputedCookies(value: CustomCookie[]) {
    this.cookies = value;
  }

  get isFirstStep(): boolean {
    return this.config.step === 1;
  }
  get isLastStep(): boolean {
    return this.config.step === this.config.max;
  }
  get hasDots(): boolean {
    return this.config.max > 1 && this.config.showDots;
  }
  get x_multiplier(): number {
    return this.config.orientation === "row" ? -1 : 0;
  }
  get y_multiplier(): number {
    return this.config.orientation === "row" ? 0 : -1;
  }
  get axis(): string {
    return this.config.orientation === "row" ? "row" : "column";
  }
  get axisReverse(): string {
    return this.config.orientation === "row" ? "row-reverse" : "column-reverse";
  }
  get cross(): string {
    return this.config.orientation === "row" ? "column" : "row";
  }
  get crossReverse(): string {
    return this.config.orientation === "row" ? "column-reverse" : "row-reverse";
  }
  get nextIcon(): string {
    return this.config.orientation === "row"
      ? "fa-arrow-right"
      : "fa-arrow-down";
  }
  get backIcon(): string {
    return this.config.orientation === "row" ? "fa-arrow-left" : "fa-arrow-up";
  }

  @Watch("orientation")
  onPropertyChanged() {
    this.setCssVars();
  }

  $sections: any;
  toggleModal(step: number) {
    step = step || 1;
    this.modal.isOpen = !this.modal.isOpen;
    if (this.modal.isOpen) {
      let self = this;
      setTimeout(function () {
        self.$sections = self.$el.querySelectorAll("section");
        self.config.max = self.$sections.length;
        self.goToStep(step);
      }, 1);
    }
  }
  toggleModalBar() {
    this.bar.isOpen = !this.bar.isOpen;
    if (this.bar.isOpen) {
      localStorage.setItem("security-policy-accept-all", "true");
    }
  }
  $el: any;
  setCssVars() {
    this.$el.style.setProperty(
      "--x",
      (this.config.step * 100 - 100) * this.x_multiplier + "%"
    );
    this.$el.style.setProperty(
      "--y",
      (this.config.step * 100 - 100) * this.y_multiplier + "%"
    );
    this.$el.style.setProperty("--axis", this.axis);
    this.$el.style.setProperty("--axis-reverse", this.axisReverse);
    this.$el.style.setProperty("--cross", this.cross);
    this.$el.style.setProperty("--cross-reverse", this.crossReverse);
  }
  currentSection: any;
  goToStep(step: number) {
    this.config.step =
      step > this.config.max ? this.config.max : step < 1 ? 1 : step;
    this.currentSection = this.$sections[this.config.step - 1];
    this.$sections.forEach(function (section: any) {
      section.classList.remove("current");
    });
    this.currentSection.classList.add("current");
    this.currentSection.scrollTop = 0;
    this.setCssVars();
  }
  skip(step: number) {
    this.config.step += step;
    this.goToStep(this.config.step);
  }
  reset() {
    this.goToStep(1);
  }
  finish() {
    this.toggleModal(0);
  }
}
</script>

<style lang="scss" scoped>
@import "./assets/styles/App.scss";
.cookie-law-info-again {
  background-color: rgb(12, 12, 12);
  color: rgb(255, 255, 255);
  position: fixed;
  font-family: Arial, Helvetica, sans-serif;
  width: auto;
  bottom: 0px;
  right: 100px;
  display: block;
}
</style>
