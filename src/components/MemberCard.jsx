import { useState } from "react";
import Badge from "./Badge";

function MemberCard({ member }) {
  // const [getter, setter] = useState(valeur par défaut);
  const [toggleBadge, setToggleBadge] = useState(false);

  const handleClick = () => {
    setToggleBadge(!toggleBadge);
  };
  return (
    //la div est le parent qui contient le bloc d'éléments à retourner. On ne peut avoir qu'un bloc !
    <div
      className="-wbghite p-6 rounded-lg shadow-md border border-gray-200 bg-gray-400"
      onClick={handleClick}
    >
      {/* Les éléments qui sont contenus dans la div deviennent ses enfants et permet de retourner leurs informations */}

      <h3 className="text-xl font-bold text-red-900 mb-2">
        {member.firstName} {member.lastName}
      </h3>

      <img
        src={member.imageUrl}
        alt={"Photo de " + member.firstName + " " + member.lastName}
        className="rounded-full"
      />

      <br />

      <Badge tech={member.tech} toggleBadge={toggleBadge} />

      <p className="-wbghite p-6 rounded-lg bg-gray-300 text-red-900 italic bg-opacity-0">
        {member.message}
      </p>
    </div>
  );
}

export default MemberCard;
