<script>
  import { wordInput, inputRef } from './store';

  const clearInput = () => {
    $wordInput = '';
    if ($inputRef) {
      setTimeout(() => $inputRef.focus(), 0);
    }
  }
</script>

{#if $wordInput && $wordInput.length > 0}
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
{/if}

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
    margin-right: 0.75em;
    color: var(--search-bar-icon);
    transition: .2s;
  }

  .clear-button:hover,
  .clear-button:focus {
    opacity: 0.8;
  }
</style>