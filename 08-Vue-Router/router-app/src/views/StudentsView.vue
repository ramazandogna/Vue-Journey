<template>
   <div>
      <h1>Öğrenciler</h1>
      <div
         v-for="student in students"
         :key="student.id"
      >
         <p>{{ student.name }}</p>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         students: [
            { id: 1, name: 'Ramazan', not: 100 },
            { id: 2, name: 'Oğuz', not: 25 },
            { id: 3, name: 'Melek', not: 35 },
            { id: 4, name: 'Reyhan', not: 85 },
         ],
      };
   },
};
</script>

<style lang="scss" scoped></style>
