//IMPORT STYLED
import styled from 'styled-components'

//STATELESS STYLED COMPOENT
const ArticleStyle = styled.div`
    cursor: pointer;
    padding-left: 5vw;
    padding-right: 5vw;
    border-bottom: 2px dotted ${({theme}) => theme.colorStyles.colors.light};
    padding-top: 2vh;    

    ${({theme}) => theme.mediaQueries.mobile} {
        width: auto;
        margin-left: 0px;
    }

    ${({theme}) => theme.mediaQueries.desktop} {
        width: 800px;
        margin-left: calc((100vw - 800px) / 2);
    }
`


const ArticleStyleBig = styled.div``
const ImageBig = styled.img`
    width: 100%;
`
const ArticleContentBig = styled.div`
`
const TagBig = styled.div`
    font-size: ${({theme}) => theme.fontStyles.size.small}vh;
    font-weight: bold;
    text-transform: uppercase;
    padding-top: 2vh;
`
const TitleBig = styled.div`
    font-size: ${({theme}) => theme.fontStyles.size.big}vh;
    font-weight: bold;
    padding-bottom: 2vh;
`


const ArticleStyleNormal = styled.div`
    display: flex;
    align-items: center;
`
const ArticleContentNormal = styled.div`
    width: 70%;    
`
const ArticleImageNormal = styled.div`
    width: 30%;
`
const ImageNormal = styled.img`
    width: 100%;
`

export {
    ArticleStyle, 
    ArticleStyleBig, 
    ImageBig, 
    TagBig,
    TitleBig,
    ArticleContentBig,
    ArticleStyleNormal,
    ArticleContentNormal,
    ArticleImageNormal,
    ImageNormal
}