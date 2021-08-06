import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import * as actions from '../../redux/actions';
import { InputFilter, LabelFilter } from "./Filter.styled";

//TOOLKIT - 2
export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = event => dispatch(actions.changeFilter(event.target.value));

  return (
    <>
      <LabelFilter>
      Find contacts by name
        <InputFilter type="text" value={value} placeholder="Patric..." onChange={onChange} />
     </LabelFilter>
    </>
  );
}

//REDUX - 1
// import { connect } from 'react-redux';

// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: event => dispatch(actions.changeFilter(event.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);




// import PropTypes from "prop-types";
// import { InputFilter, LabelFilter } from "./Filter.styled";

// export default function Filter({ value, onChange }) {
//   return (
//     <LabelFilter>
//       Find contacts by name
//       <InputFilter type="text" value={value} onChange={onChange} />
//     </LabelFilter>
//   );
// }

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
