import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";


type Data = {
  name?: string;
};

export const handler: Handlers = {
  GET: (req: Request, ctx: FreshContext<unknown>) => {
    const url = new URL(req.url);
    const name = url.searchParams.get("name") || null;
    if(name){
        return new Response("",{
            status:307,
            headers:{Location: `/people?name=${name}`}
        })
    }
    return ctx.render();
  },
};

const Page = (props: PageProps<unknown>) => {
    let name
  return (
    <div>
        <form>
        <input type="text" name="name" value={name} />
        <button type="submit'">Llévame a otro lado</button>
        </form>
    </div>
  );
};

export default Page;