import { FaUser } from "react-icons/fa";


interface Ioption{
    // icon:React.ReactNode | any;
    name:string;
    currency:number;
}

const userRunningBids:Ioption[] =[
    {
        name:"Rajesh",
        currency:12
    },
    {
        name:"Ram",
        currency:12
    },
    {
        name:"Shyam",
        currency:120
    },
    {
        name:"Ronj",
        currency:1200
    },
    {
        name:"Tika",
        currency:130
    },
]

export default userRunningBids;