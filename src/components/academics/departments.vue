<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex>
        <panel title="Itabua School- Departments">
            <v-card>
              <v-container fluid v-bind="{ [`grid-list-${size}`]: true }">
                <v-layout row wrap>
                  <v-flex  xl3  md4  sm6  xs12  v-for="(image,i) in depts"  :key="i">
                    <div class="pa-1 ma-1 " style="border: solid green 3px">
                      <v-card-media @click="department(image.name)" :src="image.src"  height="300px"  class="ma-1 dept">
                      </v-card-media>
                      <v-card-title primary-title>
                        <v-layout row wrap>
                          <v-flex xs12>
                            <hr class="orange"/>
                            <div>
                              <h3 class="display-1 mb-0 dept" @click="department(image.name)">{{image.name}}</h3>
                              <div>
                                Headed by: <span class="title">{{image.position}}</span>
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
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      depts: [
        {src: 'http://htorex.com/apiimages/static/slider/htsimg3.jpg', name: 'Maths', to: '/departments/maths', position: 'Mr Ngure'},
        {src: 'http://htorex.com/apiimages/static/slider/htsimg4.jpg', name: 'Science', to: '/departments/maths', position: 'Mrs. Njiru'},
        {src: 'http://htorex.com/apiimages/static/slider/htsimg1.jpg', name: 'Humanities', to: '/departments/maths', position: 'Mr. Njeru'},
        {src: 'http://htorex.com/apiimages/static/slider/htsimg2.jpg', name: 'Technical', to: '/departments/maths', position: 'Miss. Nyaga'}
      ],
      size: 'md'
    }
  },
  methods: {
    department (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="css">
.dept{
  cursor: pointer;
}
</style>
