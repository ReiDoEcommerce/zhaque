import styled from "styled-components";


export const SelectAddress = styled.div`

.address-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-bottom: -15px;


    button {
        border: 0;
        background-color: transparent;
        color: var(--primary-color);
    }

    button:hover {
        color: var(--secundary-color);
    }

    button:last-child {
       text-decoration: underline !important;
    }

}

@media only screen and (max-width:1024px) {
    .address-actions {
        margin-bottom: -7px;
    }
}

@media only screen and (max-width:768px) {
    .address-actions {
        gap: 5px;

        button {
            font-size: 14px;
        }
    }
}

@media only screen and (max-width:500px) {
    .address-actions {
        gap: 0;
        
        button {
            font-size: 10px;
        }
    }
}

`