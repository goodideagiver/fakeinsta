export const loadingStyle = `
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
                @keyframes bg-move {
                    from {
                        background-position: left;
                    }
                    to {
                        background-position: right;
                    }
                }
                
                .loading-container {
                    height: 100%;
                    margin: 20px 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    bac
                     background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 30%, rgba(231,231,231,1) 50%, rgba(255,255,255,1) 70%); 
                    background-size: 600% 600%;
                    animation: bg-move 1s linear infinite;
                }
                .loading-icon {
                    animation: spin 1.5s linear infinite;
                    height: 100px;
                    width: 100px;
                    border-radius: 50%;
                    border: 2px solid transparent;
                    border-top: 2px solid gray;
                    border-bottom: 2px solid gray;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 auto;
                }
            </style>`;