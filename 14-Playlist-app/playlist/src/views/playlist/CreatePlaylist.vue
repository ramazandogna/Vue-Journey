<template>
   <form @submit.prevent="handleSubmit">
      <h4 class="card-title">Create Playlist</h4>
      <input
         type="text"
         required
         placeholder="Playlist Title"
         v-model="title"
      />
      <textarea
         required
         placeholder="Playlist Description.."
         v-model="description"
      ></textarea>
      <label>Upload playlist cover image</label>
      <div class="file-input-container">
         <input
            type="file"
            @change="handleChange"
         />
      </div>
      <div class="error">{{ fileError }}</div>
      <span class="button-container"
         ><button v-if="!isPending">Create</button>
         <button
            v-else
            disabled
         >
            Sending...
         </button></span
      >
   </form>
</template>

<script>
//vue imports
import { ref } from 'vue';
//router imports
import { useRouter } from 'vue-router';
//composable imports
import useStorage from '@/composables/useStorage';
import useCollection from '@/composables/useCollection';
import getUser from '@/composables/getUser';
//firebase imports
import { timestamp } from '@/firebase/config';

export default {
   setup() {
      const { filePath, url, uploadImage } = useStorage();
      const { error, addDoc } = useCollection('playlists');
      const { user } = getUser();
      const isPending = ref(false);
      const router = useRouter();
      const title = ref('');
      const description = ref('');
      const file = ref(null);
      const fileError = ref(null);

      const handleSubmit = async () => {
         if (file.value) {
            isPending.value = true;
            await uploadImage(file.value);
            const res = await addDoc({
               title: title.value,
               description: description.value,
               userId: user.value.uid,
               userName: user.value.displayName,
               coverUrl: url.value,
               filePath: filePath.value,
               songs: [],
               createdAt: timestamp(),
            });
            isPending.value = false;
            if (!error.value) {
               console.log('playlist added');
               router.push({ name: 'playlistdetails', params: { id: res.id } });
            }
         }
      };
      const types = ['image/png', 'image/jpeg', 'image/jpg'];
      const handleChange = (e) => {
         const selected = e.target.files[0];
         if (selected && types.includes(selected.type)) {
            file.value = selected;
            fileError.value = null;
         } else {
            file.value = null;
            fileError.value = 'Please select an image (jpge, jpg or png)';
         }
      };
      return {
         title,
         description,
         handleSubmit,
         handleChange,
         fileError,
         isPending,
      };
   },
};
</script>

<style>
.file-input-container {
   background-color: #e5e7eb;
   border-radius: 10px;
}
input[type='file']::file-selector-button {
   border-radius: 4px;
   padding: 0 16px;
   height: 40px;
   cursor: pointer;
   background-color: white;
   border: 1px solid rgba(0, 0, 0, 0.16);
   box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
   margin-right: 16px;
   transition: background-color 200ms;
}

/* file upload button hover state */
input[type='file']::file-selector-button:hover {
   background-color: #f3f4f6;
}

/* file upload button active state */
input[type='file']::file-selector-button:active {
   background-color: #e5e7eb;
}
/* input[type='file'] {
   background: var(--secondary);
   border-radius: 8px;
   border: 0;
   padding: 8px 12px;
   font-weight: 600;
   cursor: pointer;
   display: inline-block;
   color: #fafafa;
   transition: all 0.3s;
} */
label {
   font-size: 12px;
   display: block;
   margin-top: 30px;
}
button {
   margin-top: 20px;
}
.buton-container {
   display: flex;
   justify-content: center;
}
</style>
