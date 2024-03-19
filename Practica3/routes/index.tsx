import { FreshContext, Handlers } from "$fresh/server.ts";
import Funct from "../islands/Funct.tsx"
import axios from "npm:axios";

type Data = {
    slug: string;
    company_name: string;
    title: string;
    description: string;
    remote: boolean;
    tags: string[];
    job_types: string[];
    location: string;
    created_at: string;
};

export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext) => {
      
  
        const response = await axios.get<Data[]>(`https://www.arbeitnow.com/api/job-board-api`, {
      });
      //console.log(response.data)
      return ctx.render(response.data);
    },
  };

  
  const Page = (props: PageProps<Data[]>) => {
    const jobdata = props.data;
    //console.log(jobdata.data[0])
    return (
        <Funct data={jobdata.data}/>
    );
  };
  
  export default Page;