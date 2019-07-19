//IMPORT STYLED
import styled from 'styled-components'

//STATELESS STYLED COMPOENT
const HeaderContainer = styled.div`
    height: ${({theme}) => theme.sizeStyles.header.height}vh;
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: ${({theme}) => theme.colorStyles.background.white};
`

export default HeaderContainer