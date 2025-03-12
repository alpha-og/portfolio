fn main() {
    let args: Vec<_> = std::env::args().collect();
    if args.len() < 3 {
        println!("Usage: {} key encrypted_text", args[0]);
    }
    println!(
        "Flag: {}",
        encrypt_decrypt(&args[1], &hex_to_string(&args[2]))
    );
}

fn hex_to_string(hex: &str) -> String {
    let bytes: Vec<_> = (0..hex.len())
        .step_by(2)
        .map(|i| u8::from_str_radix(&hex[i..i + 2], 16).expect("Invalid hex"))
        .collect();
    let result = String::from_utf8(bytes).expect("Failed to create String");
    result
}

fn string_to_hex(string: &str) -> String {
    let result = string
        .as_bytes()
        .iter()
        .map(|b| format!("{:02x}", b))
        .collect();
    result
}

pub fn encrypt_decrypt(key: &str, plaintext: &str) -> String {
    let key_bytes = key.as_bytes();
    let result: Vec<_> = plaintext
        .as_bytes()
        .iter()
        .enumerate()
        .map(|(i, &b)| b ^ key_bytes[i % key_bytes.len()])
        .collect();
    String::from_utf8(result).expect("Must be valid UTF8")
}
