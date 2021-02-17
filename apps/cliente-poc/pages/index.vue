<template>
  <v-app class="back">
     <main>
       <v-container fluid fill-height class="loginOverlay px-0">
          <v-layout  align-center justify-start>
            <v-flex xs12 sm4 elevation-6  >
              <v-card align-center justify-start  style="height:100vh">
                <v-card-text class="pt-4">
                  <v-card-title>
                      <h1 class="text-heading">Autenticação</h1>
                      <p class="text-caption">Ao realizar login ou cadastro, você concorda com os <a href="">termos de serviço</a></p>
                  </v-card-title>
                  <NuxtLink to="/dashboard"  :class=" { 'pa-3 ma-3 blue darken-4 white--text' : valid, disabled: !valid }">
                    <v-btn
                    class="pa-3 ma-3"
                    rounded
                    outlined
                    color="primary"
                    dark>Cadastro</v-btn>
                  </NuxtLink>
                  <NuxtLink to="/dashboard"  :class=" { 'pa-3 ma-3 blue darken-4 white--text' : valid, disabled: !valid }">
                    <v-btn
                    class="pa-3 ma-3"
                    rounded
                    outlined
                    color="primary"
                    dark>Cadastro com gmail</v-btn>
                  </NuxtLink>
                  <v-divider></v-divider>
                  <div>
                      <v-form v-model="valid" ref="form">
                        <v-text-field
                          label="Insira o seu e-mail"
                          v-model="email"
                          :rules="emailRules"

                          prepend-icon="mdi-email"
                          required
                        ></v-text-field>
                        <v-text-field
                          label="Insira a sua senha"
                          v-model="password"
                          min="8"
                          :type="e1 ? 'password' : 'text'"
                          :rules="passwordRules"
                          prepend-icon="mdi-eye"
          
                          counter
                          required
                        ></v-text-field>
                        <v-layout justify-space-between>
                          <div></div>
                          <a href="">Esqueci a senha</a>
                        </v-layout>
                        <v-layout justify-space-between>
                           <NuxtLink to="/dashboard"  :class=" { 'blue darken-4 white--text' : valid, disabled: !valid }">
                             <v-btn
                              color="primary"
                              depressed
                              outlined
                              x-large dark>Login</v-btn>
                          </NuxtLink>
                        </v-layout>
                      </v-form>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
       </v-container>
     </main>
   </v-app>
</template>

<script>
export default {
  layout: 'authentication',
  props: {
    
  },
 data () {
    return {
        valid: false,
        e1: false,
        password: '',
        passwordRules: [
            (v) => !!v || 'Senha obrigatória',
        ],
        email: '',
        emailRules: [
            (v) => !!v || 'E-mail obrigatório',
            (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
    }
 },
 methods: {
    submit () {
        if (this.$refs.form.validate()) {
            this.$refs.form.$el.submit()
        }
    },
    clear () {
        this.$refs.form.reset()
    }
  },
  head () {
    const title = 'Autenticação'
    return {
      title
    }
  }
}
</script>

<style scoped>
  h1 {
    font-size: 20px;
  }
  .px-0{
    padding-right: 0;
    padding-left: 0;
  }
  .loginOverlay{
    height:100vh;
  }
  #inspire {
    background: none;
  }
</style>
