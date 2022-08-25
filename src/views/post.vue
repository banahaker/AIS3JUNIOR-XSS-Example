<script lang="ts" setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import router from "../router";
interface postForm {
  content: string;
  account: string;
  password: string;
}

const posting = ref(false);

const cont = ref("");
const url = "https://Attackme.b0925138932.repl.co/post";
function NewPost(content: string) {
  if (content == "") return;
  posting.value = true;
  axios({
    url,
    method: "POST",
    data: {
      account: localStorage.getItem("account"),
      password: localStorage.getItem("password"),
      content,
    },
  })
    .then((_) => {
      location.assign("/");
      posting.value = false;
    })
    .catch((err) => {
      posting.value = false;
      alert("Error");
    });
}

onMounted(() => {
  if (
    localStorage.getItem("account") == null ||
    localStorage.getItem("password") == null
  ) {
    alert("Please Login to Post");
    location.assign("/login");
  }
});
</script>

<template>
  <div class="new">
    <h1>New Post</h1>
    <textarea
      name="content"
      id="content"
      cols="50"
      rows="30"
      placeholder="Post Content"
      v-model="cont"
    ></textarea>
    <button v-if="posting" disabled>Posting</button>
    <button v-else @click="NewPost(cont)">Post It !!</button>
  </div>
</template>

<style lang="scss">
.new {
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input,
  textarea {
    margin-top: 10px;
    padding: 3px 5px;
  }
  input {
    width: 40rem;
  }
  button {
    margin-top: 10px;
    padding: 2px 5px;
    border-radius: 8px;
    cursor: pointer;
  }
}
</style>
