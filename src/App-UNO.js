import React, { Component } from "react";

//react bootstrap components
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import IMG from './images/pexels.jpg'

//scss
import style from "./styles.module.scss";

//data for post
import data from "./data.json";

export default class DefaultPost extends Component {
	render() {
		return (
			<>
				<Container fluid={true}>
					<Row>
						<CardDeck className=" no-gutters ">

							{data.map((postData, index) => (
								<div className="col-xl-3 col-md-4">

									<Card key={index} className="mb-4 shadow-sm">
										<p>link:{postData.links[0].href} </p>
										<div class="card-bg-img" style={{ backgroundImage: `url(${IMG})`}}></div>
										<div className="card-body">
											{/* <h4>JSON: {postData.href}</h4> */}
											<h5 class="card-title mb-0">{postData.data[0].nasa_id}</h5>
											<div class="badges mb-2">
												<span class="badge badge-warning">{postData.data[0].keywords + " "}</span>
											</div>
											{/* <p>TITULO:{postData.data[0].title}</p> */}
											<p>{postData.data[0].description}</p>
										</div>
									</Card>
								</div>
							))}
						</CardDeck>

					</Row>
				</Container>
			</>
		);
	}
}
