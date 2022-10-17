type Todo = {
    id: number
    text: string
    done: boolean
}

// We can use the readonly keyword to make sure that an object’s 
// properties are not modified.
// We can make an object read only using 2 options which prevent making mistakes
// like returning wrong object.
type Todo2 = {
    readonly id: number,
    readonly text: string,
    readonly done: boolean
}

// Using Readonly<> keywork makes all its properties read only
type Todo3 = Readonly<{
    id: number
    text: string
    done: boolean
    // Place is optional. To make a property optional, we use (?)
    place?: Place
}>

// This returns an object that is readonly. 
type Foo = {
    bar: number
}
// The keyword like Readonly<> are called maped types. These are like functions 
// except input/output are in TypeScript types. ex: Required<>, Partial<>
type ReadonlyFoo = Readonly<Foo>


// in TS we can use exact values like true or false when specifying a type. This
// is called literal types. It failed to compile because done is not true. By using  
// literal types, you can specify exactly what value is allowed for a property.
type CompletedTodo = Readonly<{
    id: number
    text: string
    done: true
}>

// Using intersection (&) we can create type that inherits from other type
type A = { a : number}
type B = { b: string}

type AandB = A & B
// is equivalent to
type AandB2 = {
    a : number,
    b : string
}
// If the second type is more specific than the first type, second type will
// override the first.
type A2 = { a : number}
type B2 = { a : true}
// is equivalent to type AandB = { a: true}
type AandB3 = A2 & B2

// Union (|) is used to assign multiple types to a variable. ex: We can assign 
// number or string 
type Foo2 = number | string

type Place = 'home' | 'work' | { custom: string }


// We can use that for completedTodo Function
type CompletedTodo2 = Todo3 & {
    readonly done: true
}

function Todo () {

    function toggleTodo(todo : Todo): Todo {
        todo.done = !todo.done
        return todo
    }

    function completeAll(todos: readonly Todo3[]): CompletedTodo2[] {
        // We want it to return a new array
        // instead of modifying the original array
        return todos.map(todo => ({
            ...todo,
            done: true
        }))
    }

    function placeToString(place: Place): string {
        if(place === 'home') {
            return 'Home'
        } else if (place === 'work') {
            return 'Work'
        } else {
            return ' ' + place.custom
        }
    }

}


export {}