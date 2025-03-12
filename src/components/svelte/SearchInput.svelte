<script>
  import { wordInput, inputRef, performDefaultSearch } from "./store";

  let inputElement;

  $: if (inputElement) {
    $inputRef = inputElement;
  }

  function handleKeydown(event) {
    if (event.key === "Enter") {
      // エンターキーが押されたらデフォルト検索を実行
      event.preventDefault();
      performDefaultSearch();
    }
  }

  // テキストエリアの高さを自動調整する
  function setTextareaHeight() {
    if (!inputElement) return;

    inputElement.style.height = "auto";
    inputElement.style.height = `${inputElement.scrollHeight - 24}px`;
  }
  // wordInputが変更されたときに高さを再計算する
  $: $wordInput, setTimeout(setTextareaHeight, 0);
</script>

<textarea
  bind:this={inputElement}
  bind:value={$wordInput}
  on:keydown={handleKeydown}
  type="search"
  name="検索エリア"
  title="検索エリア"
  id="window"
  inputmode="search"
  rows="1"
>
</textarea>

<style>
  #window {
    resize: none;
    overflow-y: none;
    scrollbar-width: none;
    width: 100%;
    height: auto;
    min-height: 1.1em;
    max-height: auto;
    line-height: 1.1em;
    font-size: 1.1em;
    font-family: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    vertical-align: middle;
    background-color: var(--search-bar-bg);
    padding: 12px 0;
    margin: 0;
    border-radius: 0;
    outline: none;
    border: none;
    transition: 0.2s;
    color: var(--text-color);
  }
  #window::-webkit-scrollbar {
    display: none;
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
