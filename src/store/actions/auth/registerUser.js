import Axios from '../../../services/axios';
import {showMessage} from '../../../utils';
import {setLoading} from '../common';

export const registerAction = (form, navigation) => async dispatch => {
  try {
    dispatch(setLoading(true));
    await Axios.post('/auth/register', form).then(res => {
      dispatch(setLoading(false));
      navigation.navigate('RegisSuccessScreen');
    });
  } catch (err) {
    dispatch(setLoading(false));
    showMessage(err.message ? err.message : 'Something went wrong, try agin');
    console.log(err.message);
  }
};
