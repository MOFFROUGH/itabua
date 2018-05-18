<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12>
    <v-carousel lazy hide-delimiters transition="fade">
      <v-carousel-item v-for="(item,i) in highlightImages" v-bind:src="item.src" :key="i">
        <div class="entitle display-3 red--text">
          {{item.title}}
        </div>
      </v-carousel-item>
    </v-carousel>
    <panel title="Welcome to Itabua School">
      <v-layout row wrap>
        <v-flex sm12 md8>
          <div class="headline text-xs-center">
            About Itabua School
          </div>
          Founded by parents in the 90's, Itabua Day and Mixed Secondary School, stand out among many neighbouring county schools.
          <p>
            The motto of the School stands out
            <q>Read to lead</q>. It embodies the vision and mission of the school.
          </p>
          <p>
            Built on the values of honesty and transparency, the school aims at improving the livelihood of the locals, and transform the society and the country at large.
          </p>
        </v-flex>
        <v-flex sm12 md4>
          <div class="headline">
            Quick Overview
          </div>
          <p>
            1992 - School founded
          </p>
          <p>
            1997- First A grade for the school
          </p>
          <p>
            1999 - School admits over 20 girls in one class
          </p>
          <p>
            2006 - School get a double stream
          </p>
          <p>
            2011- School named Center of Excellence
          </p>
          <p>
            2012 - School tops county schools
          </p>
          <p>
            2014 - School awarded most improved in the county
          </p>
          <p>
            2016 - School wins third award of top school in a row
          </p>
        </v-flex>
      </v-layout>
    </panel>
    <panel title="Message from the Principal">
      <v-layout row wrap>
        <v-flex xs12 sm4>
          <v-card flat tile class="ma-1">
            <v-card-media height="250px" src='http://htorex.com/apiimages/static/slider/htsimg3.jpg'>
            </v-card-media>
            <v-card-title class="title">Mr. Kariuki - <span>Principal, Itabua School since 2011</span></v-card-title>
            <v-card-text>
              <v-icon size="16px">fa fa-envelope</v-icon>: principal@itabuaschool.sc.ke
            </v-card-text>
            <v-card-text>
              <v-icon size="16px">fa fa-phone</v-icon>:1234  +254 786 123456
            </v-card-text>
          </v-card>
          <!-- <img src="http://htorex.com/apiimages/static/slider/htsimg3.jpg" height="200px" /> -->
        </v-flex>
        <v-flex xs12 sm8>
          <div class="ma-1">
            Founded by parents in the 90's, Itabua Day and Mixed Secondary School, stand out among many neighbouring county schools.
            <p>
              The motto of the School stands out
              <q>Read to lead</q>. It embodies the vision and mission of the school.
            </p>
            <p>
              Built on the values of honesty and transparency, the school aims at improving the livelihood of the locals, and transform the society and the country at large.
            </p>
          </div>
        </v-flex>
      </v-layout>
    </panel>
  </v-flex>
</v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      highlightImages: [
        {src: 'http://htorex.com/apiimages/static/slider/htsimg3.jpg', title: `mang'u maths Contest`},
        {src: 'http://htorex.com/apiimages/static/slider/htsimg4.jpg', title: 'Science Congress'},
        {src: 'http://htorex.com/apiimages/static/slider/htsimg1.jpg', title: '34th Prize giving Day'},
        {src: 'http://htorex.com/apiimages/static/slider/htsimg2.jpg', title: 'KCSE 2017 Results'}
      ]
    }
  }
}
</script>

<style lang="css">
.entitle {
  position: absolute;
  top: 50px;
  background-color: lightblue;
  margin: 0 auto;
}
</style>
