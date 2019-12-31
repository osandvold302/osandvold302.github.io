<template>
    <div b-container class="container-projects">
       <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous"> 
        <b-row>
            <b-col class="col-text text-left" offset="1">
                <h2>Featured Projects</h2>
            </b-col>
        </b-row>
        <template v-for="project in projects" id="project-section">
            <b-form-row class="project-rows" v-bind:key="project.title"> 
            <b-col id="project-image" class="justify-content-md-center text-center align-self-center flex-fill" offset-sm="1" lg="2" md="4" sm="auto">
                <img v-if="project.img" v-bind:src="getImgUrl(project.img)" class="img-fluid" v-bind:alt="project.img" width=100%/>
                <img v-else v-bind:src="getImgUrl('logo.png')" class="img-fluid" width=auto/>
                <div class="overlay">
                    <a v-if="project.github_link" :href="project.github_link" class="icon" title="GitHub Link">
                        <i class="fab fa-github fa-4x"></i>
                    </a>
                </div>
            </b-col>
            <b-col id="project-summary" class="col-text text-left" lg="8" md="6" sm="auto">
                <b-row align-v="start">
                    <h4>{{ project.title }}</h4>
                    <p>{{ project.summary }}</p>
                </b-row>
                <b-row align-v="end" align-h="end" v-if="project.tools!=null">
                    <div  v-for="tool in project.tools" v-bind:key="tool">
                        <div id="tool-tag">
                            <b-button pill variant="outline-info" size="sm">
                                {{ tool }} 
                            </b-button>
                        </div>
                    </div>
                </b-row>
            </b-col>
            </b-form-row>
            <br v-bind:key="project.img">
        </template>
    </div>
</template>

<script>
export default {
  name: 'projects',
  components: {},
  methods: {
    getImgUrl(pic) {
      return require('../assets/'+pic)
    }
  },
  data() {
    return {
      projects: [
        {
          title: 'iOS Test Lab App',
          summary: 'The Tamino iOS Photo application was built to detect deformities and heat ' +
            'variations of our high temperature furnaces. I built the backend using Swift and AWS tools to connect the user ' +
            'to the DynamoDB table and upload images to an S3 bucket. From there, a lambda function was triggered and detected ' +
            'parts using a pre-built neural network. This product is a proof of concept for a larger IoT platform in manufacturing ' +
            'and research and development at 3M.',
          img: 'takephotoapp.png',
          github_link: '',
          tools: ['Swift', 'Amazon Web Services', 'YOLO']
        },
        {
          title: 'My Little Trader Bot',
          summary: 'My Little Trader Bot began from a desire to learn and understand financial ' +
            'trading algorithms based on the challenged provided by Optiver at HackDelft 2019 in Delft, Netherlands. ' +
            'My team researched various types of strategies and played the "fake" stocks, attempting to increase our profits. ' +
            'We were able to build a front-end website for monitoring our progress and allow our end user to update the various ' +
            'arguments to a few pre-defined algorithms.',
          img: 'mylittletraderbot.jpg',
          github_link: 'https://github.com/osandvold302/hackdelft_s19',
          tools: ['Python', 'Flask', 'HTML', 'CSS']
        },
        {
          title: 'Playground News',
          summary: 'The Univerisity of Missouri hackathon challenged groups to combine journalism and technology to create tools that ' +
          'would help improve how people receive information. My team imagined a product that would help parents keep track of their ' +
          'child\'s reading habits, the reading level they are most comfortable with, and topics of interest. We created a web app for ' +
          'monitoring these statistics and curating relative, age appropriate content for each child.',
          img: 'playgroundnews.png',
          github_link: 'https://github.com/osandvold302/KidNews-Tiger18',
          tools: ['Python', 'Django', 'ReactJS'] 
        }
      ]
    }
  }
}
</script>

<style scoped>
.container-projects {
    padding-top: 20px;
}

#project-summary {
    padding-top: 20px;
    padding-left: 30px;
    padding-right: 30px;
}

.project-rows {
    overflow: hidden;
}

#project-image {
    height: 100%;
}

.project-rows #project-summary {
    background-color: rgba(115,121,146,.1);
    transition: all ease 0.5s;
    border-radius: .5rem;
}

.project-rows #project-summary:hover{
    background-color:rgba(115,121,146,.25); 
}

.img {
    display: block;
}

.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: ease 0.5s;
    background-color: rgba(115,121,146,.25);
    border-radius: .5rem; 
}

#project-image {
    height: 100%;
    min-height: 100%;
}

#project-image:hover .overlay {
    opacity: 1;
    height: 100%;
}

.icon {
    color: white;
    position: absolute;
    top: 90px;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
}

#tool-tag {
    text-align: center;
    height: 100%;
    padding: 5px;
}

.btn-outline-info {
    color: #5D83C2;
    border-color: #5D83C2;
}

.btn-outline-info:hover {
    color: #fff;
    background-color: #5D83C2;
    border-color: #5D83C2;
}

.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active, .show > .btn-outline-info.dropdown-toggle {
    color: #fff;
    background-color: #5D83C2;
    border-color: #5D83C2;
}
</style>