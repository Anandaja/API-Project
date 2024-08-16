<template>
  <!-- Main Wrapper -->
  <div class="login-body">
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
              <h1>Hey There!!! Welcome Back.</h1>
              <Form
                @submit="onSubmit"
                :validation-schema="schema"
                v-slot="{ errors }"
              >
                <div class="form-group">
                  <label class="form-label">Email <span>*</span></label>
                  <Field
                    name="email"
                    type="text"
                    value="example@example.com"
                    class="form-control"
                    :class="{ 'is-invalid': errors.email }"
                  />
                  <div class="invalid-feedback">{{ errors.email }}</div>
                  <div class="emailshow text-danger" id="email"></div>
                </div>
                <div class="form-group">
                  <label class="form-label">Password <span>*</span></label>
                  <Field
                    name="password"
                    :type="showPassword ? 'text' : 'password'"
                    value="123456"
                    class="form-control pass-input mt-2"
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
                <div class="form-group mb-5">
                  <router-link class="forgot-link" to="forgot-password"
                    >Forgot Password ?</router-link
                  >
                </div>
                <div class="form-group">
                  <label class="custom_check mt-0 mb-0"
                    ><span>Remember me</span>
                    <input type="checkbox" name="remeber" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <router-link
                  to="/index"
                  class="btn btn-outline-light w-100 btn-size"
                  >Sign In</router-link
                >
                <div class="login-or">
                  <span class="span-or-log">Or, Sign in with your email</span>
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
                    >Sign in with Google</a
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
                    >Sign in with Facebook</a
                  >
                </div>
                <!-- /Social Login -->
                <div class="text-center dont-have">
                  Don't have an account ?
                  <router-link to="/register">Sign Up</router-link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- /Main Wrapper -->
</template>

<script>
import { ref } from "vue";
import { router } from "@/router";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
export default {
  components: {
    /* eslint-disable vue/no-reserved-component-names */
    Form,
    Field,
  },
  data() {
    return {
      showPassword: false,
      password: null,
      emailError: "",
      passwordError: "",
    };
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
  setup() {
    let users = localStorage.getItem("storedData");
    if (users === null) {
      let password = [
        {
          email: "example@example.com",
          password: "123456",
        },
      ];
      const jsonData = JSON.stringify(password);
      localStorage.setItem("storedData", jsonData);
    }
    const schema = Yup.object().shape({
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    });
    const onSubmit = (values) => {
      document.getElementById("email").innerHTML = "";
      document.getElementById("password").innerHTML = "";
      let data = localStorage.getItem("storedData");
      var Pdata = JSON.parse(data);
      const Eresult = Pdata.find(({ email }) => email === values.email);
      if (Eresult) {
        if (Eresult.password === values.password) {
          router.push("/index");
        } else {
          document.getElementById("password").innerHTML = "Incorrect password";
        }
      } else {
        document.getElementById("email").innerHTML = "Email is not valid";
      }
    };
    return {
      schema,
      onSubmit,
      checked: ref(false),
    };
  },
};
</script>
