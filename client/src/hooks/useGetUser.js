

const useGetUser = () => {
    const getUser = async () => {
        const response = await fetch('https://prodigy-fs-task-01.onrender.com/api/users/',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials : 'include'
        });
        const data = await response.json();
        if(response.ok){
            return data;
        }
        else{
            // toast.error(data);
        }
    }
    return {getUser};
}
export default useGetUser;
