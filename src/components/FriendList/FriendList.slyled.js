import styled from "styled-components";

export const FriendsWrap = styled.ul `
    max-width: 300px;
    margin: 30px auto;
   
    background-color: #000000;
    color: #1d1c1c;
    font-weight: 500;
    font-size: large;

    :nth-child(1n + 1) {
        margin-top: 10px;
    }
`;

export const FriendsItem = styled.li `
    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding: 20px;
    gap: 20px;

    background-color: #ededed;
    box-shadow: 0px 4px 6px 1px rgba(241,231,231,0.75);
        -webkit-box-shadow: 0px 4px 6px 1px rgba(241,231,231,0.75);
        -moz-box-shadow: 0px 4px 6px 1px rgba(241,231,231,0.75);
`;

export const Avatar = styled.img `
    border-radius: 20%;
    border: 1px solid #1d1d1d1c;
    padding: 2px;
`;