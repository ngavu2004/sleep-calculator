import SleepHabitForm from "./SleepHabitForm";
import SleepPlanningResult from "./SleepPlanningResult";
import './stylesheets/SleepPlanning.css';


const SleepPlanning = () => {

    return ( 
        <div className="planning-root">
            <div className="header">
                <h1>Welcome</h1>
                <h2>Sleep planning function</h2>
                <h5>Fill in the form and hit submit to get your sleeping plan</h5>
            </div>
            <SleepHabitForm />
            <SleepPlanningResult />
        </div>
     );
}
 
export default SleepPlanning