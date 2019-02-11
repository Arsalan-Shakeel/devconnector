import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';
import './ProfileAbout.css';
import myImg1 from '../../img/001.jpg';
import myImg2 from '../../img/002.jpg';
import myImg3 from '../../img/003.jpg';
import myImg4 from '../../img/004.jpg';
import myImg5 from '../../img/005.jpg';
import myImg6 from '../../img/006.jpg';
import myImg7 from '../../img/007.jpg';
import myImg8 from '../../img/008.jpg';
import myImg9 from '../../img/009.jpg';
import myImg10 from '../../img/010.jpg';
import myImg11 from '../../img/011.jpg';
import myImg12 from '../../img/012.jpg';

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
			<div className="container">
				<div className="row">
					<div className="col-md-4 m-0 p-1">
						<div className="card d-block">
							<div className="card-header" style={{ backgroundColor: '#ffe4e1' }}>
								<ul className="nav nav-pills justify-content-center" id="myTab1" role="tablist">
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
											<strong>1</strong>{' '}
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
											<strong>2</strong>{' '}
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
											<strong>3</strong>{' '}
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
											<strong>4</strong>{' '}
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
									<p
										className="text-center mx-2 my-1 p-0"
										style={{ color: '#696969', fontFamily: 'Merienda' }}
									>
										This is some creative design work! This elegant piece of fabric is just a few
										clicks away from you.
									</p>
									<p
										className="text-center mb-2 p-0"
										style={{ color: '#000', fontFamily: 'IBM Plex Mono' }}
									>
										<Link to="/profile/arsalan-shakeel">
											<i
												className="fas fa-cart-plus fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</Link>{' '}
										US$:300.00{' '}
										<Link to="/profile/arsalan-shakeel">
											<i
												className="fas fa-cart-plus fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</Link>
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
									<p
										className="text-center mx-2 my-1 p-0"
										style={{ color: '#696969', fontFamily: 'IBM Plex Mono', fontSize: '12px' }}
									>
										<table className="table table-bordered">
											<tbody>
												<tr>
													<td scope="row">
														<i
															class="fas fa-ellipsis-h fa-1x m-0"
															style={{ color: 'rgba(238, 20, 111, 0.685)' }}
														/>
													</td>
													<td colspan="2">Style Details</td>
												</tr>
												<tr>
													<td scope="row">
														<i
															class="fas fa-ellipsis-v fa-1x m-0"
															style={{ color: 'rgba(238, 20, 111, 0.685)' }}
														/>
													</td>
													<td>Color</td>
													<td>Golden</td>
												</tr>
												<tr>
													<td scope="row">
														<i
															class="fas fa-forward fa-1x m-0"
															style={{ color: 'rgba(238, 20, 111, 0.685)' }}
														/>
													</td>
													<td>Design</td>
													<td>Kamdani</td>
													<td>extra-elegant</td>
												</tr>
											</tbody>
										</table>
									</p>
									<p
										className="text-center mb-2 p-0"
										style={{ color: '#000', fontFamily: 'IBM Plex Mono' }}
									>
										<Link to="/profile/arsalan-shakeel">
											<i
												className="fas fa-cart-plus fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</Link>{' '}
										US$:300.00{' '}
										<Link to="/profile/arsalan-shakeel">
											<i
												className="fas fa-cart-plus fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</Link>
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
									<p
										className="text-center mx-2 my-1 p-0"
										style={{ color: '#696969', fontFamily: 'IBM Plex Mono', fontSize: '12px' }}
									>
										<table className="table table-bordered">
											<tbody>
												<tr>
													<td scope="row">
														<i
															class="fas fa-ellipsis-h fa-1x m-0"
															style={{ color: 'rgba(238, 20, 111, 0.685)' }}
														/>
													</td>
													<td colspan="2">Fabric Details</td>
												</tr>
												<tr>
													<td scope="row">
														<i
															class="fas fa-ellipsis-v fa-1x m-0"
															style={{ color: 'rgba(238, 20, 111, 0.685)' }}
														/>
													</td>
													<td>Color</td>
													<td>Golden</td>
												</tr>
												<tr>
													<td scope="row">
														<i
															class="fas fa-forward fa-1x m-0"
															style={{ color: 'rgba(238, 20, 111, 0.685)' }}
														/>
													</td>
													<td>Design</td>
													<td>Kamdani</td>
													<td>extra-elegant</td>
												</tr>
											</tbody>
										</table>
									</p>
									<p
										className="text-center mb-2 p-0"
										style={{ color: '#000', fontFamily: 'IBM Plex Mono' }}
									>
										<Link to="/profile/arsalan-shakeel">
											<i
												className="fas fa-cart-plus fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</Link>{' '}
										US$:300.00{' '}
										<Link to="/profile/arsalan-shakeel">
											<i
												className="fas fa-cart-plus fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</Link>
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
									<p
										className="text-center mx-2 my-1 p-0"
										style={{ color: '#696969', fontFamily: 'IBM Plex Mono', fontSize: '12px' }}
									>
										<table className="table table-bordered">
											<tbody>
												<tr>
													<td scope="row">
														<i
															class="fas fa-ellipsis-h fa-1x m-0"
															style={{ color: 'rgba(238, 20, 111, 0.685)' }}
														/>
													</td>
													<td colspan="2">Stitching Details</td>
												</tr>
												<tr>
													<td scope="row">
														<i
															class="fas fa-ellipsis-v fa-1x m-0"
															style={{ color: 'rgba(238, 20, 111, 0.685)' }}
														/>
													</td>
													<td>Color</td>
													<td>Golden</td>
												</tr>
												<tr>
													<td scope="row">
														<i
															class="fas fa-forward fa-1x m-0"
															style={{ color: 'rgba(238, 20, 111, 0.685)' }}
														/>
													</td>
													<td>Design</td>
													<td>Kamdani</td>
													<td>extra-elegant</td>
												</tr>
											</tbody>
										</table>
									</p>
									<p
										className="text-center mb-2 p-0"
										style={{ color: '#000', fontFamily: 'IBM Plex Mono' }}
									>
										<Link to="/profile/arsalan-shakeel">
											<i
												className="fas fa-cart-plus fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</Link>{' '}
										US$:300.00{' '}
										<Link to="/profile/arsalan-shakeel">
											<i
												className="fas fa-cart-plus fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</Link>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 m-0 p-1">
						<div className="card d-block">
							<div className="card-header" style={{ backgroundColor: '#ffe4e1' }}>
								<ul className="nav nav-pills justify-content-center" id="myTab2" role="tablist">
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
											<strong>1</strong>{' '}
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
											<strong>2</strong>{' '}
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
											<strong>3</strong>{' '}
											<i
												className="fas fa-angle-double-down fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</a>
									</li>
									<li className="nav-item" style={{ backgroundColor: '#ffe4e1' }}>
										<a
											className="nav-link text-monospace bg-transparent"
											style={{
												color: '#696969',
												fontSize: '13px',
											}}
											id="left-tab"
											data-toggle="tab"
											href="#left2"
											role="tab"
											aria-controls="left"
											aria-selected="true"
										>
											<strong>4</strong>{' '}
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
									id="front2"
									role="tabpanel"
									aria-labelledby="front-tab"
								>
									<img className="card-image-top" src={myImg5} alt={'Logo'} title="D4Styles" />
									<p
										className="text-center mx-2 my-1 p-0"
										style={{ color: '#696969', fontFamily: 'Merienda' }}
									>
										This is some creative design work! This elegant piece of fabric is just a few
										clicks away from you.
									</p>
									<p
										className="text-center mb-2 p-0"
										style={{ color: '#000', fontFamily: 'IBM Plex Mono' }}
									>
										<Link to="/profile/arsalan-shakeel">
											<i
												className="fas fa-cart-plus fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</Link>{' '}
										US$:250.00{' '}
										<Link to="/profile/arsalan-shakeel">
											<i
												className="fas fa-cart-plus fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</Link>
									</p>
								</div>
								<div
									className="card-body tab-pane m-0 p-0"
									style={{ color: '#696969' }}
									id="back2"
									role="tabpane2"
									aria-labelledby="back-tab"
								>
									<img className="card-image-top" src={myImg6} alt={'Logo'} title="D4Styles" />
									<p
										className="text-center mx-2 my-1 p-0"
										style={{ color: '#696969', fontFamily: 'IBM Plex Mono', fontSize: '12px' }}
									>
										<table className="table table-bordered">
											<tbody>
												<tr>
													<td scope="row">
														<i
															class="fas fa-ellipsis-h fa-1x m-0"
															style={{ color: 'rgba(238, 20, 111, 0.685)' }}
														/>
													</td>
													<td colspan="2">Style Details</td>
												</tr>
												<tr>
													<td scope="row">
														<i
															class="fas fa-ellipsis-v fa-1x m-0"
															style={{ color: 'rgba(238, 20, 111, 0.685)' }}
														/>
													</td>
													<td>Color</td>
													<td>Golden</td>
												</tr>
												<tr>
													<td scope="row">
														<i
															class="fas fa-forward fa-1x m-0"
															style={{ color: 'rgba(238, 20, 111, 0.685)' }}
														/>
													</td>
													<td>Design</td>
													<td>Kamdani</td>
													<td>extra-elegant</td>
												</tr>
											</tbody>
										</table>
									</p>

									<p
										className="text-center mb-2 p-0"
										style={{ color: '#000', fontFamily: 'IBM Plex Mono' }}
									>
										<Link to="/profile/arsalan-shakeel">
											<i
												className="fas fa-cart-plus fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</Link>{' '}
										US$:250.00{' '}
										<Link to="/profile/arsalan-shakeel">
											<i
												className="fas fa-cart-plus fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</Link>
									</p>
								</div>
								<div
									className="card-body tab-pane m-0 p-0"
									style={{ color: '#696969' }}
									id="right2"
									role="tabpane3"
									aria-labelledby="right-tab"
								>
									<img className="card-image-top" src={myImg7} alt={'Logo'} title="D4Styles" />

									<p
										className="text-center mx-2 my-1 p-0"
										style={{ color: '#696969', fontFamily: 'IBM Plex Mono', fontSize: '12px' }}
									>
										<table className="table table-bordered">
											<tbody>
												<tr>
													<td scope="row">
														<i
															class="fas fa-ellipsis-h fa-1x m-0"
															style={{ color: 'rgba(238, 20, 111, 0.685)' }}
														/>
													</td>
													<td colspan="2">Fabric Details</td>
												</tr>
												<tr>
													<td scope="row">
														<i
															class="fas fa-ellipsis-v fa-1x m-0"
															style={{ color: 'rgba(238, 20, 111, 0.685)' }}
														/>
													</td>
													<td>Color</td>
													<td>Golden</td>
												</tr>
												<tr>
													<td scope="row">
														<i
															class="fas fa-forward fa-1x m-0"
															style={{ color: 'rgba(238, 20, 111, 0.685)' }}
														/>
													</td>
													<td>Design</td>
													<td>Kamdani</td>
													<td>extra-elegant</td>
												</tr>
											</tbody>
										</table>
									</p>
									<p
										className="text-center mb-2 p-0"
										style={{ color: '#000', fontFamily: 'IBM Plex Mono' }}
									>
										<Link to="/profile/arsalan-shakeel">
											<i
												className="fas fa-cart-plus fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</Link>{' '}
										US$:250.00{' '}
										<Link to="/profile/arsalan-shakeel">
											<i
												className="fas fa-cart-plus fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</Link>
									</p>
								</div>
								<div
									className="card-body tab-pane m-0 p-0"
									style={{ color: '#696969' }}
									id="left2"
									role="tabpane4"
									aria-labelledby="left-tab"
								>
									<img className="card-image-top" src={myImg8} alt={'Logo'} title="D4Styles" />
									<p
										className="text-center mx-2 my-1 p-0"
										style={{ color: '#696969', fontFamily: 'IBM Plex Mono', fontSize: '12px' }}
									>
										<table className="table table-bordered">
											<tbody>
												<tr>
													<td scope="row">
														<i
															class="fas fa-ellipsis-h fa-1x m-0"
															style={{ color: 'rgba(238, 20, 111, 0.685)' }}
														/>
													</td>
													<td colspan="2">Stitching Details</td>
												</tr>
												<tr>
													<td scope="row">
														<i
															class="fas fa-ellipsis-v fa-1x m-0"
															style={{ color: 'rgba(238, 20, 111, 0.685)' }}
														/>
													</td>
													<td>Color</td>
													<td>Golden</td>
												</tr>
												<tr>
													<td scope="row">
														<i
															class="fas fa-forward fa-1x m-0"
															style={{ color: 'rgba(238, 20, 111, 0.685)' }}
														/>
													</td>
													<td>Design</td>
													<td>Kamdani</td>
													<td>extra-elegant</td>
												</tr>
											</tbody>
										</table>
									</p>
									<p
										className="text-center mb-2 p-0"
										style={{ color: '#000', fontFamily: 'IBM Plex Mono' }}
									>
										<Link to="/profile/arsalan-shakeel">
											<i
												className="fas fa-cart-plus fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</Link>{' '}
										US$:250.00{' '}
										<Link to="/profile/arsalan-shakeel">
											<i
												className="fas fa-cart-plus fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</Link>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 m-0 p-1">
						<div className="card d-block">
							<div className="card-header" style={{ backgroundColor: '#ffe4e1' }}>
								<ul className="nav nav-pills justify-content-center" id="myTab3" role="tablist">
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
											<strong>1</strong>{' '}
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
											<strong>2</strong>{' '}
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
											<strong>3</strong>{' '}
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
											{'   '}
											<strong>4</strong>{' '}
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
									className="card-body tab-pane fade show m-0 p-0 active"
									style={{ color: '#696969' }}
									id="front3"
									role="tabpanel"
									aria-labelledby="home-tab"
								>
									<img className="card-image-top" src={myImg9} alt={'Logo'} title="D4Styles" />
									<p
										className="text-center mx-2 my-1 p-0"
										style={{ color: '#696969', fontFamily: 'Merienda' }}
									>
										This is some creative design work! This elegant piece of fabric is just a few
										clicks away from you.
									</p>
									<p
										className="text-center mb-2 p-0"
										style={{ color: '#000', fontFamily: 'IBM Plex Mono' }}
									>
										<Link to="/profile/arsalan-shakeel">
											<i
												className="fas fa-cart-plus fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</Link>{' '}
										US$:200.00{' '}
										<Link to="/profile/arsalan-shakeel">
											<i
												className="fas fa-cart-plus fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</Link>
									</p>
								</div>
								<div
									className="card-body tab-pane fade m-0 p-0"
									style={{ color: '#696969' }}
									id="back3"
									role="tabpane2"
									aria-labelledby="profile-tab"
								>
									<img className="card-image-top" src={myImg10} alt={'Logo'} title="D4Styles" />
									<p
										className="text-center mx-2 my-1 p-0"
										style={{ color: '#696969', fontFamily: 'IBM Plex Mono', fontSize: '12px' }}
									>
										<table className="table table-bordered">
											<tbody>
												<tr>
													<td scope="row">
														<i
															class="fas fa-ellipsis-h fa-1x m-0"
															style={{ color: 'rgba(238, 20, 111, 0.685)' }}
														/>
													</td>
													<td colspan="2">Style Details</td>
												</tr>
												<tr>
													<td scope="row">
														<i
															class="fas fa-ellipsis-v fa-1x m-0"
															style={{ color: 'rgba(238, 20, 111, 0.685)' }}
														/>
													</td>
													<td>Color</td>
													<td>Golden</td>
												</tr>
												<tr>
													<td scope="row">
														<i
															class="fas fa-forward fa-1x m-0"
															style={{ color: 'rgba(238, 20, 111, 0.685)' }}
														/>
													</td>
													<td>Design</td>
													<td>Kamdani</td>
													<td>extra-elegant</td>
												</tr>
											</tbody>
										</table>
									</p>
									<p
										className="text-center mb-2 p-0"
										style={{ color: '#000', fontFamily: 'IBM Plex Mono' }}
									>
										<Link to="/profile/arsalan-shakeel">
											<i
												className="fas fa-cart-plus fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</Link>{' '}
										US$:200.00{' '}
										<Link to="/profile/arsalan-shakeel">
											<i
												className="fas fa-cart-plus fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</Link>
									</p>
								</div>
								<div
									className="card-body tab-pane fade m-0 p-0"
									style={{ color: '#696969' }}
									id="right3"
									role="tabpane3"
									aria-labelledby="profile-tab"
								>
									<img className="card-image-top" src={myImg11} alt={'Logo'} title="D4Styles" />
									<p
										className="text-center mx-2 my-1 p-0"
										style={{ color: '#696969', fontFamily: 'IBM Plex Mono', fontSize: '12px' }}
									>
										<table className="table table-bordered">
											<tbody>
												<tr>
													<td scope="row">
														<i
															class="fas fa-ellipsis-h fa-1x m-0"
															style={{ color: 'rgba(238, 20, 111, 0.685)' }}
														/>
													</td>
													<td colspan="2">Fabric Details</td>
												</tr>
												<tr>
													<td scope="row">
														<i
															class="fas fa-ellipsis-v fa-1x m-0"
															style={{ color: 'rgba(238, 20, 111, 0.685)' }}
														/>
													</td>
													<td>Color</td>
													<td>Golden</td>
												</tr>
												<tr>
													<td scope="row">
														<i
															class="fas fa-forward fa-1x m-0"
															style={{ color: 'rgba(238, 20, 111, 0.685)' }}
														/>
													</td>
													<td>Design</td>
													<td>Kamdani</td>
													<td>extra-elegant</td>
												</tr>
											</tbody>
										</table>
									</p>
									<p
										className="text-center mb-2 p-0"
										style={{ color: '#000', fontFamily: 'IBM Plex Mono' }}
									>
										<Link to="/profile/arsalan-shakeel">
											<i
												className="fas fa-cart-plus fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</Link>{' '}
										US$:200.00{' '}
										<Link to="/profile/arsalan-shakeel">
											<i
												className="fas fa-cart-plus fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</Link>
									</p>
								</div>
								<div
									className="card-body tab-pane fade m-0 p-0"
									style={{ color: '#696969' }}
									id="left3"
									role="tabpane4"
									aria-labelledby="profile-tab"
								>
									<img className="card-image-top" src={myImg12} alt={'Logo'} title="D4Styles" />
									<p
										className="text-center mx-2 my-1 p-0"
										style={{ color: '#696969', fontFamily: 'IBM Plex Mono', fontSize: '12px' }}
									>
										<table className="table table-bordered">
											<tbody>
												<tr>
													<td scope="row">
														<i
															class="fas fa-ellipsis-h fa-1x m-0"
															style={{ color: 'rgba(238, 20, 111, 0.685)' }}
														/>
													</td>
													<td colspan="2">Stitching Details</td>
												</tr>
												<tr>
													<td scope="row">
														<i
															class="fas fa-ellipsis-v fa-1x m-0"
															style={{ color: 'rgba(238, 20, 111, 0.685)' }}
														/>
													</td>
													<td>Color</td>
													<td>Golden</td>
												</tr>
												<tr>
													<td scope="row">
														<i
															class="fas fa-forward fa-1x m-0"
															style={{ color: 'rgba(238, 20, 111, 0.685)' }}
														/>
													</td>
													<td>Design</td>
													<td>Kamdani</td>
													<td>extra-elegant</td>
												</tr>
											</tbody>
										</table>
									</p>
									<p
										className="text-center mb-2 p-0"
										style={{ color: '#000', fontFamily: 'IBM Plex Mono' }}
									>
										<Link to="/profile/arsalan-shakeel">
											<i
												className="fas fa-cart-plus fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</Link>{' '}
										US$:200.00{' '}
										<Link to="/profile/arsalan-shakeel">
											<i
												className="fas fa-cart-plus fa-1x"
												style={{ color: 'rgba(238, 20, 111, 0.685)' }}
											/>
										</Link>
									</p>
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
