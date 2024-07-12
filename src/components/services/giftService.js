// fetchGifts.js

  // Mock data
  const flowersData = [
    //seasional flowers
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

    //single variety products
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

    // gifts products

    {
      id: 28,
      img1: "/images/gifts/a1.jpg",
      img2: "/images/gifts/a2.jpg",
      title: "Winter Wonderland",
      review: "40 Reviews",
      price: 110.0,
      rating: 4.5,
      description:
        "A delightful collection of winter-themed goodies, perfect for bringing warmth and cheer to the cold season.",
    },
    {
      id: 29,
      img1: "/images/gifts/b1.jpg",
      img2: "/images/gifts/b2.jpg",
      title: "Rose Reverie",
      review: "1225 Reviews",
      price: 325.0,
      rating: 4.8,
      description:
        "A luxurious set of rose-scented bath products, designed to provide a spa-like experience at home.",
    },
    {
      id: 30,
      img1: "/images/gifts/c1.jpg",
      img2: "/images/gifts/c2.jpg",
      title: "Rustic Romance",
      review: "180 Reviews",
      price: 235.0,
      rating: 4.7,
      description:
        "A charming set of rustic-themed home decor items, perfect for adding a cozy touch to any room.",
    },
    {
      id: 31,
      img1: "/images/gifts/d1.jpg",
      img2: "/images/gifts/d2.jpg",
      title: "Floral Symphony",
      review: "950 Reviews",
      price: 180.0,
      rating: 4.6,
      description:
        "A vibrant collection of artisanal candles, each inspired by different floral scents to bring the garden indoors.",
    },
    {
      id: 32,
      img1: "/images/gifts/e1.jpg",
      img2: "/images/gifts/e2.jpg",
      title: "Festive Cheer",
      review: "410 Reviews",
      price: 285.0,
      rating: 4.4,
      description:
        "A lively gift basket filled with festive treats and goodies, perfect for celebrating special occasions.",
    },
    {
      id: 33,
      img1: "/images/gifts/f1.jpg",
      img2: "/images/gifts/f2.jpg",
      title: "Passionate Embrace",
      review: "305 Reviews",
      price: 255.0,
      rating: 4.7,
      description:
        "A romantic gift set featuring premium chocolates and a plush teddy bear, ideal for expressing heartfelt emotions.",
    },
    {
      id: 34,
      img1: "/images/gifts/g1.jpg",
      img2: "/images/gifts/g2.jpg",
      title: "Timeless Charm",
      review: "480 Reviews",
      price: 240.0,
      rating: 4.8,
      description:
        "An elegant collection of vintage-inspired jewelry, perfect for adding a touch of classic charm to any outfit.",
    },
    {
      id: 35,
      img1: "/images/gifts/h1.jpg",
      img2: "/images/gifts/h2.jpg",
      title: "Magenta Splendor",
      review: "820 Reviews",
      price: 200.0,
      rating: 4.7,
      description:
        "A splendid set of magenta-themed stationery, designed to brighten up your desk and inspire creativity.",
    },
    {
      id: 36,
      img1: "/images/gifts/i1.jpg",
      img2: "/images/gifts/i2.jpg",
      title: "Sunny Blossoms",
      review: "275 Reviews",
      price: 215.0,
      rating: 4.5,
      description:
        "A cheerful gift box filled with sunflower-themed kitchen accessories, perfect for adding a touch of sunshine to your home.",
    },

    // native flowers
    {
      id: 37,
      img1: "/images/native/a1.jpg",
      img2: "/images/native/a2.jpg",
      title: "Desert Bloom",
      review: "40 Reviews",
      price: 85.0,
      rating: 4.5,
      description:
        "A vibrant mix of desert flowers that thrive in arid climates, bringing a touch of wild beauty to your home.",
    },
    {
      id: 38,
      img1: "/images/native/b1.jpg",
      img2: "/images/native/b2.jpg",
      title: "Savannah Splendor",
      review: "1225 Reviews",
      price: 150.0,
      rating: 4.8,
      description:
        "An exotic collection of flowers native to the African savannah, perfect for adding a unique touch to any space.",
    },
    {
      id: 39,
      img1: "/images/native/c1.jpg",
      img2: "/images/native/c2.jpg",
      title: "Prairie Beauty",
      review: "180 Reviews",
      price: 120.0,
      rating: 4.7,
      description:
        "A charming set of wildflowers native to the prairies, bringing the simplicity and beauty of the grasslands indoors.",
    },
    {
      id: 40,
      img1: "/images/native/d1.jpg",
      img2: "/images/native/d2.jpg",
      title: "Tropical Paradise",
      review: "950 Reviews",
      price: 130.0,
      rating: 4.6,
      description:
        "A vibrant assortment of tropical flowers, ideal for creating a lush, exotic atmosphere in your home.",
    },
    {
      id: 41,
      img1: "/images/native/e2.jpg",
      img2: "/images/native/e1.jpg",
      title: "Mountain Majesty",
      review: "410 Reviews",
      price: 175.0,
      rating: 4.4,
      description:
        "A stunning array of mountain wildflowers, capturing the essence of high-altitude beauty and resilience.",
    },
    {
      id: 42,
      img1: "/images/native/f1.jpg",
      img2: "/images/native/f2.jpg",
      title: "Meadow Bliss",
      review: "305 Reviews",
      price: 95.0,
      rating: 4.7,
      description:
        "A delightful mix of meadow flowers, perfect for adding a touch of countryside charm to any setting.",
    },
    {
      id: 43,
      img1: "/images/native/g1.jpg",
      img2: "/images/native/g2.jpg",
      title: "Woodland Whimsy",
      review: "480 Reviews",
      price: 110.0,
      rating: 4.8,
      description:
        "An enchanting collection of woodland flowers, ideal for bringing a bit of forest magic into your home.",
    },
    {
      id: 44,
      img1: "/images/native/h1.jpg",
      img2: "/images/native/h2.jpg",
      title: "Seaside Serenity",
      review: "820 Reviews",
      price: 105.0,
      rating: 4.7,
      description:
        "A serene assortment of flowers native to coastal areas, perfect for evoking the calm and beauty of the seaside.",
    },
    {
      id: 45,
      img1: "/images/native/i1.jpg",
      img2: "/images/native/i2.jpg",
      title: "Forest Foliage",
      review: "275 Reviews",
      price: 125.0,
      rating: 4.5,
      description:
        "A rich collection of flowers and foliage from forested regions, perfect for creating a natural and tranquil environment.",
    },

    // Add other mock data items here
  ];

 
export default flowersData;
