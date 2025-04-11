function manageStudents(arr) {

    // Add "David" at index 1
    arr.splice(1,0, "David");

    // Check if "Eve" is in the list
    console.log(arr.includes("Eve"));  // Should return false

    // Convert the array to a string with names separated by commas
    console.log(arr.join(","));  // Expected: "Alice,David,Bob,Charlie"
}

let students = ["Alice", "Bob", "Charlie"];
manageStudents(students);

