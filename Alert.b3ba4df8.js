var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireab7b;e.register("kpBpK",(function(n,t){var i=e("5Zhzp");class o extends HTMLElement{#e=500;#n;#t='\n  <div id="alert-wrapper">\n        <main id="alert-box">\n          <slot></slot>\n        </main>\n    </div>\n  ';constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=i.alertStyle+this.#t,this.#n=this.shadowRoot.querySelector("#alert-wrapper")}connectedCallback(){setTimeout((()=>{this.removeAlert()}),this.#e)}removeAlert(){setTimeout((()=>{this.#n.style.opacity="0",this.#n.addEventListener("transitionend",this.remove)}),this.#e)}}customElements.define("fakeinsta-alert",o)})),e.register("5Zhzp",(function(e,n){var t,i,o,r;t=e.exports,i="alertStyle",o=()=>a,Object.defineProperty(t,i,{get:o,set:r,enumerable:!0,configurable:!0});const a="\n<style>\n      @keyframes show {\n        from {\n          opacity:0;\n        }\n        to {\n          opacity:1;\n        }\n      }\n\n      * {\n        box-sizing: border-box;        \n      }\n\n      #alert-wrapper {\n        pointer-events: none;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        z-index: 100;\n        display:flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        opacity: 1;\n        transition: 0.5s\n      }\n\n      #alert-box {\n        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;        \n        margin: 10px;\n        animation: show 0.3s;\n        padding: 1rem;\n        border: 2px rgba(0,0,0,0.4) solid;\n        width: min(90%,500px,fit-content);\n        text-align: center;\n        background: white;\n      }\n    \n    </style>"}));