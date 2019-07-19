//IMPORT STYLED
import styled from 'styled-components'

//STATELESS STYLED COMPOENT

const MenuButtonStyle = styled.div`
    position: absolute; 
    top: 0px;
    left: 0px;
    width: ${({theme}) => theme.sizeStyles.header.height}vh;
    height: ${({theme}) => theme.sizeStyles.header.height}vh;
`
const TitleStyle = styled.div`
    position: absolute; 
    top: 0px;
    left: ${({theme}) => theme.sizeStyles.header.height}vh;
    font-family: ${({theme}) => theme.fontStyles.fonts.title};
    font-size: ${({theme}) => theme.fontStyles.size.extraBig}vh;
    line-height: ${({theme}) => theme.sizeStyles.header.height}vh;
    margin-left: 20px;

    ${({theme}) => theme.mediaQueries.mobile}{
        margin-left: 20px
    }
    ${({theme}) => theme.mediaQueries.desktop}{
        margin-left: calc((100vw - 800px) / 2 - 20px)
    }
`
const ActionButton = styled.div`
    position: absolute; 
    top: 0px;
    right: 0px;
    width: ${({theme}) => theme.sizeStyles.header.height}vh;
    height: ${({theme}) => theme.sizeStyles.header.height}vh;
`

export {MenuButtonStyle, TitleStyle, ActionButton}