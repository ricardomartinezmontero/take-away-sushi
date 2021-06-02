import { useEffect, useState } from "react";

const useInput = (validate) => {
    const [value, setValue] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [isTouched, setIsTouched] = useState(false);
    const [isBlur, setIsBlur] = useState(false);

    useEffect(() => {
        setIsValid(validate(value));
    }, [value]);

    const onChange = (event) => {
        setValue(event.target.value);
        setIsTouched(true);
    };

    const onBlur = (event) => {
        setIsBlur(true);
    };

    return {
        value,
        isValid,
        isTouched,
        isBlur,
        onChange,
        onBlur
    };
};

export default useInput;
