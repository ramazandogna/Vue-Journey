<template>
   <div
      class="error"
      v-if="error"
   >
      Couldnt fetch data..
   </div>
   <div v-if="isPending">
      <div v-if="documents">
         <ListCard :playlists="documents" />
      </div>
      <div v-else>Yok</div>
   </div>
   <div v-else>Yükleniyor..</div>
</template>

<script>
//composables import
import getCollection from '@/composables/getCollection';
//components
import ListCard from '@/components/ListCard.vue';
export default {
   components: { ListCard },
   setup() {
      const { error, documents, isPending } = getCollection('playlists');
      console.log(documents.value);
      console.log(documents);

      return { error, documents, isPending };
   },
   components: { ListCard },
};
</script>
