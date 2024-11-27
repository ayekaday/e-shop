export const products = [
  {
    id: "1",
    name: "fried chickenfried chickenfried chickenfried chickenfried chicken ",
    description: "Short description",
    price: "$60",
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
    name: "fried potatofried potatofried potatofried potatofried potatofried potato",
    description:
      "PERFECT STROKE KEYS - Spherically-dished keys match the shape of your fingertips, offering satisfying feedback with every tap\nCOMFORT AND STABILITY - Type with confidence on a keyboard crafted for comfort, stability, and precision",
    price: "$50",
    brand: "logitech",
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
    name: "DonutDonut DonutDonut DonutDonutDonut",
    description:
      'The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day E~Shop Renewed Guarantee.\n- This pre-owned product has been professionally inspected, tested and cleaned by Amazon qualified vendors. It is not certified by Apple.\n- This product is in "Excellent condition". The screen and body show no signs of cosmetic damage visible from 12 inches away.\n- This product will have a battery that exceeds 80% capacity relative to new.\n- Accessories may not be original, but will be compatible and fully functional. Product may come in generic box.\n- Product will come with a SIM removal tool, a charger and a charging cable. Headphone and SIM card are not included.\n- This product is eligible for a replacement or refund within 90-day of receipt if it does not work as expected.\n- Refurbished phones are not guaranteed to be waterproof.',
    price: "$40",
    brand: "Donut",
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
    name: "pizzapizza pizzapizza pizzap izzapizzapizzapizza",
    description:
      "Cross computer control: Game changing capacity to navigate seamlessly on 3 computers, and copy paste text, images, and files from 1 to the other using Logitech flow\nDual connectivity: Use with upto 3 Windows or Mac computers via included Unifying receiver or Bluetooth Smart wireless technology. Gesture button- Yes",
    price: 70,
    brand: "logitech",
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
    name: "coffeecof feecoffeec offeecoffee coffeecoffeecoffee",
    description:
      'Bluetooth Call and Message Reminder: The smart watch is equipped with HD speaker, after connecting to your phone via Bluetooth, you can directly use the smartwatches to answer or make calls, read messages, store contacts, view call history. The smartwatch can set up more message notifications in "GloryFit" APP. You will never miss any calls and messages during meetings, workout and riding.',
    price: 50,
    brand: "Nerunsa",
    category: "Coffee",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image: "/coffee2.png",
      },
      {
        color: "Silver",
        colorCode: "#C0C0C0",
        image: "/coffee1.png",
      },
    ],
    reviews: [],
  },
];
