import { v4 as uuidv4 } from "uuid";
const data=[
  {
    id: uuidv4(),
    title: "The pursuit of happiness",
    description:
      "American biographical drama film directed by Gabriele Muccino and starring Will Smith.",
    posterURL:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTm0Qz4R7uV295Kk4SbdbxUBWnkqkQdpDZVaatd7m_5zYlXsWYK",
    trailer:"https://www.youtube.com/embed/DMOBlEcRuw8",
    rate: 4,
  },
  {
    id: uuidv4(),
    title: "The social dilemma",
    description:
      "American docudrama film directed by Jeff Orlowski and written by Orlowski, Davis Coombe.",
    posterURL:
      "https://miro.medium.com/max/3840/1*ijRQhopKew_RB358PA9-yA.jpeg",
    trailer:"https://www.youtube.com/embed/uaaC57tcci0",
    rate: 3.8,
  },
  {
    id: uuidv4(),
    title: "The simpsons movie",
    description:
      "American animated comedy film based on the long-running animated sitcom The Simpsons.",
    posterURL:
      "https://upload.wikimedia.org/wikipedia/en/a/a0/Simpsons_final_poster.png",
      trailer:"https://www.youtube.com/embed/HRV6tMR-SSs",
    rate: 3.7,
  },
]

export default data;