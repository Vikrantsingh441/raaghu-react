import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompVisualSetting from "./rds-comp-visual-setting";

export default {
  title: "Components/Visual Setting",
  component: RdsCompVisualSetting,
} as ComponentMeta<typeof RdsCompVisualSetting>;

const Template: ComponentStory<typeof RdsCompVisualSetting> = (args) => (
  <RdsCompVisualSetting {...args} />
);

export const Default = Template.bind({});

Default.args = {
  visualsettingsItem: [
    {
      footer: { fixedFooter: false },
      header: {
        desktopFixedHeader: true,
        mobileFixedHeader: true,
        headerSkin: null,
        minimizeDesktopHeaderType: null,
      },
      layout: { layoutType: "fluid" },
      menu: {
        allowAsideMinimizing: false,
        asideSkin: "dark",
        defaultMinimizedAside: false,
        enableSecondary: false,
        fixedAside: false,
        hoverableAside: false,
        position: "tab",
        searchActive: false,
        submenuToggle: null,
      },
      subHeader: {
        containerStyle: "subheader py-2 py-lg-4  subheader-transparent",
        fixedSubHeader: false,
        subheaderSize: 5,
        subheaderStyle: null,
        titleStlye: "text-dark font-weight-bold my-2 mr-5",
      },
      themeId: "default",
    },
    {
      footer: { fixedFooter: false },
      header: {
        desktopFixedHeader: true,
        mobileFixedHeader: true,
        headerSkin: null,
        minimizeDesktopHeaderType: null,
      },
      layout: { layoutType: "fluid" },
      menu: {
        allowAsideMinimizing: false,
        asideSkin: "dark",
        defaultMinimizedAside: false,
        enableSecondary: false,
        fixedAside: false,
        hoverableAside: false,
        position: "tab",
        searchActive: false,
        submenuToggle: null,
      },
      subHeader: {
        containerStyle: "subheader py-2 py-lg-4  subheader-transparent",
        fixedSubHeader: false,
        subheaderSize: 5,
        subheaderStyle: null,
        titleStlye: "text-dark font-weight-bold my-2 mr-5",
      },
      themeId: "dark",
    },
    {
      footer: { fixedFooter: true },
      header: {
        desktopFixedHeader: true,
        mobileFixedHeader: true,
        headerSkin: null,
        minimizeDesktopHeaderType: null,
      },
      layout: { layoutType: "fluid" },
      menu: {
        allowAsideMinimizing: false,
        asideSkin: "dark",
        defaultMinimizedAside: false,
        enableSecondary: false,
        fixedAside: false,
        hoverableAside: false,
        position: "tab",
        searchActive: false,
        submenuToggle: null,
      },
      subHeader: {
        containerStyle: "subheader py-2 py-lg-4  subheader-transparent",
        fixedSubHeader: false,
        subheaderSize: 5,
        subheaderStyle: null,
        titleStlye: "text-dark font-weight-bold my-2 mr-5",
      },
      themeId: "accessible",
    },
  ],
  navtabItems: [
    {
      themeId: "default",
      navtabs: [
        {
          label: "Subheader",
          tablink: "#nav-subheader",
          ariacontrols: "nav-subheader",
          id: "subheader",
        },
        {
          label: "Menu",
          tablink: "#nav-Menu",
          ariacontrols: "nav-Menu",
          id: "menu",
        },
        {
          label: "Footer",
          tablink: "#nav-footer",
          ariacontrols: "nav-footer",
          id: "footer",
        },
      
      ],
    },
    {
      themeId: "dark",
      navtabs: [
        {
          label: "Header Bar",
          tablink: "#nav-headerbar",
          ariacontrols: "nav-headerbar",
          id: "header",
        },
        
      ],
    },
    {
      themeId: "accessible",
      navtabs: [
        {
          label: "Header Bar",
          tablink: "#nav-headerbar",
          ariacontrols: "nav-headerbar",
          id: "header",
        },
      
      ],
    },
  ],
  listskin: [
    { value: "dark", displayText: "Dark" },
    { value: "light", displayText: "Light" },
  ],
  listSubmenu: [
    { value: "false", displayText: "Accordian" },
    { value: "true", displayText: "Dropdown" },
  ],
  themeItem : [
    {
      imgsrc: "https://anzstageui.raaghu.io/assets/LightTheme.png",
      theme: "Light",
      themeId: "default",
    },
    {
      imgsrc: "https://anzstageui.raaghu.io/assets/Dashboard.png",
      theme: "Dark",
      themeId: "dark",
    },
    {
      imgsrc: "https://anzstageui.raaghu.io/assets/accessibleTheme.png",
      theme: "Accessible",
      themeId: "accessible",
    },
  ],
};
