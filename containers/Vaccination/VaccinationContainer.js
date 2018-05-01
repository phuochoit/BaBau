//react redux
import { connect } from 'react-redux';

import VaccinationComponent from "../../components/Vaccination/VaccinationComponent";
// action
import { fetchNetConnected } from "../../actions/actionConnected";
import { fetchVaccinationAction } from "../../actions/actionVaccination";

const mapStateToProps = (state) => {
    return {
        isConnected: state.isConnected.isConnected,
        vaccination: state.vaccination.vaccination
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchNetConnected: () => {
            dispatch(fetchNetConnected())
        },
        onfetchVaccination: () => {
            dispatch(fetchVaccinationAction())
        },
    }
};

const VaccinationContainer = connect(mapStateToProps, mapDispatchToProps)(VaccinationComponent);
export default VaccinationContainer;