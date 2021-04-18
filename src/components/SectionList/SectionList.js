import React from 'react';

import classes from './SectionList.module.css';

import SectionItems from './SectionItems/SectionItems';

const sectionList = (props) => {
    const sectionElements = props.sections.map(x =>
        <SectionItems 
            key={x.section} 
            section={x.section} 
            items={x.items} 
            itemClicked={props.itemClicked} />
    );
    return (
        <div className={classes.SectionList}>
            {sectionElements}
        </div>
    );
};

export default sectionList;