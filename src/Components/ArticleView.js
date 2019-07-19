import React, {Component} from "react"
import $ from 'jquery';

//IMPORT STYLED COMPONENTS
    //MAIN STYLED COMPONENT
    import {ImageView, ContentView, TagView, TitleVew, SubtitleView, AuthorView, AuthorImageView, AuthorNameView, TextView} from "../Styles/StyledComponents/ArticleView"

class ArticleView extends Component {

    constructor(props){

        super(props)

        this.state = {
           
        }

    }
  
    render() {

        return(

            <>

                <ImageView src = {this.props.data.image}></ImageView>
                
                <ContentView>

                    <TagView>{this.props.data.tags}</TagView>
                    <TitleVew>{this.props.data.title}</TitleVew>
                    <SubtitleView>{this.props.data.subtitle}</SubtitleView>
                    <AuthorView>
                        <AuthorImageView alt = "" src = {this.props.data.author.autorImage}></AuthorImageView>
                        <AuthorNameView>by <span>{this.props.data.author.authorName}</span></AuthorNameView>
                    </AuthorView>
                    <TextView>{this.props.data.text}</TextView>

                </ContentView>

            </>

        )

    } 
}

export default ArticleView