import React from "react";

import classes from "./SectionHeader.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const sectionHeader = (props) => {
    return (
        <div className={classes.SectionHeader} onClick={props.onClick}>
            <h2>{props.headerText}</h2>
            {!props.collapsed ? (
                <FontAwesomeIcon
                    icon={["fa", "angle-up"]}
                    className={classes.Arrow}
                />
            ) : (
                <FontAwesomeIcon
                    icon={["fa", "angle-down"]}
                    className={classes.Arrow}
                />
            )}
        </div>
    );
};

export default sectionHeader;
