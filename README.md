# Blog Post (in Bangla)

# interfaces এবং types এর মধ্যে পার্থক্য কি?

TypeScript: interface এবং type এর মধ্যে পার্থক্য

TypeScript-এ interface এবং type—দুটোই ডাটা স্ট্রাকচার বা টাইপ নির্ধারণ করতে ব্যবহৃত হয়। তবে এদের ক্ষমতা ও ব্যবহারক্ষেত্রে কিছু গুরুত্বপূর্ণ পার্থক্য আছে।

১।
interface
extends ব্যবহার করে সহজে অন্য interface কে extend করা যায়।

type
Intersection (&) ব্যবহার করে extend করতে হয়।

২।
interface → Merge হয়
একই নামে interface একাধিকবার declare করলে TypeScript সেগুলো merge করে।

type → Merge হয় না (Error দেয়)

৩।
Union, Tuple, Primitive Alias
এগুলো শুধু type দিয়ে করা যায়, interface দিয়ে নয়।

সংক্ষেপে
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