<template>
  <div id="contact" class="container-fluid">
    <div class="container py-4">
      <h2 class="text-center">Contact us</h2>
      <div class="d-flex flex-column align-items-center">
        <form v-on:submit.prevent="submitForm" class="contact-us-form">
          <div id="emailField" class="my-3">
            <input class="p-2" v-model="contact.email" placeholder="Email address"/>
            <div class="px-2 pt-1 error-block"></div>
          </div>
          <div id="subjectField" class="my-3">
            <input class="p-2" v-model="contact.subject" placeholder="Subject of message"/>
            <div class="px-2 pt-1 error-block"></div>
          </div>
          <div id="messageField" class="my-3">
            <textarea class="p-2" rows="6" v-model="contact.message" placeholder="Message"></textarea>
            <div class="px-2 pt-1 error-block"></div>
          </div>
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
        contact: {
          email: '',
          subject: '',
          message: '',
        }
      }
    },
    methods: {
      validateForm: function() {
        let errors = [];
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.contact.email))) {
          errors.push({field: '#emailField', message: 'Email has to be a valid email address'});
        }
        if (!this.contact.email) {
          errors.push({field: '#emailField', message: 'Email cannot be empty'});
        }
        if (!this.contact.subject) {
          errors.push({field: '#subjectField', message: 'Subject cannot be empty'});
        }
        if (!this.contact.message) {
          errors.push({field: '#messageField', message: 'Message cannot be empty'});
        }

        this.clearErrorBlocks();
        if (errors.length > 0) {
          errors.forEach((element) => {
            document.querySelector(element.field).querySelector('.error-block').innerHTML = element.message;
          })
          return false;
        }

        return true;
      },
      clearErrorBlocks: function() {
        document.querySelectorAll('.error-block').forEach(element => {
          element.innerHTML = '';
        })
      },
      submitForm: function() {
        if (!this.validateForm()) {
          return;
        }
        // this.$axios.post('/api/v1/send-email', this.contact)
        this.$axios.post('https://simple-solutions.netlify.app/.netlify/functions/send-email', this.contact)
          .then((res) => {
            this.showSuccessModal();
          })
          .catch((error) => {
            this.showErrorModal();
          })
          .finally(() => {
            this.clearForm();
          })
      },
      clearForm: function() {
        this.contact.email = '';
        this.contact.subject = '';
        this.contact.message = '';
      },
      showSuccessModal() {
        this.$bvModal.msgBoxOk('Your message was successfully sent!', {
          title: 'Confirmation',
          size: 'md',
          buttonSize: 'sm',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
      },
      showErrorModal() {
        this.$bvModal.msgBoxOk('Something went wrong submitting your data.', {
          title: 'Error',
          size: 'md',
          buttonSize: 'sm',
          okVariant: 'danger',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
      },
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
    border: 1px solid white;
  }
  .contact-us-form textarea {
    resize: none;
  }
  .contact-us-form input[type=submit]:hover {
    background-color: white;
    color: black;
    transition: 0.3s;
  }
  .contact-us-form .error-block {
    color: red;
  }
</style>
