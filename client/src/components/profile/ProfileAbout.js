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
					<div className="card">
						<div className="card-header" style={{ backgroundColor: '#ffe4e1' }}>
							<ul className="nav nav-pills card-header-pills">
								<li className="nav-item" style={{ backgroundColor: '#ffe4e1' }}>
									<a
										className="nav-link text-monospace"
										style={{ color: '#696969', fontFamily: 'ZCOOL KuaiLe' }}
										href="#"
									>
										Front
									</a>
								</li>

								<li className="nav-item" style={{ backgroundColor: '#ffe4e1' }}>
									<a
										className="nav-link text-monospace"
										style={{ color: '#696969', fontFamily: 'ZCOOL KuaiLe' }}
										href="#"
									>
										Back
									</a>
								</li>
								<li className="nav-item" style={{ backgroundColor: '#ffe4e1' }}>
									<a
										className="nav-link text-monospace"
										style={{ color: '#696969', fontFamily: 'ZCOOL KuaiLe' }}
										href="#"
									>
										Right
									</a>
								</li>
								<li className="nav-item" style={{ backgroundColor: '#ffe4e1' }}>
									<a
										className="nav-link text-monospace"
										style={{ color: '#696969', fontFamily: 'ZCOOL KuaiLe' }}
										href="#"
									>
										Left
									</a>
								</li>
							</ul>
						</div>
						<div className="card-body mb-3 bg-transparent" style={{ color: '#696969' }}>
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
								<div className="d-flex flex-wrap justify-content-center align-items-center">
									{skills}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

<div class="card-header">
	<ul class="nav nav-pills card-header-pills">
		<li class="nav-item">
			<a class="nav-link active" href="#">
				Active
			</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="#">
				Link
			</a>
		</li>
		<li class="nav-item">
			<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
				Disabled
			</a>
		</li>
	</ul>
</div>;

ProfileAbout.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
