<template>
   <div>
      <div
         class="error"
         v-if="error"
      >
         {{ error }}
      </div>
      <div
         v-if="playlist"
         class="playlists-details"
      >
         <div class="playlist-info">
            <div class="cover">
               <img :src="playlist.coverUrl" />
            </div>
            <h2>{{ playlist.title }}</h2>
            <p class="username">Created by{{ playlist.userName }}</p>
            <p class="description">{{ playlist.description }}</p>
         </div>
         <div class="song-list">Song Listten/div></div>
      </div>
   </div>
</template>

<script>
//composable import
import getDocument from '@/composables/getDocument';
export default {
   props: ['id'],
   setup(props) {
      const { error, document: playlist } = getDocument('playlists', props.id);
      return { error, document };
   },
};
</script>

<style></style>
