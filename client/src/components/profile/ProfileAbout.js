import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

class ProfileAbout extends Component {
	render() {
		const { profile } = this.props;

		// Get first name
		const firstName = profile.user.name.trim().split(' ')[0];

		// Skill List
		const skills = profile.skills.map((skill, index) => (
			<div key={index} className="p-3">
				<i className="fa fa-check" /> {skill}
			</div>
		));

		return (
			<div className="row">
				<div className="col-md-12">
					<div className="card card-body bg-secondary mb-3" style={{ color: '#fff' }}>
						<h3 className="text-center">{firstName}'s Bio</h3>
						<p className="lead">
							{isEmpty(profile.bio) ? (
								<span>{firstName} does not have a bio</span>
							) : (
								<span>{profile.bio}</span>
							)}
						</p>
						<hr className="hr-styling" />
						<h3 className="text-center">Skill Set</h3>
						<div className="row">
							<div className="d-flex flex-wrap justify-content-center align-items-center">{skills}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ProfileAbout.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
