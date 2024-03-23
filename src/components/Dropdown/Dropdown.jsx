function Dropdown({ id, choices, values, onChange, classOfSelect }) {
    return (
        <select className={classOfSelect} name={id} id={id} onChange={onChange}>
            {choices.map((choice, i) =>
                <option className="option" key={i} value={values[i]}>{choice}</option>
            )}
        </select>
    );
}

export default Dropdown;
