import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import RdsCompProfile from "../rds-comp-profile/rds-comp-profile";
import { RdsIcon, RdsOffcanvas } from "../rds-elements";
import RdsDropdownList from "../../../raaghu-elements/src/rds-dropdown-list/index";
import RdsBreadcrumb from "../../../raaghu-elements/src/rds-breadcrumb/rds-breadcrumb";
import MultiLevelDropdown from "./multi-level-dropdown";
export interface RdsCompTopNavigationProps {
  onClick?: (event: React.MouseEvent<HTMLLIElement>, val: string) => void;
  onChatClickHandler?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  toggleTheme?: React.MouseEventHandler<HTMLInputElement>;
  onClickThemeCheck?:(event: React.MouseEvent<HTMLLIElement>, val: string) => void;
  notifications?: any[];
  languageItems: any[];
  themeItems:any[];
  toggleItems: any[];
  elementList: any[];
  componentsList: any[];
  navbarTitle?: string;
  navbarSubTitle?: string;
  brandName?: string;
  profileTitle?: string;
  profileName?: string;
  logo?: string;
  languageLabel: string;
  languageIcon: string;
  themeLabel:string;
  breacrumItem?: any;
  profilePic?: any;
  onLogout?: (Event: React.MouseEvent<HTMLButtonElement>) => void;
  onElementSelect?: (selectedElement: any) => void;
}
const RdsCompTopNavigation = (props: RdsCompTopNavigationProps) => {
  const [breacrumItem, setBreadCrumItem] = useState(props.breacrumItem);
  const [themes, setThemes] = useState("light");
  const [path, setPath] = useState({
    elem: "/elements",
    compo: "/components",
    chart: "/charts",
    icon: "",
  });
  const [navtitle, setNavtitle] = useState(props.navbarTitle);
  const [resetDrop, setResetDrop] = useState(false);

  const navigate = useNavigate();
  const navtabItems = [
    {
      label: "Linked Accounts",
      icon: "manage_linked",
      subText: "Manage accounts linked to your account",
      id: "nav-LinkAccount",
    },
    {
      label: "My Account",
      icon: "manage_authority",
      subText: "Manage authority accounts",
      id: "nav-MyAccount",
    },
    {
      label: "Security Logs",
      icon: "login_attempts",
      subText: "See recent login attempts for your account",
      id: "nav-SecuityLogs",
    },
    {
      label: "Personal Data",
      icon: "my_settings",
      subText: "Change your account settings",
      id: "nav-PersonalData",
    },
  ];
 
  const onClickHandler = (e: any, val: any) => {
    if (props.onClick) {
      props.onClick(e, val);
    }
  };

  const onClicktheme  =(e: any, val:string)  =>
  {
    if(props.onClickThemeCheck){
        props.onClickThemeCheck(e,val);
    }
  };

  //UI library dropdown handler
  const handlerSubMenuselect = (
    e: any,
    val: any,
    label: any,
    selectedUi: any
  ) => {
    //element handling
    if (selectedUi == "Elements") {
      const paath = `/elements/${val}`;
      let elementBreadCrumb = [
        { id: "UI Library", label: "UI Library", icon: "" },
        { id: "Element", label: "Elements", icon: "" },
        { id: e.target.textContent, label: e.target.textContent, icon: "" },
      ];
      setNavtitle("Element");
      setBreadCrumItem(elementBreadCrumb);
      setPath({ ...path, elem: paath });
    }
    //Components  handling
    if (selectedUi == "Components") {
      const paath = `/components/${val}`;
      let compoBreadCrumb = [
        { id: "UI Library", label: "UI Library", icon: "" },
        { id: "Component", label: "Components", icon: "" },
        { id: e.target.textContent, label: e.target.textContent, icon: "" },
      ];

      setNavtitle("Component");
      setBreadCrumItem(compoBreadCrumb);
      setPath({ ...path, compo: paath });
    }
    //Charts  handling
    if (selectedUi == "Charts") {
      const paath = `/charts/${val}`;
      let chartBreadCrumb = [
        { id: "UI Library", label: "UI Library", icon: "" },
        { id: "Chart", label: "Charts", icon: "" },
        { id: e.target.textContent, label: e.target.textContent, icon: "" },
      ];

      setNavtitle("Chart");
      setBreadCrumItem(chartBreadCrumb);
      setPath({ ...path, chart: paath });
    }
    if (label == "Icons") {
      let iconBreadCrumb = [
        { id: "UI Library", label: "UI Library", icon: "" },
        { id: "Icons", label: "Icons", icon: "" },
      ];
      setNavtitle("Icon");
      setBreadCrumItem(iconBreadCrumb);
      setPath({ ...path, icon: "/icons" });
    }
  };
  // const collapse = props.collapse;


  //side effect for breadcrum
  useEffect(() => {
    setBreadCrumItem(props.breacrumItem);
  }, [props.breacrumItem]);

  const handlerLinkElements = () => {};
  const [profilePic, setProfilePic] = useState(
    "./assets/profile-picture-circle.svg"
  );
  useEffect(() => {
    if (props.profilePic) {
      setProfilePic(props.profilePic);
    }
  }, [props.profilePic]);

  //side effect for the navtitle adn reset
  useEffect(() => {
    setNavtitle(props.navbarTitle);
    if (
      (navtitle != "Element" &&
        navtitle != "Component" &&
        navtitle != "Chart") ||
      props.navbarTitle != navtitle
    ) {
      setResetDrop(!resetDrop);

    }
  }, [props.breacrumItem, props.navbarTitle]);
  const [expanded, setExpanded] = useState(true);
  //side effect for the path
  useEffect(() => {
    if (navtitle == "Component") {
      navigate(path.compo);
    }
    if (navtitle == "Element") {
      navigate(path.elem);
    }
    if (navtitle == "Chart") {
      navigate(path.chart);
    }
    if (navtitle == "Icon") {
      navigate(path.icon);
    }
  }, [path]);

  const chatsHandler =(e:any) =>{
    setNavtitle("Chats");
    setBreadCrumItem([]);
    props.onChatClickHandler&&props.onChatClickHandler(e)
  }

  return (
    <div>
      <nav
        className={`navbar d-flex justify-content-between p-2 min-width`}
      >
             {/*  <button className="navbar-toggler px-2" id="humbreger-btn" type="button"
      data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    
        <div className="d-flex align-items-center mx-4 breadcrumb-title">
          <div>
            <div className="text-bold">{navtitle}</div>
            {breacrumItem.length > 1 && (
              <div className="text-muted fs-7 mob-description">
                <>
                  <RdsBreadcrumb
                    role="advance"
                    breadItems={breacrumItem}
                  ></RdsBreadcrumb>
                </>
              </div>
            )}
          </div>
        </div>
        
        <span className="d-block d-md-none " onClick={() => setExpanded(!expanded)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="bi bi-three-dots-vertical"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path></svg></span>
        {expanded ? (
        <div className="d-flex me-2 align-items-center right-side-menu">
          {/* <div className="position-relative me-3 border-end"><MultiLevelDropdown
            reset={resetDrop}
            onsubmenu={handlerSubMenuselect}
          ></MultiLevelDropdown></div> */}
           <div className="position-relative me-3 border-end">
            <RdsDropdownList
               labelIcon='sun'
               labelIconWidth='18px'
               labelIconHeight='18px'
               isIconPlaceholder={true}
               isPlaceholder={false}
              placeholder={props.themeLabel}            
              id={"themeDropdown"}
              listItems={props.themeItems}
              onClick={onClicktheme}
            ></RdsDropdownList>
          </div>
          <div className="position-relative px-3 border-end">
            <RdsDropdownList
              labelIcon='en'
              labelIconWidth='18px'
              labelIconHeight='18px'
              placeholder={props.languageLabel}
              icon={props.languageIcon}
              iconFill={false}
              iconStroke={true}
              isIconPlaceholder={true}
              isPlaceholder={false}
              id={"languageDropdown"}
              listItems={props.languageItems}
              onClick={onClickHandler}
            ></RdsDropdownList>
          </div>
          <Link
            to="/chats"
            className="px-3 border-end"
            role="button"
            onClick={chatsHandler}
          >
            <RdsIcon
              name="chat"
              height="20px"
              width="20px"
              fill={false}
              stroke={true}
              colorVariant="primary"
            ></RdsIcon>
          </Link>
          <div className="px-3">
            <RdsOffcanvas
              className="pb-0"
              placement="end"
              offcanvaswidth={307}
              offId="Profile"
              offcanvasbutton={
                <div
                  className="d-flex align-items-center"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="avatar bg-light avatar-sm rounded rounded-circle mb-0"
                    src={profilePic}
                  ></img>
                  <div className="ms-2 fw-bold fs-6">
                    <div className="text-nowrap">{props.profileTitle}</div>
                    <div className="text-nowrap text-muted">
                      {props.profileName}
                    </div>
                  </div>
                  <span className="ms-3">
                    <RdsIcon
                      name="chevron_down"
                      height="12px"
                      width="12px"
                      fill={false}
                      stroke={true}
                    ></RdsIcon>
                  </span>
                </div>
              }
              backDrop={true}
              scrolling={false}
              preventEscapeKey={false}
              canvasTitle={""}
            >
              <RdsCompProfile
                navtabItems={navtabItems}
                profilePic={profilePic}
                userName={"Host Admin"}
                userRole={"admin"}
                onLogout={props.onLogout}
              ></RdsCompProfile>
            </RdsOffcanvas>
          </div>
          </div>) : null}
      </nav>
    </div>
  );
};


export default RdsCompTopNavigation;

