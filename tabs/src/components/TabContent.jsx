import React from "react";
import "./static/TabContent.css"

const TabContent = ({selectedTab}) => {
    return(
        <p className="content">{selectedTab.content}</p>
    );
}

export default TabContent;