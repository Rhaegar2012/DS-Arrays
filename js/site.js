//dynamic array object
var dynamicArray={
     size:0,
     index:0,
     array:new Array(),
     Init:function(){
         //Initialize the array with a size given by the user
         size=4;
         array=new Array(size);
     },
     //Checks if the array is filled with elements , if it is , copies the new elements into the new array
     CheckIfFull:function(){
         if (this.array.length==size)
         {
             size*=2;
             newArray= new Array(size)
             for(let i=0;i<size;i++)
             {
                 newArray[i]=this.array[i];
                 
             }
             this.array=newArray;
             

         }
    },
    //Adds a new element to the array
    AddElement:function(element){
        this.array[this.index]=element;
        this.index++;
        this.CheckIfFull();
    }
}


dynamicArray.Init();
dynamicArray.AddElement('Apple');
dynamicArray.AddElement('Orange');
dynamicArray.AddElement('Strawberry');
dynamicArray.AddElement('Coconut');
dynamicArray.AddElement('Mango');
