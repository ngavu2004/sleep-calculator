import SleepHabitForm from "./SleepHabitForm";
import SleepPlanningResult from "./SleepPlanningResult";
import './stylesheets/SleepPlanning.css';
import {GiNightSleep} from "react-icons/gi";

import { useState } from "react";
const SleepPlanning = () => {
    return ( 
        <div className="planning-root">
            <div className="header">
                <h1>Welcome <span><GiNightSleep/></span></h1> 
                <h2>Sleep planning function</h2>
                <h5>Fill in the form and hit submit to get your sleeping plan</h5>
            </div>
            <SleepHabitForm/>
            
        </div>
     );
}
 
export default SleepPlanning