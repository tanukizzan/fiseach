<script>
  import { wordInput } from "./store";

  const { 
    type,
    name,
    domain,
    subDomain,
    directory,
    queryBefore,
    queryAfter,
    queryAlt
  } = $props();

  let wordInputEncoded = $derived(encodeURIComponent($wordInput.replace(/^[\p{C}\p{Z}]+|[\p{C}\p{Z}]+$/gu, "")));
  let wordInputEncodedHash = $derived(encodeURIComponent($wordInput.replace(/^#+|[\p{C}\p{Z}]/gu, '')));
  let wordInputEncodedAt = $derived(encodeURIComponent($wordInput.replace(/^@+|[\p{C}\p{Z}]/gu, '')));

  const searchQuery1 = $derived(
    $wordInput
      ? `https://${domain}${queryBefore}${wordInputEncoded}`
      : `https://${domain}`
  );
  const searchQuery2 = $derived(
    $wordInput
      ? `https://${domain}${queryBefore}${wordInputEncoded}${queryAfter}`
      : `https://${domain}${directory}`
  );
  const searchQuery3 = $derived(
    $wordInput
      ? `https://${domain}${directory}${queryBefore}${wordInputEncoded}${queryAfter}`
      : `https://${domain}${directory}`
  );
  const searchQuery4 = $derived(
    $wordInput
      ? `https://${subDomain}${domain}${queryBefore}${wordInputEncoded}`
      : `https://${domain}`
  );
  const searchQuery5 = $derived(
    $wordInput
      ? `https://${domain}${queryBefore}${wordInputEncoded}${queryAfter}`
      : `https://${domain}`
  );
  const searchQuery6 = $derived(() => {
    if ($wordInput.match(/^#/)) {
      return `https://${domain}${queryAlt}${wordInputEncodedHash}`;
    } else if ($wordInput.match(/^@/)) {
      return `https://${domain}${wordInputEncodedAt}`;
    } else if ($wordInput) {
      return `https://${domain}${queryBefore}${wordInputEncoded}`;
    } else {
      return `https://${domain}`;
    }
  });
  const searchUrl = () => {
    switch (true) {
      case (type === 1):
        return searchQuery1;
        break;
      case (type === 2):
        return searchQuery2;
        break;
      case (type === 3):
        return searchQuery3;
        break;
      case (type === 4):
        return searchQuery4;
        break;
      case (type === 5):
        return searchQuery5;
        break;
      case (type === 6):
        return searchQuery6();
        break;
      default:
        console.log("No search query");
      return "";
    }
  };
</script>

<a href={searchUrl()} target="_blank" rel="noopener noreferrer">{name}</a>

<style>
  a {
    display: inline-block;
    width: auto;
    min-width: 2.4em;
    height: auto;
    text-align: center;
    align-items: center;
    background-color: var(--button-color);
    color: var(--button-text-color);
    text-decoration: none;
    padding: 0.6em 0.9em;
    margin-right: 0.5em;
    border-radius: 6px;
    flex-shrink: 0;
  }
</style>