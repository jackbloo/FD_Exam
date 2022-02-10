import React from 'react';
import styled from 'styled-components'
import {useSelector} from 'react-redux'

export default function Navbar() {
    const navbarData = useSelector((state) => state.navbar)
    const clickLogin = () => {

    }
  return (
    <NavbarContainer >
        <TopNavbar>
            <LeftNavbar>
            <BurgerBar src={process.env.PUBLIC_URL + '/assets/burger-bar.png'}>
                </BurgerBar>
                <FDLogo src={process.env.PUBLIC_URL + '/assets/logo.png'}>
                </FDLogo>
            </LeftNavbar>
            <MiddleNavbar>
                <SearchIcon className="fa fa-search icon"></SearchIcon>
                 <SearchBar placeholder="Search products, articles, topics, brands, etc"></SearchBar>
            </MiddleNavbar>
            <RightNavbar onClick={() => clickLogin()}>
                <UserIcon className="fa fa-user icon"></UserIcon>
                    <LoginText>
                        LOGIN/SIGNUP
                    </LoginText>
            </RightNavbar>
        </TopNavbar>
        <BottomNavbar>
            {navbarData.map((el) => <NavText key={el.id}>{el.id.toUpperCase()}</NavText>)}
        </BottomNavbar>

    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
width: 100%;
display:flex;
flex-direction:column;
justify-content:space-evenly;
`
const TopNavbar = styled.div`
width:100%;
height: 50px;
display:flex;
flex-direction:row;
align-items:center;
`

const BottomNavbar = styled.div`
width:100%;
height: 35px;
border: 2px solid #EFEFEF;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`

const LeftNavbar = styled.div`
width:18%;
display:flex;
flex-direction:row;
align-items: center;
justify-content:flex-start;
`

const MiddleNavbar = styled.div`
width: 70%;
display:flex;
align-items:center;
position:relative;
`

const RightNavbar = styled.div`
width:15%;
background-color: #DC294F;
height:100%;
display:flex;
justify-content:center;
align-items:center;
margin-left: 15px;
`

const NavText = styled.div`
font-weight: 800;
margin-right:10px;
font-size:12px;
`

const FDLogo = styled.img`

`
const BurgerBar = styled.img`
height:20px;
width: 20px;
margin-right: 20px;
margin-left: 15px;
`

const SearchBar = styled.input`
border: 2px solid #EFEFEF;
width:100%;
height: 25px;
border-radius: 5px;
font-size: 10px;
padding-left: 21px;
`

const SearchIcon = styled.i`
position:absolute;
left:5px;
`
const UserIcon = styled.i`
left:5px;
color: white;
`

const LoginText = styled.div`
font-size: 12px;
margin-left: 5px;
color:white;
`