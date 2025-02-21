fn main() {
    // Basic variable declaration
    let x = 42;
    let y = "Hello, Rust!";
    
    // Print to console
    println!("x = {}, y = {}", x, y);
    
    // Vector example
    let mut numbers = vec![1, 2, 3, 4, 5];
    numbers.push(6);
    
    // Iterate over vector
    for num in numbers {
        println!("Number: {}", num);
    }
    
    // Struct example
    struct Point {
        x: i32,
        y: i32,
    }
    
    let origin = Point { x: 0, y: 0 };
    println!("Point coordinates: ({}, {})", origin.x, origin.y);
    
    // Pattern matching
    let optional = Some(7);
    match optional {
        Some(value) => println!("Got value: {}", value),
        None => println!("No value"),
    }
    
    // Result handling
    fn divide(a: f64, b: f64) -> Result<f64, String> {
        if b == 0.0 {
            Err(String::from("Division by zero"))
        } else {
            Ok(a / b)
        }
    }
    
    match divide(10.0, 2.0) {
        Ok(result) => println!("10 / 2 = {}", result),
        Err(e) => println!("Error: {}", e),
    }
}
