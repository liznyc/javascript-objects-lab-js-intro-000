var recipes = {}; /*describe('Objects', function() {
  it('defines a `recipes` object', function() {
    expect(typeof recipes).toEqual('object')
  })*/

function updateObjectWithKeyAndValue (object, key, value){
  var obj = { prop: 1 };
  obj.prop2 = 2;
  var newObj = Object.assign({prop: 'new value'}, obj);
return obj;
}
