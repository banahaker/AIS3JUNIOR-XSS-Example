<script lang="ts" setup>
import { ref } from "vue";
import axios from "axios";
import router from "../router";
interface LoginForm {
  account: string;
  password: string;
}

interface loginResponse {
  account: string;
  id: number;
  password: string;
}

const Logging = ref(false);

const URL = "https://attackme.b0925138932.repl.co/login";
const LoginInfo = ref<LoginForm>({
  account: "",
  password: "",
});
function login(data: LoginForm) {
  if (data.account == "" || data.password == "") return;
  Logging.value = true;
  axios({
    method: "POST",
    url: URL,
    data: data,
  })
    .then((res) => {
      const data = res.data as loginResponse;
      console.log(data);
      localStorage.setItem("account", data.account);
      localStorage.setItem("id", String(data.id));
      localStorage.setItem("password", data.password);
      Logging.value = false;
      alert("Login Succeed");
      router.push("/");
    })
    .catch((err) => {
      console.log(err.response.data);
      const data = err.response.data;
      alert("LoginFail\n" + data.message);
      Logging.value = false;
    });
}
</script>

<template>
  <div class="login">
    <h1>login</h1>
    <input v-model="LoginInfo.account" type="text" placeholder="Username" />
    <input
      v-model="LoginInfo.password"
      type="password"
      placeholder="Password"
    />
    <p>Or <router-link to="/signup">SignUp</router-link></p>
    <button disabled v-if="Logging">Logging in</button>
    <button v-else @click="login(LoginInfo)">Login</button>
  </div>
</template>

<style lang="scss">
.login {
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
