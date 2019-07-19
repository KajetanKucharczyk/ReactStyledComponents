//IMPORT GLOBALSTY COMPONENT
import {
	createGlobalStyle
} from 'styled-components'

//GLOBAL
	//BODY
	//DIV
	//OVERFLOW
const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Lobster|Open+Sans+Condensed:300|Roboto&display=swap');

	body {		
		font-family: ${({theme}) => theme.fontStyles.fonts.normal};
		color: ${({theme}) => theme.fontStyles.colors.black};
		background-color: ${({theme}) => theme.colorStyles.background.white};
		box-sizing: border-box;
		padding: 0px;
		margin: 0px;
		overflow-x: hidden;
	}
	div {
		box-sizing: border-box;
	}

	::-webkit-scrollbar-track{
		background-color: ${({theme}) => theme.colorStyles.colors.white};
	}

	::-webkit-scrollbar{
		width: 10px;
		background-color: ${({theme}) => theme.colorStyles.colors.white};
	}

	::-webkit-scrollbar-thumb{
		background-color: ${({theme}) => theme.colorStyles.colors.black}; 
	}


`

export default GlobalStyle