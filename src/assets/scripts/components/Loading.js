import { loadingStyle } from './defaultStyles/loadingStyle';

class LoadingElement extends HTMLElement {
	#componentHTML = `
    <div class="loading-container">
                <div class="loading-icon">
                    <span class="material-icons">
                        
                    </span>
                </div>
            </div>
    `;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = loadingStyle + this.#componentHTML;
	}

	connectedCallback() {
		this.shadowRoot.querySelector('.loading-container').style.display = 'flex';
	}
}

customElements.define('loading-element', LoadingElement);
