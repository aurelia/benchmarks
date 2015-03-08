export default (deferred) => {
    for(let i =0; i < 1000; i++) {
        let x = i * i;
    }
    deferred.resolve();
}
