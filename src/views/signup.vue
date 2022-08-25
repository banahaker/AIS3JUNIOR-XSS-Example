<template>
  <div class="signup">
    <h1>Sign Up</h1>
    <input type="text" placeholder="Username" />
    <input type="password" name="psd" id="psd" placeholder="Password" />
    <input
      type="password"
      name="confirm"
      id="confirm"
      placeholder="Confirm Password"
    />
    <p>Or <router-link to="/login">Login</router-link></p>
    <button>Login</button>
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
