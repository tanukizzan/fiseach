<script>
  import { wordInput, inputRef } from './store';

  const clearInput = () => {
    $wordInput = '';
    if ($inputRef) {
      setTimeout(() => $inputRef.focus(), 0);
    }
  }
</script>

<button 
  type="button"
  class="clear-button"
  on:click={clearInput}
  aria-label="検索をクリア"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
</button>

<style>
  .clear-button {
    width: 2em;
    height: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 4px;
    color: var(--search-bar-icon);
    border-radius: 50%;
    transition: background-color 0.2s;
  }

  .clear-button:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .clear-button:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(10, 28, 41, 0.5);
  }
</style>