import React from "react";
import './ToogleSwitch.css';

interface ToggleSwitchProps {
    label: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label }) => {
    return (
        <div className="form-check form-switch custom-switch d-flex align-items-center justify-content-between">
            <label className="form-check-label mb-0 mt-0" htmlFor="flexSwitchCheckChecked">
                {label}
            </label>
            <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
            />
        </div>
    );
}

export default ToggleSwitch;
