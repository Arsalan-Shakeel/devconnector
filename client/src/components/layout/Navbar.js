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

		const homeLink = (
			<li className="nav-item active">
				<Link className="nav-link" to="/profiles">
					<i className="fas fa-home fa-1x" style={{ color: 'rgba(238, 20, 111, 0.685)' }} />{' '}
					<strong>Home</strong>
				</Link>
			</li>
		);

		const authLinks = (
			<ul className="navbar-nav ml-auto">
				{homeLink}
				<li className="nav-item">
					<Link className="nav-link" to="/dashboard">
						<i className="fas fa-binoculars fa-1x" style={{ color: 'rgba(238, 20, 111, 0.685)' }} />{' '}
						<strong>Explore</strong>
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/feed">
						<i className="fas fa-cart-plus fa-1x" style={{ color: 'rgba(238, 20, 111, 0.685)' }} />{' '}
						<strong>Buy</strong>
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
				{homeLink}
				<li className="nav-item">
					<Link className="nav-link" to="/register">
						<i className="fas fa-user-plus fa-1x" style={{ color: 'rgba(238, 20, 111, 0.685)' }} />{' '}
						<strong>Register</strong>
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/login">
						<i className="fas fa-sign-in-alt fa-1x" style={{ color: 'rgba(238, 20, 111, 0.685)' }} />{' '}
						<strong>Login</strong>
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
						<small>
							<i> Your Design Destination!</i>
						</small>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#mobile-nav"
						aria-controls="mobile-nav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="mobile-nav">
						{isAuthenticated ? authLinks : guestLinks}
					</div>
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-default my-2 my-sm-0" type="submit">
							<i className="fas fa-search fa-1x" style={{ color: 'rgba(238, 20, 111, 0.685)' }} />
						</button>
					</form>
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
