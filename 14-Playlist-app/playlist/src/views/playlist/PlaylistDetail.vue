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
         class="playlist-details"
      >
         <div class="playlist-info">
            <div class="cover">
               <img :src="playlist.coverUrl" />
            </div>
            <h2>{{ playlist.title }}</h2>
            <p class="username">Created by {{ playlist.userName }}</p>
            <p class="description">{{ playlist.description }}</p>
            <button
               v-if="ownership"
               @click="handleDelete"
               class="delete"
            >
               Delete
            </button>
         </div>
         <div class="song-list">
            <div v-if="!playlist.songs.length">There is any song here.</div>
            <div
               v-for="song in playlist.songs"
               :key="song.id"
               class="single-song"
            >
               <div class="details">
                  <h3>{{ song.title }}</h3>
                  <p>> {{ song.artist }}</p>
               </div>
               <button
                  v-if="ownership"
                  @click="handleClick(song.id)"
               >
                  Delete song
               </button>
            </div>
            <AddSong
               v-if="ownership"
               :playlist="playlist"
            />
         </div>
      </div>
   </div>
</template>

<script>
//composable imports
import getDocument from '@/composables/getDocument';
import getUser from '@/composables/getUser';
import useDocument from '@/composables/useDocument';
import useStorage from '@/composables/useStorage';
//vue imports
import { computed } from 'vue';
//router import
import { useRouter } from 'vue-router';
//component imports
import AddSong from '../../components/AddSong.vue';

export default {
   props: ['id'],
   components: { AddSong },
   setup(props) {
      const { error, document: playlist } = getDocument('playlists', props.id);
      const { isPending, deleteDoc, updateDoc } = useDocument('playlists', props.id);
      const { user } = getUser();
      const { deleteImage } = useStorage();
      const router = useRouter();
      const ownership = computed(() => {
         return playlist.value && user.value && user.value.uid === playlist.value.userId;
      });

      const handleDelete = async () => {
         await deleteImage(playlist.value.filePath);
         await deleteDoc();
         router.push({ name: 'home' });
      };

      const handleClick = async (id) => {
         const songs = playlist.value.songs.filter((song) => song.id !== id);
         await updateDoc({ songs });
      };

      return { error, playlist, ownership, isPending, handleDelete, handleClick };
   },
};
</script>

<style>
.playlist-details {
   display: grid;
   grid-template-columns: 1fr 2fr;
   gap: 20px;
}

.playlist-info {
   padding: 1rem;
   background: #f5f3f3;
   border-radius: 20px;
   box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
}

.cover {
   overflow: hidden;
   border-radius: 20px;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 1rem;
   box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
   border: 1px solid #ddd;
}
.cover img {
   width: 350px;
   height: 220px;
   border-radius: 20px;
   transition: all 0.3s ease-in-out;
}

.cover:hover img {
   transition: all 0.3s ease-in-out;
   transform: scale(1.05);
}

.playlist-info {
   text-align: center;
}
.playlist-info h2 {
   color: #ea5154;
   text-transform: capitalize;
   font-size: 28px;
   margin: 20px 0;
}
.playlist-info p {
   margin-bottom: 10px;
}
.username {
   color: #777;
}
.description {
   text-align: center;
   margin-bottom: 10px;
   color: #999;
}

.song-list {
   padding: 1rem;
   background: #f5f3f3;
   border-radius: 20px;
   box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
}

.single-song {
   padding: 10px 0;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 20px;
   border-radius: 20px;
   background: #e1dfdf;
   box-shadow: 1.5px 3px 6px rgba(0, 0, 0, 0.3);
}

.single-song button {
   padding: 4px 8px;
   font-size: 12px;
   font-weight: 400;
   color: white;
   background: rgba(234, 81, 84, 0.4);
   margin-right: 1rem;
   transition: all 0.3s;
}

.single-song button:hover {
   background: #ea5154;
   transition: all 0.3s;
}

.details {
   padding: 0.5rem 1rem;
}

.details h3 {
   color: #ea5154;
   margin-bottom: 0.4rem;
}

.details p {
   padding-left: 0.5rem;
   color: #cf787a;
   font-style: italic;
}
</style>
