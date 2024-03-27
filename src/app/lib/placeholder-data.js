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
      user_id: '410544b2-4001-4271-9855-fec4b6a6442a'
    },
  ];
  
  const ratings = [
    {
      rating_id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
      rating: 4.5,
      review: 'Written reveiw',
      date: '2024-03-27',
      product_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a'
    },
  ];
  
  const product_categories = [
    {
      product_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      category_id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    }
  ];
  
  const categories = [
    {
      category_id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
      tag: 'necklace',
    }
  ];

  module.exports = {
    users,
    products,
    ratings,
    product_categories,
    categories,
  };
  