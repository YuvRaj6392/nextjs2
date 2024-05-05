import client from "@/db"

const getUserDetails=async()=>{
      await new Promise(r=>setTimeout(r,2000))
      try {
        const user = await client.user.findFirst({});
        return {
          username: user?.username,
          password: user?.username
        }
      }  catch(e) {
        console.log(e);
      }

}

export default async function Home() {
  const data=await getUserDetails();
  return (
    <div>
    {data?.username} <br />
    {data?.password}
    </div>
  );
}
