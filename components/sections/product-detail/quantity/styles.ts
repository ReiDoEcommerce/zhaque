import styled from "styled-components";

export const Quantity = styled.div`
        margin-bottom: 15px;
        position: relative;

        .loader {
          position: absolute;
          background-color: rgba(255,255,255,0.6);
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          cursor: not-allowed;
        }

        h5 {
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          button {
            background-color: transparent;
            border: 0;
            cursor: pointer;
          }
        }

        .numbers-list {
          display: grid;
          gap: 15px;
          grid-template-columns: repeat(3, 1fr);
          margin-bottom: 20px;

          button {
            width: 100%;
            height: 58px;
            border-radius: 10px;
            background-color: #00c755;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            border: 0;

            &:hover {
              background-color: var(--primary-color);
            }
          }
        }

        .quantity-total {
         
          .quantity {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 10px;
            border: 1px solid #000;
            height: 58px;

          button {
               border: 0;
               width: 48px;
               height: 100%;
               background-color: rgba(17, 101, 73, 10%);
               color: var(--primary-color);
            }
          }
        }
`