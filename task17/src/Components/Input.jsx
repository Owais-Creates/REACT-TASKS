import React, { useEffect, useRef, useState } from 'react'

const Input = () => {

    const emptyArr = ["", "", "", ""];
    const [inputs, setInputs] = useState(emptyArr);
    const refs = [useRef(), useRef(), useRef(), useRef(),];

    useEffect(() => {
        refs[0].current.focus();
    }, [])

    const handleInputChange = (e, index) => {
        const value = e.target.value;

        if (!Number(value)) return;

        if (value.length === 1 && index >= 0 && index < refs.length - 1) {
            refs[index + 1].current.focus();
        }

        const copyInputs = [...inputs];
        copyInputs[index] = value;
        setInputs(copyInputs)
    }

    const handleOnKeyDown = (e, index) => {
        if (e.keyCode === 8) {
            const copyInputs = [...inputs];
            copyInputs[index] = "";
            setInputs(copyInputs);


            if (index > 0) {
                refs[index - 1].current.focus();

            }
        }
    }

    const handlePaste = (e) => {
        const data = e.clipboardData.getData('text');

        if (!Number(data) || data.length !== inputs.length) return;

        const pasteCode = data.split("");
        setInputs(pasteCode);
        refs[inputs.length - 1].current.focus();
    }

    return (
        <>
            <div >
                {emptyArr.map((item, i) => (
                    <input
                        value={inputs[i]}
                        key={i}
                        ref={refs[i]}
                        className='w-[50px] h-[50px] mr-3 text-center'
                        type="text"
                        maxLength="1"
                        onChange={(e) => handleInputChange(e, i)}
                        onKeyDown={(e) => handleOnKeyDown(e, i)}
                        onPaste={handlePaste}
                    />

                ))}
            </div>
        </>
    )
}

export default Input
