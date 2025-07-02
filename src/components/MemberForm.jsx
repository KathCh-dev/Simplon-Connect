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
    <h2>Ajouter un membre</h2>
    <form onSubmit={handleSubmit}>

      <div>
        <label>Prénom :</label>
        <input
          type="text"
          name="FirstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Nom de famille :</label>
        <input
          type="text"
          name="LastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Technologie préférée :</label>
        <input
          type="text"
          name="Tech"
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Message :</label>
        <input
          type="text"
          name="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div>
        <label>Image :</label>
        <input
          type="text"
          name="Image"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>

      <button type="submit">Ajouter</button>
    </form>
    </div>
  );
}

export default MemberForm;
