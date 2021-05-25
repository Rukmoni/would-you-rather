import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import { Button, Menu, Input, Grid, Header, Image, Message, Segment, Card } from 'semantic-ui-react';

const Dashboard = () => {
	const [activeItem, setActiveItem] = useState('Answered');

	return (
		<div>
			<NavBar />
			<Grid textAlign="center" style={{ height: '50vh' }} verticalAlign="middle">
				<Grid.Column style={{ maxWidth: 750 }}>
					<Menu attached="top" tabular>
						<Menu.Item
							name="Answered"
							active={activeItem === 'Answered'}
							onClick={() => setActiveItem('Answered')}
						/>
						<Menu.Item
							name="UnAnswered"
							active={activeItem === 'UnAnswered'}
							onClick={() => setActiveItem('UnAnswered')}
						/>
						<Menu.Menu position="right">
							<Menu.Item>
								<Input
									transparent
									icon={{ name: 'search', link: true }}
									placeholder="Search users..."
								/>
							</Menu.Item>
						</Menu.Menu>
					</Menu>
					<Segment attached="bottom">
						<Card >
							<Card.Content >
								<Image floated="left" size="tiny" src="https://randomuser.me/api/portraits/thumb/men/75.jpg"/>
								<Card.Header>asks</Card.Header>
								<div>
									Would you rather ?
								</div>
							</Card.Content>
							<Card.Content extra>
								<div className="ui two buttons">
									<Button fluid basic color="black">
										View Poll
									</Button>
								</div>
							</Card.Content>
						</Card>
					</Segment>
				</Grid.Column>
			</Grid>
		</div>
	);
};

export default Dashboard;
