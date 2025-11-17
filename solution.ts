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
    return `'Name: ${this.name}, Age: ${this.age}'`;
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

    const bookDetails = `Title: ${obj.title}, Author: ${obj.author}, Published: ${obj.publishedYear}, Available: ${obj.isAvailable === true ? 'Yes' : 'No'}`

    return bookDetails;
}



const getUniqueValues = (
  arr1: (string |number)[], 
  arr2: (string|number)[]
): (string|number)[] => {
  
  const newArray: (string | number)[] = [];
  let k = 0;
  
  for(let i = 0; i <arr1.length; i++){
    newArray[k] = arr1[i];
    k++
  }

  for(let j = 0; j < arr2.length; j++){
      let found = false 

      for(let i = 0; i < arr1.length; i++){
        
        if(arr2[j] === arr1[i]){
          found = true;
          break;

        }
      }

      if(found === false){
        newArray[k] = arr2[j];
        k++;
      }
    }
    
    return newArray;
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

    .map(product => 
      {const basePrice = product.price * product.quantity;
      return product.discount ? basePrice - basePrice * (product.discount/100) : basePrice})

    .reduce((acc, sum)=> sum =  acc + sum, 0);
    
    

    return totalPrice;

}







