const SleepPlanningResult = ({name, age, gender }) => {
    let recommendedHours;
    if (age < 18) {
        recommendedHours = gender === 'male' ? 8 : 9;
    } else if (age >= 18 && age < 65) {
        recommendedHours = gender === 'male' ? 7 : 8;
    } else {
        recommendedHours = gender === 'male' ? 7 : 9;
    }

    return ( 
        <div>
            <h1>Hi {name}</h1>
            <p>Based on your age ({age}) and gender ({gender}), it is recommended that you sleep for {recommendedHours} hours per night.</p>
        </div>
     );
}
 
export default SleepPlanningResult;