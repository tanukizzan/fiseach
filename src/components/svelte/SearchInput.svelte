<script>
  import { wordInput, inputRef } from './store';

  let inputElement;
  
  $: if (inputElement) {
    $inputRef = inputElement;
  }
</script>

<input bind:this={inputElement} bind:value={$wordInput} type="search" name="search" id="window" inputmode="search" />

<style>
  input[type="search"],
  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  #window {
    width: 100%;
    height: 2.4rem;
    line-height: 1em;
    font-size: 1.2rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: var(--search-bar-bg);
    padding: 0;
    margin: 0;
    outline: none;
    border: none;
    transition: 0.3s;
    color: var(--text-color);
    vertical-align: bottom;
  }

  /* autocomplete時の背景色無効 */
  @keyframes onAutoFillStart {
    from {
    }
    to {
    }
  }

  #window:-webkit-autofill {
    animation-name: onAutoFillStart;
    transition: background-color 50000s ease-in-out 0s;
  }
</style>