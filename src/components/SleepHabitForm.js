import { useState } from "react";
import './stylesheets/SleepHabitForm.css';
import SleepPlanningResult from "./SleepPlanningResult";


const SleepHabitForm = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [showResult, setShowResult] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowResult(true);
    };

    return (
        <div className="formContainer">
        {!showResult && (
            <form onSubmit={handleSubmit} className="my-form">
            <label className="my-form__label">
                Name:
                <input
                className="my-form__input"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                />
            </label>
            <br />
            <label className="my-form__label">
                Age:
                <input
                className="my-form__input"
                type="text"
                value={age}
                onChange={(event) => setAge(event.target.value)}
                />
            </label>
            <br />
            <label className="my-form__label">
                Gender:
                <select className="my-form__select" value={gender} onChange={(event) => setGender(event.target.value)}>
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                </select>
            </label>
            <br />
            <button className="my-form__button" type="submit">Submit</button>
            </form>
        )}
        {showResult && (
            <SleepPlanningResult
            name={name}
            age={age}
            gender={gender}
            onReset={() => {
                setName('');
                setAge('');
                setGender('');
                setShowResult(false);
            }}
            />
        )}
        </div>
    );
}
 
export default SleepHabitForm;