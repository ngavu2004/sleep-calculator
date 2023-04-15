import './stylesheets/SleepPlanning.css';
const SleepPlanningResult = (props) => {

    const { name, age, gender, onReset } = props;

    // Calculate sleeping hours based on age and gender
    let sleepingHours;
    if (gender === 'male') {
        if (age >= 18 && age <= 64) {
        sleepingHours = '7-9 hours';
        } else if (age >= 65) {
        sleepingHours = '7-8 hours';
        } else {
        sleepingHours = '8-10 hours';
        }
    } else if (gender === 'female') {
        if (age >= 18 && age <= 64) {
        sleepingHours = '7-9 hours';
        } else if (age >= 65) {
        sleepingHours = '7-8 hours';
        } else {
        sleepingHours = '8-10 hours';
        }
    } else {
        sleepingHours = '7-9 hours';
    }

    return (
        <div>
        <h2>Hi, {name}!</h2>
        <p>
            Based on your age ({age}) and gender ({gender}), you should aim to sleep
            for {sleepingHours} per night.
        </p>
        <button onClick={onReset}>Return</button>
        </div>
    );
}
 
export default SleepPlanningResult;