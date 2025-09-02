export const products = {
  '1': [ // Cars
    {
      id: 'car1',
      title: 'Toyota Prius 2015',
      price: 'Rs. 4,500,000',
      location: 'Colombo 3',
      image: 'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Toyota+Prius',
      description: 'Well maintained Toyota Prius 2015 model. Excellent fuel efficiency. Single owner vehicle with full service records.',
      condition: 'Used',
      year: '2015',
      mileage: '75,000 km',
      transmission: 'Automatic',
      fuelType: 'Hybrid',
      posted: '2 days ago',
      seller: 'John Perera',
      phone: '+94 77 123 4567'
    },
    {
      id: 'car2',
      title: 'Honda Civic 2018',
      price: 'Rs. 6,200,000',
      location: 'Kandy',
      image: 'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Honda+Civic',
      description: 'Honda Civic 2018 in excellent condition. Low mileage, full option with leather seats and sunroof.',
      condition: 'Used',
      year: '2018',
      mileage: '45,000 km',
      transmission: 'Automatic',
      fuelType: 'Petrol',
      posted: '1 week ago',
      seller: 'Sarah Fernando',
      phone: '+94 71 987 6543'
    },
    {
      id: 'car3',
      title: 'Nissan Leaf 2019',
      price: 'Rs. 5,800,000',
      location: 'Galle',
      image: 'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Nissan+Leaf',
      description: 'Electric vehicle in pristine condition. Zero emissions, perfect for eco-conscious drivers.',
      condition: 'Used',
      year: '2019',
      mileage: '30,000 km',
      transmission: 'Automatic',
      fuelType: 'Electric',
      posted: '3 days ago',
      seller: 'Mike Silva',
      phone: '+94 76 555 1234'
    }
  ],
  '2': [ // Electronics
    {
      id: 'elec1',
      title: 'MacBook Pro M1 2021',
      price: 'Rs. 450,000',
      location: 'Colombo 7',
      image: 'https://via.placeholder.com/300x200/4ECDC4/FFFFFF?text=MacBook+Pro',
      description: 'Apple MacBook Pro with M1 chip, 8GB RAM, 256GB SSD. Excellent condition with original box and charger.',
      condition: 'Used',
      brand: 'Apple',
      model: 'MacBook Pro M1',
      warranty: '6 months remaining',
      posted: '1 day ago',
      seller: 'Tech Store Colombo',
      phone: '+94 11 234 5678'
    },
    {
      id: 'elec2',
      title: 'Samsung 55" 4K TV',
      price: 'Rs. 180,000',
      location: 'Negombo',
      image: 'https://via.placeholder.com/300x200/4ECDC4/FFFFFF?text=Samsung+TV',
      description: '55 inch Samsung 4K Smart TV with HDR support. Crystal clear display, barely used.',
      condition: 'Like New',
      brand: 'Samsung',
      model: 'UN55TU7000',
      warranty: '1 year remaining',
      posted: '4 days ago',
      seller: 'Electronics Hub',
      phone: '+94 31 987 4321'
    }
  ],
  '3': [ // Jobs
    {
      id: 'job1',
      title: 'Software Developer - React Native',
      price: 'Rs. 80,000 - 120,000',
      location: 'Colombo 2',
      image: 'https://via.placeholder.com/300x200/45B7D1/FFFFFF?text=Developer+Job',
      description: 'We are looking for a skilled React Native developer to join our growing team. 2+ years experience required.',
      jobType: 'Full Time',
      experience: '2+ years',
      company: 'TechCorp Solutions',
      posted: '2 days ago',
      seller: 'HR Manager',
      phone: '+94 11 555 7890'
    },
    {
      id: 'job2',
      title: 'Marketing Executive',
      price: 'Rs. 60,000 - 80,000',
      location: 'Kandy',
      image: 'https://via.placeholder.com/300x200/45B7D1/FFFFFF?text=Marketing+Job',
      description: 'Digital marketing executive needed for a growing startup. Experience with social media marketing preferred.',
      jobType: 'Full Time',
      experience: '1-3 years',
      company: 'Digital Marketing Pro',
      posted: '5 days ago',
      seller: 'Recruitment Team',
      phone: '+94 81 123 9876'
    }
  ],
  '4': [ // Property
    {
      id: 'prop1',
      title: '3 Bedroom House for Sale',
      price: 'Rs. 25,000,000',
      location: 'Nugegoda',
      image: 'https://via.placeholder.com/300x200/96CEB4/FFFFFF?text=House+Sale',
      description: 'Beautiful 3 bedroom house with modern amenities. 15 perches land, well-maintained property.',
      propertyType: 'House',
      bedrooms: '3',
      bathrooms: '2',
      landSize: '15 perches',
      posted: '1 week ago',
      seller: 'Property Plus',
      phone: '+94 11 777 8888'
    },
    {
      id: 'prop2',
      title: 'Apartment for Rent - Colombo 3',
      price: 'Rs. 45,000/month',
      location: 'Colombo 3',
      image: 'https://via.placeholder.com/300x200/96CEB4/FFFFFF?text=Apartment+Rent',
      description: '2 bedroom apartment available for rent. Fully furnished with parking space.',
      propertyType: 'Apartment',
      bedrooms: '2',
      bathrooms: '1',
      furnished: 'Fully Furnished',
      posted: '3 days ago',
      seller: 'City Properties',
      phone: '+94 77 333 4444'
    }
  ]
};

export const myAds = [
  {
    id: 'myad1',
    title: 'iPhone 13 Pro Max',
    price: 'Rs. 280,000',
    location: 'Colombo 5',
    image: 'https://via.placeholder.com/300x200/000000/FFFFFF?text=iPhone+13',
    status: 'Active',
    views: 45,
    posted: '3 days ago',
    category: 'Electronics'
  },
  {
    id: 'myad2',
    title: 'Honda Vezel 2016',
    price: 'Rs. 5,500,000',
    location: 'Gampaha',
    image: 'https://via.placeholder.com/300x200/000000/FFFFFF?text=Honda+Vezel',
    status: 'Sold',
    views: 123,
    posted: '2 weeks ago',
    category: 'Cars'
  }
];