import './stylesheets/SleepPlanningResult.css';
import calendar from '../images/calendar.png';
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
        <div className='sleepPlanRoot'>
            
            <div className="container">
                <h2>Hi, {name}!</h2>
                <div className="sleepPlan">
                    <p>
                        Based on your age ({age}) and gender ({gender}), you should aim to sleep
                        for {sleepingHours} per night.
                        This is the sleep plan:
                        <ul>
                            <li>Monday: 10 PM - 6 AM</li>
                            <li>Tuesday: 10 PM - 6 AM</li>
                            <li>Wednesday: 10 PM - 6 AM</li>
                            <li>Thursday: 10 PM - 6 AM</li>
                            <li>Friday: 10 PM - 6 AM</li>
                            <li>Saturday: 10 PM - 6 AM</li>
                            <li>Sunday: 10 PM - 6 AM</li>

                        </ul>
                    </p>
                    <button onClick={onReset}>Return</button>
                </div>
                {/* <div className="calendar">
                    <img src={calendar} />
                </div> */}
            
            </div>
        </div>
    );
}
 
export default SleepPlanningResult;