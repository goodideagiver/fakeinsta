import { alertStyle } from './defaultStyles/alertStyle';

export class Alert extends HTMLElement {
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
