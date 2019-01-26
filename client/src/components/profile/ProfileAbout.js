import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';
import myImg1 from '../../img/001.png';
import myImg2 from '../../img/002.png';
import myImg3 from '../../img/003.png';
import myImg4 from '../../img/007.jpg';

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
			<div class="container">
				<div className="row">
					<div className="col-md-4 m-0 p-0">
						<div className="card d-block">
							<div className="card-header" style={{ backgroundColor: '#ffe4e1' }}>
								<ul className="nav nav-pills card-header-pills" id="myTab1" role="tablist">
									<li className="nav-item">
										<a
											className="nav-link text-monospace bg-transparent"
											style={{ color: '#696969', fontSize: '13px' }}
											id="front-tab"
											data-toggle="tab"
											href="#front1"
											role="tab"
											aria-controls="front"
											aria-selected="true"
										>
											<strong>Front</strong>{' '}
											<i
												className="fas fa-angle-double-down fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</a>
									</li>
									<li className="nav-item" style={{ backgroundColor: '#ffe4e1' }}>
										<a
											className="nav-link text-monospace bg-transparent"
											style={{ color: '#696969', fontSize: '13px' }}
											id="back-tab"
											data-toggle="tab"
											href="#back1"
											role="tab"
											aria-controls="back"
											aria-selected="true"
										>
											<strong>Back</strong>{' '}
											<i
												className="fas fa-angle-double-down fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</a>
									</li>
									<li className="nav-item" style={{ backgroundColor: '#ffe4e1' }}>
										<a
											className="nav-link text-monospace bg-transparent"
											style={{ color: '#696969', fontSize: '13px' }}
											id="right-tab"
											data-toggle="tab"
											href="#right1"
											role="tab"
											aria-controls="right"
											aria-selected="true"
										>
											<strong>Right</strong>{' '}
											<i
												className="fas fa-angle-double-down fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</a>
									</li>
									<li className="nav-item" style={{ backgroundColor: '#ffe4e1' }}>
										<a
											className="nav-link text-monospace bg-transparent"
											style={{ color: '#696969', fontSize: '13px' }}
											id="left-tab"
											data-toggle="tab"
											href="#left1"
											role="tab"
											aria-controls="left"
											aria-selected="true"
										>
											<strong>Left</strong>{' '}
											<i
												className="fas fa-angle-double-down fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</a>
									</li>
								</ul>
							</div>
							<div class="tab-content bg-transparent" id="myTabContent">
								<div
									className="card-body tab-pane m-0 p-0 active"
									style={{ color: '#696969' }}
									id="front1"
									role="tabpanel"
									aria-labelledby="home-tab"
								>
									<img className="card-image-top" src={myImg1} alt={'Logo'} title="D4Styles" />
									<p className="m-0 p-0" style={{ color: '#000' }}>
										{' '}
										This is some design. This elegant piece of fabric can be your for only $350.
										Contact us.
									</p>
								</div>
								<div
									className="card-body tab-pane m-0 p-0"
									style={{ color: '#696969' }}
									id="back1"
									role="tabpane2"
									aria-labelledby="profile-tab"
								>
									<img className="card-image-top" src={myImg2} alt={'Logo'} title="D4Styles" />
									<p className="m-0 p-0" style={{ color: '#000' }}>
										{' '}
										This is some design. This elegant piece of fabric can be your for only $350.
										Contact us.
									</p>
								</div>
								<div
									className="card-body tab-pane m-0 p-0"
									style={{ color: '#696969' }}
									id="right1"
									role="tabpane3"
									aria-labelledby="profile-tab"
								>
									<img className="card-image-top" src={myImg3} alt={'Logo'} title="D4Styles" />
									<p className="m-0 p-0" style={{ color: '#000' }}>
										{' '}
										This is some design. This elegant piece of fabric can be your for only $350.
										Contact us.
									</p>
								</div>
								<div
									className="card-body tab-pane m-0 p-0"
									style={{ color: '#696969' }}
									id="left1"
									role="tabpane4"
									aria-labelledby="profile-tab"
								>
									<img className="card-image-top" src={myImg4} alt={'Logo'} title="D4Styles" />
									<p className="m-0 p-0" style={{ color: '#000' }}>
										{' '}
										This is some design. This elegant piece of fabric can be your for only $350.
										Contact us.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 m-0 p-0">
						<div className="card d-block">
							<div className="card-header" style={{ backgroundColor: '#ffe4e1' }}>
								<ul className="nav nav-pills card-header-pills" id="myTab2" role="tablist">
									<li className="nav-item">
										<a
											className="nav-link text-monospace bg-transparent"
											style={{ color: '#696969', fontSize: '13px' }}
											id="front-tab"
											data-toggle="tab"
											href="#front2"
											role="tab"
											aria-controls="front"
											aria-selected="true"
										>
											<strong>Front</strong>{' '}
											<i
												className="fas fa-angle-double-down fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</a>
									</li>
									<li className="nav-item" style={{ backgroundColor: '#ffe4e1' }}>
										<a
											className="nav-link text-monospace bg-transparent"
											style={{ color: '#696969', fontSize: '13px' }}
											id="back-tab"
											data-toggle="tab"
											href="#back2"
											role="tab"
											aria-controls="back"
											aria-selected="true"
										>
											<strong>Back</strong>{' '}
											<i
												className="fas fa-angle-double-down fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</a>
									</li>
									<li className="nav-item" style={{ backgroundColor: '#ffe4e1' }}>
										<a
											className="nav-link text-monospace bg-transparent"
											style={{ color: '#696969', fontSize: '13px' }}
											id="right-tab"
											data-toggle="tab"
											href="#right2"
											role="tab"
											aria-controls="right"
											aria-selected="true"
										>
											<strong>Right</strong>{' '}
											<i
												className="fas fa-angle-double-down fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</a>
									</li>
									<li className="nav-item" style={{ backgroundColor: '#ffe4e1' }}>
										<a
											className="nav-link text-monospace bg-transparent"
											style={{ color: '#696969', fontSize: '13px' }}
											id="left-tab"
											data-toggle="tab"
											href="#left2"
											role="tab"
											aria-controls="left"
											aria-selected="true"
										>
											<strong>Left</strong>{' '}
											<i
												className="fas fa-angle-double-down fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</a>
									</li>
								</ul>
							</div>
							<div class="tab-content bg-transparent" id="myTabContent">
								<div
									className="card-body tab-pane mb-3 active"
									style={{ color: '#696969' }}
									id="front2"
									role="tabpanel"
									aria-labelledby="home-tab"
								>
									<h3 className="text-center">Front</h3>
								</div>
								<div
									className="card-body tab-pane mb-3"
									style={{ color: '#696969' }}
									id="back2"
									role="tabpane2"
									aria-labelledby="profile-tab"
								>
									<h3 className="text-center">Back</h3>
								</div>
								<div
									className="card-body tab-pane mb-3"
									style={{ color: '#696969' }}
									id="right2"
									role="tabpane3"
									aria-labelledby="profile-tab"
								>
									<h3 className="text-center">Right</h3>
								</div>
								<div
									className="card-body tab-pane mb-3"
									style={{ color: '#696969' }}
									id="left2"
									role="tabpane4"
									aria-labelledby="profile-tab"
								>
									<h3 className="text-center">Left</h3>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 m-0 p-0">
						<div className="card d-block">
							<div className="card-header" style={{ backgroundColor: '#ffe4e1' }}>
								<ul className="nav nav-pills card-header-pills" id="myTab3" role="tablist">
									<li className="nav-item">
										<a
											className="nav-link text-monospace bg-transparent"
											style={{ color: '#696969', fontSize: '13px' }}
											id="front-tab"
											data-toggle="tab"
											href="#front3"
											role="tab"
											aria-controls="front"
											aria-selected="true"
										>
											<strong>Front</strong>{' '}
											<i
												className="fas fa-angle-double-down fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</a>
									</li>
									<li className="nav-item" style={{ backgroundColor: '#ffe4e1' }}>
										<a
											className="nav-link text-monospace bg-transparent"
											style={{ color: '#696969', fontSize: '13px' }}
											id="back-tab"
											data-toggle="tab"
											href="#back3"
											role="tab"
											aria-controls="back"
											aria-selected="true"
										>
											<strong>Back</strong>{' '}
											<i
												className="fas fa-angle-double-down fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</a>
									</li>
									<li className="nav-item" style={{ backgroundColor: '#ffe4e1' }}>
										<a
											className="nav-link text-monospace bg-transparent"
											style={{ color: '#696969', fontSize: '13px' }}
											id="right-tab"
											data-toggle="tab"
											href="#right3"
											role="tab"
											aria-controls="right"
											aria-selected="true"
										>
											<strong>Right</strong>{' '}
											<i
												className="fas fa-angle-double-down fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</a>
									</li>
									<li className="nav-item" style={{ backgroundColor: '#ffe4e1' }}>
										<a
											className="nav-link text-monospace bg-transparent"
											style={{ color: '#696969', fontSize: '13px' }}
											id="left-tab"
											data-toggle="tab"
											href="#left3"
											role="tab"
											aria-controls="left"
											aria-selected="true"
										>
											<strong>Left</strong>{' '}
											<i
												className="fas fa-angle-double-down fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</a>
									</li>
								</ul>
							</div>
							<div class="tab-content bg-transparent" id="myTabContent">
								<div
									className="card-body tab-pane mb-3 active"
									style={{ color: '#696969' }}
									id="front3"
									role="tabpanel"
									aria-labelledby="home-tab"
								>
									<h3 className="text-center">Front</h3>
								</div>
								<div
									className="card-body tab-pane mb-3"
									style={{ color: '#696969' }}
									id="back3"
									role="tabpane2"
									aria-labelledby="profile-tab"
								>
									<h3 className="text-center">Back</h3>
								</div>
								<div
									className="card-body tab-pane mb-3"
									style={{ color: '#696969' }}
									id="right3"
									role="tabpane3"
									aria-labelledby="profile-tab"
								>
									<h3 className="text-center">Right</h3>
								</div>
								<div
									className="card-body tab-pane mb-3"
									style={{ color: '#696969' }}
									id="left3"
									role="tabpane4"
									aria-labelledby="profile-tab"
								>
									<h3 className="text-center">Left</h3>
								</div>
							</div>
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
