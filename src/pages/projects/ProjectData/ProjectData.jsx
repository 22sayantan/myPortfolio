function ProjectData() {
  const Data = [
    {
      id: 1,
      img: "",
      title: "YouTube Clone",
      category: "javascript",
    },
    {
      id: 2,
      img: "",
      title: "calculator",
      category: "javascript",
    },
    {
      id: 3,
      img: "",
      title: "Dad Joke generator",
      category: "javascript",
    },
    {
      id: 4,
      img: "",
      title: "quote generator",
      category: "javascript",
    },
    {
      id: 5,
      img: "",
      title: "tic tac toe",
      category: "javascript",
    },
    {
      id: 6,
      img: "",
      title: "weather app",
      category: "javascript",
    },
    {
      id: 7,
      img: "",
      title: "E-commerce",
      category: "react.js",
    },
    {
      id: 8,
      img: "",
      title: "medical app",
      category: "react.js",
    },
    {
      id: 9,
      img: "",
      title: "spotify clone",
      category: "react.js",
    },
    {
      id: 10,
      img: "",
      title: "netflix clone",
      category: "react.js",
    },
    {
      id: 11,
      img: "",
      title: "tour & travel",
      category: "javascript",
    },
    {
      id: 12,
      img: "",
      title: "pg rent booking",
      category: "react.js",
    },
  ];

  const low = Data.map((item)=>(item.category))
  return( 
    
    console.log(low.filter((e)=> e === 'javascript').length)
)}

ProjectData();

// export default ProjectData;
