import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function NpmDatePicker({ selected, onChange }) {
    return (
        <DatePicker showIcon selected={selected} onChange={onChange} />
    );
}

export default NpmDatePicker;
