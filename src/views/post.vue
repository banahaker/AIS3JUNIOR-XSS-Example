<template>
  <div class="new">
    <h1>New Post</h1>
    <textarea
      name="content"
      id="content"
      cols="50"
      rows="30"
      placeholder="Post Content
    "
    ></textarea>
    <button>Post It !!</button>
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
