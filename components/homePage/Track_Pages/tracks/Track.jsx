import Image from "next/image";

export default function Track({ heading, by, content, imgOri, image, id }) {
  return (
    <div className={`w-full ${imgOri ? "bg-primary10":"bg-primary20"} pb-12`} id={id}>
      <div className="w-[90%] sm:w-[70%] mx-auto">
        <h1
          className="text-4xl sm:text-5xl font-bold text-center pt-12 pb-8"
          style={{ lineHeight: 1.5 }}
        >
          {heading}
        </h1>

        <div>
          {by.map(function (person, idx) {
            return (
              <h2 key={idx} className="text-xl sm:text-2xl my-4 font-semibold">
                {person}
              </h2>
            );
          })}

          <article className="mt-12">
            {content.map(function (con, idx) {
              return  (
                <section key={idx} className={`flex my-12 items-center flex-col md:flex-row ${idx % 2 == 0 ? "" : "md:flex-row-reverse"}`}>
                  {/* <Image src={image} className="rounded-xl shadow-md mb-8 sm:my-0" /> */}
                  <p className="text-lg my-4 leading-8 px-4 text-justify">{con}</p>:
                </section>
              );
            })}
          </article>
        </div>
      </div>
    </div>
  );
}
