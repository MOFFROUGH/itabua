<template>
  <v-app>
    <v-navigation-drawer temporary :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app>
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i" :to="item.to">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :clipped-left="clipped" class="cyan lighten-2">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up">
      </v-toolbar-side-icon>
      <!-- <v-spacer></v-spacer> -->
      <v-toolbar-items class="hidden-xs-only">
        <v-menu offset-y>
          <v-btn flat slot="activator">About</v-btn>
          <v-list>
            <v-list-tile v-for="item in About" :key="item.id" :to="item.to">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-menu offset-y>
          <v-btn flat slot="activator">Academics</v-btn>
          <v-list>
            <v-list-tile v-for="item in academics" :key="item.id" :to="item.to">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <v-spacer></v-spacer>

      <v-btn flat to="/">{{title}}</v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat to="/alumni">Alumni</v-btn>
        <v-btn flat to="/events">News</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content fluid>
      <router-view/>
    </v-content>

    <v-footer height="auto">
      <v-card  flat  tile  class="indigo lighten-1 white--text text-xs-center">
        <v-card-text>
          <v-btn  v-for="icon in icons" :key="icon"  icon class="mx-3 white--text">
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <!-- <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text> -->
        <v-card-text class="pt-0">
          <div class="title">
            Motto:
          </div>
          Read to Lead
        </v-card-text>
        <v-card-text class="pt-0">
          <div class="title">
            Vision:
          </div>
          Read to Lead
        </v-card-text>
        <v-card-text class="pt-0">
          <div class="title">
            Mission:
          </div>
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur
        </v-card-text>
        <v-card-text class="grey white--text">
          Designed and Developed by <a href="#" class="red--text">Moffat Munene</a> -  moffmu@gmail.com
        </v-card-text>
        <v-card-text class="accent white--text">
          &copy;{{new Date().getFullYear()}} — <strong>All Rights Reserved</strong>
        </v-card-text>
      </v-card>

    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {icon: 'bubble_chart', title: 'History', to: '/history'},
        {icon: 'bubble_chart', title: 'Management', to: '/management'},
        {icon: 'bubble_chart', title: 'Departments', to: '/departments'},
        {icon: 'bubble_chart', title: 'Results', to: '/results'},
        {icon: 'bubble_chart', title: 'Alumni', to: '/alumni'},
        {icon: 'bubble_chart', title: 'Achievers', to: '/achievers'}
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Itabua School',
      About: [
        {title: 'The school', id: 1, to: '/history'},
        {title: 'Management', id: 2, to: '/management'},
        {title: 'Departments', id: 3, to: '/departments'}
      ],
      academics: [
        {title: 'Results', id: 2, to: '/results'},
        {title: 'KCSE', id: 3, to: '/results'},
        {title: 'Performance', id: 4, to: '/results'},
        {title: 'Science Congress', id: 5, to: '/results'},
        {title: 'Alliance Exams', id: 6, to: '/results'},
        {title: 'Achievers', id: 7, to: '/achievers'}
      ],
      icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram'],
      rows: [
        {
          title: 'Itabua School',
          children: ['A school offering simplistic and nefficient education at affordable rates and oriented for the fu']
        },
        {
          title: 'Quick Links',
          children: ['TSC', 'KNUT', 'KUPPET', 'KUCCPS']
        },
        {
          title: 'Visit',
          children: ['Alumni', 'Departments', 'Results', 'Management']
        }
      ]
    }
  },
  name: 'App'
}
</script>
<style>
#brand {
  cursor: pointer;
}
</style>
