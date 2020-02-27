module.exports = function calculateHanoi( disk ,rate ) {
    let turns = (2**disk-1);
    return  {turns:turns, seconds:(turns /(rate / 3600))};
}