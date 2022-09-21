export const useDate = () => ({
    getDate: (timestamp: number) => {
        const dateRaw = new Date(timestamp);

        const day = `0${dateRaw.getDate()}`.slice(-2);
        const month = `0${dateRaw.getMonth() + 1}`.slice(-2)

        return `${day}/${month}`;
    },
    getHours: (timestamp: number) => {
        const dateRaw = new Date(timestamp);
        
        const hour = `0${dateRaw.getHours()}`.slice(-2);
        const minutes = `0${dateRaw.getMinutes()}`.slice(-2);

        return `${hour}:${minutes}`;
    }
});