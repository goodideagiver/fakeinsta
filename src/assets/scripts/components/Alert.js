import { alertStyle } from './defaultStyles/alertStyle';

export class Alert extends HTMLElement {
	#hideDelay = 500;
	#alertWrapper;
	#componentHTML = `
  <div id="alert-wrapper">
        <main id="alert-box">
          <slot></slot>
        </main>
    </div>
  `;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = alertStyle + this.#componentHTML;

		this.#alertWrapper = this.shadowRoot.querySelector('#alert-wrapper');
	}

	connectedCallback() {
		setTimeout(() => {
			this.removeAlert();
		}, this.#hideDelay);
	}

	removeAlert() {
		setTimeout(() => {
			this.#alertWrapper.style.opacity = '0';
			this.#alertWrapper.addEventListener('transitionend', this.remove);
		}, this.#hideDelay);
	}
}

customElements.define('fakeinsta-alert', Alert);
