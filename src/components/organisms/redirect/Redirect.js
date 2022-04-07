import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// ACTIONS
import {redirectTo} from '../../../redux/redirect/Action';

export function RedirectScreen(props) {
  const dispatch = useDispatch();
  // REDUX
  const redirect = useSelector(state => state.redirect);

  useEffect(() => {
    if (redirect.screen) {
      props.navigation.navigate(redirect.screen, {
        data: redirect.params || {},
      });
      dispatch(redirectTo(''));
    }
  }, [redirect]);

  useEffect(() => {
    dispatch(redirectTo(''));
  }, []);

  return <></>;
}
