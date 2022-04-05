class LoadingElement extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
            <style>
                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                .loading-container {
                    height: 100%;
                    margin: 20px 0;
                }
                .loading-icon {
                    animation: spin 1s linear infinite;
                    height: 100px;
                    width: 100px;
                    border-radius: 50%;
                    border: 2px solid #fff;
                    border-top: 2px solid #000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 auto;
                }

            </style>
            <div class="loading-container">
                <div class="loading-icon">
                    <span class="material-icons">
                        
                    </span>
                </div>
            </div>
    `;
	}

	connectedCallback() {
		this.shadowRoot.querySelector('.loading-container').style.display = 'flex';
	}
}

customElements.define('loading-element', LoadingElement);
