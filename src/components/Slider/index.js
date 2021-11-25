import React, { useEffect, useState } from "react";

import { Wrapper, Text } from "./Slider.styles";

const Slider = ({ id, range, callback, nextCallback }) => {

    const initValue = Object.keys(range).length === 0 ? 0 : range.start;
    const [value, setValue] = useState(initValue);
    const [text, setText] = useState("");

    useEffect(()=> {
        // console.log("Inside use effect");
        const v = Object.keys(range).length === 0 ? 0 : range.start;
        setValue(()=>v);
    }, [range])

    if (Object.keys(range).length === 0) {
        return (<></>)
    }

    const increase = () => {
        if (value < range["end"]) {
            setValue((value) => value += range.step);
        }
    }

    const decrease = () => {
        if (value > range["start"]) {
            setValue((value) => value -= range.step);
        }
    }

    const reset = () => {
        setValue(range.start)
    }

    const handleButtonClicked = () => {
        const res = callback(id, value)
        if (res[0]) {
            nextCallback(res[1]);
        } else {
            setText(res[1]);
        }
    }

    return (
        <Wrapper>
            <button id="decrement" onClick={()=>decrease()}>-</button>
            <input type="text" placeholder={value} value={value} readOnly/>
            <button id="incremenet" onClick={()=>increase()}>+</button>
            <button id="reset" onClick={()=>reset()}>Reset</button>
            <button id="submit" onClick={handleButtonClicked}>Try it</button>
            <Text>{text}</Text>
        </Wrapper>
    )
}

export default Slider;