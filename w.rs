fn main() {
    // Create a vector of numbers
    let numbers = vec![1, 2, 3, 4, 5];
    
    // Iterate and print each number
    for num in numbers {
        println!("Number: {}", num);
    }

    // Example of using a struct
    struct Person {
        name: String,
        age: u32,
    }

    // Create an instance of Person
    let person = Person {
        name: String::from("Alice"),
        age: 30,
    };

    println!("{} is {} years old", person.name, person.age);

    // Example of pattern matching
    let some_number = Some(5);
    match some_number {
        Some(n) => println!("Got a number: {}", n),
        None => println!("No number found"),
    }
}
