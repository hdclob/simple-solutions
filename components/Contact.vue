<template>
  <div id="contact" class="container-fluid">
    <div class="container py-4">
      <h2 class="text-center">Contact us</h2>
      <div class="d-flex flex-column align-items-center">
        <form class="contact-us-form">
          <input class="my-3 p-2" v-model="email" placeholder="Email address"/>
          <input class="my-3 p-2" v-model="subject" placeholder="Subject of message"/>
          <textarea class="my-3 p-2" rows="6" v-model="message" placeholder="Message"></textarea>
          <input class="my-3 p-2" type="submit"/>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        subject: '',
        message: '',
      }
    }
  }
</script>

<style scoped>
  #contact {
    background-color: black;
  }
  #contact > .container {
    color: white;
  }

  .contact-us-form {
    width: 80%;
  }
  .contact-us-form input, .contact-us-form textarea {
    display: block;
    width: 100%;
    background-color: black;
    color: white;
    border-radius: 20px;
  }
  .contact-us-form textarea {
    resize: none;
  }
  .contact-us-form input[type=submit]:hover {
    background-color: white;
    color: black;
    transition: 0.3s;
  }
</style>
