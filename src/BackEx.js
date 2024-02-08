import { createServer } from "miragejs";



export const BackEx= () => {
        createServer({
            routes () {
                this.get("/api/users", ()=>({
                    users: [
                        {
                            id: 1,
                            name: "John Doe",
                            gender: "male",
                            email: "john@example.com",
                            age: 30,
                            status: "active",
                            phone: "1234567890",
                        },
                        {
                            id: 2,
                            name: "Jane Smith",
                            gender: "female",
                            email: "jane@example.com",
                            age: 25,
                            status: "inactive",
                            phone: "0987654321",
                        }
                    ]
                }))
            }
        })
}