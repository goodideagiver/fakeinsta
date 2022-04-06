import { modalStyle } from './defaultStyles/modalStyle';
export class Modal extends HTMLElement {
	#componentHTML = `
  <div id="backdrop">
        <main id="modal-window">
            <slot>Sample text</slot>
            <button>Ok</button>
        </main>
    </div>
  `;

	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
		this.initHTML();

		this.shadowRoot
			.querySelector('button')
			.addEventListener('click', this.close.bind(this));

		this.shadowRoot
			.querySelector('#backdrop')
			.addEventListener(
				'click',
				evt => evt.target.id === 'backdrop' && this.close()
			);
	}

	initHTML() {
		this.shadowRoot.innerHTML = modalStyle + this.#componentHTML;
	}

	close() {
		this.remove();
	}
}

customElements.define('fakeinsta-modal', Modal);
