const getTasksService = async ()=>{
    const response = await fetch('http://localhost:8080/api/task');
    try {
        if(response.ok) {
            const data = await response.json();
            return data;
        } 
    } catch (error) {
        console.log("Error about "+error)
    }
}
export default getTasksService