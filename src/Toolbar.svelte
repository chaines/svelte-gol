<script lang="ts">
  import board from './store/board';
  import { gameLoop } from './game';
  let isRunning = false;
  let interval = null

  const toggleRun = () => {
    if (isRunning) {
      clearInterval(interval);
      isRunning = false;
    } else {
      interval = setInterval(() => board.set(gameLoop($board)), 1);
      isRunning = true;
    }
  }
</script>

<div class="toolbar">
  <button on:click={board.randomizeBoard}>
    Randomize Grid
  </button>
  <button on:click={toggleRun}>
    {isRunning ? 'Stop' : 'Start'}
  </button>
  <button on:click={() => board.set(gameLoop($board))}>
    Step
  </button>
</div>

<style lang="scss">
  .toolbar {
    width: 100%;
    height: 100px;
    background: #272b30;
  }
  /* Empty comment to test commit signing */
</style>