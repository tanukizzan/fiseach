<script>
  import { performDefaultSearch } from "./store";
</script>

<button
  type="button"
  class="submit-button"
  onclick={performDefaultSearch()}
  aria-label="検索実行"
>
  <svg
    width="16"
    height="16"
    viewBox="0 0 88 88"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2; rotate: -45deg;"
  >
    <g transform="matrix(0.197138,0,0,0.197138,0.000364,-0.000636)">
      <clipPath id="_clip1">
        <rect x="0" y="0" width="444" height="444" />
      </clipPath>
      <g clip-path="url(#_clip1)">
        <g id="Artboard2" transform="matrix(1,0,0,1,-2493.49,-319.048)">
          <rect
            x="2060.92"
            y="0"
            width="1281.61"
            height="1080"
            style="fill:none;stroke:black;stroke-width:1px;"
          />
          <g transform="matrix(6.29727,3.06036e-32,0,6.29727,2405.75,266.142)">
            <g id="arrow_right_alt_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg">
              <path
                d="M13.933,37.209L61.436,37.209L40.224,14.213L57.253,14.213L84.44,43.686L57.271,73.141L40.224,73.16L61.436,50.164L13.933,50.164L13.933,37.209Z"
                style="fill: #ffffff;"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
</button>

<style>
  .submit-button {
    height: 100%;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--submit-button);
    border: none;
    border-radius: 0 5px 5px 0;
    padding: 0 13px;
    transition: .2s;
    cursor: pointer;
    flex-shrink: 0;
  }

  .submit-button:hover,
  .submit-button:focus {
    opacity: 0.8;
  }
</style>
