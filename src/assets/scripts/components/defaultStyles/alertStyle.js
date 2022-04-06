export const alertStyle = `
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
    
    </style>`;
