const minimumTime: string = '09:00:00';
const maximumTime: string = '18:00:00';

export function availabilityChecker() {       
    const dateTime = new Date().toLocaleTimeString('en-NL');
    return minimumTime < dateTime && dateTime < maximumTime;
}