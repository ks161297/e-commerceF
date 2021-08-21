import im1 from '../images/pc1.jpg'
import im2 from '../images/pc2.jpg'
import im3 from '../images/pc3.jpg'
import { ProductsContainer, ProductsH1,StarIcon, ProductsWrapper,ProductsIcon, ProductsH2, ProductsP, ProductsCard } from './general'
const Products = () => {
    return (
        <ProductsContainer>
            <ProductsH1>Estos son algunos de nuestros productos
                <StarIcon/>
            </ProductsH1>
            <ProductsWrapper>
                <ProductsCard>
                    <ProductsIcon src={im1}/>
                    <ProductsH2 to='/productos'>Box 1</ProductsH2>
                    <ProductsP> Para una fecha especial.</ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={im2}/>
                    <ProductsH2 to='/productos'>Box 2</ProductsH2>
                    <ProductsP> Para una fecha especial.</ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={im3}/>
                    <ProductsH2 to='/productos'>Box 3</ProductsH2>
                    <ProductsP>  Para una fecha especial.</ProductsP>
                </ProductsCard>
             
            </ProductsWrapper>
        </ProductsContainer>
    )
}

export default Products
