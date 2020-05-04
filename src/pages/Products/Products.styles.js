import styled from "styled-components";

const ViewProducts = styled.section`
    display: flex;
    align-items: center;
    min-height: 800px;
    padding: 0 20px;
    width: 100%;
    flex-direction: column;
`;


const Filter = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 40px 0 20px;
    cursor: pointer;
`;

const ProdutctIcon = styled.img`
    border: 1px solid #B84471;
    margin: 0 2%;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    `;

const HowToUse = styled.p`
    text-transform: uppercase;
    text-transform: bold;
    text-justify: center;
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    color: #B5B5B5;
    max-width: 600px;
    width: 100%;
    margin-top: 20px;
`;

const List = styled.div`
    display: flex;
    width: 100%;
    max-width: 800px;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px 0;
`;

const ClothesCard = styled.div`
    height: 260px;
    width: 180px;
    background-color: #fff;
    margin: 10px;
    border-radius: 10px;
    box-shadow: ${props => props.theme.shadows[0]}
`;

const Like = styled.img`
    cursor: pointer;
    width: 20px;
    height: 20px;
    margin: 10px 0 0 140px;
`;

const Clothes = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto 0;
    height: 50%;
`;

const Description = styled.p`
    display: flex;
    flex-direction: column;
    text-align: center;
    color:#B5B5B5;
    margin-top: 5px;
`;


export { ViewProducts, Filter, HowToUse, ProdutctIcon, List, ClothesCard, Like, Clothes, Description };