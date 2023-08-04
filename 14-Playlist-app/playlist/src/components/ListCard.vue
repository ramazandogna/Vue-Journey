<template>
   <div>
      <div v-for="playlist in playlists">
         <router-link :to="{ name: 'playlistdetails', params: { id: playlist.id } }">
            <div class="single">
               <div class="thumbnail">
                  <img :src="playlist.coverUrl" />
               </div>
               <div class="info">
                  <h3>{{ playlist.title }}</h3>
                  <p>created by {{ playlist.userName }}</p>
               </div>
               <div class="song-number">
                  <p>{{ playlist.songs.length }} song</p>
               </div>
            </div></router-link
         >
      </div>
   </div>
</template>

<script>
export default {
   props: ['playlists'],
};
</script>

<style>
.single {
   display: flex;
   align-items: center;
   padding: 20px;
   border-radius: 20px;
   background: #f5f3f3;
   margin: 16px 0;
   transition: all ease 0.2s;
   box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
}
.single:hover {
   box-shadow: 1px 2px 3px rgba(50, 50, 50, 0.05);
   transform: scale(1.02);
   transition: all ease 0.2s;
}
.thumbnail {
   max-width: 100px;
   max-height: 100px;
   overflow: hidden;
   border-radius: 10px;
}

.info h3 {
   color: #ea5154;
}

img {
   max-width: 150%;
   max-height: 150%;
   display: block;
}
.info {
   margin: 0 30px;
}
.song-number {
   margin-left: auto;
   color: #ea5154;
}
</style>
