export class Alert extends HTMLElement {
	#alertWrapper;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
    <style>
      @keyframes show {
        from {
          opacity:0;
        }
        to {
          opacity:1;
        }
      }

      * {
        box-sizing: border-box;        
      }

      #alert-wrapper {
        pointer-events: none;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 100;
        display:flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        opacity: 1;
        transition: 0.5s
      }

      #alert-box {
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;        
        margin: 10px;
        animation: show 0.3s;
        padding: 1rem;
        border: 2px rgba(0,0,0,0.4) solid;
        width: min(90%,500px,fit-content);
        text-align: center;
        background: white;
      }
    
    </style>


    <div id="alert-wrapper">
        <main id="alert-box">
          <slot></slot>
        </main>
    </div>
    `;
		this.#alertWrapper = this.shadowRoot.querySelector('#alert-wrapper');
	}

	connectedCallback() {
		setTimeout(() => {
			this.removeAlert();
		}, 500);
	}

	removeAlert() {
		setTimeout(() => {
			this.#alertWrapper.style.opacity = '0';
			this.#alertWrapper.addEventListener('transitionend', () => {
				this.remove();
			});
		}, 500);
	}
}

customElements.define('fakeinsta-alert', Alert);
