function Dropdown({ id, choices, values, onChange, className }) {
    return (
        <select className={className} name={id} id={id} onChange={onChange}>
            {choices.map((choice, i) =>
                <option className="option" key={i} value={values[i]}>{choice}</option>
            )}
        </select>
    );
}

export default Dropdown;
