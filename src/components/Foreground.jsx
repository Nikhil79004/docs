import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "This is the background color that will be displayed.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is another file with a different description.",
      filesize: "1.2mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "This is yet another file with some description.",
      filesize: ".7mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Expired", tagColor: "green" },
    },
  ];

  return (
    <div ref={ref} className="fixed z-[3] w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;