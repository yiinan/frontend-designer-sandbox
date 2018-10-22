import React, {Component} from 'react'
import {shirt} from '../resources/items'
import './ItemDetail.css'
import like from '../img/like.svg'


const Breadcrumbs = () => {
	return (
		<div className="breadcrumbs">
		  	<a href=""><span>Hem</span> </a>
		  	>
		  	<a href=""><span>Kläder</span> </a>
		  	>
		  	<a href=""><span>Herrkläder </span> </a>
		  	>
		  	<a href=""><span className="currentCrumbs">Skjortor</span> </a>
		</div>
	)
}

const Item = ({item}) => {
	return (
		<div className="itemDetail">
		  <div className="itemImg">
		  	<div className="mainImg">
		  	  <img src={item.images[0]} />
		  	</div>
		  	<div className="imgListContainer">
		  	  <a href="">
		  	  	<div className="imgList currentImg">
		  	  	<img src={item.images[0]} />
		  	  	</div>
		  	  </a>
		  	  <a href="">
		  	  	<div className="imgList">
		  	  	<img src={item.images[1]} />
		  	  	</div>
		  	  </a>
		  	  <a href="">
		  	  	<div className="imgList">
		  	  	<img src={item.images[2]} />
		  	  	</div>
		  	  </a>
		  	  <a href="">
		  	  	<div className="imgList">
		  	  	<img src={item.images[3]} />
		  	  	</div>
		  	  </a>
		  	  <a href="">
		  	  	<div className="imgList">
		  	  	<img src={item.images[4]} />
		  	  	</div>
		  	  </a>
		  	</div>
		  </div>

		  <div className="itemInfo">
		  	<div className="itemTitleContainer">		  	  
		  	  	<div className="itemBrand"> <span>{item.metadata.brand}</span> </div>
		  	  	<div className="itemValue"> <span>{item.currentValue}</span> kr </div>		  	  
		  	</div>
		  	<div className="productInfo">
			  <div className="infoHead"><span>Produktinformation</span></div>
			  <div><span>Typ: {item.metadata.type}</span></div>
			  <div><span>Strl: {item.metadata.size}</span></div>
			  <div><span>Färg: {item.metadata.color}</span></div>
			  <div><span>Conditon: {item.metadata.condition}</span></div>
		  	</div>
		  	<div className="productInfo">
			  <div className="infoHead"><span>Frakt & Retur</span></div>
			  <div><span>Frakt: 30 kr</span></div>
			  <div><span>Retur:  14 dagar - returfrakt 49 kr</span></div>
			  <div><span>Fri frakt på ordrar över 999kr från Sellpy market</span></div>
		  	</div>
		  	<div className="btns">
		  	  <button className="addToCart">
		  	  	<div><span>Lägg i varukorg</span></div>
		  	  </button>
		  	  <button className="favorite">
		  	  	<img src={like} />
		  	  </button>
		  	</div>
		  </div>
		</div>
	)
}

class ItemDetail extends Component{
	render(){
		return(
		<div>
		  <Breadcrumbs />
		  <Item item={shirt}/>
	    </div>
		)
	}
}

export default ItemDetail;