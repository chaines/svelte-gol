<script lang="ts">
  import board from "./store/board";
</script>

<div class="grid">
  {#each $board as row, i}
    <div class="row">
      {#each row as cell, j}
        <div 
          class={`cell ${cell ? 'alive' : 'dead'}`}
          on:click={() => board.toggleCell(i, j)}
        ></div>
      {/each}
    </div>
  {/each}
</div>

<style lang="scss">
  .grid {
    border: 1px solid #ddd;
    width: min-content;
    margin: 20px auto;

    .cell {
      width: 2px;
      height: 2px;
      display: inline-block;
      &:not(:last-child) {
        border-right: 1px solid #ddd;
      }

      &.alive {
        background: #aaa;
      }
    }

    .row {
      display: flex;
      &:not(:last-child) {
        border-bottom: 1px solid #ddd;
      }
    }
  }
</style>