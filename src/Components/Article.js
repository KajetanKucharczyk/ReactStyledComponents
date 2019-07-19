import React, {Component} from "react"
import $ from 'jquery';

//IMPORT STYLED COMPONENTS
    //MAIN STYLED COMPONENT
    import {
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
    } from "../Styles/StyledComponents/Article"

class Article extends Component {

    constructor(props){

        super(props)

        //STATE:
            //ARTICLE TO STORE CLICKED ARTICLE

        this.state = {
            article: null
        }

    }  

    openArticle = (id) => {

        this.props.click(id)

    }
    
    render() {  

        //PREPARE DATA
        let {id, type, title, subtitle, tags, authorImage, authorName, image, text} = this.props.data

        console.log(this.props)

        if(type === `big`) {

            //FEATURED ARTICLE

            return(

                <ArticleStyle onClick = {() => this.openArticle(id)}>
    
                    <ArticleStyleBig>

                        <ImageBig alt = "" src = {image}></ImageBig>

                        <ArticleContentBig>

                            <TagBig>{tags}</TagBig>
                            <TitleBig>{title}</TitleBig>

                        </ArticleContentBig>

                    </ArticleStyleBig>

                </ArticleStyle>
    
            )  

        }

        if(type === `normal`) {

            //NORMAL ARTICLE

            return(

                <ArticleStyle onClick = {() => this.openArticle(id)}>
    
                    <ArticleStyleNormal>

                        <ArticleContentNormal>

                            <TagBig>{tags}</TagBig>
                            <TitleBig>{title}</TitleBig>

                        </ArticleContentNormal>

                        <ArticleImageNormal>

                            <ImageNormal alt = "" src = {image}></ImageNormal>

                        </ArticleImageNormal>

                    </ArticleStyleNormal>
    
                </ArticleStyle>
    
            )  

        } 

    }

}

export default Article