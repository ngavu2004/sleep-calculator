import { useState } from "react";
import './stylesheets/SleepHabitForm.css';
import SleepPlanningResult from "./SleepPlanningResult";
const SleepHabitForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
    }

    function handleReset() {
        setName('');
        setAge('');
        setGender('');
        setSubmitted(false);
    }
    
    if (submitted) {
        <SleepPlanningResult name={name} age={age} gender={gender}/>;
    }
    
    return ( 
    <form onSubmit={handleSubmit} className="my-form">
      <label className="my-form__label">
        Name:
        <input type="text" value={name} className="my-form__input" onChange={(event) => setName(event.target.value)} />
      </label>
      <label className="my-form__label">
        Age
        <input type="number" value={age} className="my-form__input" onChange={(event) => setAge(event.target.value)} />
      </label>
      <label className="my-form__label">
        Biological Gender:
        <select value={gender} className="my-form__select" onChange={(event) => setGender(event.target.value)}>
          <option value="">-- Please Select --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <button type="submit" className="my-form__button" onClick={handleReset}>Submit</button>
    </form>
     );
}
 
export default SleepHabitForm;