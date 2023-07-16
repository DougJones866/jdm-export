<template>
  <div class="contactform">
    <h2>Contact Form</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" placeholder="Enter Your Name" v-model="formData.name" required  />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="Enter Your Email" v-model="formData.email" required />
      </div>
      <div>
        <label for="question">Question:</label>
        <textarea id="question" v-model="formData.question" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        question: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Perform your form submission logic here
      // You can access the form data using this.formData

      // Reset the form after submission
      this.formData = {
        name: "",
        email: "",
        question: "",
      };

      // Optionally, you can show a success message or redirect to another page
    },
  },
};
</script>

<style scoped>

.contactform {
    margin-bottom: 50px;
    
}

form {
  margin-bottom: 100px;
}
input {
    width: 50%;
    margin: 5px;
}

#question {
    width: 50%;
}

</style>
