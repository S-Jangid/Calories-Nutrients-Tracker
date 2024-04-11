export function calculateMaintenanceCalories(gender, weight, height, age, activity,goal) {
    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } 
    else if (gender === 'female') {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    let maintenanceCalories;
    switch (activity) {
        case 'light':
            maintenanceCalories = bmr * 1.375;
            break;
        case 'moderate':
            maintenanceCalories = bmr * 1.55;
            break;
        case 'high':
            maintenanceCalories = bmr * 1.725;
            break;
        default:
            return "Invalid activity level input. Please enter 'light', 'moderate',or 'High'.";
    }

    if(goal === 'cut')
        return maintenanceCalories - 200;

    else if (goal === 'maintain')
        return maintenanceCalories;

    else if (goal === 'bulk')
        return maintenanceCalories + 200 ;
}