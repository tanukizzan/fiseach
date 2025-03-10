import { get } from "svelte/store";
import { writable } from 'svelte/store';

export const wordInput = writable('');
export const inputRef = writable(null);

// SearchBar・エンターキー用検索処理（仮）→好きなサイトを選べるようにしたい
export const performDefaultSearch = () => {
  const searchWord = get(wordInput);
  const encodedQuery = encodeURIComponent(
    searchWord.replace(/^[\p{C}\p{Z}]+|[\p{C}\p{Z}]+$/gu, "")
  );
  const url = searchWord
    ? `https://www.google.co.jp/search?q=${encodedQuery}`
    : "https://www.google.co.jp/";

  window.open(url);
};
