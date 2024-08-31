interface User {
    name: string;
    id: number;
  }
   
  class UserAccount {
    name: string;
    id: number;
   
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  }
   
  const user: User = new UserAccount("Murphys", 1);
  console.log(user);

// Remove or comment out the markdown content below this line
