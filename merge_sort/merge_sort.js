function mergeSort(arr) {

    // If there is only one element we dont need to split or merge it
    if (arr.length <= 1) {
        return arr
    }

    // Dividing the array to 2 parts
    const midPoint = Math.floor(arr.length / 2);
    let first_part = arr.slice(0,midPoint);
    let second_part = arr.slice(midPoint)

    // Merge the subarrays using recursion
    return mergeTwoArray(mergeSort(first_part), mergeSort(second_part))
    
}

function mergeTwoArray(leftArr,rightArr) {
    let result = []

    let leftIndex = 0;
    let rightIndex = 0;


    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        // IF the value of the left array is lower add to the result array
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            result.push(leftArr[leftIndex]);
            // Increase the left index
            leftIndex++;
        } else {
            // If the value on the right if lower add that to the result 
            result.push(rightArr[rightIndex]);
            // Increase the right index
            rightIndex++;
        }
    }

    if (leftArr[leftIndex]) {
        // The remaining elements in the left subarray (if there is any)
        let unaddedElements = leftArr.slice(leftIndex);

        // add them to the result
        result.push(...unaddedElements);

    } else {
        // The same things for the right subarray
        let unaddedElements = rightArr.slice(rightIndex);

        // Add those aswell
        result.push(...unaddedElements);
    }
    return result;
}

console.log(mergeSort([1,45,2,32,5,45,2,45,23,12,-45]))