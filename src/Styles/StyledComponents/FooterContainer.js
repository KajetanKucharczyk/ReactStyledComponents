//IMPORT STYLED
import styled from 'styled-components'

//STATELESS STYLED COMPOENT
const FooterContainer = styled.div`
    width: 100%;
    height: ${({theme}) => theme.sizeStyles.footer.height}vh;
    background-color: ${({theme}) => theme.colorStyles.background.dark};
    color: ${({theme}) => theme.colorStyles.colors.white};
    line-height: ${({theme}) => theme.sizeStyles.footer.height}vh;
    text-align: center;
    font-size: ${({theme}) => theme.fontStyles.size.medium}vh;
    margin-top: 2vh;
`

export default FooterContainer