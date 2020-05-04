import BermudaOne from "../../assets/images/clothes/BERMUDA01.png";
import BermudaTwo from "../../assets/images/clothes/BERMUDA02.png";
import BlusaoOne from "../../assets/images/clothes/BLUSA01.png";
import CalcaoOne from "../../assets/images/clothes/CALCA01.png";
import CalcaoTwo from "../../assets/images/clothes/CALCA02.png";
import CalcaoFor from "../../assets/images/clothes/CALCA04.png";
import CamisaOne from "../../assets/images/clothes/CAMISA01.png";
import CamisaTwo from "../../assets/images/clothes/CAMISA02.png";
import CamisaFive from "../../assets/images/clothes/CAMISA05.png";
import CamisaSix from "../../assets/images/clothes/CAMISA06.png";
import SaiaOne from "../../assets/images/clothes/SAIA01.png";
import SaiaTwo from "../../assets/images/clothes/SAIA03.png";

const Products = [
    {
      id: 1,
      image: BermudaOne,
      name: "Bermuda Branca",
      description: "Bermuda Branca btn Black",
      category: "Partes de Baixo",
      price: 25.00,
      cod: "13123",
      profiles: [2, 3, 5] 
    },
    {
        id: 2,
        image: BermudaTwo,
        name: "Bermuda Xadrez",
        description: "Bermuda Xadrez Azul",
        category: "Partes de Baixo",
        price: 35.00,
        cod: "13124",
        profiles: [2, 3, 5]
      },
      {
        id: 3,
        image: BlusaoOne,
        name: "Vestido blue White",
        description: "Vestido Azul com bolinha branca",
        category: "Vestido",
        price: 69.90,
        cod: "14121",
        profiles: [2, 3, 5]  
      },
      {
        id: 4,
        image: CalcaoOne,
        name: "Calça Preta Social",
        description: "Calça Preta Social colection 2020",
        category: "Partes de Baixo",
        price: 89.90,
        cod: "15121",
        profiles: [2, 3, 5] 
      },
      {
        id: 5,
        image: CalcaoTwo,
        name: "Calça Jeans Strech",
        description: "Calça Jeans Strech Blue White",
        category: "Partes de Baixo",
        price: 89.90,
        cod: "15122",
        profiles: [2, 3, 5]  
      },
      {
        id: 6,
        image: CalcaoFor,
        name: "Calça Rosa Mod",
        description: "Calça Rosa Mod Colection 2020",
        category: "Partes de Baixo",
        price: 89.90,
        cod: "15123",
        profiles: [2, 3, 5]  
      },
      {
        id: 7,
        image: CamisaOne,
        name: "Camisa Social Azul",
        description: "Camisa Social Azul Marinho",
        category: "Camisa",
        price: 89.90,
        cod: "16121",
        profiles: [2, 3, 5]  
      },
      {
        id: 8,
        image: CamisaTwo,
        name: "Camisa Branca Estampada",
        description: "Camisa Branca com estampa Color",
        category: "Camisa",
        price: 30.90,
        cod: "16122",
        profiles: [2, 3, 5]  
      },
      {
        id: 9,
        image: CamisaFive,
        name: "Camisa Show mere",
        description: "Camisa Show mere 2019",
        category: "Camisa",
        price: 29.90,
        cod: "16123",
        profiles: [2, 3, 5]  
      },
      {
        id: 10,
        image: CamisaSix,
        name: "Camisa Color Brega",
        description: "Camisa Color Brega Standart",
        category: "Camisa",
        price: 89.90,
        cod: "16127",
        profiles: [2, 3, 5]  
      },
      {
        id: 11,
        image: SaiaOne,
        name: "Saia Preta c/ Fenda",
        description: "Saia Preta c/ Fenda mod",
        category: "Partes de Baixo",
        price: 89.90,
        cod: "19121",
        profiles: [2, 3, 5]  
      },
      {
        id: 12,
        image: SaiaTwo,
        name: "Saia Preta Corr",
        description: "Saia Preta Corr - lançamento 2020",
        category: "Partes de Baixo",
        price: 89.90,
        cod: "19122",
        profiles: [2, 3, 5]  
      },
  ];

export default Products;