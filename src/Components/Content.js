import React, {Component} from "react"
import $ from 'jquery';

//IMPORT STYLED COMPONENTS
    //MAIN STYLED COMPONENT
import {HashtagField, Hashtag, ArticlesField} from "../Styles/StyledComponents/Content"

//DATA TO BE IMPORTED
    //HASHTAGS
    //ARTICLES
import Hashtags from "../Data/Hashtags";
import Articles from "../Data/Articles";

//COMPONENTS
import Article from "../Components/Article"
import ArticleView from "../Components/ArticleView"

class Content extends Component {

    constructor(props){

        super(props)

        //STATE:
            //HASTAGS TO COLLECT HASHTAGS
            //ARTICLES TO COLLECT ARTICLES
            //ARTICLE TO VIEW ARTICLE AFTER CLICK
        this.state = {
            hashtags: [],
            articles: [],
            article: null
        }

    }
    
    toogleView = (id) => {

        this.setState({
            article: id
        })
        
    }

    componentDidMount() {

        //HASHTAGS

        let hashtags = []

        Hashtags.forEach((value) => {
            hashtags.push(<Hashtag>{value.name}</Hashtag>)
        })

        this.setState({
            hashtags: hashtags
        })

        //ARTICLES

        let articles = []

        Articles.forEach((value) => {

            articles.push(<Article click = {this.toogleView} data = {value}></Article>)

        })

        this.setState({
            articles: articles
        })

    }

    render() {

        if(this.state.article === null){

            return(

                <>

                    <HashtagField count = {this.state.hashtags.length}>

                        {this.state.hashtags}

                    </HashtagField>

                    <ArticlesField>

                        {this.state.articles}

                    </ArticlesField>

                </>

            )  

        } else {

            let data = Articles[this.state.article - 1]

            return(

                <>
                    <ArticleView data = {data} />
                </>

            )            

        }

    }

}

export default Content