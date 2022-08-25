<script lang="ts" setup>
import router from "../router";
import { onMounted, ref } from "vue";
import axios from "axios";
interface postData {
  content: string;
  id: number;
  user_id: number;
}

const postList = ref<Array<postData>>([]);
const url = "https://Attackme.b0925138932.repl.co/getPost";
onMounted(() => {
  axios({
    method: "GET",
    url,
  })
    .then((res) => {
      const data = res.data as postData[];
      postList.value = data;
    })
    .catch((err) => {
      alert("Server Error");
    });
});
</script>

<template>
  <div class="posts">
    <button
      @click="
        () => {
          router.push('/post');
        }
      "
    >
      New posts
    </button>
    <div class="list">
      <div class="post" v-for="item in postList">
        <p>User ID:{{ item.user_id }}</p>
        <p style="margin-top: 10px" v-html="item.content"></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.posts {
  width: 800px;
  margin: 30px auto;
  button {
    padding: 2px 5px;
  }
  .list {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    .post {
      background-color: #eee;
      padding: 10px;
      border-radius: 5px;
      margin-bottom: 15px;
    }
  }
}
</style>
