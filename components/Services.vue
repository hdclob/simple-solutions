<template>
  <div id="services" class="container-fluid">
    <div class="container py-4">
      <h2 class="text-center">Our Services</h2>
      <div class="row">
        <div class="col-md-6 my-2" v-for="service in services" :key="service.id">
          <ServiceDisplay
            :service="service"
            @click.native="activateService(service)"
          />
        </div>
      </div>
      <p class="text-center my-3">{{ getActiveService.description }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      activateService: function(service) {
        this.services.forEach(s => {
          s.active = false;
        })
        service.active = true;
        this.activeService = service;
      }
    },
    computed: {
      getActiveService: function() {
        if (this.activeService == undefined) {
          this.activeService = this.services.filter(service => {
            return service.active;
          })[0];
        }

        return this.activeService;
      }
    },
    data() {
      return {
        activeService: undefined,
        services: [
          {
            id: 1,
            icon: 'fa-solid fa-gamepad fa-fw',
            title: 'Game Development',
            description: 'Video game development is the process of developing a video game. The effort is undertaken by a developer, ranging from a single person to an international team dispersed across the globe. Development of traditional commercial PC and console games is normally funded by a publisher, and can take several years to reach completion. Indie games usually take less time and money and can be produced by individuals and smaller developers. The independent game industry has been on the rise, facilitated by the growth of accessible game development software such as Unity platform and Unreal Engine and new online distribution systems such as Steam and Uplay, as well as the mobile game market for Android and iOS devices.',
            active: true
          },
          {
            id: 2,
            icon: 'fa-solid fa-cloud fa-fw',
            title: 'Web Application Development',
            description: 'A web application (or web app) is application software that runs on a web server, unlike computer-based software programs that are run locally on the operating system (OS) of the device. Web applications are accessed by the user through a web browser with an active network connection. These applications are programmed using a client–server modeled structure—the user ("client") is provided services through an off-site server that is hosted by a third-party. Examples of commonly-used web applications include: web-mail, online retail sales, online banking, and online auctions.',
            active: false
          },
          {
            id: 3,
            icon: 'fa-solid fa-mobile-screen fa-fw',
            title: 'Mobile Application Development',
            description: 'Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones. These software applications are designed to run on mobile devices, such as a smartphone or tablet computer. These applications can be pre-installed on phones during manufacturing platforms, or delivered as web applications using server-side or client-side processing (e.g., JavaScript) to provide an "application-like" experience within a web browser.',
            active: false
          },
          {
            id: 4,
            icon: 'fa-solid fa-database fa-fw',
            title: 'API Development',
            description: 'An application programming interface (API) is a connection between computers or between computer programs. It is a type of software interface, offering a service to other pieces of software. A document or standard that describes how to build or use such a connection or interface is called an API specification. A computer system that meets this standard is said to implement or expose an API. The term API may refer either to the specification or to the implementation.',
            active: false
          },
          {
            id: 5,
            icon: 'fa-solid fa-desktop fa-fw',
            title: 'Desktop Application Development',
            description: 'An application program (application or app for short) is a computer program designed to carry out a specific task other than one relating to the operation of the computer itself, typically to be used by end-users. Word processors, media players, and accounting software are examples. The collective noun refers to all applications collectively. The other principal classifications of software are system software, relating to the operation of the computer, and utility software ("utilities").',
            active: false
          },
          {
            id: 6,
            icon: 'fa-solid fa-shield fa-fw',
            title: 'Security Testing',
            description: 'Security testing is a process intended to reveal flaws in the security mechanisms of an information system that protect data and maintain functionality as intended. Due to the logical limitations of security testing, passing the security testing process is not an indication that no flaws exist or that the system adequately satisfies the security requirements.',
            active: false
          },
          {
            id: 7,
            icon: 'fa-solid fa-music fa-fw',
            title: 'Sound Production',
            description: 'Sound design is the art and practice of creating sound tracks for a variety of needs. It involves specifying, acquiring or creating auditory elements using audio production techniques and tools. It is employed in a variety of disciplines including filmmaking, television production, video game development, theatre, sound recording and reproduction, live performance, sound art, post-production, radio, new media and musical instrument development. Sound design commonly involves performing (see e.g. foley) and editing of previously composed or recorded audio, such as sound effects and dialogue for the purposes of the medium, but it can also involve creating sounds from scratch through synthesizers.',
            active: false
          },
          {
            id: 8,
            icon: 'fa-solid fa-image fa-fw',
            title: 'Graphics Design',
            description: 'Graphic design is an interdisciplinary branch of design whose foundations and objectives revolve around the definition of problems and the determination of objectives for decision-making, through creativity, innovation and lateral thinking along with manual or digital tools, transforming them for proper interpretation. This activity helps in the optimization of graphic communications (see also communication design). It is also known as visual communication design, visual design or editorial design.',
            active: false
          },
        ]
      }
    }
  }
</script>

<style scoped>
  #services {
    background-color: black;
  }
  #services > .container {
    color: white;
  }
</style>
