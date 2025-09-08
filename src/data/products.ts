// Import types
import { Product, MyAd } from '../types';

export const products: { [key: string]: Product[] } = {
  '1': [ // Cars
    {
      id: 'car1',
      title: 'Toyota Prius 2015',
      price: 'Rs. 4,500,000',
      location: 'Colombo 3',
      image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=300&h=200&fit=crop&crop=center',
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
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop&crop=center',
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
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=300&h=200&fit=crop&crop=center',
      description: 'Electric vehicle in pristine condition. Zero emissions, perfect for eco-conscious drivers.',
      condition: 'Used',
      year: '2019',
      mileage: '30,000 km',
      transmission: 'Automatic',
      fuelType: 'Electric',
      posted: '3 days ago',
      seller: 'Mike Silva',
      phone: '+94 76 555 1234'
    },
    {
      id: 'car4',
      title: 'Suzuki Alto 2020',
      price: 'Rs. 2,800,000',
      location: 'Maharagama',
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=300&h=200&fit=crop&crop=center',
      description: 'Almost new Suzuki Alto with low mileage. Perfect first car with excellent fuel economy.',
      condition: 'Like New',
      year: '2020',
      mileage: '15,000 km',
      transmission: 'Manual',
      fuelType: 'Petrol',
      posted: '5 days ago',
      seller: 'Auto Lanka',
      phone: '+94 77 888 9999'
    }
  ],
  '2': [ // Electronics
    {
      id: 'elec1',
      title: 'MacBook Pro M1 2021',
      price: 'Rs. 450,000',
      location: 'Colombo 7',
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=200&fit=crop&crop=center',
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
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=200&fit=crop&crop=center',
      description: '55 inch Samsung 4K Smart TV with HDR support. Crystal clear display, barely used.',
      condition: 'Like New',
      brand: 'Samsung',
      model: 'UN55TU7000',
      warranty: '1 year remaining',
      posted: '4 days ago',
      seller: 'Electronics Hub',
      phone: '+94 31 987 4321'
    },
    {
      id: 'elec3',
      title: 'Gaming PC Setup',
      price: 'Rs. 350,000',
      location: 'Colombo 4',
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=300&h=200&fit=crop&crop=center',
      description: 'High-end gaming PC with RTX 3070, 16GB RAM, RGB lighting. Perfect for gaming and streaming.',
      condition: 'Used',
      brand: 'Custom Build',
      model: 'Gaming Rig',
      warranty: 'No warranty',
      posted: '6 days ago',
      seller: 'PC Builder Pro',
      phone: '+94 77 555 1111'
    }
  ],
  '3': [ // Jobs
    {
      id: 'job1',
      title: 'Software Developer - React Native',
      price: 'Rs. 80,000 - 120,000',
      location: 'Colombo 2',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop&crop=center',
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
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center',
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
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=300&h=200&fit=crop&crop=center',
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
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=200&fit=crop&crop=center',
      description: '2 bedroom apartment available for rent. Fully furnished with parking space.',
      propertyType: 'Apartment',
      bedrooms: '2',
      bathrooms: '1',
      furnished: 'Fully Furnished',
      posted: '3 days ago',
      seller: 'City Properties',
      phone: '+94 77 333 4444'
    }
  ],
  '5': [ // Mobile Phones
    {
      id: 'phone1',
      title: 'iPhone 14 Pro Max',
      price: 'Rs. 320,000',
      location: 'Colombo 1',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=200&fit=crop&crop=center',
      description: 'Brand new iPhone 14 Pro Max 256GB. Deep Purple color with all accessories.',
      condition: 'New',
      brand: 'Apple',
      storage: '256GB',
      posted: '1 day ago',
      seller: 'Mobile World',
      phone: '+94 77 111 2222'
    },
    {
      id: 'phone2',
      title: 'Samsung Galaxy S23',
      price: 'Rs. 240,000',
      location: 'Kandy',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=200&fit=crop&crop=center',
      description: 'Samsung Galaxy S23 128GB in excellent condition. All accessories included.',
      condition: 'Used',
      brand: 'Samsung',
      storage: '128GB',
      posted: '2 days ago',
      seller: 'Phone Plaza',
      phone: '+94 81 777 3333'
    },
    {
      id: 'phone3',
      title: 'OnePlus 11 Pro',
      price: 'Rs. 180,000',
      location: 'Galle',
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=200&fit=crop&crop=center',
      description: 'OnePlus 11 Pro with fast charging. Barely used, perfect condition.',
      condition: 'Like New',
      brand: 'OnePlus',
      storage: '256GB',
      posted: '4 days ago',
      seller: 'Tech Solutions',
      phone: '+94 91 444 5555'
    }
  ],
  '6': [ // Fashion
    {
      id: 'fashion1',
      title: 'Designer Wedding Dress',
      price: 'Rs. 45,000',
      location: 'Colombo 6',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=200&fit=crop&crop=center',
      description: 'Beautiful designer wedding dress, size M. Worn only once, excellent condition.',
      condition: 'Like New',
      size: 'Medium',
      brand: 'Designer Label',
      posted: '3 days ago',
      seller: 'Fashion Store',
      phone: '+94 71 444 5555'
    },
    {
      id: 'fashion2',
      title: 'Mens Formal Suit',
      price: 'Rs. 15,000',
      location: 'Colombo 2',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center',
      description: 'Black formal suit, size L. Perfect for business meetings and special occasions.',
      condition: 'Used',
      size: 'Large',
      brand: 'Branded',
      posted: '1 week ago',
      seller: 'Gentleman Style',
      phone: '+94 11 222 3333'
    },
    {
      id: 'fashion3',
      title: 'Designer Handbag',
      price: 'Rs. 8,500',
      location: 'Nugegoda',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop&crop=center',
      description: 'Authentic designer handbag in excellent condition. Perfect for daily use.',
      condition: 'Used',
      size: 'Medium',
      brand: 'Designer Brand',
      posted: '5 days ago',
      seller: 'Fashion Hub',
      phone: '+94 77 666 7777'
    }
  ],
  '7': [ // Sports
    {
      id: 'sports1',
      title: 'Professional Cricket Bat',
      price: 'Rs. 8,500',
      location: 'Kandy',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=300&h=200&fit=crop&crop=center',
      description: 'High quality English willow cricket bat. Perfect for serious players.',
      condition: 'Used',
      brand: 'MRF',
      weight: '2.8 lbs',
      posted: '5 days ago',
      seller: 'Sports Zone',
      phone: '+94 81 666 7777'
    }
  ],
  '8': [ // Services
    {
      id: 'service1',
      title: 'Home Cleaning Service',
      price: 'Rs. 2,500/day',
      location: 'Colombo',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&h=200&fit=crop&crop=center',
      description: 'Professional home cleaning service. Experienced staff, all cleaning supplies included.',
      serviceType: 'Home Services',
      availability: 'Mon-Sat',
      posted: '2 days ago',
      seller: 'Clean Pro Services',
      phone: '+94 11 888 9999'
    }
  ],
  '9': [ // Education
    {
      id: 'edu1',
      title: 'Private English Tuition',
      price: 'Rs. 1,500/hour',
      location: 'Colombo 7',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop&crop=center',
      description: 'Experienced English teacher offering private tuition for O/L and A/L students.',
      subject: 'English',
      level: 'O/L & A/L',
      experience: '10+ years',
      posted: '1 day ago',
      seller: 'Sarah Teacher',
      phone: '+94 77 222 3333'
    }
  ]
};

export const myAds: MyAd[] = [
  {
    id: 'myad1',
    title: 'iPhone 13 Pro Max',
    price: 'Rs. 280,000',
    location: 'Colombo 5',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop&crop=center',
    status: 'Active',
    views: 45,
    posted: '3 days ago',
    category: 'Electronics',
    seller: 'Unknown',
    phone: 'Unknown'
  },
  {
    id: 'myad2',
    title: 'Honda Vezel 2016',
    price: 'Rs. 5,500,000',
    location: 'Gampaha',
    image: 'https://images.unsplash.com/photo-1549927681-6ae2c1235a3c?w=300&h=200&fit=crop&crop=center',
    status: 'Sold',
    views: 123,
    posted: '2 weeks ago',
    category: 'Cars',
    seller: 'Unknown',
    phone: 'Unknown'
  }
];