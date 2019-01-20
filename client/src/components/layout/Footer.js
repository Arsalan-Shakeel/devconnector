import React from 'react';

export default () => {
	return (
		<footer id="main-footer" className="text-center p-4">
			<hr className="hr-styling" />
			<div clasName="container">
				<div className="row">
					<div className="col">
						<p>
							<strong>Copyright &copy; {new Date().getFullYear()} D4Styles</strong>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
