const addLeadingZero = (value: number) => value < 10 ? `0${value}` : value;

export const useDate = () => ({
    getDate: (timestamp: number) => {
        const dateRaw = new Date(timestamp * 1000);

        let day = dateRaw.getDay();
        let month = dateRaw.getMonth();

        let date = `${addLeadingZero(day)}/${addLeadingZero(month)}`;

        return date;
    },
    getHours: (timestamp: number) => {
        const dateRaw = new Date(timestamp * 1000);
        
        let hour = dateRaw.getHours();
        let minutes = dateRaw.getMinutes();

        let hours = `${addLeadingZero(hour)}:${addLeadingZero(minutes)}`;

        return hours;
    }
});