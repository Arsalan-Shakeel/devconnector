import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';
import AutoCompleteText from '../common/AutoCompleteText';
import countries from '../../searchFilterData';
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
			<li className="nav-item" style={{ backgroundColor: '#ffe4e1' }}>
				<Link className="nav-link text-monospace" style={{ color: '#696969' }} to="/profile/arsalan-shakeel">
					<i className="fas fa-home fa-1x" style={{ color: 'rgba(238, 20, 111, 0.685)' }} />{' '}
					<strong>Home</strong>
				</Link>
			</li>
		);

		const authLinks = (
			<ul className="navbar-nav ml-auto">
				{homeLink}
				<li className="nav-item" style={{ backgroundColor: '#ffe4e1' }}>
					<Link
						className="nav-link text-monospace"
						style={{ color: '#696969' }}
						to="/profile/arsalan-shakeel"
					>
						<i className="fas fa-binoculars fa-1x" style={{ color: 'rgba(238, 20, 111, 0.685)' }} />{' '}
						<strong>Explore</strong>
					</Link>
				</li>
				<li className="nav-item" style={{ backgroundColor: '#ffe4e1' }}>
					<Link
						className="nav-link text-monospace"
						style={{ color: '#696969' }}
						to="/profile/arsalan-shakeel"
					>
						<i className="fas fa-cart-plus fa-1x" style={{ color: 'rgba(238, 20, 111, 0.685)' }} />{' '}
						<strong>Buy</strong>
					</Link>
				</li>
			</ul>
		);

		const guestLinks = (
			<ul className="navbar-nav ml-auto">
				{homeLink}
				<li className="nav-item" style={{ backgroundColor: '#ffe4e1' }}>
					<Link
						className="nav-link text-monospace"
						style={{ color: '#696969' }}
						to="/profile/arsalan-shakeel"
					>
						<i className="fas fa-user-plus fa-1x" style={{ color: 'rgba(238, 20, 111, 0.685)' }} />{' '}
						<strong>Register</strong>
					</Link>
				</li>
				<li className="nav-item" style={{ backgroundColor: '#ffe4e1' }}>
					<Link className="nav-link text-monospace" style={{ color: '#696969' }} to="/login">
						<i className="fas fa-sign-in-alt fa-1x" style={{ color: 'rgba(238, 20, 111, 0.685)' }} />{' '}
						<strong>Login</strong>
					</Link>
				</li>
			</ul>
		);

		return (
			//<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
			<nav className="navbar navbar-expand-lg mb-4" style={{ backgroundColor: '#ffe4e1' }}>
				<div className="container">
					<Link
						className="navbar-brand text-monospace"
						style={{ color: '#696969', fontSize: '15px', fontFamily: 'Courgette' }}
						to="/"
					>
						<img
							className="rounded-circle"
							src={d4stylesLogo}
							alt={'Logo'}
							style={{ width: '50px', marginRight: '1px' }}
							title="D4Styles"
						/>
						{'   '}
						<strong>Your Style Factory!</strong>
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
						<i class="fas fa-bars fa-1x" style={{ color: '#696969' }} />
					</button>
					<div className="collapse navbar-collapse" id="mobile-nav">
						{isAuthenticated ? authLinks : guestLinks}
					</div>
					<AutoCompleteText items={countries} />
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
