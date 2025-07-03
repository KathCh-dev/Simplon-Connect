import { useState } from "react";

function MemberForm({onSubmit}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tech, setTech] = useState("");
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      firstName: firstName,
      lastName: lastName,
      tech: tech,
      message: message,
      imageUrl: imageUrl,
    };

    onSubmit(newUser);

    //Récupérer les utilisateurs existants depuis le localStorage
    let existingMembers = JSON.parse(localStorage.getItem("members")) || [];

    //Ajouter le nouvel utilisateur
    existingMembers.push(newUser);

    //Sauvegarder le tout dasn le localStorage
    localStorage.setItem("members", JSON.stringify(existingMembers));

    //Réinitialiser le formulaire
    setFirstName("");
    setLastName("");
    setTech("");
    setMessage("");
    setImageUrl("");

    alert("Le nouveau membre est ajouté !");
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className="-wbghite p-6 rounded-lg shadow-md border border-gray-200 bg-gray-400 text-center justify-self-center">
      <h2 className="text-xl font-bold text-red-900 mb-2">Ajouter un membre</h2>
      
      <div>
        <label className="font-bold text-red-900 mb-2">Prénom :</label><br />
        <input
          type="text"
          name="FirstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="border border-gray-800 font-bold"
        />
      </div>

      <div>
        <label className="font-bold text-red-900 mb-2">Nom de famille :</label><br />
        <input
          type="text"
          name="LastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className="border border-gray-800"
        />
      </div>

      <div>
        <label className="font-bold text-red-900 mb-2">Technologie préférée :</label><br />
        <input
          type="text"
          name="Tech"
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          required
          className="border border-gray-800"
        />
      </div>

      <div>
        <label className="font-bold text-red-900 mb-2">Message :</label><br />
        <input
          type="textarea"
          name="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-gray-800"
        />
      </div>

      <div>
        <label className="font-bold text-red-900 mb-2">Image :</label><br />
        <input
          type="text"
          name="Image"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="border border-gray-800"
        />
      </div>

      <button type="submit" className="font-bold text-red-900 mb-2">Ajouter</button>
    </form>
    <br />
    </div>
  );
}

export default MemberForm;
