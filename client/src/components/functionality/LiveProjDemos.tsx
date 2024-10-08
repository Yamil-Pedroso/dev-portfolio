import { LiveDemoContent } from "./styles";

const liveDemoContent = [
  {
    id: 1,
    content: "Pizza Craft",
    desc: "React-Typescript-Framer-Motion",
    icon: "🍕",
    link: "https://pizza-craft.netlify.app/",
  },
  
  {
    id: 2,
    content: "Book Data",
    desc: "React-Typescript-Framer-Motion-Search-Filter",
    icon: "📚",
    link: "https://book-datav1.netlify.app/",
  },
  
];

const LiveProjDemos = () => {
  return (
    <LiveDemoContent>
      <div
        className="live-demo-wrapper"
      >
        <h1>Links to live demos and repositories.</h1>
        <div className="card-content">
          {liveDemoContent.map((demo) => (
            <div key={demo.id} className="card">
              <p>{demo.content}</p>
              <p>{demo.desc}</p>
              <span>{demo.icon}</span>
              <a href={demo.link} target="_blank" rel="noreferrer"
              >View Demo</a>
            </div>
          ))}
        </div>
      </div>
    </LiveDemoContent>
  );
};

export default LiveProjDemos;
