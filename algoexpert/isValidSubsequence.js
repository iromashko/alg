function isValidSubsequence(array, sequence) {
    let seqIdx = 0;
    for (let value of array) {
        if (seqIdx === sequence.length) break;
        if (sequence[seqIdx] === value) seqIdx++;
    }
    return seqIdx === sequence.length;
}
