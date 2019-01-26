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

		/*

<ul class="nav nav-pills red">
    <li class="active"><a href="#tab1" data-toggle="tab">Overview</a></li>
    <li><a href="#tab2" data-toggle="tab">Sample</a></li>
    <li><a href="#tab3" data-toggle="tab">Sample</a></li>
</ul>
*/

		return (
			<div className="row">
				<div className="col-md-4">
					<div className="card">
						<div className="card-header" style={{ backgroundColor: '#ffe4e1' }}>
							<ul className="nav nav-pills card-header-pills" id="myTab" role="tablist">
								<li className="nav-item">
									<a
										className="nav-link text-monospace bg-transparent"
										style={{ color: '#696969', fontSize: '13px' }}
										id="front-tab"
										data-toggle="tab"
										href="#front"
										role="tab"
										aria-controls="front"
										aria-selected="true"
									>
										<strong>Front</strong>
									</a>
								</li>
								<li className="nav-item" style={{ backgroundColor: '#ffe4e1' }}>
									<a
										className="nav-link text-monospace bg-transparent"
										style={{ color: '#696969', fontSize: '13px' }}
										id="back-tab"
										data-toggle="tab"
										href="#back"
										role="tab"
										aria-controls="back"
										aria-selected="true"
									>
										<strong>Back</strong>
									</a>
								</li>
								<li className="nav-item" style={{ backgroundColor: '#ffe4e1' }}>
									<a
										className="nav-link text-monospace bg-transparent"
										style={{ color: '#696969', fontSize: '13px' }}
										id="right-tab"
										data-toggle="tab"
										href="#right"
										role="tab"
										aria-controls="right"
										aria-selected="true"
									>
										<strong>Right</strong>
									</a>
								</li>
								<li className="nav-item" style={{ backgroundColor: '#ffe4e1' }}>
									<a
										className="nav-link text-monospace bg-transparent"
										style={{ color: '#696969', fontSize: '13px' }}
										id="left-tab"
										data-toggle="tab"
										href="#left"
										role="tab"
										aria-controls="left"
										aria-selected="true"
									>
										<strong>Left</strong>
									</a>
								</li>
							</ul>
						</div>
						<div class="tab-content bg-transparent" id="myTabContent">
							<div
								className="card-body tab-pane mb-3 active"
								style={{ color: '#696969' }}
								id="front"
								role="tabpanel"
								aria-labelledby="home-tab"
							>
								<h3 className="text-center">Front</h3>
							</div>
							<div
								className="card-body tab-pane mb-3"
								style={{ color: '#696969' }}
								id="back"
								role="tabpane2"
								aria-labelledby="profile-tab"
							>
								<h3 className="text-center">Back</h3>
							</div>
							<div
								className="card-body tab-pane mb-3"
								style={{ color: '#696969' }}
								id="right"
								role="tabpane3"
								aria-labelledby="profile-tab"
							>
								<h3 className="text-center">Right</h3>
							</div>
							<div
								className="card-body tab-pane mb-3"
								style={{ color: '#696969' }}
								id="left"
								role="tabpane4"
								aria-labelledby="profile-tab"
							>
								<h3 className="text-center">Left</h3>
							</div>
						</div>
					</div>
				</div>
			</div> /*End <div className="row">*/
		);
	}
}

ProfileAbout.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
