<template>
   <div class="container">
      <h2 v-if="winner">Winner: {{ winner }}</h2>
      <h2 v-else>Players move: {{ player }}</h2>
      <button
         @click="reset"
         class="btn btn-success mb-3"
      >
         Reset
      </button>

      <div
         v-for="x in 3"
         :key="x"
         class="row"
      >
         <button
            v-for="y in 3"
            :key="y"
            class="square"
            @click="move(x - 1, y - 1)"
         >
            {{ squares[x - 1][y - 1] }}
         </button>
      </div>
      <h2 class="mt-5">History</h2>
      <div
         v-for="(game, idx) in history"
         :key="idx"
      >
         Game {{ idx + 1 }}: {{ game }} won
      </div>
   </div>
</template>

<script>
//vue imports
import { ref, computed, watch, onMounted } from 'vue';

const calculateWinner = (squares) => {
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

   return null;
};

export default {
   name: 'TicTacToeBoard',
   setup() {
      const player = ref('X');
      const squares = ref([
         ['', '', ''],
         ['', '', ''],
         ['', '', ''],
      ]);
      const winner = computed(() => calculateWinner(squares.value.flat()));

      const move = (x, y) => {
         if (winner.value) return;
         squares.value[x][y] = player.value;
         player.value = player.value === 'O' ? 'X' : 'O';
      };

      const reset = () => {
         player.value = 'X'; // Burada ref kullanmadan direkt değeri atıyoruz.
         squares.value = [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
         ];
      };

      const history = ref([]);
      watch(winner, (current, previous) => {
         if (current && !previous) {
            history.value.push(current);
            localStorage.setItem('history', JSON.stringify(history.value));
         }
      });

      onMounted(() => {
         history.value = JSON.parse(localStorage.getItem('history')) || [];
      });

      return { winner, player, squares, move, reset, history };
   },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
   margin: 0 auto;
}
.square {
   background: #fff;
   border: 1px solid #999;
   float: left;
   font-size: 70px;
   font-weight: bold;
   line-height: 34px;
   height: 100px;
   margin-right: -1px;
   margin-top: -1px;
   padding: 0;
   text-align: center;
   width: 100px;
}
</style>
