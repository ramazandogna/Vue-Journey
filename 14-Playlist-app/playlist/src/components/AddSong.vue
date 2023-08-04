<template>
   <div class="add-song">
      <button
         v-if="!showForm"
         @click="showForm = true"
      >
         Add song
      </button>
      <form
         v-if="showForm"
         @submit.prevent="handleSubmit"
      >
         <h4>Add a new song</h4>
         <input
            type="text"
            placeholder="Song title"
            required
            v-model="title"
         />
         <input
            type="text"
            placeholder="Artist"
            required
            v-model="artist"
         />
         <button>Add</button>
      </form>
      <button
         v-if="showForm"
         @click="showForm = false"
      >
         Close add song
      </button>
   </div>
</template>

<script>
//vue imports
import { ref } from 'vue';
//composable imports
import useDocument from '@/composables/useDocument';

export default {
   props: ['playlist'],
   setup(props) {
      const { updateDoc } = useDocument('playlist', props.playlist.id);
      const title = ref('');
      const artist = ref('');
      const showForm = ref(false);

      const handleSubmit = async () => {
         const newSong = {
            title: title.value,
            artist: artist.value,
            id: Math.floor(Math.random() * 100000),
         };
         await updateDoc({
            songs: [...props.playlist.songs, newSong],
         });
         title.value = '';
         artist.value = '';
      };
      return { artist, title, showForm, handleSubmit };
   },
};
</script>

<style>
.add-song {
   text-align: center;
   margin-top: 20px;
}

form {
   max-width: 100%;
   text-align: left;
}
</style>
