const formatValue = (
  value: string | number | boolean
): string | number | boolean => {

  if (typeof value === "string") {
    return value.toUpperCase();
  } 

  else if (typeof value === "number") {
    return value * 10;
  } 

  else return !value;
};



const getLength = (value: string | any[]): number => {

  if (typeof value === "string") {
    return value.length;
  } 

  else if (Array.isArray(value)) {
    return value.length;
  }

  return 0;
};



class Person {
  constructor(public name: string, public age: number) {
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}




type Item = {
    title: string;
    rating: number;
}


const filterByRating = (arr: Item[]): Item[] => {
  
    const ratingWithFour = arr.filter((item) => item.rating >= 4);

    return ratingWithFour;
};



const filterActiveUsers = <T extends {isActive: boolean}>(users: T[]):T[]=>{

    const activeUsers = users.filter(user => typeof user.isActive === 'boolean' && user.isActive);

    return activeUsers;
}




interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (obj: Book):string=>{

    return `Title: ${obj.title}, Author: ${obj.author}, Published: ${obj.publishedYear}, Available: ${obj.isAvailable === true ? 'Yes' : 'No'}`
}



interface Product{
    name: string;
    price: number;
    quantity: number;
    discount? : number;
}

const calculateTotalPrice = (products: Product[] ): number =>{

    if(products.length === 0){
        return 0;
    }

    const totalPrice = products
    .map(product => product.price * product.quantity)
    .reduce((acc, sum)=> acc + sum, 0);

    return totalPrice;


}




