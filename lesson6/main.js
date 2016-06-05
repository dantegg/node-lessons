var fibonacci = function(n) {
  if(typeof n !== 'number'){
    throw new Error('n should be a number');
  }
  if(n <0){
    throw new Error('n shold >=0');

  }
  if(n>10){
    throw new Error('n should <= 10');
  }

  if(n===0){
    return 0;
  }
  if(n===1){
    return 1;
  }
  return fibonacci(n-1)+fibonacci(n-2);
};

exports.fibonacci = fibonacci

if(require.main === module){
  var n = Number(process.argv[2]);
  console.log('fibonacci('+n+')is',fibonacci(n));
}
