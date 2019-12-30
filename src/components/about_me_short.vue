<template>
    <div b-container class="container-about">
    <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
    <b-row class="justfiy-content-md-center text-center">
        <b-col class="col-text text-left" offset="1" sm="5">
            <h1>Hi,</h1>
            <h1>I'm Olivia</h1>
            <h6>
                Senior at the University of Iowa studying Biomedical Engineering with focus in bioimaging, computer science, and mathematics.
            <br><br>
                Lover of hackathons, the computer science and engineering community, and exploring the world one step at a time
            </h6>
            <h5>
                oh, and I'm <i>obsessed</i> with the pursuit of knowledge
            </h5>
        </b-col>
        <b-col class="col-photo">
           <img src="../assets/me.jpg" height="350"/>
        </b-col>
    </b-row>
    </div>
</template>

<script>
export default {
    name: 'about-me-short',
    components: {}
}
</script>

<style scoped>
.container-about {
    background-color: #89AAC8;
    padding: 0;
    border: 0;
    width: 100%;
    max-width: 100vw;
    padding-left: 0px;
    padding-top: 50px;
    padding-bottom: 50px;
    flex-wrap: wrap;
    min-height: 400px;
    background-image: url("../assets/background-st-andrews.jpg")
}

.b-col {
    display: flex;
    -webkit-box-pack: justify;
    -webkit-box-align: center;
}

h6 {
    color: #27292b;
    padding-bottom: 20px;
}

.col-text {
    padding-top: 50px;
}

.col-photo img {
    position: relative;
    transition: top ease 0.5s;
}

.col-photo img:hover {
    transform: translate3d(2px, 2px, 2px);
}
</style>