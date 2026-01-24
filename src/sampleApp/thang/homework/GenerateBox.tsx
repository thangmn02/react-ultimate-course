import { useState } from "react";
import styles from './GenerateBox.module.css'; 
import { randomColor } from "../../../utils/randomColor";

/*
[
    { id: xx, title: xx, descrption: xxx },
    { id: xx, title: xx, descrption: xxx }
]
*/
interface Box {
    id: number,
    color: string
}

export default function GenerateBox() {
    const [numInput, setNumInput] = useState('');
    const [boxes, setBoxes] = useState<Box[]>([]);

    const handleGenerate = () => {
        const count = parseInt(numInput, 10) || 0;
        const validCount = Math.max(0, Math.min(128, count));
        const newBox = Array.from({ length: validCount }, (_, index) => {
            return {
                id: index + 1,
                color: 'antiquewhite',
            };
        });
        setBoxes(newBox);
    };
    const handleToggle = (id: number) => {
        // setBoxes(prevBox =>
        //     prevBox.map(box =>
        //         box.id === id
        //             ? { ...box, color: randomColor() } : box
        //     )
        // );
        setBoxes(prevBox => {
            // create new array
            const newBoxs = [...prevBox]; // copy new array;
            const boxIndex = newBoxs.findIndex(box => box.id === id);
            if (boxIndex === -1) {
                return prevBox
            }
            newBoxs[boxIndex].color = randomColor();
            return newBoxs
        });
    };
    return (
        <div
            className={styles.container}>¬
            {
                <div className={styles.formGroup}>
                    <label htmlFor="num-box" className={styles.label}>
                        Number of boxes:
                    </label>
                    <input
                        id="num-box"
                        type="number"
                        min="1"
                        max="100"
                        value={numInput}
                        onChange={(e) => setNumInput(e.target.value)}
                        className={styles.input}
                    />
                    <button
                        onClick={handleGenerate}
                        className={styles.button}
                    >
                        Generate
                    </button>
                </div>
            }
            <div className={styles.grid}>
                {boxes.length === 0 ? (
                    <p className={styles.emptyText}>No boxes generated</p>
                ) : (
                    <>
                        {boxes.map(box => (
                            <div
                                key={box.id}
                                className={styles.box}
                                style={{ backgroundColor: box.color }}
                                onClick={() => handleToggle(box.id)}
                            >
                                Box #{box.id}
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>

    );

}