<template>
  <div class="main-wrapper login-body">
    <div class="container">
      <!-- Header -->
      <header class="log-header">
        <router-link to="/index"
          ><img
            class="img-fluid logo-dark"
            src="@/assets/img/logo.svg"
            alt="Logo"
        /></router-link>
      </header>
      <!-- /Header -->

      <div class="login-wrapper">
        <div class="loginbox">
          <div class="login-auth">
            <div class="login-auth-wrap">
              <h1>Signup! <span class="d-block"> New Account.</span></h1>
              <Form
                @submit="onSubmit"
                :validation-schema="schema"
                v-slot="{ errors }"
              >
                <div class="form-group">
                  <label class="form-label">Name <span>*</span></label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Name"
                  />
                </div>
                <div class="form-group">
                  <label class="form-label">Email <span>*</span></label>
                  <Field
                    name="email"
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    :class="{ 'is-invalid': errors.email }"
                  />
                  <div class="invalid-feedback">{{ errors.email }}</div>
                  <div class="emailshow text-danger" id="email"></div>
                </div>
                <div class="form-group">
                  <label class="form-label">Password <span>*</span></label>
                  <div class="pass-group">
                    <Field
                      name="password"
                      :type="showPassword ? 'text' : 'password'"
                      class="form-control pass-input mt-2"
                      placeholder="Password"
                      :class="{ 'is-invalid': errors.password }"
                    />
                    <span @click="toggleShow" class="toggle-password">
                      <i
                        :class="{
                          'fas fa-eye': showPassword,
                          'fas fa-eye-slash': !showPassword,
                        }"
                      ></i>
                    </span>
                    <div class="invalid-feedback">{{ errors.password }}</div>
                    <div class="emailshow text-danger" id="password"></div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-label"
                    >Confirm Password <span>*</span></label
                  >
                  <div class="pass-group">
                    <Field
                      name="confirmpassword"
                      :type="showPassword1 ? 'text' : 'password'"
                      class="form-control pass-input mt-2"
                      placeholder="Confirm Password"
                      :class="{ 'is-invalid': errors.confirmpassword }"
                    />
                    <span @click="toggleShow1" class="toggle-password">
                      <i
                        :class="{
                          'fas fa-eye': showPassword1,
                          'fas fa-eye-slash': !showPassword1,
                        }"
                      ></i>
                    </span>
                    <div class="invalid-feedback">
                      {{ errors.confirmpassword }}
                    </div>
                    <div
                      class="emailshow text-danger"
                      id="confirmpassword"
                    ></div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="custom_check mt-0 mb-0"
                    ><span>Remember me</span>
                    <input type="checkbox" name="remeber" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <button
                  type="submit"
                  class="btn btn-outline-light w-100 btn-size"
                >
                  Sign Up
                </button>
                <div class="login-or">
                  <span class="span-or-log">Or, Sign up with your email</span>
                </div>
                <!-- Social Login -->
                <div class="social-login">
                  <a
                    href="javascript:void(0);"
                    class="d-flex align-items-center justify-content-center form-group btn google-login w-100"
                    ><span
                      ><img
                        src="@/assets/img/icons/google.svg"
                        class="img-fluid"
                        alt="Google" /></span
                    >Sign up with Google</a
                  >
                </div>
                <div class="social-login">
                  <a
                    href="javascript:void(0);"
                    class="mb-0 d-flex align-items-center justify-content-center form-group btn google-login w-100"
                    ><span
                      ><img
                        src="@/assets/img/icons/facebook.svg"
                        class="img-fluid"
                        alt="Facebook" /></span
                    >Sign up with Facebook</a
                  >
                </div>
                <!-- /Social Login -->
                <div class="text-center dont-have">
                  Already have login ? <router-link to="/">Sign In</router-link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { router } from "@/router";
export default {
  data() {
    return {
      showPassword: false,
      showPassword1: false,
      password: null,
    };
  },
  components: {
    /* eslint-disable vue/no-reserved-component-names */
    Form,
    Field,
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
    buttonLabel1() {
      return this.showPassword1 ? "Hide" : "Show";
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    toggleShow1() {
      this.showPassword1 = !this.showPassword1;
    },
  },
  setup() {
    // eslint-disable-next-line no-unused-vars
    const showPassword = ref(false);
    // eslint-disable-next-line no-unused-vars
    const emailError = ref("");
    // eslint-disable-next-line no-unused-vars
    const passwordError = ref("");

    const schema = Yup.object().shape({
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmpassword: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Confirm password is required"),
    });

    const onSubmit = (values) => {
      if (values.password === values.confirmpassword) {
        let Rawdata = localStorage.getItem("storedData");
        let Pdata = [];
        Pdata = JSON.parse(Rawdata);
        const Eresult = Pdata.find(({ email }) => email == values.email);
        if (Eresult) {
          document.getElementById("email").innerHTML =
            "This email are already exist";
        } else {
          Pdata.push(values);
          const jsonData = JSON.stringify(Pdata);
          router.push("/");
          localStorage.setItem("storedData", jsonData);
        }
      } else {
        document.getElementById("confirmpassword").innerHTML =
          "Password not matching";
      }
    };

    return {
      schema,
      onSubmit,
    };
  },
};
</script>
