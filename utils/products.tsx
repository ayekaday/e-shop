export const products = [
  {
    id: "1",
    name: "Fried Chicken",
    description:
      "Crispy, golden-brown chicken seasoned to perfection, fried to juicy tenderness.",
    price: "60",
    brand: "Kaung Yukino",
    category: "Chicken",
    inStock: true,
    images: [
      { color: "White", colorCode: "#FFFFFF", image: "/chicken.png" },
      { color: "Gray", colorCode: "#808080", image: "/chicken.png" },
    ],
    reviews: [],
  },
  {
    id: "2",
    name: "Fried Potato",
    description:
      "Crispy and golden-fried potatoes, perfect as a snack or side dish.",
    price: "$50",
    brand: "Kaung Yukino",
    category: "Potato",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image: "/potato.png",
      },
    ],
    reviews: [
      {
        id: "1",
        userId: "6475af156bad4917456e6e1e",
        productId: "64a4ebe300900d44bb50628a",
        rating: 5,
        comment: "good",
        createdDate: "2023-07-06T06:08:33.067Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image: "/chicken.png",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "3",
    name: "Donut",
    description:
      "A soft and fluffy fried dough ring, often topped with sugar, glaze, or sprinkles for a sweet treat.",
    price: "$40",
    brand: "Kaung Yukino",
    category: "Donut",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image: "/donut.png",
      },
      {
        color: "Blue",
        colorCode: " #0000FF",
        image: "/dnut.png",
      },
      {
        color: "Red",
        colorCode: "#FF0000",
        image: "/donut.png",
      },
    ],
    reviews: [
      {
        id: "3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image: "/donut.png",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "3",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image: "/dnut.png",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "4",
    name: "Pizza",
    description:
      "A savory Italian dish with a crispy crust, topped with tomato sauce, cheese, and various toppings like vegetables, meat, or seafood.",
    price: 70,
    brand: "Kaung Yukino",
    category: "Pizza",
    inStock: true,
    images: [
      {
        color: "Graphite",
        colorCode: " #383838",
        image: "/pizza.png",
      },
    ],
    reviews: [],
  },
  {
    id: "5",
    name: "Coffee",
    description:
      "Coffee is a popular beverage made from roasted coffee beans, offering a wide range of flavors. Some brands that stand out include Death Wish Coffee, known for its high caffeine content and bold taste, ideal for a strong pick-me-up. La Colombe delivers smooth, full-bodied, organic blends loved by dark roast enthusiasts. Dark Horse Coffee Roasters specializes in single-origin beans, offering bright and fruity flavors like their Ethiopian Guji Walichu. Hopscotch Coffee offers light roasts, rich and flavorful, with beans from Mexico. For small-batch aficionados, Máquina Coffee Roasters crafts high-quality beans from regions like Honduras and El Salvador, focusing on the art of roasting.",
    price: 50,
    brand: "Kaung Yukino",
    category: "Coffee",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image: "/coffee.png",
      },
      {
        color: "Silver",
        colorCode: "#C0C0C0",
        image: "/coffee.png",
      },
    ],
    reviews: [],
  },

  {
    id: "6",
    name: "Cake",
    description:
      "A delicious, sweet dessert made from flour, sugar, eggs, and other ingredients, often layered and topped with frosting or fruits.",
    price: 50,
    brand: "Kaung Yukino",
    category: "cake",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image: "/cake.png",
      },
      {
        color: "Silver",
        colorCode: "#C0C0C0",
        image: "/cake.png",
      },
    ],
    reviews: [],
  },

  {
    id: "7",
    name: "Burgar",
    description:
      "A delicious, sweet dessert made from flour, sugar, eggs, and other ingredients, often layered and topped with frosting or fruits.",
    price: 90,
    brand: "Kaung Yukino",
    category: "burgar",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image: "/burgar.png",
      },
      {
        color: "Silver",
        colorCode: "#C0C0C0",
        image: "/burgar.png",
      },
    ],
    reviews: [],
  },
];
