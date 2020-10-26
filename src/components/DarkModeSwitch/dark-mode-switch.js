import React from 'react';
import './dark-mode-switch.css';

class DarkModeSelector extends React.Component {
    render() {
        return (
            <div className="themeSwitchWrapper">
                <label className="themeSwitch" htmlFor="darkModeCheckbox">
                    <input type="checkbox" id="darkModeCheckbox" onChange={this.props.toggleDarkMode} checked={this.props.darkMode}/>
                    <div className="slider round"></div>
                </label>
                <em>Dark Mode {this.props.darkMode ? "on" : "off"}</em>
            </div>
        );
    }
}
export default DarkModeSelector;
