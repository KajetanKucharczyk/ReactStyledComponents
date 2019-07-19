//IMPORT
import React, {Component} from "react"
import styled, {ThemeProvider}  from 'styled-components'

//IMPORT STYLES
	//THEME
	//GLOBAL
import GlobalStyle from "../Styles/Global"
import {sizeStyles, fontStyles, colorStyles, mediaQueries} from "../Styles/Theme"
	//HEADERCONATINER
import HaderContainer from "../Styles/StyledComponents/HeaderContainer"
	//MENUDESKTOPCONTAINER
import MenuDesktopContainer from "../Styles/StyledComponents/MenuDesktopContainer"
	//MENUMOBILECONTAINER
import MenuMobileContainer from "../Styles/StyledComponents/MenuMobileContainer"
	//CONTENTCONTAINER
import ContentContainer from "../Styles/StyledComponents/ContentContainer"
	//FOOTERCONTAINER
import FooterContainer from "../Styles/StyledComponents/FooterContainer"

//IMPORT COMPONENTS
	//HEADER
import Header from "../Components/Header"
import MenuDesktop from "../Components/MenuDesktop"
import MenuMobile from "../Components/MenuMobile"
import Content from "../Components/Content"
import Footer from "../Components/Footer"

//APP COMPONENT
	//APP IS TARTING COMPONENTS
	//IT HAS CHILDRES AS:
		//STYLED COMPONENED WITH `CONTAINER` IN NAME
		//REACT COMPONENTS WITH LOGIC 
			//WITH STATE
			//OR STATELESS LIKE FOOOTER
		//EACH COMPONENT HAS ITS OWN STYLED COMPONENT WITH THE SAME NAME
class App extends Component {

	constructor(props){

		super(props)

		//MENU - CHECK IF MENU IS OPENED
		//  THERE IS NO MENU CODED
		//ARTICLE - CHECK IF ARTICLE IS CLICKED

		this.state = {

		}

	}

	render() {

		//PREPARE OBJECT FOR STYLES
		const theme = {
			sizeStyles,
			fontStyles,
			colorStyles,
			mediaQueries
		}

		//RENDERING WHOLE PAGE
		return(

			<ThemeProvider theme = {theme}>

				<>

					<HaderContainer className = "header-container">
						<Header className = "header" />
					</HaderContainer>

					<MenuDesktopContainer className = "menu-desktop-container">
						<MenuDesktop className = "menu-desktop" />
					</MenuDesktopContainer>

					<MenuMobileContainer className = "menu-mobile-container">
						<MenuMobile className = "menu-mobile" />
					</MenuMobileContainer>

					<ContentContainer className = "content-container">
						<Content className = "content" />
					</ContentContainer>

					<FooterContainer className = "footer-container">
						<Footer className = "footer" />
					</FooterContainer>

					<GlobalStyle />

				</>
			
			</ThemeProvider>

		)

	}

}

export default App