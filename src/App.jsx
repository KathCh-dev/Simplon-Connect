import MemberCard from "./components/MemberCard";
import { members } from "./data/members";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-900">
        Simplon Connect
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* enclenchement d'une boucle foreach via un .map et création de props avec l'instanciation d'un objet member de type MemberCard */}
        {members.map((member, index) => (
          <MemberCard member={member} key={index}></MemberCard>
        ))}
      </div>
    </div>
  );
}

export default App;
