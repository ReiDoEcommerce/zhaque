import styled from 'styled-components'

export const Sucess = styled.section`
    text-align: center;
    color: var(--secondary-color);
    padding: 100px 0 150px;
    display: flex;
    flex-direction: column;

    .box-sucess{
        background-color: #fff;
        max-width: 450px;
        margin: 0 auto;
        border-radius: 10px;
        padding: 30px 33px 25px;
    }

    h2 {
        margin-bottom: 10px;
    }

    a {
        max-width: 400px;
        margin: 30px auto 0;
    }

    .link-boleto {
        max-width: 100%;
        display: inline-block;
        margin-top: 20px;
        color: var(--secundary-color);
        position: relative;

        &::after {
            content: "";
            width: 0;
            transition: 0.3s;
            height: 1px;
            background-color: var(--secundary-color);
            position: absolute;
            bottom: -2px;
            left: 0;
        }
    }

    .link-baixar {
        display: inline-flex;
        color: var(--secundary-color);
    }

    .link-boleto:hover {
        &::after {
            transition: 0.3s;
            width: 100%;
        }
    }




`