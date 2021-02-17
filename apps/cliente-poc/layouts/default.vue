<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        :mini-variant="miniVariant"
        :clipped="clipped"
        fixed
        app
      >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="clipped"
      absolute
      fixed
      app
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      
      <v-toolbar-title v-text="title" />

      <v-spacer></v-spacer>
      <NuxtLink NuxtLink to="/">
        <v-btn icon>
          <v-icon>mdi-logout-variant</v-icon>
        </v-btn>
      </NuxtLink>
     
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: true,
      items: [
        {
          icon: 'mdi-chart-bubble',
          title: 'Instalação',
          to: '/dashboard'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Configurar Preferências',
          to: '/preferencias'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Privacidade e Política de Cookies',
          to: '/privacidade'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Classificação de Cookies',
          to: '/classificacao-cookies'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Acompanhamento de Consentimento',
          to: '/acompanhamento-consentimento'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Gerenciador de Politica de Privacidade e uso de Cookies'
    }
  }
}
</script>
