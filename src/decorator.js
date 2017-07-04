{
    function setName(target){
        target.username = 'dog';
        target.prototype.age = 12;
    }

    @setName
    class Person{

    }

    console.log(Person.username);
    console.log(new Person().age);

    const func = {
        foo(){console.log('foo')},
        foo1(){console.log('foo1')}
    };

    function mixins(...list){
        return function(target){
            Object.assign(target.prototype, ...list);
        }
    }

    function readonly(target, name, desc){
        desc.writable = false;
        return desc;
    }

    function newName(){
        return 'new bar name';
    }

    @mixins(func)
    class Bar{

        @readonly
        oldName(){ return 'bar name' }

    }
    console.log(new Bar().foo());
    let bar = new Bar();
    console.log(bar.oldName());
    try {
        bar.oldName = newName;
    }catch (error){
        console.log(error);
    }





}