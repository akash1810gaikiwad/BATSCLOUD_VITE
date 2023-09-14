
import Swal from 'sweetalert2';
import axios from 'axios';
import qs from 'qs';
import {  NavigateFunction } from 'react-router-dom';
import { Dispatch } from 'redux';
import { userinfotoken } from '../store/infoConfigSlice';

const showMessage = (msg = '', type = '') => {
  const toast: any = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      customClass: { container: 'toast' },
  });
  toast.fire({
      icon: type,
      title: msg,
      padding: '10px 20px',
  });};


  const submitForm = ( username: string,
    password: string,
    navigate: NavigateFunction,
    dispatch:Dispatch
    )  => {
      dispatch(userinfotoken('100')); 
      navigate('/Index');
    let data = qs.stringify({
      'username': username,
      'password': password 
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://103.14.97.155:3000/login',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };

    axios.request(config)
    .then((response) => {
      console.log(response.data.access_token);
      
      if(response.data.access_token){
        showMessage('User Login Successfully...','success');
        localStorage.setItem("test", response.data.access_token);
        navigate('/Index');
      }
      
    })
    .catch((error) => {
      showMessage('User Details Not Found Please Check Again','error');
    });
    }

export {submitForm};