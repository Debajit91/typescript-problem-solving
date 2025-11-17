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

• সংক্ষেপে
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

any

• আমরা যখন any ব্যবহার করি তখন TypeScript কোন type চেক করে না। অনেকটা টাইপ সিস্টেম থেকে পুরোপুরি বেরিয়ে যাওয়ার মতো আচরণ করে।

• সাধারণত ব্যবহার করা উচিত নয়, কারণ টাইপ সেফটি নষ্ট করে।

unknown

• any এর মতো যেকোন ভ্যালু রাখা যায়, কিন্তু ব্যবহার করার আগে typeof এর মাধ্যমে টাইপ চেক করতেই হয়। unknwon কে টাইপ-সেইফ any বলা যায়।

• সরাসরি অন্য টাইপে অ্যাসাইন করতে গেলে এরর দেবে।

• unknwon সাধারণত
    ** API থেকে আসা ডাটা এর ক্ষেত্রে
    ** JSON.parse করা করা এবং
    ** যেকোন অজানা ইনপুট এর ক্ষেত্রে ব্যবহার করা হয়।

never

• never টাইপ কখনো কোন ভ্যালু ধারণ করে না।

• সাধারণত:
    ** যেসব ফাংশন কখনো return করে না (throw বা infinite loop),
    ** অথবা exhaustive type checking-এর ক্ষেত্রে ব্যবহৃত হয়।