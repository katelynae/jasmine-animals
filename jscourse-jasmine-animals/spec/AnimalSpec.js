describe("Animal Unit Tests", function() {

  describe('dogs', function () {
    var dog;

    beforeEach(function () {
      dog = new Animal('dog');
      // note, you could leave out this beforeEach and create the new animal inside each one of the it blocks instead. This way is just easier.
    });

    it('should bark if the animal is a dog', function () {
      expect(dog.speak()).toEqual('bark');
    });
    it('shouldnt meow because its not a cat', function () {
      expect(dog.speak()).not.toEqual('meow');
    });
  })

  describe('cats', function () {
    var cat;

    beforeEach(function () {
      cat = new Animal('cat');
      // note, you could leave out this beforeEach and create the new animal inside each one of the it blocks instead. This way is just easier.
    });

    it('should meow if the animal is a cat', function () {
      expect(cat.speak()).toEqual('meow');
    });
    it('shouldnt bark because its not a dog', function () {
      expect(cat.speak()).not.toEqual('bark');
    });
  })
 
   describe('cat moves', function () {
    var cat;

    beforeEach(function () {
      cat = new Animal('cat');
      // note, you could leave out this beforeEach and create the new animal inside each one of the it blocks instead. This way is just easier.
    });

    it('should run if the animal is a cat', function () {
      expect(cat.move()).toEqual('run');
    });
    it('shouldnt swim if the animal is a cat', function () {
      expect(cat.move()).not.toEqual('swim');
    });
  })

});
