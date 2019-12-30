<template>
  <div b-container class="container-activities">
    <b-row class="header-title">
      <b-col class="col-text text-left" offset="1">
        <h2>Past and Present Activities</h2>
      </b-col>
    </b-row>
    <activity-section>
      <template v-for="(activity,index) in activities">
      <img class="activity" v-bind:key="index" v-bind:src="getImgUrl(activity.img)"/>
      </template>
    </activity-section>
  </div>
</template>

<script>
export default {
  name: 'activities',
  components: {},
  methods: {
    getImgUrl(pic) {
      return require('../assets/'+pic)
    }
  },
  data() {
    return {
      activities: [
        {
          name: 'Climbing',
          img: 'logo.png',
          description: ''
        },
        {
          name: 'Traveling',
          img: 'me.jpg',
          description: ''
        },
        {
          name: 'Hackathons',
          img: 'me.jpg',
          description: ''
        },
        {
          name: 'Volunteering',
          img: 'me.jpg',
          description: ''
        },
        {
          name: 'Honors Peer Mentor',
          img: 'me.jpg',
          description: ''
        },
        {
          name: 'Baking',
          img: 'me.jpg',
          description: ''
        }
      ]
    }
  }
}
</script>

<style scoped>

.container-activities {
  background-image: linear-gradient(to bottom right, #b5d0eb, #93b1cf);
}

.activity-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 80rem;
  margin: 5rem auto;
  padding: 0 5rem;
}

.activity {
  max-height: 300px;
  object-fit: cover;
  border-radius: 0.75rem;
}

</style>
