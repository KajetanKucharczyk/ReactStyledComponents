//IMPORT STYLED
import styled from 'styled-components'

//STATELESS STYLED COMPOENT
const HashtagField = styled.div`
    height: ${({theme}) => theme.sizeStyles.hashtagField.height}vh;
    line-height: ${({theme}) => theme.sizeStyles.hashtagField.height}vh;
    & >  div{
        width: calc(100% / ${props => props.count});
    } 

    ${({theme}) => theme.mediaQueries.mobile} {
        width: 90vw;
        margin-left: 0px;
        padding-left: 5vh;
        padding-right: 5vh;
    }

    ${({theme}) => theme.mediaQueries.desktop} {
        width: 800px;
        margin-left: calc((100vw - 800px) / 2);
        padding-left: 5vh;
        padding-right: 5vh;
    }
`
const Hashtag = styled.div`
    float: left;
    text-align: center;
    font-size: ${({theme}) => theme.fontStyles.size.medium}vh;
    font-family: ${({theme}) => theme.fontStyles.fonts.light};
`
const ArticlesField = styled.div`
    
`

export {HashtagField, Hashtag, ArticlesField}