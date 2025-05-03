export default function Skill() {
  return (
    <section
      id="skill-section"
      className="w-screen min-h-screen pt-[56px] bg-black grid place-items-center "
    >
      <div className="bg-gray-700 shadow-md rounded-4xl w-[80%] h-fit mx-12 pt-8 pb-8 px-12">
        <h2 className="text-white font-bold text-2xl text-center mb-8">
          Skills Iapos;ve Honed
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-y-auto h-96 lg:h-full">
          {/* Frontend */}
          <div className="grid gap-4 grid-rows-[20%_1fr] ">
            <div className="grid place-items-center bg-gray-300 px-4 py-2 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-center">
                Frontend Development
              </h3>
            </div>
            <div className="bg-gray-300 p-4 rounded-xl shadow-md text-center">
              <p>HTML5, CSS3, JavaScript (ES6+)</p>
              <p>React.js, Next.js</p>
              <p>Tailwind CSS, Sass, Bootstrap</p>
              <p>Responsive & mobile-first design</p>
              <p>UI/UX best practices & accessibility (a11y)</p>
            </div>
          </div>
          {/* Backend */}
          <div className="grid gap-4 grid-rows-[20%_1fr]">
            <div className="grid place-items-center bg-gray-300 p-4 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-center">
                Backend Development
              </h3>
            </div>{" "}
            <div className="bg-gray-300 p-4 rounded-xl shadow-md text-center">
              <p>Node.js, Express.js</p>
              <p>RESTful APIs, GraphQL</p>
              <p>Authentication (JWT, OAuth)</p>
              <p>MongoDB, PostgreSQL, Firebase</p>
            </div>
          </div>
          {/* Tools */}
          <div className="grid gap-4 grid-rows-[20%_1fr]">
            <div className="grid place-items-center bg-gray-300 p-4 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-center">
                Dev Tools & Workflow
              </h3>
            </div>
            <div className="bg-gray-300 p-4 rounded-xl shadow-md text-center">
              <p>Git & GitHub</p>
              <p>VSCode, Postman, Figma</p>
              <p>Docker (basic)</p>
              <p>Agile & Scrum methodologies</p>
              <p>CI/CD basics (GitHub Actions, Netlify)</p>
            </div>
          </div>
          {/* Soft Skills */}{" "}
          <div className="grid gap-4 grid-rows-[20%_1fr]">
            <div className="grid items-center bg-gray-300 px-4 justify-center rounded-xl shadow-md">
              {" "}
              <h3 className="font-semibold text-lg my-2 text-center">
                {" "}
                Soft Skills
              </h3>
            </div>{" "}
            <div className="bg-gray-300 p-4 rounded-xl shadow-md text-center">
              <p>Clear communicator</p>
              <p>Problem-solving mindset</p>
              <p>Eager to learn & adapt</p>
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
}
