import styled from 'styled-components';
import { Button } from "./components/components:button";
import { useContext } from "react";
import { ThemeContext } from "./Contexts/ThemeContext";


const Container = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 24px 64px 0;
	border: 1px solid #E0E0E0; 
`

const HeaderUl = styled.ul`
		display: flex;
		margin: 0;
		padding: 0;
	`

const HeaderLi = styled.li`
	list-style: none;
	padding: 4px 12px;
	cursor: pointer;
	border-bottom: ${props => props.focuced ? '2px solid #F44336' : 'none'};
`

const HeaderButton = styled(Button)`
	padding: 0;
	margin-bottom: 4px;
`

export const Header = ({ tab,setTab }) => {
	const [theme,toggleTheme] = useContext(ThemeContext);

	return(
		<Container>
			<HeaderUl>
				<HeaderLi　focuced={tab ==='list'} onClick={() => setTab('list')}>リスト</HeaderLi>
				<HeaderLi focuced={tab ==='form'} onClick={() => setTab('form')}>フォーム</HeaderLi>
			</HeaderUl>
			<HeaderButton onClick={ toggleTheme }>テーマ変更</HeaderButton>
		</Container>
		)
}