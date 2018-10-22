import React, {Component} from 'react'
import './Header.css';

import sLogo from '../img/sLogo.svg'
import searchIcon from '../img/searchIcon.svg'
import myAccount from '../img/home.svg'
import cart from '../img/cart.svg'

class Header extends Component {
	render(){
		return(
			<div className="header">
				<a href="/" className="headerLogoCon">
				  <img className="headerLogo" src={sLogo} />
				</a>
				<div className="searchBar">
					<div className="searchIcon">
						<img src={searchIcon} />
					</div>
				</div>
				<div className="buyOrSell">
				<a href="" className="tabSelected">
					<p className="tabTitle">HANDLA HOS SELLPY</p>
					<p className="tabTitleMobile">HANDLA</p>
				</a>
				<a href="" className="tabUnelected">
					<p className="tabTitle">SÄLJ MED SELLPY</p>
					<p className="tabTitleMobile">SÄLJ</p>
				</a>
				</div>
				<div className="account">
					<a href="" className="myAccount">
						<div className="accountIcon">
						  <img  src={myAccount} />
						</div>
						<p className="accountTitle">My account</p>
					</a>
					<a href="" className="cart">
						<div className="accountIcon">
						  <img  src={cart} />
						</div>
						<p className="accountTitle">Cart</p>
					</a>
				</div>
			</div>
			)
	}
}

export default Header;