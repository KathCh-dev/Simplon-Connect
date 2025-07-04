import MemberCard from "./components/MemberCard";
import { members } from "./data/members";
import MemberForm from "./components/MemberForm";
import { useState } from "react";
import DeleteMode from "./components/DeleteMode";

function App() {
  // on déclare une constante qui va utiliser un useState qui contient les informations du localStorage
  const [allMembers, setAllMembers] = useState(JSON.parse(localStorage.getItem("members")))
  //on vérifie que le local storage est vide ou non
  if(!localStorage.getItem("members")){
    //on set les informations dans le localStorage afin d'ajouter le dernier utilisateur ajouté
    localStorage.setItem("members", JSON.stringify(members))
  }

  const handleDeleteMember = (memberToDelete) => {
    const updatedMembers = members.filter(
      (member) =>
        member.firstName !== memberToDelete.firstName ||
        member.lastName !== memberToDelete.lastName  
    );

    setAllMembers(updatedMembers);
    localStorage.setItem("members", JSON.stringify(updatedMembers));
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-900">
        Simplon Connect
      </h1>

      <div>
        {/* on trigger le render avec l'action onClick */}
        <MemberForm onSubmit={(member)=>{
          localStorage.setItem("members", JSON.stringify([...allMembers, member]))
          setAllMembers([...allMembers, member])
        }}/>
      </div>

      <br />

      <div><DeleteMode></DeleteMode></div>

      <br />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* enclenchement d'une boucle foreach via un .map et création de props avec l'instanciation d'un objet member de type MemberCard */}
        {allMembers.map((member, index) => (
          <MemberCard member={member} key={index}
          onDelete={handleDeleteMember}></MemberCard>
        ))}
      </div>
    </div>
  );
}

export default App;
