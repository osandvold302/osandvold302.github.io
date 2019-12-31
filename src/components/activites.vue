<template>
  <div b-container class="container-activities">
    <b-row class="header-title">
      <b-col class="col-text text-left" offset="1">
        <h2>Past and Present Activities</h2>
      </b-col>
    </b-row>
    <b-col class="activity-section col-centered">
      <template v-for="(activity,index) in activities">
      <b-col class="img-container align-self-center justify-content-md-center" v-bind:key="index+'contain'">
        <img class="activity" v-bind:key="index" v-bind:src="getImgUrl(activity.img)"/>
        <div class="overlay" v-bind:key="activity.description">
          {{ activity.description }}
        </div>
      </b-col>
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
          description: 'I started climbing in 2018 and have continued to boulder and top rope every week! Next semester I will be taking an Intermediate Climbing course and I\'m excited to see what new heights I\'ll reach!'
        },
        {
          name: 'Traveling',
          img: 'travel.jpg',
          description: 'In spring 2019 I had the opportunity to study abroad in Glasgow, Scotland. I traveled to many more countries and loved seeing the different architectures, sampling the local cuisine, and meeting people from diverse cultures. I am continuing to travel throughout the United States on the road and through the air.'
        },
        {
          name: 'Hackathons',
          img: 'hacking.jpg',
          description: 'Without hackathons, I\'m not sure where I would be today. From Missouri to the Netherlands, I have taken advantage of creative challenges and expanded my skills as a developer, business woman, and public speaker.'
        },
        {
          name: 'Volunteering',
          img: 'volunteer.jpg',
          description: 'For over two years, I have been a volunteer at the University of Iowa Hospitals and Clinics in the Child Psych inpatient unit. Each week I spend several hours tutoring students and helping them develop and maintain positive lifestyle behaviors and attitudes.'
        },
        {
          name: 'Golf',
          img: 'golf.jpg',
          description: 'Though not a very good golfer, I do find time to dust off my 9-iron and play a round or two each summer. I also like to spend the summer and fall biking on the beautiful Iowa trails.'
        },
        {
          name: 'Baking',
          img: 'pavlova.jpg',
          description: 'Baking pies and sweet treats has always been a passion of mine. Getting into the Great British Bake-Off certainly did not quell that dream inside of me to be a grand French pâtissière. Ah well, I\'ll continue to dream.'
        }
      ]
    }
  }
}
</script>

<style scoped>

.container-activities {
  border-top-width: .5px;
  border-top-color: #4b535e;
  border-top-style: solid;
  background-image: linear-gradient(to bottom right, #A3CCFA, #5D83C2);
  padding-bottom: 20px;
}

.header-title {
  padding-top: 12px;
}

.img-container {
  position: relative;
}

.activity-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 80rem;
  float: none;
  margin: 0 auto;
}

.activity {
  max-width: 100%;
  width: auto;
  height: auto;
  object-fit: cover;
  border-radius: 1rem;
  padding: 10px;
  text-align: center;
}

.overlay {
  position: absolute;
  bottom: 1%;
  background: rgba(0, 0, 0, 0.8);
  color: #f1f1f1;
  width: 100%;
  transition: .5s ease;
  opacity:0;
  color: white;
  font-size: 14px;
  padding: 10px;
  text-align: center;
  width: auto;
  height: auto;
  object-fit: cover;
  border-radius: 1rem;
  padding: 10px
}

/* When you mouse over the container, fade in the overlay title */
.img-container:hover .overlay {
  opacity: 1;
}
</style>
