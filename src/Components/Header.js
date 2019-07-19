import React, {Component} from "react"
import $ from 'jquery';

//IMPORT STYLED COMPONENTS
    //MAIN STYLED COMPONENT
    import {MenuButtonStyle, TitleStyle, ActionButton} from "../Styles/StyledComponents/Header"

class Header extends Component {
    
    render() {  

        return(

            <>
            
                <MenuButtonStyle className = "menu-button-container">
                    
                </MenuButtonStyle>

                <TitleStyle className = "title">
                    The Fortnightly
                </TitleStyle>

                <ActionButton className = "action-button-container">

                </ActionButton>
            
            </>

        )   

    }

}

export default Header