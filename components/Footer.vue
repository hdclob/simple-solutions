<template>
  <!-- Footer -->
  <footer class="bg-dark text-center text-white">
    <!-- Grid container -->
    <div class="container p-4">
      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Facebook -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="fab fa-facebook-f"></i
        ></a>

        <!-- Twitter -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="fab fa-twitter"></i
        ></a>

        <!-- Linkedin -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="fab fa-linkedin-in"></i
        ></a>
      </section>
      <!-- Section: Social media -->

      <!-- Section: Text -->
      <section class="mb-4">
        <p>
          Providing our clients with elegant solutions to complex problems, abiding by the highest working standards.
        </p>
      </section>
      <!-- Section: Text -->

      <!-- Section: Links -->
      <section class="">
        <!--Grid row-->
        <div class="row justify-content-center">
          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Links</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <NuxtLink to="/privacy-policy" class="text-white">Privacy Policy</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/terms-conditions" class="text-white">Terms and Conditions</NuxtLink>
              </li>
            </ul>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </section>
      <!-- Section: Links -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © {{currentYear}} Copyright:
      <NuxtLink class="text-white" to="/">Simple Solutions</NuxtLink>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<script>
  export default {
    data() {
      return {
        currentYear: (new Date).getFullYear(),
      }
    }
  }
</script>

<style scoped>
  .bg-dark {
    background-color: black !important;
  }
</style>
