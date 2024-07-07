// fetchGifts.js

  // Mock data
  const flowersData = [
    {
      id: 1,
      img1: "/images/seasional/a1.jpg",
      img2: "/images/seasional/a2.jpg",
      title: "White Posy",
      review: "15 Reviews",
      price: 70,
      rating: 5,
      description:
        "Freshly picked, locally grown blooms in whites and creams hand arranged by our skilful florists.",
    },
    {
      id: 2,
      img1: "/images/seasional/b1.jpg",
      img2: "/images/seasional/b2.jpg",
      title: "Coral Cutie",
      review: "1265 Reviews",
      price: 290,
      rating: 4.5,
      description:
        " this beautiful Coral Cutie bouquet would be pictured alongside it. With a stunning orchid flower stem.",
    },
    {
      id: 3,
      img1: "/images/seasional/c1.jpg",
      img2: "/images/seasional/c2.jpg",
      title: "Make It Personal - Flower Jar + Picture",
      review: "120 Reviews",
      price: 219.99,
      rating: 4.6,
      description: "This double personalised bundle ticks all the boxes.",
    },
    {
      id: 4,
      img1: "/images/seasional/d1.jpg",
      img2: "/images/seasional/d2.jpg",
      title: "Flowers + Vase",
      review: "980 Reviews",
      price: 140,
      rating: 4.7,
      description:
        " Beautiful, locally-grown flowers arranged by our talented florists .",
    },
    {
      id: 5,
      img1: "/images/seasional/e1.jpg",
      img2: "/images/seasional/e2.jpg",
      title: "B'day Vibes",
      review: "450 Reviews",
      price: 249.99,
      rating: 4.5,
      description:
        "Celebrate your besties big day with this party poppin bundle.",
    },
    {
      id: 6,
      img1: "/images/seasional/f1.jpg",
      img2: "/images/seasional/f2.jpg",
      title: "Love Story",
      review: "320 Reviews",
      price: 229.99,
      rating: 4.6,
      description:
        "peach pastel bouquet to that special someone in your life. With premium rose stems.",
    },
    {
      id: 7,
      img1: "/images/seasional/g1.jpg",
      img2: "/images/seasional/g2.jpg",
      title: "Timeless Classic",
      review: "500 Reviews",
      price: 200.99,
      rating: 4.8,
      description:
        "A stunning and generous collection of locally grown flowers.",
    },
    {
      id: 8,
      img1: "/images/seasional/h1.jpg",
      img2: "/images/seasional/h2.jpg",
      title: "Strike a Rose",
      review: "750 Reviews",
      price: 170.5,
      rating: 4.9,
      description:
        "this stunning bunch of magenta and pink flowers, filled with roses, disbuds.",
    },
    {
      id: 9,
      img1: "/images/seasional/i1.jpg",
      img2: "/images/seasional/i2.jpg",
      title: "Sunflowers",
      review: "200 Reviews",
      price: 179.99,
      rating: 4.4,
      description:
        "always looking on the bright side of life with a same-day delivery of iconic Sunflowers..",
    },
    //sibgle variety products
    {
      id: 10,
      img1: "/images/singlevarity/a1.png",
      img2: "/images/singlevarity/a2.png",
      title: "Elegant White",
      review: "25 Reviews",
      price: 85,
      rating: 4.8,
      description:
        "A sophisticated arrangement of pure white blooms, perfect for any occasion.",
    },
    {
      id: 11,
      img1: "/images/singlevarity/b1.png",
      img2: "/images/singlevarity/b2.png",
      title: "Blushing Beauty",
      review: "1350 Reviews",
      price: 310,
      rating: 4.7,
      description:
        "Delight in the delicate beauty of this blushing bouquet, featuring exquisite roses.",
    },
    {
      id: 12,
      img1: "/images/singlevarity/c1.png",
      img2: "/images/singlevarity/c2.png",
      title: "Personal Touch",
      review: "150 Reviews",
      price: 239.99,
      rating: 4.9,
      description:
        "Add a personal touch with this unique flower jar and picture combo.",
    },
    {
      id: 13,
      img1: "/images/singlevarity/d1.png",
      img2: "/images/singlevarity/d2.png",
      title: "Vase of Joy",
      review: "1050 Reviews",
      price: 155,
      rating: 4.8,
      description:
        "A joyful arrangement of vibrant flowers in a beautiful vase.",
    },
    {
      id: 14,
      img1: "/images/singlevarity/e1.png",
      img2: "/images/singlevarity/e2.png",
      title: "Birthday Blossoms",
      review: "470 Reviews",
      price: 259.99,
      rating: 4.6,
      description: "Celebrate birthdays with this lively and colorful bouquet.",
    },
    {
      id: 15,
      img1: "/images/singlevarity/f1.png",
      img2: "/images/singlevarity/f2.png",
      title: "Romantic Roses",
      review: "340 Reviews",
      price: 249.99,
      rating: 4.7,
      description:
        "Express your love with this stunning bouquet of premium roses.",
    },
    {
      id: 16,
      img1: "/images/singlevarity/g1.png",
      img2: "/images/singlevarity/g2.png",
      title: "Classic Elegance",
      review: "520 Reviews",
      price: 215.99,
      rating: 4.9,
      description:
        "A timeless collection of elegant flowers for any special occasion.",
    },
    {
      id: 17,
      img1: "/images/singlevarity/h1.png",
      img2: "/images/singlevarity/h2.png",
      title: "Rose Delight",
      review: "780 Reviews",
      price: 180.5,
      rating: 5.0,
      description:
        "A delightful mix of magenta and pink roses, perfect for brightening any room.",
    },
    {
      id: 18,
      img1: "/images/singlevarity/i1.png",
      img2: "/images/singlevarity/i2.png",
      title: "Sunny Sunflowers",
      review: "220 Reviews",
      price: 189.99,
      rating: 4.5,
      description:
        "Brighten your day with a stunning arrangement of iconic sunflowers.",
    },
    {
      id: 19,
      img1: "/images/plants/a1.jpg",
      img2: "/images/plants/a2.jpg",
      title: "Snowy Serenity",
      review: "40 Reviews",
      price: 95.5,
      rating: 4.6,
      description:
        "A serene arrangement of delicate white blooms, perfect for creating a calming atmosphere in any space.",
    },
    {
      id: 20,
      img1: "/images/plants/b1.jpg",
      img2: "/images/plants/b2.jpg",
      title: "Pink Petal Perfection",
      review: "1225 Reviews",
      price: 299.5,
      rating: 4.9,
      description:
        "Experience the perfect harmony of pink petals with this exquisite bouquet of roses, designed to add elegance to your decor.",
    },
    {
      id: 21,
      img1: "/images/plants/c1.jpg",
      img2: "/images/plants/c2.jpg",
      title: "Charming Bouquet",
      review: "180 Reviews",
      price: 219.99,
      rating: 4.8,
      description:
        "Add a charming touch to your space with this delightful bouquet in a rustic jar, accompanied by a heartfelt picture.",
    },
    {
      id: 22,
      img1: "/images/plants/d1.jpg",
      img2: "/images/plants/d2.jpg",
      title: "Garden Symphony",
      review: "950 Reviews",
      price: 165.75,
      rating: 4.7,
      description:
        "Celebrate nature's beauty with this vibrant garden arrangement presented in a lovely vase, perfect for indoor enjoyment.",
    },
    {
      id: 23,
      img1: "/images/plants/e1.jpg",
      img2: "/images/plants/e2.jpg",
      title: "Celebration Bouquet",
      review: "410 Reviews",
      price: 269.5,
      rating: 4.5,
      description:
        "Mark every occasion with this lively and festive bouquet, crafted to spread joy and brighten any room.",
    },
    {
      id: 24,
      img1: "/images/plants/f1.jpg",
      img2: "/images/plants/f2.jpg",
      title: "Passion's Embrace",
      review: "305 Reviews",
      price: 239.5,
      rating: 4.8,
      description:
        "Express your deepest emotions with this passionate bouquet of premium roses, ideal for conveying heartfelt sentiments.",
    },
    {
      id: 25,
      img1: "/images/plants/g1.jpg",
      img2: "/images/plants/g2.jpg",
      title: "Timeless Beauty",
      review: "480 Reviews",
      price: 225.99,
      rating: 4.9,
      description:
        "Capture timeless elegance with these stunning flowers, perfect for adding a touch of grace to any special occasion.",
    },
    {
      id: 26,
      img1: "/images/plants/h1.jpg",
      img2: "/images/plants/h2.jpg",
      title: "Magenta Magic",
      review: "820 Reviews",
      price: 185.25,
      rating: 4.9,
      description:
        "Brighten your space with the enchanting mix of magenta and pink roses, designed to bring joy and charm.",
    },
    {
      id: 27,
      img1: "/images/plants/i1.jpg",
      img2: "/images/plants/i2.jpg",
      title: "Golden Radiance",
      review: "275 Reviews",
      price: 199.99,
      rating: 4.6,
      description:
        "Illuminate your day with the radiant beauty of these iconic sunflowers, symbolizing happiness and warmth with their golden hues.",
    },

    // Add other mock data items here
  ];

 
export default flowersData;
