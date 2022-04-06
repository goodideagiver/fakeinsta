export class Modal extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
		this.initHTML();
		this.shadowRoot
			.querySelector('button')
			.addEventListener('click', this.close.bind(this));
		this.shadowRoot.querySelector('#backdrop').addEventListener('click', e => {
			if (e.target.id === 'backdrop') {
				this.close();
			}
		});
	}

	initHTML() {
		this.shadowRoot.innerHTML = `
    <style>
      * {
        box-sizing: border-box;
        font-size: 1.2rem;
      }

      #backdrop {
        position:absolute;
        display: grid;
        place-items: center;
        width: 100%;
        height: 100%;        
        z-index: 100;
        background: rgba(0,0,0,0.5);
      }

      #modal-window {
        display:flex;
        flex-direction:column;
        justify-content: space-between;
        height: min(90%,fit-content);
        width: min(90%,500px);
        background-color:white;
        padding: 2rem;
        gap: 20px;
      }

      #modal-window button {
        background-color: lightblue;
        border: 0;
        cursor: pointer;
        padding: 0.65rem;
      }

      #modal-window button:hover {
        background: gray;
      }

      ::slotted() {
        font-size: 2rem;
      }



    </style>
    <div id="backdrop">
        <main id="modal-window">
            <slot>Sample text</slot>
            <button>Ok</button>
        </main>
    </div>`;
	}

	connectedCallback() {}

	close() {
		this.remove();
	}

	disconnectedCallback() {}
}

customElements.define('fakeinsta-modal', Modal);
