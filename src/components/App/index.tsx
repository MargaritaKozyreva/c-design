import React from 'react';
import { Card } from '@ui/Card';
import { H1, H2, H3, Span, P } from '@ui/Typography';
import { Icon } from '@ui/Icon';
import '../../scss/index.scss';

const App = () => {
	return (
		<>
			<Card id={ 1 } design="default">
				<Card.Zone direction="row" margin="m">
					<H1>Мой прогресс</H1>
				</Card.Zone>

				<Card.Content margin="m">
					<H2 weight="bold" transform="capitalize">
						Содержание
					</H2>
					<Span weight="regular" size="s">
						Actually you are correct. I have not yet been convinced that dynamic
						definition of mixins is a good idea. However the issue you linked to
						was about including a mixin using a dynamic name. Which I am for.
						The OP's problem is solved better by accepting an argument to a
						single mixin instead of defining a unique mixin for each icon.
					</Span>
				</Card.Content>

				<Card.Zone direction="row" margin="m">
					<P size="m" weight="bold">
						Footer
					</P>
				</Card.Zone>
			</Card>
			<Card id={ 2 } design="default">
				<Card.Zone direction="row" margin="xl">
					<H2>Моя карьера</H2>
					<Icon
						name="arrow"
						size="xl"
						color="green"
						onClick={ () => {
							return console.log('h1');
						} }
					/>
					
				</Card.Zone>

				<Card.Content margin="xl">
					<H2 weight="bold" transform="capitalize">
						Содержание
					</H2>
					<Span weight="regular" size="s">
						trararararra
					</Span>
				</Card.Content>

				<Card.Zone direction="row" margin="xl">
					<P size="m" weight="bold">
						Footer
					</P>
				</Card.Zone>
			</Card>
		</>
	);
};

export default App;
