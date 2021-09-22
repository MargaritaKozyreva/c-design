import React from 'react';
import ReactDom from 'react-dom';
import { Redirect, Route, Router, Switch } from 'react-router';
import { Link, RouteProps } from 'react-router-dom';
import { Card } from './ui';
import '../static/index.scss';

const DemoPage = () => {
	return (
		<Card design="default" title="Цель">
			Цель состоит в том, чтобы иметь возможность использовать эту переменную в нескольких местах, поэтому я могу просто
			ссылаться на переменную и не нужно каждый раз бросать запросы media.
		</Card>
	);
};

ReactDom.render(<DemoPage />, document.getElementById('root'));
