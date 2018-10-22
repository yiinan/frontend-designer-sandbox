import React, {Component} from 'react'
import {shirt} from '../resources/items'
import {shoes} from '../resources/items'
import {iphone} from '../resources/items'
import './Recommand.css'


const RecommandCard = ({item}) => {
	return(
		<div className="cardContainer">
		<a href="">
			<div className="cardImg">
				<img src={item.images[0]} />
			</div>
			<div className="cardText">
			<div className="cardText cardBrand"><span>{item.metadata.brand}</span></div>
			<div><span>{item.metadata.type}, {item.metadata.size}</span></div>
			<div className="cardText cardValue"><span>{item.currentValue} kr</span></div>
			</div>
		</a>
		</div>
	)
}


class Recommand extends Component{
	render(){
		return(
		<div>
		<div className="recommandContainer">
			<div className="recommandTitle"> <span>Du kanske också gillar</span> </div>
			<div className="recommandCards">
				<RecommandCard item={shirt}/>
				<RecommandCard item={shoes}/>
			</div>
	    </div>
	    <div className="recommandContainer recommandSameSeller">
			<div className="recommandTitle"> <span>Mer från samma säljare</span> </div>
			<div className="recommandCards">
				<RecommandCard item={shirt}/>
			</div>
	    </div>
	    </div>
		)
	}
}

export default Recommand;