//IMPORT STYLED
import styled from 'styled-components'

//STATELESS STYLED COMPOENT
const ContentContainer = styled.div`
    padding-top: ${({theme}) => theme.sizeStyles.header.height}vh;
    height: auto;
`

export default ContentContainer