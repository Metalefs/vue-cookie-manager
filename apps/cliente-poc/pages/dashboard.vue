<template>

  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="12" align-center justify-center>
     <v-toolbar class="pt-5 grey darken-3">
        <v-toolbar-items>
          <v-toolbar-title class="white--text">
              <h4>Instale o Cookie ManagerScript</h4>
          </v-toolbar-title>
        </v-toolbar-items>
      </v-toolbar>
      <v-card>
        <v-card-subtitle class="headline">
          Obtenha o código!
        </v-card-subtitle>
        <v-card-text>
          <p>Adicione esse script no topo do seu site, logo após a tag &lt;head&gt;</p>
          <div class="script-container">
            <code class="">
              &lt;script type='text/javascript' src="https://seguranca.portnet.com.br/cookieManager.js" id="cb_lgpd_portnet" cb_id="teste"&gt;&lt;/script&gt;
            </code>
          </div>
          
        </v-card-text>
        <v-card-actions slot="center">
          <!-- <v-spacer /> -->
          <v-btn
            color="primary"
            nuxt
            to="/"
          >
            Continuar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>

<style lang="scss" scoped>
  .script{
    &-container{
      padding:32px;
      background: #f7fbff;
    }
    &-text{
      color:red;
    }
  }
</style>