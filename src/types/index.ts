export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  image: string;
}

export interface Product {
  id: string;
  title: string;
  price: string;
  location: string;
  image: string;
  description?: string;
  condition?: string;
  year?: string;
  mileage?: string;
  transmission?: string;
  fuelType?: string;
  posted: string;
  seller: string;
  phone: string;
  brand?: string;
  model?: string;
  warranty?: string;
  jobType?: string;
  experience?: string;
  company?: string;
  propertyType?: string;
  bedrooms?: string;
  bathrooms?: string;
  landSize?: string;
  furnished?: string;
  storage?: string;
  size?: string;
  weight?: string;
  serviceType?: string;
  availability?: string;
  subject?: string;
  level?: string;
}

export interface MyAd extends Product {
  status: string;
  views: number;
  category: string;
}

export interface RouteParams {
  categoryId?: string;
  categoryName?: string;
  categoryColor?: string;
  product?: Product;
  searchQuery?: string;
}

export interface NavigationProps {
  navigation: any;
  route?: any;
}