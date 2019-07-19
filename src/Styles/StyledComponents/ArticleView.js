//IMPORT STYLED
import styled from 'styled-components'

//STATELESS STYLED COMPOENT
const ImageView = styled.img`
    width: 100vw;
`
const ContentView = styled.div`
    padding-left: 5vw;
    padding-right: 5vw;    

    ${({theme}) => theme.mediaQueries.mobile} {
        width: 90vw;
        margin-left: 0px;
    }

    ${({theme}) => theme.mediaQueries.dektop} {
        width: 800px;
        margin-left: calc((100vw - 800px) / 2);
    }
`
const TagView = styled.div`
    font-size: ${({theme}) => theme.fontStyles.size.small}vh;
    font-weight: bold;
    text-transform: uppercase;
    padding-top: 2vh;
`
const TitleVew = styled.div`
    font-size: ${({theme}) => theme.fontStyles.size.big}vh;
    font-weight: bold;
    padding-bottom: 2vh;
`
const SubtitleView = styled.div`
    font-size: ${({theme}) => theme.fontStyles.size.medium}vh;
    color: ${({theme}) => theme.fontStyles.colors.light};
    font-family: ${({theme}) => theme.fontStyles.fonts.light};
    font-weight: bold;
    padding-bottom: 2vh;
`
const AuthorView = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2vh;
`
const AuthorImageView = styled.img`
    width: 10vmax;
    border-radius: 5vmax;
`
const AuthorNameView = styled.div`
    width:auto;
    font-size: ${({theme}) => theme.fontStyles.size.medium + 0.5}vh;
    font-weight: bold;
    color: ${({theme}) => theme.fontStyles.colors.dark};
    margin-left: 25px;    

    & span{
        color: ${({theme}) => theme.fontStyles.colors.black}; 
        border-bottom: 0.5vh solid ${({theme}) => theme.fontStyles.colors.dark};
    }
`
const TextView = styled.div`
    font-size: ${({theme}) => theme.fontStyles.size.small}vh;
    padding-bottom: 2vh;
    text-align: justify;
`

export {
    ImageView, 
    ContentView, 
    TagView, 
    TitleVew, 
    SubtitleView, 
    AuthorView,
    AuthorImageView,
    AuthorNameView, 
    TextView
}