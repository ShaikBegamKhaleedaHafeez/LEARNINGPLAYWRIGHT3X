//1D array - duplicate elements are also allowed
let results = [10,20,30]

//2D  - array of arrays
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let mad = [
    [1,2,3,4]
];

let grid = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        process.stdout.write(grid[i][j]+"")
    }
    console.log("")
}