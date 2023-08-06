import styled from "styled-components";

export const ProfileWrap = styled.div `
    max-width: 300px;

    margin: 30px auto;
    padding-top: 20px;

    background-color: #ededed;
    color: #1d1c1c;

    border: 2px solid #a2a2a2;
    border-radius: 4px;
    box-shadow: 
        0px 0px 8px 1px rgba(183,175,175,0.75);
        -webkit-box-shadow: 0px 0px 8px 1px rgba(183,175,175,0.75);
        -moz-box-shadow: 0px 0px 8px 1px rgba(183,175,175,0.75);
`;

export const Avatar = styled.img `
    border-radius: 100%;
    border: 1px solid #1d1d1d;
    background-color: tomato;

    width: 200px;
    margin: 0 auto;
    padding: 8px;
`;

export const Description = styled.div `
    text-align: center; 

    :nth-last-child(3) {
        padding-top: 40px;

        font-size: 20px;
        font-weight: bold;
    }
`;

export const UserList = styled.ul `
    display: flex;
    justify-content: space-around;

    background-color: #c7c5c5; 

    border-top: 2px solid #a2a2a2;
    border-radius: 0px 0px 2px 2px;
`;

export const ListItem = styled.li `
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px;

    :last-child {
        font-weight: bold;
    }

    `;

export const SpanItem = styled.span `
    border-right: 2px solid #a2a2a2;
    border-left: 2px solid #a2a2a2;

    padding: 20px;

    display: flex;
    flex-direction: column;

    :last-child {
        font-weight: bold;
    }
`;