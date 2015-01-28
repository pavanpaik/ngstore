describe( 'wcsServices', function() {

  var $httpBackend,wcsServices;
  var testData = {
    products:{
      'a':{code:1,type:1},
      'b':{code:2,type:2},
      'c':{code:3,type:2},
      'd':{code:4,type:2}
    },
    categories: {},
    admin:{}
  };

  function count(obj) {
    var c=0;
    for (var v in obj) {c++;}
    return c;
  }

  beforeEach( module( 'jsonRepository', 'ngbps.wcsServices'));

  beforeEach( inject(function(_$httpBackend_, _wcsServices_){
    $httpBackend = _$httpBackend_;
    $httpBackend.whenGET('assets/data/shop.json').respond(testData);
    wcsServices = _wcsServices_;
  }));
/*
  it('should expose the getEmSpotData queryable object', function(){
    expect(wcsServices.getEmSpotData).toBeDefined();
    expect(wcsServices.getEmSpotData.then).toBeDefined();
  });*/

});
