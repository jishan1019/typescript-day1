{
  //Union pjs e use kortam 2ta || ar akahne akta

  // type FrontendDeveloper = "fakibajDev" | "junoirDev"; //value hisebe type use korai atar name string littrel type

  // type FullStackDeveloper = "frontendDev" | "exportsDev";
  // const newDeveloper: FrontendDeveloper = "junoirDev";

  // type Developer = FullStackDeveloper | FrontendDeveloper;

  type FrontendDeveloper = {
    skilles: string[];
    designation1: "FrontendDeveloper";
  };

  type BackendDeveloper = {
    skilles: string[];
    designation2: "BackendDeveloper";
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullStackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "JS", "NodeJS"],
    designation1: "FrontendDeveloper",
    designation2: "BackendDeveloper",
  };

  // type User = {
  //   name: string;
  //   email: string;
  //   gender: "Mail" | "Female";
  //   bloodGroup: "O+" | "A+" | "AB+";
  // };

  // const user1: User = {
  //   name: "Jishan",
  //   email: "i@gmail.com",
  //   gender: "Mail",
  // };
}
