export default (deferred) => {
    for(let i =0; i < 10000; i++) {
        let x = i * i;
    }
    deferred.resolve();
}
