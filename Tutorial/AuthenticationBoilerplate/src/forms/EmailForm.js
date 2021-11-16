import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, Button, Text } from 'react-native';
import { setToken } from '../api/token';

const EmailForm = ({ buttonText, onSubmit, children, onAuthentication }) => {
	const [email, onChangeEmail] = useState('');
	const [password, onChangePassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const submit = () => {
		onSubmit(email, password)
			.then(async (res) => {
				await setToken(res.auth_token);
				onAuthentication();
			})
			.catch((res) => setErrorMessage(res.error));
	};

	return (
		<ScrollView contentContainerStyle={StyleSheet.onChangeEmail}>
	);


};

const styles = StyleSheet.create({

})

export default EmailForm;
