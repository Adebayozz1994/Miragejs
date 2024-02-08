import axios from "axios";
import { useEffect, useState } from "react";

const Index = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get("/api/users")
        .then((res) => {
            console.log(res.data.users);
            setData(res.data.users);
        })
    }, []);

    return (
        
        <div className="flex flex-wrap justify-center">
        {data.map((user) => (
            <div key={user.id} className="relative flex justify-center h-[300px] w-[160px]  border-4 border-black rounded-2xl bg-gray-50 shadow-2xl m-4">
                <span className="border border-black bg-black w-20 h-2 rounded-br-xl rounded-bl-xl"></span>
                <span className="absolute -right-2 top-14  border-4 border-black h-7 rounded-md"></span>
                <span className="absolute -right-2 bottom-36  border-4 border-black h-10 rounded-md"></span>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-sm font-bold">{user.id}</h1>
                    <p className="text-lg font-semibold">{user.name}</p>
                    <p className="text-sm">{user.email}</p>
                    <p className="text-sm">{user.gender}</p>
                    <p className="text-sm">{user.age}</p>
                    <p className="text-sm">{user.status}</p>
                    <small className="text-sm">{user.phone}</small>
                    

                    
                </div>
            </div>
        ))}
    </div>
      
    );
}

export default Index;
