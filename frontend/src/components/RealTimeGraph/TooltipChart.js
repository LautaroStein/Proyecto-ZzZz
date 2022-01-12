import React from 'react'
import { format, parseISO } from "date-fns";

const TooltipChart = ({ active, payload, label }) => {
    if (active) {
        return (
            <div className="tooltip">
                <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
                <p>${payload[0].value.toFixed(2)} CAD</p>
            </div>
        );
    }
    return null;
}

export default TooltipChart