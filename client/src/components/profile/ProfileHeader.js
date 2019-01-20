import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';

class ProfileHeader extends Component {
	render() {
		const { profile } = this.props;

		return (
			<div className="row">
				<div className="col-md-12 m-auto">
					<div className="card card-body  mb-3" style={{ color: '#fff', backgroundColor: '#b0c4de' }}>
						<div className="row">
							<div className="col-4 col-md-3 m-auto">
								<img className="rounded-circle" src={profile.user.avatar} alt="" />
							</div>
						</div>
						<div className="text-center">
							<h3 className="display-8 text-center">{profile.user.name}</h3>
							<p className="lead text-center">
								{profile.status} {isEmpty(profile.company) ? null : <span>at {profile.company}</span>}
							</p>
							{isEmpty(profile.location) ? null : <p>{profile.location}</p>}
							<p>
								{isEmpty(profile.website) ? null : (
									<a className="text-white p-2" href={profile.website} target="_blank">
										<i
											className="fas fa-globe fa-2x"
											style={{ color: 'rgba(238, 20, 111, 0.685)' }}
										/>
									</a>
								)}

								{isEmpty(profile.social && profile.social.twitter) ? null : (
									<a className="text-white p-2" href={profile.social.twitter} target="_blank">
										<i className="fab fa-twitter fa-2x" />
									</a>
								)}

								{isEmpty(profile.social && profile.social.facebook) ? null : (
									<a className="text-white p-2" href={profile.social.facebook} target="_blank">
										<i className="fab fa-facebook fa-2x" />
									</a>
								)}

								{isEmpty(profile.social && profile.social.linkedin) ? null : (
									<a className="text-white p-2" href={profile.social.linkedin} target="_blank">
										<i className="fab fa-linkedin fa-2x" />
									</a>
								)}

								{isEmpty(profile.social && profile.social.youtube) ? null : (
									<a className="text-white p-2" href={profile.social.youtube} target="_blank">
										<i className="fab fa-youtube fa-2x" />
									</a>
								)}

								{isEmpty(profile.social && profile.social.instagram) ? null : (
									<a className="text-white p-2" href={profile.social.instagram} target="_blank">
										<i className="fab fa-instagram fa-2x" />
									</a>
								)}
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProfileHeader;
