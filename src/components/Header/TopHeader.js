import React from 'react';

const TopHeader = () => (
	<div className="header" id="home">
		<div className="container">
			<ul>
				<li>
					{' '}
					<a href="#" data-toggle="modal" data-target="#myModal">
						<i className="fa fa-unlock-alt" aria-hidden="true" /> Sign In{' '}
					</a>
				</li>
				<li>
					{' '}
					<a href="#" data-toggle="modal" data-target="#myModal2">
						<i className="fa fa-pencil-square-o" aria-hidden="true" /> Sign Up{' '}
					</a>
				</li>
				<li>
					<i className="fa fa-phone" aria-hidden="true" /> Call : 01234567898
				</li>
				<li>
					<i className="fa fa-envelope-o" aria-hidden="true" />{' '}
					<a href="mailto:info@example.com">info@example.com</a>
				</li>
			</ul>
		</div>
	</div>
);
export default TopHeader;
