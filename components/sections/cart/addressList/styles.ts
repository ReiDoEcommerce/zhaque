import styled from "styled-components";

export const AddressList = styled.div`
  .top-list-address {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 20px;

    h3 {
      color: var(--secundary-color);
      margin-bottom: 0;
    }

    button {
      background-color: transparent;
      border: 0;

      svg {
        fill: var(--primary-color);
        width: 20px;
        height: auto;
        transition: 0.3s;
      }
    }

    button:hover {
      svg {
        fill: var(--secundary-color);
      }
    }
  }

  .top-list-address + * {
    height: 250px;
    padding-right: 10px;
    overflow-y: auto;
    position: relative;
  }

  .top-list-address + *::-webkit-scrollbar {
    width: 6px;
  }

  .top-list-address + *::-webkit-scrollbar-thumb {
    background: var(--yellow);
  }

  .top-list-address + *::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  @media only screen and (max-width:1024px) {
    .top-list-address {
      margin-bottom: 5px;
    }
  }

 
`;
