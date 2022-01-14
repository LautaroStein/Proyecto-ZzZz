import React from 'react'
import { format, parseISO } from "date-fns";

const TooltipChart = ({ active, payload, label }) => {

    if (active) {
        return (
            <div className="tooltip">
                <h4>{label}</h4>
                {payload[0] && <p>${payload[0].value.toFixed(2)} USD</p>}
            </div>
        );
    }
    return null;
}

export default TooltipChart

