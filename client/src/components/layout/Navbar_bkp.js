import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';
import d4stylesLogo from '../../img/logo.png';

class Navbar extends Component {
	onLogoutClick(e) {
		e.preventDefault();
		this.props.clearCurrentProfile();
		this.props.logoutUser();
	}

	render() {
		const { isAuthenticated, user } = this.props.auth;

		const authLinks = (
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<Link className="nav-link" to="/profiles">
						<i className="fas fa-home fa-1x" style={{ color: 'rgba(238, 20, 111, 0.685)' }} />{' '}
						<strong>HOME</strong>
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/feed">
						<i className="fab fa-delicious fa-1x" style={{ color: 'rgba(238, 20, 111, 0.685)' }} />{' '}
						<strong>Post Feed</strong>
					</Link>
				</li>

				<li className="nav-item">
					<Link className="nav-link" to="/dashboard">
						<i className="fab fa-dribbble fa-1x" style={{ color: 'rgba(238, 20, 111, 0.685)' }} />{' '}
						<strong>Dashboard</strong>
					</Link>
				</li>
				<li className="nav-item">
					<a href="" onClick={this.onLogoutClick.bind(this)} className="nav-link">
						<i className="fas fa-sign-out-alt fa-1x" style={{ color: 'rgba(238, 20, 111, 0.685)' }} />{' '}
						<strong>Logout</strong>
					</a>
				</li>
			</ul>
		);

		const guestLinks = (
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<Link className="nav-link" to="/register">
						Sign Up
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/login">
						Login
					</Link>
				</li>
			</ul>
		);

		return (
			//<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
			<nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
				<div className="container">
					<Link className="navbar-brand" to="/">
						<img
							className="rounded-circle"
							src={d4stylesLogo}
							alt={'Logo'}
							style={{ width: '50px', marginRight: '1px' }}
							title="D4Styles"
						/>{' '}
						<strong> Your Design Destination!</strong>
					</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="mobile-nav">
						{isAuthenticated ? authLinks : guestLinks}
					</div>
				</div>
			</nav>
		);
	}
}

Navbar.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	auth: state.auth,
});

export default connect(
	mapStateToProps,
	{ logoutUser, clearCurrentProfile }
)(Navbar);
