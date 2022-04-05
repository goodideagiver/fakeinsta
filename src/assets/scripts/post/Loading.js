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
                @keyframes fading {
                    0% {
                        background-color: rgba(0, 0, 0, 0);
                    }
                    50% {
                        background-color: rgba(0, 0, 0, 0.1);
                    }
                    100% {
                        background-color: rgba(0, 0, 0, 0);
                    }
                }

                
                .loading-container {
                    height: 100%;
                    margin: 20px 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: fading 1.0s linear infinite;
                }
                .loading-icon {
                    animation: spin 1.5s linear infinite;
                    height: 100px;
                    width: 100px;
                    border-radius: 50%;
                    border: 2px solid transparent;
                    border-top: 2px solid #000;
                    border-bottom: 2px solid #000;
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
