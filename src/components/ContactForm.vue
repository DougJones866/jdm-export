<template>
  
      <section role="region" aria-label="contact-form" class="site-main-section">
        <div class="container">
          <div class="card contact-form-container">
            <div class="clearfix">
              <div class="col-1-2">
                <figure class="alert alert-error" v-if="errors">
                  <div class="alert-content" >
                    <box-icon name='error-circle' type='solid' color='white' ></box-icon>
                    <p>Looks like you forgot to add your name!</p>
                  </div>
                </figure>
                <h2 class="section-header">Leave A Message</h2>
                <form role="form" class="clearfix" @submit.prevent="checkForm">
                  <label>Your Name</label>
                  <input type="text" placeholder="Full Name" class="input-error" />
                  <label>Your Email</label>
                  <input type="email" placeholder="Email Address" />
                  <label>Select Contact Reason</label>
                  <select>
                    <option selected disabled>Please Select One</option>
                    <option>Customer Service Question</option>
                    <option>Billing Question</option>
                    <option>Website Question</option>
                  </select>
                  <label>Question or Comments</label>
                  <textarea placeholder="Provide as much detail as you can so we best assist you."></textarea>
                  <input type="submit" value="Submit Message" class="button button-primary float-right" />
                </form>
              </div>
              <div class="col-1-2">
                <p><b>Our Location</b></p>
                <img src="https://content.codecademy.com/programs/ui-design/color-ui/map.jpg" alt="Office Location" />
                <ul class="location-details">
                  <li><b>Address:</b> 233 S Wacker Dr, Chicago, IL 60606</li>
                  <li><b>Phone:</b> (123) 456-7890</li>
                  <li><b>Email:</b> support@mail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
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

.alert {
  border-radius: 3px;
  margin-bottom: 15px;
  padding: 10px 15px;
  text-align: left;
}

.alert-content {
  align-items: center;
  display: flex;
}

.alert-error {
  background-color: #FC472E;
}

.alert img {
  display: inline-block;
  height: 15px;
  margin-right: 5px;
  width: 15px;
}

.alert p {
  color: #FFFFFF;
  display: inline-block;
  margin-bottom: 0;
}

.button {
  border-radius: 3px;
  color: #FFFFFF;
  display: inline-block;
  font-family: 'Roboto', Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  transition: opacity 0.5s ease;
}

.button:hover {
  opacity: 0.75;
}

.button-primary {
  background-color: #00CF63;
}


input,
select,
textarea {
  background-color: #FFFFFF;
  border: 1px solid #F2F3F5;
  border-radius: 3px;
  box-shadow: inset 1px 1px 3px 0 rgba(189,191,192,0.10);
  height: 35px;
  margin-bottom: 15px;
  padding: 10px;
  transition: border-color 0.5s ease;
  width: 100%;
}

input[type="submit"] {
  cursor: pointer;
  height: auto;
  width: auto;
}

input:active,
input:focus,
textarea:active,
textarea:focus {
  border: 1px solid #42A5F5;
  outline: none;
}

textarea {
  height: 100px;
}

.input-error {
  border-color: #FC472E;
}
</style>
