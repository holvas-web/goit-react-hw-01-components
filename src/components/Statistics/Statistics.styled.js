import styled from "styled-components";

export const StaticWrap = styled.div `
    max-width: 300px;
    margin: 30px auto;
   
    background-color: #ffffff;
    color: #1d1c1c;

    border: 1px solid #838282; 
    box-shadow: 
        0px 0px 6px 2px rgba(246,239,239,0.75);
        -webkit-box-shadow: 0px 0px 6px 2px rgba(246,239,239,0.75);
        -moz-box-shadow: 0px 0px 6px 2px rgba(246,239,239,0.75);
`;

export const StaticTitle = styled.h2 `
    padding: 40px;

    text-align: center; 
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
    
`;

export const StaticList = styled.ul `
    display: flex;
    justify-content: space-between;
    align-items: center; 

    border-radius: 0px 0px 2px 2px;
`;

export const StaticItem = styled.li `
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    
    padding: 13px;
    row-gap: 6px;

    /* border: 1px solid #453939; */

    :last-child {
        font-size: 18px;
        font-weight: 500;
    }
`;
