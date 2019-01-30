var recipes = new Object();

function updateObjectWithKeyAndValue (object, key, value){
return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue  (object, key, value){
  var obj = { prop: 1 };
  obj.prop2 = 2;
return obj;
}
