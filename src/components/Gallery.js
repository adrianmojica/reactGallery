import React, { Component } from 'react';
import coffee from '../pics/coffee.jpg';
import coins from '../pics/coins.jpg';
import posing from '../pics/posing.jpg';
import raspberry from '../pics/raspberries.jpg';


class Gallery extends Component {   

	constructor(props) {
		super (props);
		this.analytics = this.analytics.bind(this);
	}

	state = {
		index: 0, 
		picList: [coffee, coins, posing, raspberry],
		analytics: [{ 
								name:"coffee",
								count:0 
							},
							{ 
								name: "coins",
								count: 0,
							},
							{
								name: "posing",
								count: 0,
							},
							{
								name: "raspberry",
								count: 0
							}
		]
	}
	
	componentDidMount(){
		this.analytics(0);
	}
		
	onClickNext= () => {
		if (this.state.index + 1 === this.state.picList.length ){
			this.setState({ 
				index: 0 
			})
			this.analytics(0);
		} else {
			this.setState({
				index: this.state.index + 1
			})
			this.analytics(this.state.index+1);
		}
		
		
	}

	analytics(index){
		let analytics = [...this.state.analytics];
		let count = analytics[index].count;
		analytics[index] = {...analytics[index], count: count +1};
		this.setState({analytics})
		localStorage.setItem('view_analytics', JSON.stringify(analytics));	
	}
	
	onClickPrevious= () => {
		if (this.state.index - 1 === -1 ){
				this.setState({ 
					index: this.state.picList.length - 1
				})
				this.analytics(this.state.picList.length-1);
		} else {
			this.setState({
				index: this.state.index - 1
			})
			this.analytics(this.state.index-1);
		}
	}

	render() {
		return (
			<div className="gallery">
				<img alt="" src={this.state.picList[this.state.index]} className="frame" />
				<a href="#" className="btn btn-left" onClick={this.onClickPrevious}></a>
				<a href="#" className="btn btn-right" onClick={this.onClickNext}></a>
			</div>
		);
	}

}


export default Gallery;