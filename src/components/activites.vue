<template>
  <div b-container class="container-activities">
    <b-row class="header-title">
      <b-col class="col-text text-left" offset="1">
        <h2>Past and Present Activities</h2>
      </b-col>
    </b-row>
    <b-col class="activity-section">
      <template v-for="(activity,index) in activities">
      <img class="activity" v-bind:key="index" v-bind:src="getImgUrl(activity.img)"/>
      </template>
    </b-col>
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
          img: 'climbing.jpg',
          description: ''
        },
        {
          name: 'Traveling',
          img: 'travel.jpg',
          description: ''
        },
        {
          name: 'Hackathons',
          img: 'hacking.jpg',
          description: ''
        },
        {
          name: 'Volunteering',
          img: 'volunteer.jpg',
          description: ''
        },
        {
          name: 'Golf',
          img: 'golf.jpg',
          description: ''
        },
        {
          name: 'Baking',
          img: 'pavlova.jpg',
          description: ''
        }
      ]
    }
  }
}
</script>

<style scoped>

.container-activities {
  background-image: linear-gradient(to bottom right, #A3CCFA, #5D83C2);
  padding-bottom: 20px;
}

.header-title {
  padding-top: 12px;
}

.activity-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 80rem;
  margin: auto;
  padding: 0 5rem;
}

.activity {
  max-height: 500px;
  min-width: 250px;
  width: auto;
  height: auto;
  object-fit: cover;
  border-radius: 0.75rem;
  padding: 5px;
}

</style>
