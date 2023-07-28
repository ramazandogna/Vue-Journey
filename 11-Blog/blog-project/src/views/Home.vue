<template>
   <div class="home">
      <div v-if="posts.length">
         <div
            v-for="post in posts"
            :key="post.id"
         >
            <SinglePost :post="post" />
         </div>
      </div>
   </div>
</template>

<script>
import { ref } from 'vue';
import SinglePost from '../components/SinglePost.vue';
import getPosts from '../../composable/getPosts';
export default {
   name: 'Home',
   components: { SinglePost },
   setup() {
      const posts = ref([]);
      getPosts().then((data) => {
         posts.value = data;
      });
      console.log(posts);
      return { posts };
   },
};
</script>
