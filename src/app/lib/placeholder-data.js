// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
    {
      user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'User',
      email: 'user@nextmail.com',
      password: '123456',
      is_seller: 'Y',
    },
  ];
  
  const products = [
    {
      product_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      name: 'Product1',
      description: 'Product Description',
      image_url: '@/public/ar1.png',
      rating_id: '3958dc9e-883r-4377-85e9-fec4b6a6442a',
      user_id: '410544b2-4001-4271-9855-fec4b6a6442a'
    },
  ];
  
  const rating = [
    {
      rating_id: '3958dc9e-883r-4377-85e9-fec4b6a6442a',
      rating: 4.5,
      reveiw: 'Written reveiw',
      date: '2024-03-27',
    },
  ];
  
  const product_category = [
    {
      product_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      category_id: '3958dc9e-523c-4377-85e9-fec4b6a6442a',
    }
  ];
  
  const category = [
    {
      category_id: '3958dc9e-523c-4377-85e9-fec4b6a6442a',
      tag: 'necklace',
    }
  ];

  module.exports = {
    users,
    products,
    rating,
    product_category,
    category,
  };
  