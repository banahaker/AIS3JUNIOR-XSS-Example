<template>
  <div class="login">
    <h1>login</h1>
    <input type="text" placeholder="Username" />
    <input type="password" name="psd" id="psd" placeholder="Password" />
    <p>Or <router-link to="/signup">SignUp</router-link></p>
    <button>Login</button>
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
