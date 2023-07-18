<template>
   <nav class="filter-nav">
      <button
         @click="updateFilter('all')"
         :class="{ active: current === 'all' }"
      >
         All
      </button>
      <button
         @click="updateFilter('completed')"
         :class="{ active: current === 'completed' }"
      >
         Completed
      </button>
      <button
         @click="updateFilter('ongoing')"
         :class="{ active: current === 'ongoing' }"
      >
         Ongoing
      </button>
   </nav>
</template>

<script>
export default {
   props: ['current'],
   methods: {
      updateFilter(by) {
         this.$emit('filterChange', by);
      },
   },
};
</script>

<style scoped>
.filter-nav button {
   background-color: none;
   padding: 8px;
   border-radius: 10px;
   border: none;
   color: #bbb;
   outline: none;
   font-size: 12px;
   text-transform: uppercase;
   margin-right: 10px;
   letter-spacing: 1px;
   font-weight: bold;
   cursor: pointer;
}

.filter-nav button.active {
   color: #555;
   background-color: #bbb;
}
</style>
