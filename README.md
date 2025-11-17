# Blog Post (in Bangla)

# interfaces এবং types এর মধ্যে পার্থক্য কি?

## TypeScript: interface এবং type এর মধ্যে পার্থক্য

TypeScript-এ interface এবং type—দুটোই ডাটা স্ট্রাকচার বা টাইপ নির্ধারণ করতে ব্যবহৃত হয়। তবে এদের ক্ষমতা ও ব্যবহারক্ষেত্রে কিছু গুরুত্বপূর্ণ পার্থক্য আছে।

### ১।
interface
extends ব্যবহার করে সহজে অন্য interface কে extend করা যায়।

type
Intersection (&) ব্যবহার করে extend করতে হয়।

### ২।
interface → Merge হয়
একই নামে interface একাধিকবার declare করলে TypeScript সেগুলো merge করে।

type → Merge হয় না (Error দেয়)

### ৩।
Union, Tuple, Primitive Alias
এগুলো শুধু type দিয়ে করা যায়, interface দিয়ে নয়।

### সংক্ষেপে
interface মূলত অবজেক্ট স্ট্রাকচার নির্ধারণে ব্যবহৃত হয় এবং declaration merging সমর্থন করে।

type আরও বহুমুখী—union, tuple, primitive alias সহ জটিল টাইপ তৈরিতে ব্যবহৃত হয়।
উভয়ই অবজেক্ট ডিফাইন করতে পারে, তবে type বেশি flexible।



##
# TypeScript এ keyof keyword এর ব্যবহার কি? একটি উদাহরণ।

TypeScript-এ keyof একটি type operator, যা কোনো object type বা interface-এর সবগুলো property name-এর union type তৈরি করে।

এটি dynamic key access কে type-safe করে তোলে।

এবং Generics এবং mapped types-এর জন্য ব্যবহার করা সুবিধাজনক

উদাহরণ: ধরা যাক একটি টাইপ আছে;
type Person = {
    name: string;
    age: number;
}

এখন যদি লেখা হয়
keyof Person

তাহলে Person type এর property name গুলো নিয়ে একটি union type বানাবে।
"name" | "age"

##
# TypeScript-এ any, unknown, never এর মধ্যে পার্থক্য কি?

TypeScript-এ any, unknown, never দেখতে একই রকম হলেও তাদের কাজ ভিন্ন ভিন্ন।

## any

• আমরা যখন any ব্যবহার করি তখন TypeScript কোন type চেক করে না। অনেকটা টাইপ সিস্টেম থেকে পুরোপুরি বেরিয়ে যাওয়ার মতো আচরণ করে।

• সাধারণত ব্যবহার করা উচিত নয়, কারণ টাইপ সেফটি নষ্ট করে।

## unknown

• any এর মতো যেকোন ভ্যালু রাখা যায়, কিন্তু ব্যবহার করার আগে typeof এর মাধ্যমে টাইপ চেক করতেই হয়। unknwon কে টাইপ-সেইফ any বলা যায়।

• সরাসরি অন্য টাইপে অ্যাসাইন করতে গেলে এরর দেবে।

• unknwon সাধারণত
    ** API থেকে আসা ডাটা এর ক্ষেত্রে
    ** JSON.parse করা করা এবং
    ** যেকোন অজানা ইনপুট এর ক্ষেত্রে ব্যবহার করা হয়।

## never

• never টাইপ কখনো কোন ভ্যালু ধারণ করে না।

• সাধারণত:
    ** যেসব ফাংশন কখনো return করে না (throw বা infinite loop),
    ** অথবা exhaustive type checking-এর ক্ষেত্রে ব্যবহৃত হয়।

##
# TypeScript-এ enums এর ব্যবহার কি? numeric enum এবং string enum এর একটি করে উদাহরণ।

TypeScript-এ enum (Enumeration) হলো একটি বিশেষ টাইপ, যা হচ্ছে fixed string literal কিংবা fixed constant এর সেট।

• enum কোডকে আরও রিডেবল, মেইনটেইনেবল এবং টাইপ-সেইফ করে।

• enum টাইপ এবং ভ্যালু দুইভাবেই ব্যবহার করা যায়।

• Magic number বা random string বারবার লেখার দরকার পড়ে না

• Autocomplete support খুব ভালভাবে কাজ করে

• তবে অনেকেই enums এর পরিবর্তে as const ব্যবহার করার পরামর্শ দেন।

## numeric enum এর উদাহরণ
Numeric enum-এ প্রতিটি মানের সাথে অটোমেটিক index নম্বর থাকে

enum Status {
  Success = 1,
  Failed = 5,
  Pending = 10
}

## string enum এর উদাহরণ
String enum এ প্রতিটি মানকে string হিসেবে define করতে হয়।

enum UserRoles {
    Admin = "Admin", 
    Editor= "Editor",
    Viewer = "Viewer"
}


##
# TypeScript- এ union এবং intersection টাইপ ব্যবহারের একটি করে উদাহরণ। 

### union type
মানে হলো একাধিক টাইপের মধ্যে যেকোনো একটি
অর্থাৎ একটি ভ্যারিয়েবল বা প্যারামিটার একাধিক টাইপের যেকোনো একটি হতে পারে।

উদাহরণ: 
function printId(id: string | number){
    console.log("ID is:", id )
}

printId(101);
printId("AB-77");

এখানে id যেকোন টাইপ হতে পারে string অথবা number।

### intersection type
মানে হলো একাধিক টাইপকে মিলিয়ে একটি নতুন টাইপ তৈরী। অর্থাৎ, দুই বা ততোধিক টাইপের সবগুলো property মিলিয়ে একটি টাইপ তৈরি করা।

উদাহরণ:
type NameDetails = {
    name: string;
};

type ContactDetails = {
    email: string;
    phone: string;
}

type User = NameDetails & ContactDetails;

const user: User = {
    name: "Dev",
    email: "deb@gmail.com"
    phone: "01783939399"
};

এখানে User টাইপে NameDetails + ContactDetails — দুইটাই থাকতে হবে।
