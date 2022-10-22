import styled from "styled-components"
import { darken } from "polished";

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    .modal {
        max-width: 430px;
        width: calc(100% - 30px);
        margin: 0 auto;
        padding: 25px;
        background-color: #fff;
        border-radius: 10px;
        position: relative;
        z-index: 3;

        p {
            margin-bottom: 10px;
        }

        .close {
            height: 20px;
            width: auto;
            fill: var(--secundary-color);
            position: absolute;
            top: 20px;
            right: 20px;
            cursor: pointer;
            transition: 0.3s;
        }

        .close:hover {
            fill:  var(--primary-color);
        }
    }

    .bg {
        background-color: rgba(0,0,0,0.4);
        min-height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    }
`