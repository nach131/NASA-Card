import React, { Component } from "react";
import CardList from './CardList';
import Album from './Album'


//react bootstrap components
// import CardDeck from "react-bootstrap/CardDeck";
// import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";


//data for post
// import data from "./data.json";

class App extends React.Component {
	// constructor() {
	// 	super()
	// 	this.state = {
	// 		cards: {}
	// 	}
	// }
	constructor(props) {
		super(props)
		this.state = {
			href: '', items:{}, total_hits:''
		}
	}


	componentDidMount() {
		fetch('https://images-api.nasa.gov/search?q=earth&page=25')
			.then(response => response.json())
			// .then(collection => {this.setState({ cards: collection})});
			.then((responseData) => {
				console.log(responseData)
				this.setState({
					href: responseData.collection.href,
					items: responseData.collection.items,
					total_hits:responseData.collection.metadata.total_hits
				}
				)
			});
	}


	render() {
		// const { cards } = this.state;
		// console.log(cards)
		// console.log({cards})
		return (
			<Album>
				<CardList items={this.state.items}/>
			</Album>

		)
		// return (
		// 	<>
		// 		<Container fluid={true}>
		// 			<Row>

		// 				{data.map((postData, index) => (
		// 					<div className="col-xl-3 col-md-4">
		// 						<Card key={index} className="mb-4 shadow-sm">
		// 							<Card.Img variant="top" src={postData.links[0].href} />

		// 							{/* <h4>JSON: {postData.href}</h4> */}
		// 							<Card.Body>
		// 								<Card.Title className="mb-0">{postData.data[0].nasa_id}</Card.Title>
		// 								<div className="badges mb-2">

		// 									<span className="badge badge-warning">{postData.data[0].keywords + " "}</span>
		// 								</div>
		// 								{/* <p>TITULO:{postData.data[0].title}</p> */}
		// 								<Card.Text >{postData.data[0].description}</Card.Text>
		// 							</Card.Body>

		// 						</Card>

		// 					</div>

		// 				))}


		// 			</Row>
		// 		</Container>
		// 	</>
		// );
	}
}
export default App;
