import React from "react";
import "./static/Tabs.css"

const Tabs = ({tabs, selectedTab, setSelectedTab}) => {

    return(
        <div className="flex-row">
            {tabs.map((tab, idx) => {
                const handleTabClick = () => {
                    setSelectedTab(tab);
                };
                return(
                    tab.label === selectedTab.label ?
                        <button className="tab selected" key={idx}>{tab.label}</button> :
                        <button className="tab not-selected" key={idx} onClick={handleTabClick}>{tab.label}</button>
                );
            })}
        </div>
    );
}

export default Tabs;