import React, { Component } from "react";

//react bootstrap components
// import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

//scss
// import style from "./styles.module.scss";

//data for post
import data from "./data.json";

export default class DefaultPost extends Component {
	render() {
		return (
			<>
				<Container fluid={true}>
					<Row>

						{data.map((postData, index) => (
							<div className="col-xl-3 col-md-4">
								<Card key={index} className="mb-4 shadow-sm">
									<Card.Img variant="top" src={postData.links[0].href} />

									{/* <h4>JSON: {postData.href}</h4> */}
									<Card.Body>
										<Card.Title className="mb-0">{postData.data[0].nasa_id}</Card.Title>
										<div className="badges mb-2">

											<span className="badge badge-warning">{postData.data[0].keywords + " "}</span>
										</div>
										{/* <p>TITULO:{postData.data[0].title}</p> */}
										<Card.Text >{postData.data[0].description}</Card.Text>
									</Card.Body>

								</Card>

							</div>

						))}


					</Row>
				</Container>
			</>
		);
	}
}
