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
        
        <div className=" items-center justify-center h-screen">
        <h1 className="text-6xl font-bold mb-8 ms-56">GALAXY</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((user) => (
            <div key={user.id} className="bg-white rounded-lg shadow-md p-4">
              <p className="text-gray-800 font-bold">ID: {user.id}</p>
              <p className="text-gray-600">Age: {user.age}</p>
              <p className="text-gray-600">Name: {user.name}</p>
              <p className="text-gray-600">Email: {user.email}</p>
              <p className="text-gray-600">Phone: {user.phone}</p>
              <p className="text-gray-600">Status: {user.status}</p>
              <p className="text-gray-600">Gender: {user.gender}</p>
            </div>
          ))}
        </div>
      </div>
      
    );
}

export default Index;
