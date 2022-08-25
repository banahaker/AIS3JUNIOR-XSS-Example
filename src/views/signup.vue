<script lang="ts" setup>
import { ref } from "vue";
import axios from "axios";
import router from "../router";
interface SignUpForm {
  account: string;
  password: string;
}

const Signing = ref(false);

const URL = "https://attackme.b0925138932.repl.co/signup";
const SignUpInfo = ref<SignUpForm>({
  account: "",
  password: "",
});
function signup(data: SignUpForm) {
  if (data.account == "" || data.password == "") return;
  Signing.value = true;
  axios({
    method: "POST",
    url: URL,
    data: data,
  })
    .then((res) => {
      const data = res.data;
      console.log(data);
      Signing.value = false;
      alert("Sign Up Succeed. Please Login");
      router.push("/login");
    })
    .catch((err) => {
      console.log(err.response.data);
      const data = err.response.data;
      alert("Sign Up Fail\n" + data.message);
    });
}
</script>

<template>
  <div class="signup">
    <h1>Sign Up</h1>
    <input v-model="SignUpInfo.account" type="text" placeholder="Username" />
    <input
      v-model="SignUpInfo.password"
      type="password"
      name="psd"
      id="psd"
      placeholder="Password"
    />
    <p>Or <router-link to="/login">Login</router-link></p>
    <button v-if="Signing" disabled>Signing Up...</button>
    <button v-else @click="signup(SignUpInfo)">Sign Up</button>
  </div>
</template>

<style lang="scss">
.signup {
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    margin-top: 10px;
  }
  p {
    margin-top: 10px;
  }
  button {
    margin-top: 10px;
    padding: 2px 5px;
    border-radius: 8px;
    cursor: pointer;
  }
}
</style>
