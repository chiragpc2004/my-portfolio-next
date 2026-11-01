export const SPECIES = [
  {
    key: "setosa",
    name: "Iris setosa",
    src: "/images/iris-setosa.jpg",
    width: 1050,
    height: 1400,
    alt: "A pale violet Iris setosa flower among tall green leaves",
    // where the flower sits in the frame, for object-position
    focus: "50% 22%",
  },
  {
    key: "versicolor",
    name: "Iris versicolor",
    src: "/images/iris-versicolor.jpg",
    width: 1400,
    height: 1050,
    alt: "A deep purple Iris versicolor flower against a dark green background",
    focus: "56% 40%",
  },
  {
    key: "virginica",
    name: "Iris virginica",
    src: "/images/iris-virginica.jpg",
    width: 1400,
    height: 1139,
    alt: "A lavender Iris virginica flower with yellow-veined petals",
    focus: "50% 45%",
  },
] as const;

export type SpeciesIndex = 0 | 1 | 2;
