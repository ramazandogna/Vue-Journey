<template>
   <div class="post">
      <router-link :to="{ name: 'Post', params: { id: post.id } }">
         <h3>{{ post.title }}</h3>
      </router-link>
   </div>
</template>

<script>
export default {
   props: ['post'],
   setup(props) {
      console.log(props.post.title);
   },
};
</script>

<style scoped>
.post {
   margin: 20px auto;
   background-color: #fff;
   padding: 10px 20px;
   border-radius: 5px;
   box-shadow: 1px 2px 3p rgba(0, 0, 0, 0.05);
   border-left: 4px solid turquoise;
}

h3 {
   cursor: pointer;
}

p {
   text-align: left;
}

a {
   text-decoration: none;
   color: currentColor;
}
</style>
