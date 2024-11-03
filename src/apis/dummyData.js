export const mockProductsData = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      brand: "Brand A",
      price: 99.99,
      rating: 4.5,
      imageUrl: "https://example.com/images/headphones.jpg",
    },
    {
      id: 2,
      name: "Bluetooth Speaker",
      category: "Electronics",
      brand: "Brand B",
      price: 49.99,
      rating: 4.0,
      imageUrl: "https://example.com/images/speaker.jpg",
    },
    {
      id: 3,
      name: "Running Shoes",
      category: "Footwear",
      brand: "Brand C",
      price: 59.99,
      rating: 4.2,
      imageUrl: "https://example.com/images/shoes.jpg",
    },
    {
      id: 4,
      name: "Smartphone",
      category: "Electronics",
      brand: "Brand D",
      price: 499.99,
      rating: 4.8,
      imageUrl: "https://example.com/images/smartphone.jpg",
    },
    {
      id: 5,
      name: "Leather Jacket",
      category: "Clothing",
      brand: "Brand E",
      price: 199.99,
      rating: 4.7,
      imageUrl: "https://example.com/images/jacket.jpg",
    },
    {
        id: 6,
        name: "T-Shirt",
        category: "Clothing",
        brand: "Brand A",
        price: 19.99,
        rating: 3.9,
        imageUrl: "https://example.com/images/tshirt.jpg",
        },
        {
        id: 7,
        name: "Backpack",
        category: "Footwear",
        brand: "Brand B",
        price: 39.99,
        rating: 1.1,
        imageUrl: "https://example.com/images/backpack.jpg",
    }
  ];
  
  export const categories = [
    'Electronics',
    'Footwear',
    'Clothing'
  ];
  
  export const brands = [
    'Brand A',
    'Brand B',
    'Brand C',
    'Brand D',
    'Brand E'
  ];

  export const ratingOptions = [
    { value: '1', label: '1 Star' },
    { value: '2', label: '2 Stars' },
    { value: '3', label: '3 Stars' },
    { value: '4', label: '4 Stars' },
    { value: '5', label: '5 Stars' },
  ];

  export const sortOptions = [
    { value: 'priceAsc', label: 'Price: Low to High' },
    { value: 'priceDesc', label: 'Price: High to Low' },
    { value: 'ratingAsc', label: 'Rating: Low to High' },
    { value: 'ratingDesc', label: 'Rating: High to Low' }
  ];