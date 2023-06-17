//binary gap in N
//get binary representation of N
//find consecutive 0s between 1s
//find the length of its sequence of zeroes in the number in its binary form,
//that is the largest
//https://codingwithmanny.medium.com/how-to-solve-binary-gap-cda3c3e980b8

function binaryGap(N: number): number{
    let maxBindaryGap: number = 0;

    if(validInputRange(N)){
        //this is ok because number is positive
        //if it might have been negative
        //better use unsigned right shift operator
        const binary = N.toString(2);
        const binaryArray = binary.split('');

        const firstOne = binaryArray.indexOf("1");

        //remove firstOne from array and check again for index of next 1
        const newBinaryArray = binaryArray.slice(firstOne+1);

        const secondOne = newBinaryArray.indexOf("1");

        const gaps = [];
        gaps.push(secondOne);
        return Math.max.apply(Math, gaps);
    }
    
    
    return maxBindaryGap;
}

function solution(N: number): number{
    if(validInputRange(N)){
        const binary = N.toString(2);
        console.log(binary);
        const binaryArray = binary.split('');
        return findGapsRecursive(binaryArray, []);
    }
    return 0;

}

//previous works for small numbers
//for larger numbers we need to continuously split the array
//and search through smaller and smaller arrays to find more gaps
//this one will take a chunk of the array
//find the first one (gap), cut it up and pass the smaller array
//into itself again until we find next chunk
//until there are no more "1"s
function findGapsRecursive(BinaryArray: Array<string>, gaps: Array<number>): number{
    const firstOne = BinaryArray.indexOf("1");

    //check for case there are no "1"s at all
    if(firstOne > -1){
        //new array created taking a slice of BinaryArray
        //from index of the firstOne + 1 index
        const newBinaryArray = BinaryArray.slice(firstOne + 1);

        const secondOne = newBinaryArray.indexOf("1");

        //const gaps = [];
        //accounting for no zeros
        if(secondOne > 0){
            //adding 2 to our gaps array
            gaps.push(secondOne);
        }
        //pass array minus second one and gaps array
        return findGapsRecursive(newBinaryArray.slice(secondOne + 1), gaps);
    }
    //if gaps array length is empty return 0
    //otherwise return largest value in array
    return (gaps.length > 0) ? Math.max.apply(Math, gaps) : 0;
}

function validInputRange(N: number): boolean{
    return N >= 1 && N <= 2147483647;
}

function main(){
    const N = 529;
    const binaryGapSolution = solution(N);
    console.log(binaryGapSolution);
}

main();