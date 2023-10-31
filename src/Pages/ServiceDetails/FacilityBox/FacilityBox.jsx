import PropTypes from 'prop-types';

const FacilityBox = ({facilitys}) => {
    const{name, details} = facilitys;

    return (
        <div className="bg-[#F3F3F3] p-10 rounded-xl border-[#FF3811] border-t-4">
            <h2 className="text-[#444] text-xl font-bold">{name}</h2>
            <p className="text-[#737373] mt-2">{details}</p>
        </div>
    );
};

FacilityBox.propTypes={
    facilitys:PropTypes.array
}

export default FacilityBox;