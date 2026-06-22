import styled from 'styled-components';

export const Sugestao = styled.div `
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%) rotate(180deg);
    writing-mode: vertical-lr;
    background-color: #46B6EC;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;

    a {
        text-decoration: none;
        padding: 15px 12px;
        width: 100%;
        font-size: 14px;
        color: inherit;

        &:hover {
            background-color: #1155bb;
            color: #FFF9F8;
        }

    }

`