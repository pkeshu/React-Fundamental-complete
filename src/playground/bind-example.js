const obj = {
    name: "Keshar",
    getName() {
      return this.name;
    },
  };
  
  const getName=obj.getName.bind({name:"Paudel"});
  
  console.log(getName());