export interface FoodType{
  id: number,
  name: string,
  description: string
  price: number,
  available: boolean,
  image: string
}

export interface AddFoodType{
  name: string,
  description: string
  price: number,
  available: boolean,
  image: string
}