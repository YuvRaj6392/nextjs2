import axios from "axios";

const getUserDetails=async()=>{
      await new Promise(r=>setTimeout(r,2000))
      const response=await axios.get("http://localhost:3000/api/user")
      console.log(response.data)
      return response.data

}

export default async function Home() {
  const data=await getUserDetails();
  return (
    <div>
    {data.user?.username} <br />
    {data.user?.password}
    </div>
  );
}
