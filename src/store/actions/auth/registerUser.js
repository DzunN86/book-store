import Axios from '../../../services/axios';
import {showMessage} from '../../../utils';
import {setLoading} from '../common';

export const registerAction = (form, navigation) => async dispatch => {
  try {
    dispatch(setLoading(true));
    await Axios.post('/auth/register', form).then(res => {
      dispatch(setLoading(false));
      showMessage(res.data.message, 'success');
      navigation.navigate('RegisSuccessScreen');
    });
  } catch (error) {
    dispatch(setLoading(false));
    showMessage(error?.response?.data?.message);
    console.log(error);
  }
};
