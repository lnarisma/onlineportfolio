/*=================================================================
  The Project and Project Modal Elements just share the same data
=================================================================*/

const STM = {
    name: "STM Project",
    label: "WPF Desktop Application",
    description:
      "A STM Project That Connects to Students Interest in Social Movements.",
    logo: "../images/projects/logo/Project32.jpg",
    demoImage: "../images/projects/demo/Project32.jpg",
    demoImageAlt: "",
    demoLink: "https://www.youtube.com/@liamjakenarisma1282/videos",
    sourceCodeLink: "",
  };
  
  const LineFollower = {
    name: "Line Follower Robot/ Sumobot",
    label: "Not Yet Finish",
    description:
      " Line follower robot actually follows a feedback mechanism where the path is basically a black line or a dark line on the white or light surface.",
    logo: "../../images/projects/logo/LineRobot.jpg",
    demoImage: "../../images/projects/demo/LineRobot.jpg",
    demoImageAlt: "",
    demoLink: "",
    sourceCodeLink: "",
    tags: ["STM32", "Buck Boost Converter", "MCU", "Geared Motor","5channel Sensor"],
  };
  
  const pastelCat = {
    name: "Pastel Cat",
    label: "Pure CSS Website",
    description:
      "A static website created with custom CSS: grid, flexbox, and media queries. This project really helped me improve on how to approach layouts and responsiveness.",
    logo: "../../images/projects/logo/pastel-cat.svg",
    demoImage: "../../images/projects/demo/pastel-cat.png",
    demoImageAlt: "Pastel Cat - Pink Website",
    demoLink: "https://parajdox.github.io/Pastel-Cat/",
    sourceCodeLink: "https://github.com/paraJdox/Pastel-Cat",
    tags: ["HTML", "CSS"],
  };
  
  
  export const projects = [
    STM,
    LineFollower,
   
  ];
  