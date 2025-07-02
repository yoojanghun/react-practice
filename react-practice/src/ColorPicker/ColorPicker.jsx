import styles from "./ColorPicker.module.css";
import { useState } from "react";

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event) {
        setColor(event.target.value);
    }
    return (
        <div className={styles["color-picker-container"]}>
            <h1>Color Picker</h1>
            <div className={styles["color-display"]} style={{backgroundColor: color}}>
                <p>Selected Color : {color}</p>
            </div>
            <label>Select a Color : </label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    );
}

export default ColorPicker;

// style={{backgroundColor: color}}
// 바깥쪽 { ... } : JSX 안에서 자바스크립트 표현식을 쓴다는 의미 
// 안쪽 { backgroundColor: color } : 자바스크립트의 객체 리터럴 (스타일 속성들을 담은 객체) 
// React에서 style은 뭐야? : 객체 형태로 넘겨야 함 (CSS 속성 이름도 camelCase로 써야 함)