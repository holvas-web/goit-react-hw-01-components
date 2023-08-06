import styled from "styled-components";

export const TransactionsTable = styled.table `
    width: 70%;;
    margin: 30px auto;
    border-collapse: collapse;

    background-color: #ffffff;
    color: #1d1d1d;

    border-radius: 4px;
    box-shadow: 0px 8px 6px -4px rgba(241,231,231,0.75);
        -webkit-box-shadow: 0px 8px 6px -4px rgba(241,231,231,0.75);
        -moz-box-shadow: 0px 8px 6px -4px rgba(241,231,231,0.75);

    th, td {
        padding: 10px 15px;

        border-right: 0.5px solid #ddd;
    }

    /* thead tr th:first-child, tbody tr td:first-child {
	    border-left: none;
    }
    thead tr th:last-child, tbody tr td:last-child {
	    border-right: none;
    } */
    
    tr:nth-child(even) {
        background-color: lightgray; /* Колір для парних рядків */
    }

    thead {
        background: #3578e5;

        text-transform: uppercase;
        color: #ffffff;
    }

    th {
        padding: 10px 15px;
    }

    /* tbody {
        text-align: center;
        border-left: 4px solid #ddd;
        border-right: 4px solid #ddd;
    } */
`;