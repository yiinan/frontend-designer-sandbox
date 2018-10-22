import React, {Component} from 'react'
import './Category.css'


class Category extends Component{
	render(){
		return(
			<div className="categoryContainer">
				<div className="allCategory">
				  <a href="" className="category">
				  	<span>Kläder & Accessoarer</span>
				  </a>
				  <a href="" className="category">
				  	<span>Barn</span>
				  </a>
				  <a href="" className="category">
				  	<span>Hem & Design</span>
				  </a>
				  <a href="" className="category">
				  	<span>Hobby</span>
				  </a>
				  <a href="" className="category">
				  	<span>Hemelektronik</span>
				  </a>
				  <a href="" className="category">
				  	<span>Sport & Fritid</span>
				  </a>
				  <a href="" className="category">
				  	<span>Media</span>
				  </a>
				</div>
			</div>
		)
	}
}

export default Category;