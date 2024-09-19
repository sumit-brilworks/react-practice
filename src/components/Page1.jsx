import React, { useEffect, useState } from "react";
import { Link, ScrollRestoration } from "react-router-dom";

function page2() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.org/posts").then();
    setData();
    setLoading(false);
  });
  return (
    <div className="bg-fuchsia-400 p-10 flex gap-5 flex-col w-fit">
      <Link to={"/page2"} className="bg-sky-600 p-3 rounded">
        Page 2
      </Link>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <Link to={"/page2"} className="bg-sky-600 p-3 rounded">
        Page 1
      </Link>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
      <Link to={"/page2"} className="bg-sky-600 p-3 rounded">
        Page 1
      </Link>
      <div className="bg-red-400 rounded p-5">
        <div className="text-3xl font-['Sofadi One'] ">Title</div>
        <div className="text-2xl">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quidem assumenda! Recusandae, similique nemo perferendis architecto
          aspernatur a dolore, distinctio dolorum ex aut possimus laborum. Modi
          a ad excepturi at.div{" "}
        </div>
      </div>
    </div>
  );
}

export default page2;
