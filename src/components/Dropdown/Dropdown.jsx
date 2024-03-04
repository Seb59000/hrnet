import './Dropdown.css'

function Dropdown({ id, choices, values }) {
    return (
        <select className="dropdown" name={id} id={id}>
            {choices.map((choice, i) =>
                <option className="option" key={i} value={values[i]}>{choice}</option>
            )}
        </select>
    );
}

export default Dropdown;
