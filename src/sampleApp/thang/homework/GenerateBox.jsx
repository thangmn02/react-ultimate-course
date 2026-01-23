import { useState } from "react";
import styles from './GenerateBox.module.css'; 
export default function GenerateBox() {

    const [numInput, setNumInput] = useState('');
    const [boxes, setBoxes] = useState([]);

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
    const randomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random()) * 16];
        }
        return color;

    };
    const handleToggle = (id) => {
        setBox(prevBox =>
            prevBox.map(box =>
                box.id === id
                    ? { ...box, color: randomColor() } : box
            )
        );
    };
    return (
        <div
            className={styles.container}>
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
                        className={style.input}
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
                    box.map(box => (
                        <div
                            key={box.id}
                            className={styles.box}
                            style={{ backgroundColor: box.color }}
                            onClick={() => handleToggle(box.id)}
                        >
                            Box #{box.id}
                        </div>
                    ))
                )}
            </div>
        </div>

    );

}