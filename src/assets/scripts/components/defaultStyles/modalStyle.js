export const modalStyle = `
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
    </style>`;
