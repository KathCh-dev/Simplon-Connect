import { useState } from "react";

const Checkbox = ({label, value, onChange}) => {
    return(
        <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
        </label>
    )
}

function DeleteMode(){
    const [toggleDelete, setToggleDelete] = useState(false);

    const handleClick = () => {
        setToggleDelete(!toggleDelete);
    };

    return(

        <div>

            <Checkbox
            label=" Mode suppression"
            value={toggleDelete}
            onChange={handleClick}
            ></Checkbox>

        </div>

    );
}

export default DeleteMode;