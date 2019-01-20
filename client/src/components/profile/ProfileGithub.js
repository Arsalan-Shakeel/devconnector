import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProfileGithub extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clientId: 'ecdd4f398c81c3dc0743',
			clientSecret: '8089dcc2b59e11f69d73f0cf7f7465637be665b6',
			count: 5,
			sort: 'created: asc',
			repos: [],
		};
	}

	componentDidMount() {
		const { username } = this.props;
		const { count, sort, clientId, clientSecret } = this.state;

		fetch(
			`https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
		)
			.then(res => res.json())
			.then(data => {
				if (this.refs.myRef) {
					this.setState({ repos: data });
				}
			})
			.catch(err => console.log(err));
	}

	render() {
		const { repos } = this.state;

		const repoItems = repos.map(repo => (
			<div key={repo.id} className="card card-body mb-2">
				<div className="row">
					<div className="col-md-6">
						<h4>
							<Link to={repo.html_url} className="text-secondary" target="_blank">
								{repo.name}
							</Link>
						</h4>
						<p>{repo.description}</p>
					</div>
					<div className="col-md-6">
						<span className="badge badge-info mr-1">Stars: {repo.stargazers_count}</span>
						<span className="badge badge-secondary mr-1">Watchers: {repo.watchers_count}</span>
						<span className="badge badge-success">Forks: {repo.forks_count}</span>
					</div>
				</div>
			</div>
		));
		return (
			<div ref="myRef" style={{ color: 'rgba(238, 20, 111, 0.685)' }}>
				<hr className="hr-styling" />
				<h3 className="mb-4">Latest Github Repos</h3>
				{repoItems}
			</div>
		);
	}
}

ProfileGithub.propTypes = {
	username: PropTypes.string.isRequired,
};

export default ProfileGithub;
