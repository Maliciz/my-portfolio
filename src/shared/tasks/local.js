const STORAGE_KEY = 'tasks';

const readTasks = () => {
    try {
        const tasks = JSON.parse(localStorage.getItem(STORAGE_KEY));
        return Array.isArray(tasks) ? tasks : [];
    } catch (error) {
        console.error('errr:', error);
        return [];
    }
}
const writeTasks = (tasks) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
        console.error('errr:', error);
    }
}
const delay = (ms = 150) => new Promise(resolve => setTimeout(resolve, ms));

const localApi ={}

export default localApi;