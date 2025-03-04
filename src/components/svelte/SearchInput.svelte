<script>
  import { get } from "svelte/store";
  import { wordInput, inputRef } from "./store";

  let inputElement;

  $: if (inputElement) {
    $inputRef = inputElement;
  }

  // エンターキー用検索処理（仮）→好きなサイトを選べるようにしたい
  const performDefaultSearch = () => {
  const searchWord = get(wordInput);
  const encodedQuery = encodeURIComponent(searchWord.replace(/^[\p{C}\p{Z}]+|[\p{C}\p{Z}]+$/gu, ""));
  const url = searchWord 
    ? `https://www.google.co.jp/search?q=${encodedQuery}` 
    : 'https://www.google.co.jp/';
    
  window.open(url);
};

  function handleKeydown(event) {
    if (event.key === "Enter") {
      // エンターキーが押されたらデフォルト検索を実行
      event.preventDefault();
      performDefaultSearch();
    }
  }
</script>

<input
  bind:this={inputElement}
  bind:value={$wordInput}
  on:keydown={handleKeydown}
  type="search"
  name="search"
  id="window"
  inputmode="search"
/>

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
