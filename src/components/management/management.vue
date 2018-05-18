<template>
  <v-container fluid>
    <panel title="BoG">
      <v-card>
        <v-container fluid v-bind="{ [`grid-list-${size}`]: true }">
          <v-layout row wrap>
            <v-flex  xl3  md4  sm6  xs12  v-for="(image,i) in bog"  :key="i">
              <div class="pa-1 ma-1" style="border: solid green 3px">
                <v-card-media  :src="image.src"  height="300px"  class="ma-1">
                </v-card-media>
                <v-card-title primary-title>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <hr class="orange"/>
                      <div>
                        <h3 class="display-1 mb-0">{{image.name}}</h3>
                        <div>
                          <span class="title">{{image.position}}</span>
                          <br />
                          <span class="caption">Since {{image.since}}</span>
                        </div>
                      </div>
                    </v-flex>
                  </v-layout>
                </v-card-title>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </panel>
    <panel title="PTA">
      <v-card>
        <v-container fluid v-bind="{ [`grid-list-${size}`]: true }">
          <v-layout row wrap>
            <v-flex xl3  md4  sm6  xs12  v-for="(image,i) in pta"  :key="i">
              <div class="pa-1 ma-1" style="border: solid green 3px">
                <v-card-media  :src="image.src"  height="300px"  class="ma-1">
                </v-card-media>
                <v-card-title primary-title>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <hr class="orange"/>
                      <div>
                        <h3 class="display-1 mb-0">{{image.name}}</h3>
                        <div>
                          <span class="title">{{image.position}}</span>
                          <br />
                          <span class="caption">Since {{image.since}}</span>
                        </div>
                      </div>
                    </v-flex>
                  </v-layout>
                </v-card-title>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </panel>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      bog: [
        {src: 'http://htorex.com/apiimages/static/slider/htsimg3.jpg', title: `mang'u maths Contest`, name: 'Michael Kungu', position: 'Chair', since: '2017'},
        {src: 'http://htorex.com/apiimages/static/slider/htsimg4.jpg', title: 'Science Congress', name: 'Mr. Kariuki', position: 'Secretary', since: '2017'},
        {src: 'http://htorex.com/apiimages/static/slider/htsimg1.jpg', title: '34th Prize giving Day', name: 'Ann Mercy', position: 'Member', since: '2017'},
        {src: 'http://htorex.com/apiimages/static/slider/htsimg2.jpg', title: 'KCSE 2017 Results', name: 'James Maina', position: 'Member', since: '2017'}
      ],
      pta: [
        {src: 'http://htorex.com/apiimages/static/slider/htsimg3.jpg', title: `mang'u maths Contest`, name: 'Daisy Mucheni', position: 'Chair', since: '2017'},
        {src: 'http://htorex.com/apiimages/static/slider/htsimg4.jpg', title: 'Science Congress', name: 'Anabel Mruti', position: 'Parent', since: '2017'},
        {src: 'http://htorex.com/apiimages/static/slider/htsimg1.jpg', title: '34th Prize giving Day', name: 'Mr. Njagi', position: 'Teacher', since: '2017'},
        {src: 'http://htorex.com/apiimages/static/slider/htsimg2.jpg', title: 'KCSE 2017 Results', name: 'Nancy', position: 'Teacher', since: '2017'}
      ],
      size: 'md'
    }
  }
}
</script>

<style lang="css">
</style>
