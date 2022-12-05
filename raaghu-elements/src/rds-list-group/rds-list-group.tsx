import React from "react";
import RdsLabel from "../rds-label";
import "./rds-list-group.scss";

export interface RdsListGroupProps {
  labelPosition?: string;
  label?: string;
  listItem: any[];
  listGroupWithMultiSelect?: boolean;
  withBadge?: boolean;
}

const RdsListGroup = (props: RdsListGroupProps) => {
  return (
    <>
      {props.labelPosition == "top" && (
        <RdsLabel label={props.label} className="mx-1"></RdsLabel>
      )}
      {!props.listGroupWithMultiSelect && (
        <ul className="list-group mb-1">
          {props.listItem.map((listItems) => (
            <>
              <li
                className={`list-group-item form-check ${
                  listItems.disabled ? "disabled" : ""
                }  d-flex justify-content-between align-items-center`}
                style={{marginBottom:0}}
              >
                {listItems.label}
                {props.withBadge && <span className="badge bg-primary ">
                  {listItems.badgeLabel}
                </span>}
              </li>
            </>
          ))}
        </ul>
      )}
      {props.listGroupWithMultiSelect && (
        <ul className="list-group mb-1">
          {props.listItem.map((listItems) => (
            <>
              <li
                className={`list-group-item form-check ${
                  listItems.disabled ? "disabled" : ""
                }   justify-content-between align-items-center`}
                style={{marginBottom:0}}
              >
                <input
                  className="form-check-input ms-1 me-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  style={{marginBottom:0}}
                />
                <div className="d-flex justify-content-between" style={{marginBottom:0}}>
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    {listItems.label}
                  </label>
                  {props.withBadge && <span className="badge bg-primary ">
                    {listItems.badgeLabel}
                  </span>}
                </div>
              </li>
            </>
          ))}
        </ul>
      )}
      {props.labelPosition == "bottom" && (
        <RdsLabel label={props.label} className="mx-1"></RdsLabel>
      )}
    </>
  );
};

export default RdsListGroup;