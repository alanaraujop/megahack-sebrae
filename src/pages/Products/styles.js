import styled from "styled-components";
import fundo from "../../assets/images/fundo.png";

const ViewProducts = styled.section`
    display: flex;
    align-items: center;
    background:url(${fundo});
    min-height: 800px;
    width: 100%;
    flex-direction: column;
`;

const Logo = styled.img`
    width: 208px;
    height: 89px;
    margin-top: 20px;
`;

const Filter = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 20px 0;
`;


const ProdutctIcon = styled.img`
    border: 1px solid #B84471;
    cursor: pointer;
    margin: 0 2%;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    `;

const Description = styled.p`
    text-transform: uppercase;
    text-transform: bold;
    text-justify: center;
    text-align: center;
    font-weight: 500;
    color: #B5B5B5;
    margin-top: 20px;
`;

const List = styled.div`
    display: flex;
    width: 100%;
    max-width: 800px;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 0;
`;

const ClothesCard = styled.div`
    height: 200px;
    width: 180px;
    background-color: #fff;
    margin: 10px;
    border-radius: 10px;
    -webkit-box-shadow: 4px 4px 20px 2px rgba(144, 137, 130, 0.8);
    -moz-box-shadow: 4px 4px 20px 2px rgba(144, 137, 130, 0.8);
    box-shadow: 4px 4px 20px 2px rgba(144, 137, 130, 0.8);
`;

const Clothes = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px auto 0;
    height: 80%;
    width: 80%;
`;

export { ViewProducts, Logo, Filter, Description ,ProdutctIcon, List, ClothesCard, Clothes };