<template>
   <div class="container">
      <h2 v-if="winner">Winner: {{ winner }}</h2>
      <h2>Players move: {{ player }}</h2>
   </div>
</template>

<script>
//vue imports
import { ref, computed } from 'vue';

const lines = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6],
];

for (let i = 0; i < lines.length; i++) {
   const [a, b, c] = lines[i];
   if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
   }
}

export default {
   setup() {
      const player = ref('X');
      const squares = ref([
         ['', '', ''],
         ['', '', ''],
         ['', '', ''],
      ]);
      const winner = computed(() => calculateWinnter(squares.value.flat()));

      const move = (x, y) => {
         if (winner.value) return;
         squares.value[x][y] = player.value;
         player.value = player.value === 'O' ? 'X' : 'O';
      };

      const reset = () => {
         const player = ref('X');
         const squares = ref([
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
         ]);
      };

      return { winner, player, squares, move, reset };
   },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
   margin: 40px 0 0;
}
ul {
   list-style-type: none;
   padding: 0;
}
li {
   display: inline-block;
   margin: 0 10px;
}
a {
   color: #42b983;
}
</style>
