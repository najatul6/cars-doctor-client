import TeamCard from "./TeamCard/TeamCard";


const Team = () => {
    return (
        <div>
            <div className="text-center space-y-5 my-10">
                <h4 className="text-[#FF3811] text-xl font-bold">Team</h4>
                <h2 className="font-bold text-3xl">Meet Our Team</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomized <br /> words which do not look even slightly believable. </p>
            </div>

            <div>
               <TeamCard></TeamCard>
            </div>

        </div>
    );
};

export default Team;