import React from 'react';
import { RdsCheckbox, RdsInput, RdsLabel } from "raaghu-react-elements";
import "./rds-comp-email-settings-new.scss";

export interface RdsCompEmailSettingsNewProps {}

const RdsCompEmailSettingsNew = (props: RdsCompEmailSettingsNewProps) => {
	return (
		<>
			<form className="RdsCompEmailSettingsNew__form">
				<div className="row mb-3">
					<div className="col-md-6 col-sm-6 col-lg-6">
						<div className="form-group">
							<RdsLabel
								label="Default From Display Name"
								class="mb-1"
								size="14px"
							></RdsLabel>
							<RdsInput
								placeholder="Enter Name"
								customClasses="form-control"
								inputType="email"
							></RdsInput>
						</div>
					</div>
					<div className="col-md-6 col-sm-6 col-lg-6">
						<RdsLabel
							label="Default From Address"
							class="mb-1"
							size="14px"
						></RdsLabel>
						<RdsInput
							placeholder="Enter Name"
							customClasses="form-control"
						></RdsInput>
					</div>
				</div>

				<div className="row mb-4">
					<div className="col-md-6 col-sm-6 col-lg-6">
						<div className="form-group">
							<RdsLabel label="Host" class="mb-1" size="14px"></RdsLabel>
							<RdsInput
								placeholder="Enter Name"
								customClasses="form-control"
							></RdsInput>
						</div>
					</div>
					<div className="col-md-6 col-sm-6 col-lg-6">
						<RdsLabel label="Port" class="mb-1" size="14px"></RdsLabel>
						<RdsInput
							placeholder="Enter Name"
							customClasses="form-control"
						></RdsInput>
					</div>
				</div>

				<div className="row mb-3">
					<div
						className="col-lg-12 col-md-12 col-sm-12"
						style={{ fontSize: "14px" }}
					>
						<RdsCheckbox label="Enable SSL" checked={false}></RdsCheckbox>
					</div>
				</div>

				<div className="row mb-3">
					<div
						className="col-lg-12 col-md-12 col-sm-12"
						style={{ fontSize: "14px" }}
					>
						<RdsCheckbox
							label="Use Default Credentials"
							checked={false}
						></RdsCheckbox>
					</div>
				</div>
			</form>
		</>
	);
};

export default RdsCompEmailSettingsNew;
