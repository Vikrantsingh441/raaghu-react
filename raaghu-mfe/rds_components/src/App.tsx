
import React from "react";
import RdsCompAdminDashboard from "./rds-comp-admin-dashboard/rds-comp-admin-dashboard";
import RdsCompForgotPassword from "./rds-comp-forgot-password/rds-comp-forgot-password";
import RdsCompLogin from "./rds-comp-login/rds-comp-login";
import RdsCompOrganizationTree from "./rds-comp-organization-tree/rds-comp-organization-tree";
import RdsCompSideNavigation from "./rds-comp-side-navigation/rds-comp-side-navigation";
import RdsCompTenantList from "./rds-comp-tenant-list/rds-comp-tenant-list";
import RdsCompTopNavigation from "./rds-comp-top-navigation/rds-comp-top-navigation";
import RdsCompWebsiteLog from "./rds-comp-website-log/rds-comp-website-log";
import RdsCompAlertPopup from "./rds-comp-alert-popup/rds-comp-alert-popup";
const App = () => {
    const loginHandler =(email?:string,password?:string)=>{
        console.log(email);
        console.log(password);
    }
    return (
    <div>
        <RdsCompLogin  onLogin={loginHandler}></RdsCompLogin>
        <RdsCompAdminDashboard></RdsCompAdminDashboard>
        <RdsCompSideNavigation></RdsCompSideNavigation>
        <RdsCompTopNavigation></RdsCompTopNavigation>
        <RdsCompForgotPassword></RdsCompForgotPassword>
        <RdsCompTenantList tenantHeaders={[]} tableData={[]} editionList={[]}></RdsCompTenantList>
        <RdsCompWebsiteLog></RdsCompWebsiteLog>
        <RdsCompAlertPopup/>
        <RdsCompOrganizationTree organizationTreeData={[{name:"rtyj"}]}></RdsCompOrganizationTree>
    </div>
    )
    };
export default App;
