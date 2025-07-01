
function MemberCard({member}){
    return(
        <div className="-wbghite p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
                {member.firstName} {member.lastName}
            </h3>

            <img src={member.imageUrl} alt={"Photo de" + member.firstName + " " + member.lastName} className="rounded-full"/>

            <br />

            <div className="mb-3">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {member.tech}
                </span>
            </div>

            <p className="text-gray-600 italic">
                {member.message}
            </p>
        </div>
    );
}

export default MemberCard
