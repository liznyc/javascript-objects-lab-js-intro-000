var recipes = {}; /*describe('Objects', function() {
  it('defines a `recipes` object', function() {
    expect(typeof recipes).toEqual('object')
  })*/

function updateObjectWithKeyAndValue (object, key, value){
  var obj = { prop: 1 };
  obj.prop2 = 2;
  return Object.assign({}, obj, {prop: 'old value'});
  var newObj = { prop: 'new value' };
return Object.assign({}, obj, {prop: 'new value'});
}
